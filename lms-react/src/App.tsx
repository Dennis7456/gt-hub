import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import { ProgressProvider } from './context/ProgressContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Navigation } from './components/layout/Navigation';
import { Loading } from './components/common/Loading';
import {
  RootErrorBoundary,
  PageErrorBoundary,
} from './components/common/ErrorBoundary';

// ---------------------------------------------------------------------------
// Lazy-loaded page components — each page is split into its own chunk so the
// initial bundle only contains the shell (auth, navigation, contexts).
// Validates: Requirements 1.6, 15.2, 15.4
// ---------------------------------------------------------------------------
const Dashboard = lazy(() =>
  import('./pages/Dashboard').then((m) => ({ default: m.Dashboard }))
);
const Login = lazy(() =>
  import('./pages/Login').then((m) => ({ default: m.Login }))
);
const Register = lazy(() =>
  import('./pages/Register').then((m) => ({ default: m.Register }))
);
const ModuleOverview = lazy(() =>
  import('./pages/ModuleOverview').then((m) => ({ default: m.ModuleOverview }))
);
const LessonPage = lazy(() =>
  import('./pages/LessonPage').then((m) => ({ default: m.LessonPage }))
);
const TestPage = lazy(() =>
  import('./pages/TestPage').then((m) => ({ default: m.TestPage }))
);
const FlashcardPage = lazy(() =>
  import('./pages/FlashcardPage').then((m) => ({ default: m.FlashcardPage }))
);
const SearchPage = lazy(() =>
  import('./pages/SearchPage').then((m) => ({ default: m.SearchPage }))
);

/** Shared Suspense fallback rendered while a lazy page chunk is loading. */
function PageSuspenseFallback() {
  return <Loading fullPage label="Loading page…" />;
}

/**
 * Layout wrapper that renders the Navigation bar above all protected pages.
 */
function AppLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

/**
 * App component with React Router configuration.
 * All page components are lazy-loaded and wrapped in Suspense boundaries so
 * the initial JS bundle stays small.
 * Validates: Requirements 1.6, 2.5, 4.1, 4.5, 15.2, 15.4
 */
function App() {
  return (
    <RootErrorBoundary>
      <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <ContentProvider>
            <ProgressProvider>
              <Routes>
                {/* Public routes */}
                <Route
                  path="/login"
                  element={
                    <PageErrorBoundary>
                      <Suspense fallback={<PageSuspenseFallback />}>
                        <Login />
                      </Suspense>
                    </PageErrorBoundary>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PageErrorBoundary>
                      <Suspense fallback={<PageSuspenseFallback />}>
                        <Register />
                      </Suspense>
                    </PageErrorBoundary>
                  }
                />

                {/* Protected routes — wrapped in AppLayout for Navigation bar */}
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route
                    path="/"
                    element={
                      <PageErrorBoundary>
                        <Suspense fallback={<PageSuspenseFallback />}>
                          <Dashboard />
                        </Suspense>
                      </PageErrorBoundary>
                    }
                  />
                  <Route
                    path="/module/:moduleId"
                    element={
                      <PageErrorBoundary>
                        <Suspense fallback={<PageSuspenseFallback />}>
                          <ModuleOverview />
                        </Suspense>
                      </PageErrorBoundary>
                    }
                  />
                  <Route
                    path="/module/:moduleId/lesson/:lessonId"
                    element={
                      <PageErrorBoundary>
                        <Suspense fallback={<PageSuspenseFallback />}>
                          <LessonPage />
                        </Suspense>
                      </PageErrorBoundary>
                    }
                  />
                  <Route
                    path="/module/:moduleId/test/:testId"
                    element={
                      <PageErrorBoundary>
                        <Suspense fallback={<PageSuspenseFallback />}>
                          <TestPage />
                        </Suspense>
                      </PageErrorBoundary>
                    }
                  />
                  <Route
                    path="/module/:moduleId/flashcards"
                    element={
                      <PageErrorBoundary>
                        <Suspense fallback={<PageSuspenseFallback />}>
                          <FlashcardPage />
                        </Suspense>
                      </PageErrorBoundary>
                    }
                  />
                  <Route
                    path="/search"
                    element={
                      <PageErrorBoundary>
                        <Suspense fallback={<PageSuspenseFallback />}>
                          <SearchPage />
                        </Suspense>
                      </PageErrorBoundary>
                    }
                  />
                </Route>

                {/* Catch-all route - redirect to dashboard */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </ProgressProvider>
          </ContentProvider>
        </AuthProvider>
      </BrowserRouter>
      </ThemeProvider>
    </RootErrorBoundary>
  );
}

export default App;
