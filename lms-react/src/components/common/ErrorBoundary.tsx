/**
 * ErrorBoundary component
 * Catches unhandled React render errors and displays a fallback UI.
 * Validates: Requirements 14.4, 17.3
 */

import { Component, type ReactNode, type ErrorInfo } from 'react';
import { logError } from '../../utils/errorHandlers';

interface ErrorBoundaryProps {
  children: ReactNode;
  /** Custom fallback UI. Receives the error and a reset callback. */
  fallback?: (error: Error, reset: () => void) => ReactNode;
  /**
   * Identifier used in log output to distinguish which boundary caught the
   * error (e.g. "RootErrorBoundary", "PageErrorBoundary").
   */
  name?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    const boundaryName = this.props.name ?? 'ErrorBoundary';
    // Use centralised logError so sensitive data is never exposed
    logError(boundaryName, error, {
      componentStack: info.componentStack ?? '',
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error) {
      if (fallback) {
        return fallback(error, this.handleReset);
      }

      return <DefaultErrorFallback error={error} onReset={this.handleReset} />;
    }

    return children;
  }
}

// ---------------------------------------------------------------------------
// Default fallback UI
// ---------------------------------------------------------------------------

interface DefaultErrorFallbackProps {
  error: Error;
  onReset: () => void;
}

function DefaultErrorFallback({ error, onReset }: DefaultErrorFallbackProps) {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="flex flex-col items-center justify-center min-h-[200px] p-8 text-center"
    >
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md w-full">
        {/* Icon */}
        <div className="flex justify-center mb-4" aria-hidden="true">
          <svg
            className="w-12 h-12 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
          Something went wrong
        </h2>

        {/* Show a safe, non-sensitive message */}
        <p className="text-sm text-red-700 dark:text-red-300 mb-4">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>

        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Try again
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Full-page fallback UI (used by RootErrorBoundary)
// ---------------------------------------------------------------------------

interface FullPageErrorFallbackProps {
  error: Error;
  onReset: () => void;
}

function FullPageErrorFallback({ error, onReset }: FullPageErrorFallbackProps) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-8"
    >
      <div className="bg-white dark:bg-gray-800 border border-red-200 dark:border-red-800 rounded-xl shadow-lg p-8 max-w-lg w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6" aria-hidden="true">
          <svg
            className="w-16 h-16 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          Something went wrong
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-2">
          {error.message || 'An unexpected error occurred.'}
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          If the problem persists, please reload the page.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try again
          </button>

          <button
            onClick={handleReload}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors"
          >
            Reload page
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Named boundary convenience wrappers
// ---------------------------------------------------------------------------

interface BoundaryProps {
  children: ReactNode;
}

/**
 * RootErrorBoundary — wraps the entire application.
 * Displays a full-page fallback with reload and try-again buttons.
 * Validates: Requirements 17.3
 */
export function RootErrorBoundary({ children }: BoundaryProps) {
  return (
    <ErrorBoundary
      name="RootErrorBoundary"
      fallback={(error, reset) => (
        <FullPageErrorFallback error={error} onReset={reset} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

/**
 * PageErrorBoundary — wraps individual page components.
 * Displays an inline fallback with a reload button so the rest of the
 * application shell (navigation, etc.) remains visible.
 * Validates: Requirements 17.3
 */
export function PageErrorBoundary({ children }: BoundaryProps) {
  return (
    <ErrorBoundary name="PageErrorBoundary">
      {children}
    </ErrorBoundary>
  );
}

/**
 * ComponentErrorBoundary — wraps complex sub-components (e.g. TestPage,
 * FlashcardPage) to isolate failures without taking down the whole page.
 * Validates: Requirements 17.3
 */
export function ComponentErrorBoundary({ children }: BoundaryProps) {
  return (
    <ErrorBoundary name="ComponentErrorBoundary">
      {children}
    </ErrorBoundary>
  );
}
