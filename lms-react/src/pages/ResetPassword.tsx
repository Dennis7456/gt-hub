import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../services/supabase.client';
import { validatePassword } from '../services/auth.service';

export function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmError, setConfirmError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const [invalidLink, setInvalidLink] = useState(false);

  // Supabase sends the recovery token as a URL fragment (#access_token=...&type=recovery)
  // The JS client picks this up automatically via onAuthStateChange.
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        setSessionReady(true);
      }
    });

    // Also check if there's already an active recovery session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setSessionReady(true);
    });

    // If no recovery event fires within 3 seconds, the link is invalid/expired
    const timeout = setTimeout(() => {
      setInvalidLink(prev => {
        if (!sessionReady) return true;
        return prev;
      });
    }, 3000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [sessionReady]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    let valid = true;

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters');
      valid = false;
    } else {
      setPasswordError(null);
    }

    if (password !== confirmPassword) {
      setConfirmError('Passwords do not match');
      valid = false;
    } else {
      setConfirmError(null);
    }

    if (!valid) return;

    setLoading(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) throw new Error(updateError.message);
      setDone(true);
      // Redirect to login after 2 seconds
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: 'var(--surface-bg)' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 shadow-md"
            style={{ backgroundColor: '#006633' }}>
            <span className="text-2xl">🎓</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Set new password</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            Choose a strong password for your account
          </p>
        </div>

        <div className="gt-card p-6 sm:p-8">
          {done ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Password updated!</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your password has been changed. Redirecting you to login…
              </p>
            </div>
          ) : invalidLink && !sessionReady ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Link expired or invalid</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This password reset link has expired or already been used.
              </p>
              <Link to="/forgot-password"
                className="inline-block text-sm font-medium text-green-700 dark:text-green-400 hover:underline">
                Request a new reset link
              </Link>
            </div>
          ) : !sessionReady ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 mx-auto mb-3"
                style={{ borderColor: '#006633' }} />
              <p className="text-sm text-gray-500 dark:text-gray-400">Verifying reset link…</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg" role="alert">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  New password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${
                    passwordError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="At least 8 characters"
                  disabled={loading}
                  autoFocus
                  aria-invalid={!!passwordError}
                  aria-describedby={passwordError ? 'password-error' : undefined}
                />
                {passwordError && (
                  <p id="password-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{passwordError}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirm new password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${
                    confirmError ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="••••••••"
                  disabled={loading}
                  aria-invalid={!!confirmError}
                  aria-describedby={confirmError ? 'confirm-error' : undefined}
                />
                {confirmError && (
                  <p id="confirm-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{confirmError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white py-2.5 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                style={{ backgroundColor: '#006633' }}
              >
                {loading ? 'Updating...' : 'Update password'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
