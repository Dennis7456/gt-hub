import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { authService, validateEmail } from '../services/auth.service';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError(null);

    setLoading(true);
    try {
      await authService.resetPassword(email);
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reset your password</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <div className="gt-card p-6 sm:p-8">
          {sent ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Check your email</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We sent a password reset link to <strong>{email}</strong>.
                Check your inbox and click the link to reset your password.
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Didn't receive it? Check your spam folder or{' '}
                <button
                  onClick={() => setSent(false)}
                  className="text-green-700 dark:text-green-400 hover:underline font-medium"
                >
                  try again
                </button>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg" role="alert">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email address
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
                  autoFocus
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? 'email-error' : undefined}
                />
                {emailError && (
                  <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{emailError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white py-2.5 px-4 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                style={{ backgroundColor: '#006633' }}
              >
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <Link to="/login" className="text-green-700 dark:text-green-400 hover:underline font-medium">
              ← Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
