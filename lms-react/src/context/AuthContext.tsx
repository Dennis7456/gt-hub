import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User } from '../types/User';
import type { Session } from '@supabase/supabase-js';
import { authService } from '../services/auth.service';
import { supabase } from '../services/supabase.client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChange fires immediately with the current session (INITIAL_SESSION
    // event), so we don't need a separate getSession() + getUser() call.
    // Using a single subscriber eliminates the Web Locks contention that occurs
    // when getSession(), getUser(), and onAuthStateChange all race to acquire
    // the same "sb-*-auth-token" lock simultaneously.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);

        if (session?.user) {
          // Map Supabase user directly from the session — no extra getUser() call needed
          setUser({
            id: session.user.id,
            email: session.user.email!,
            created_at: new Date(session.user.created_at),
            updated_at: new Date(session.user.updated_at || session.user.created_at),
          });
        } else {
          setUser(null);
        }

        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);


  const login = async (email: string, password: string, rememberMe: boolean = false) => {
    setLoading(true);
    try {
      // signInWithPassword triggers onAuthStateChange which updates user/session state
      await authService.login(email, password);

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    setLoading(true);
    try {
      // signUp triggers onAuthStateChange which updates user/session state
      await authService.register(email, password);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await authService.logout();
      setUser(null);
      setSession(null);
      localStorage.removeItem('rememberMe');
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    session,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
