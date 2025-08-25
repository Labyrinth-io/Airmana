import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AdminSession, LayoutData } from '../types/admin';
import Cookies from 'js-cookie';
import { api } from '../lib/api';

interface AdminContextType {
  session: AdminSession;
  isEditMode: boolean;
  layoutData: LayoutData;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  toggleEditMode: () => void;
  updateLayout: (elementId: string, layout: Partial<LayoutData[string]>) => void;
  saveDraft: () => Promise<void>;
  publishLayout: () => Promise<void>;
  revertLayout: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [session, setSession] = useState<AdminSession>({ isAuthenticated: false });
  const [isEditMode, setIsEditMode] = useState(false);
  const [layoutData, setLayoutData] = useState<LayoutData>({});

  useEffect(() => {
    // Check for existing session on mount
    checkSession();
    loadLayout();
  }, []);

  const checkSession = async () => {
    try {
      const response = await api('/auth/verify');
      if (response.ok) {
        const data = await response.json();
        setSession({ isAuthenticated: true, username: data.username });
      }
    } catch (error) {
      console.error('Session check failed:', error);
    }
  };

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await api('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setSession({ isAuthenticated: true, username: data.username });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await api('/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }
    setSession({ isAuthenticated: false });
    setIsEditMode(false);
    Cookies.remove('admin_session');
  };

  const toggleEditMode = () => {
    if (session.isAuthenticated) {
      setIsEditMode(!isEditMode);
    }
  };

  const loadLayout = async () => {
    try {
      const endpoint = session.isAuthenticated && isEditMode 
        ? '/layout/draft' 
        : '/layout/published';
      
      const response = await api(endpoint);
      
      if (response.ok) {
        const data = await response.json();
        setLayoutData(data.layout || {});
      }
    } catch (error) {
      console.error('Failed to load layout:', error);
    }
  };

  const updateLayout = (elementId: string, layout: Partial<LayoutData[string]>) => {
    setLayoutData(prev => ({
      ...prev,
      [elementId]: {
        ...prev[elementId],
        ...layout,
        id: elementId
      }
    }));
  };

  const saveDraft = async () => {
    if (!session.isAuthenticated) return;
    
    try {
      const response = await api('/layout/save', {
        method: 'POST',
        body: JSON.stringify({ layout: layoutData }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save draft');
      }
    } catch (error) {
      console.error('Save draft failed:', error);
    }
  };

  const publishLayout = async () => {
    if (!session.isAuthenticated) return;
    
    try {
      const response = await api('/layout/publish', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to publish layout');
      }
    } catch (error) {
      console.error('Publish failed:', error);
    }
  };

  const revertLayout = async () => {
    if (!session.isAuthenticated) return;
    
    try {
      const response = await api('/layout/revert', {
        method: 'POST',
      });
      
      if (response.ok) {
        await loadLayout();
      }
    } catch (error) {
      console.error('Revert failed:', error);
    }
  };

  useEffect(() => {
    if (session.isAuthenticated) {
      loadLayout();
    }
  }, [session.isAuthenticated, isEditMode]);

  return (
    <AdminContext.Provider
      value={{
        session,
        isEditMode,
        layoutData,
        login,
        logout,
        toggleEditMode,
        updateLayout,
        saveDraft,
        publishLayout,
        revertLayout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};