import { supabase } from './supabase.client';
import type { User } from '../types/User';
import type { Session } from '@supabase/supabase-js';

/**
 * Email validation regex pattern
 * Validates standard email format: local@domain.tld
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Password validation constants
 */
const MIN_PASSWORD_LENGTH = 8;

/**
 * Error messages for user-friendly display
 */
const ERROR_MESSAGES: Record<string, string> = {
  'Invalid login credentials': 'Invalid email or password. Please try again.',
  'User already registered': 'An account with this email already exists.',
  'Email not confirmed': 'Please confirm your email address before logging in.',
  'Password should be at least 8 characters': 'Password must be at least 8 characters long.',
  'Unable to validate email address: invalid format': 'Please enter a valid email address.',
  'Network request failed': 'Network error. Please check your connection and try again.',
  'Failed to fetch': 'Network error. Please check your connection and try again.',
};

/**
 * Maps Supabase error messages to user-friendly messages
 */
function mapErrorMessage(error: Error): string {
  const errorMessage = error.message;
  
  // Check for known error messages
  for (const [key, value] of Object.entries(ERROR_MESSAGES)) {
    if (errorMessage.includes(key)) {
      return value;
    }
  }
  
  // Default error message
  return 'An error occurred. Please try again.';
}

/**
 * Validates email format
 */
export function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

/**
 * Validates password strength
 */
export function validatePassword(password: string): boolean {
  return password.length >= MIN_PASSWORD_LENGTH;
}

/**
 * Authentication Service
 * Handles all authentication operations with Supabase
 */
export const authService = {
  /**
   * Register a new user with email and password
   * @throws Error with user-friendly message if registration fails
   */
  async register(email: string, password: string): Promise<User> {
    // Validate email format
    if (!validateEmail(email)) {
      throw new Error('Please enter a valid email address.');
    }
    
    // Validate password length
    if (!validatePassword(password)) {
      throw new Error(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
    }
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        throw new Error(mapErrorMessage(error));
      }
      
      if (!data.user) {
        throw new Error('Registration failed. Please try again.');
      }
      
      // Map Supabase user to our User type
      const user: User = {
        id: data.user.id,
        email: data.user.email!,
        created_at: new Date(data.user.created_at),
        updated_at: new Date(data.user.updated_at || data.user.created_at),
      };
      
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred during registration.');
    }
  },
  
  /**
   * Login with email and password
   * @throws Error with user-friendly message if login fails
   */
  async login(email: string, password: string): Promise<Session> {
    // Validate email format
    if (!validateEmail(email)) {
      throw new Error('Please enter a valid email address.');
    }
    
    // Validate password length
    if (!validatePassword(password)) {
      throw new Error('Invalid email or password. Please try again.');
    }
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw new Error(mapErrorMessage(error));
      }
      
      if (!data.session) {
        throw new Error('Login failed. Please try again.');
      }
      
      return data.session;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred during login.');
    }
  },
  
  /**
   * Logout the current user
   * @throws Error with user-friendly message if logout fails
   */
  async logout(): Promise<void> {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw new Error(mapErrorMessage(error));
      }
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred during logout.');
    }
  },
  
  /**
   * Send password reset email
   * @throws Error with user-friendly message if reset fails
   */
  async resetPassword(email: string): Promise<void> {
    // Validate email format
    if (!validateEmail(email)) {
      throw new Error('Please enter a valid email address.');
    }
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) {
        throw new Error(mapErrorMessage(error));
      }
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred while sending reset email.');
    }
  },
  
  /**
   * Get the currently authenticated user
   * @returns User object or null if not authenticated
   */
  async getCurrentUser(): Promise<User | null> {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error || !user) {
        return null;
      }
      
      // Map Supabase user to our User type
      const currentUser: User = {
        id: user.id,
        email: user.email!,
        created_at: new Date(user.created_at),
        updated_at: new Date(user.updated_at || user.created_at),
      };
      
      return currentUser;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },
  
  /**
   * Get the current session
   * @returns Session object or null if no active session
   */
  async getSession(): Promise<Session | null> {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error || !session) {
        return null;
      }
      
      return session;
    } catch (error) {
      console.error('Error getting session:', error);
      return null;
    }
  },
};
