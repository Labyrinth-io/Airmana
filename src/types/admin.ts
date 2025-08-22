export interface LayoutElement {
  id: string;
  x: number;
  y: number;
  width: number | string;
  height: number | string;
  zIndex?: number;
}

export interface LayoutData {
  [key: string]: LayoutElement;
}

export interface AdminSession {
  isAuthenticated: boolean;
  username?: string;
  expiresAt?: number;
}

export interface LoginAttempt {
  ip: string;
  attempts: number;
  lastAttempt: number;
}