import React from 'react';
import { Edit3, Save, Upload, RotateCcw, LogOut } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

export const AdminToolbar: React.FC = () => {
  const { 
    session, 
    isEditMode, 
    toggleEditMode, 
    saveDraft, 
    publishLayout, 
    revertLayout, 
    logout 
  } = useAdmin();

  if (!session.isAuthenticated) return null;

  return (
    <div className="fixed top-20 right-4 bg-white shadow-lg rounded-lg p-2 flex flex-col gap-2 z-[9998]">
      <button
        onClick={toggleEditMode}
        className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors ${
          isEditMode 
            ? 'bg-emerald-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <Edit3 className="w-4 h-4" />
        {isEditMode ? 'Exit Edit' : 'Edit Mode'}
      </button>

      {isEditMode && (
        <>
          <button
            onClick={saveDraft}
            className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
          >
            <Save className="w-4 h-4" />
            Save Draft
          </button>

          <button
            onClick={publishLayout}
            className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Publish
          </button>

          <button
            onClick={revertLayout}
            className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Revert
          </button>
        </>
      )}

      <hr className="border-gray-200" />

      <button
        onClick={logout}
        className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </div>
  );
};