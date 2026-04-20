import { useState, type FormEvent } from 'react';
import { useAuth } from '../../context/AuthContext';
import { validateEmail, validatePassword } from '../../services/auth.service';

interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function RegisterForm({ onSuccess, onError }: RegisterFormProps) {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

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
    
    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError(null);
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
      await register(email, password);
      onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during registration';
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
          <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
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
          <p id="password-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {passwordError}
          </p>
        )}
      </div>
      
      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${
            confirmPasswordError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          }`}
          placeholder="••••••••"
          disabled={loading}
          aria-invalid={!!confirmPasswordError}
          aria-describedby={confirmPasswordError ? 'confirm-password-error' : undefined}
        />
        {confirmPasswordError && (
          <p id="confirm-password-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {confirmPasswordError}
          </p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full text-white py-2.5 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        style={{ backgroundColor: loading ? '#4ade80' : '#006633' }}
      >
        {loading ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  );
}
