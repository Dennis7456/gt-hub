import { useState, type FormEvent } from 'react';
import { useAuth } from '../../context/AuthContext';
import { validateEmail, validatePassword } from '../../services/auth.service';

interface LoginFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function LoginForm({ onSuccess, onError }: LoginFormProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    let isValid = true;
    
    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError(null);
    }
    
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    } else {
      setPasswordError(null);
    }
    
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    
    try {
      await login(email, password, rememberMe);
      onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during login';
      setError(errorMessage);
      onError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg" role="alert">
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${
            emailError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="you@example.com"
          disabled={loading}
          aria-invalid={!!emailError}
          aria-describedby={emailError ? 'email-error' : undefined}
        />
        {emailError && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {emailError}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${
            passwordError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="••••••••"
          disabled={loading}
          aria-invalid={!!passwordError}
          aria-describedby={passwordError ? 'password-error' : undefined}
        />
        {passwordError && (
          <p id="password-error" className="mt-1 text-sm text-red-600">
            {passwordError}
          </p>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 dark:border-gray-600 rounded"
            disabled={loading}
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <a href="/forgot-password" className="text-sm text-green-700 dark:text-green-400 hover:underline font-medium">
          Forgot password?
        </a>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white py-2.5 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        style={{ backgroundColor: loading ? '#4ade80' : '#006633' }}
      >
        {loading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
  );
}
