import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Loading } from '../common/Loading';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * ProtectedRoute component that checks authentication status
 * Redirects to /login if user is not authenticated
 * Validates: Requirements 2.5, 4.1, 4.5
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait for AuthContext to resolve the session before deciding
  if (loading) {
    return <Loading fullPage label="Checking authentication…" />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
