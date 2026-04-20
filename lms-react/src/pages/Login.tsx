import { useNavigate, Link, useLocation } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

/**
 * Login page — GT Hub branded
 * Validates: Requirements 2.1, 2.2, 2.3
 */
export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

  const handleSuccess = () => {
    const from = (location.state as any)?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: 'var(--surface-bg)' }}>
      {/* Left panel — brand hero */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-12 text-white"
        style={{ background: 'linear-gradient(160deg, #006633 0%, #003d1f 60%, #001a0d 100%)' }}
      >
        <div className="max-w-md text-center">
          {/* Shield logo */}
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-8"
            style={{ background: 'rgba(255,184,0,0.15)', border: '2px solid rgba(255,184,0,0.4)' }}>
            <svg className="w-14 h-14" fill="#FFB800" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-3 text-white">GT Hub</h1>
          <p className="text-lg font-medium mb-2" style={{ color: '#FFB800' }}>
            KRA Graduate Trainee Hub
          </p>
          <p className="text-green-200 text-sm leading-relaxed">
            Your dedicated learning platform for mastering customs, taxation, and trade compliance.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: '📚', label: 'Lessons' },
              { icon: '✅', label: 'Tests' },
              { icon: '🃏', label: 'Flashcards' },
            ].map(item => (
              <div key={item.label} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs text-green-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <main id="main-content" aria-label="Sign in" className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'linear-gradient(135deg, #006633, #004d26)' }}>
              <svg className="w-9 h-9 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">GT Hub</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">KRA Graduate Trainee Hub</p>
          </div>

          <div className="gt-card p-8">
            <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">Welcome back</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Sign in to continue learning</p>

            <LoginForm onSuccess={handleSuccess} />

            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 text-center space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="font-semibold hover:underline focus-visible:ring-2 focus-visible:ring-green-500 rounded"
                  style={{ color: '#006633' }}>
                  Create one
                </Link>
              </p>
              <Link to="/reset-password"
                className="block text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus-visible:ring-2 focus-visible:ring-green-500 rounded">
                Forgot your password?
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
