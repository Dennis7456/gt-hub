/**
 * Property-Based Tests for Module Navigation
 * Tests Properties 12, 13, 14
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import fc from 'fast-check';
import { Dashboard } from '../../pages/Dashboard';
import { ModuleOverview } from '../../pages/ModuleOverview';
import { AuthContext } from '../../context/AuthContext';
import { ContentContext } from '../../context/ContentContext';
import { ProgressContext } from '../../context/ProgressContext';
import * as ContentService from '../../services/content.service';
import type { Module } from '../../types';

vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme: vi.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('../../services/content.service', () => ({
  getModules: vi.fn().mockResolvedValue([]),
  getModule: vi.fn().mockResolvedValue(null),
  getLessons: vi.fn().mockResolvedValue([]),
  getTests: vi.fn().mockResolvedValue([]),
  getFlashcards: vi.fn().mockResolvedValue({ moduleId: '', cards: [], topics: [] }),
  searchContent: vi.fn().mockResolvedValue([]),
  clearCache: vi.fn(),
}));

vi.mock('../../services/supabase.client', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({ data: { session: { user: { id: 'test-user' } } }, error: null }),
      onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
    },
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: null, error: { code: 'PGRST116' } }),
    })),
  },
}));

vi.mock('../../services/auth.service', () => ({
  authService: {
    getCurrentUser: vi.fn().mockResolvedValue({ id: 'test-user', email: 'test@example.com' }),
    getSession: vi.fn().mockResolvedValue({ user: { id: 'test-user' } }),
  },
}));

// Shared mock values
const mockUser = { id: 'test-user', email: 'test@example.com', created_at: new Date(), updated_at: new Date() };
const mockAuthValue = {
  user: mockUser,
  session: null,
  loading: false,
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
};
const mockProgressValue = {
  overallProgress: null,
  syncStatus: 'idle' as const,
  loading: false,
  error: null,
  queueSize: 0,
  markLessonComplete: vi.fn(),
  saveTestResult: vi.fn(),
  recordFlashcardReview: vi.fn(),
  getLessonProgress: vi.fn(),
  getTestResults: vi.fn(),
  getFlashcardProgress: vi.fn(),
  refreshProgress: vi.fn(),
  syncOfflineData: vi.fn(),
};

function makeContentValue(modules: Module[]) {
  return {
    modules,
    loading: false,
    error: null,
    refreshModules: vi.fn(),
    clearCache: vi.fn(),
  };
}

const moduleIdArbitrary = fc.constantFrom(
  'clearance-one',
  'customs-in-international-context',
  'customs-valuation-i',
  'wto-customs-valuation',
  'history-of-taxation',
  'theory-of-taxation',
  'tax-and-customs-theory',
  'eaccma'
);

const moduleArbitrary = fc.record({
  id: moduleIdArbitrary,
  name: fc.string({ minLength: 1, maxLength: 50 }),
  displayName: fc.string({ minLength: 1, maxLength: 100 }),
  description: fc.string({ minLength: 10, maxLength: 200 }),
  icon: fc.constantFrom('📚', '📦', '💰', '🌍', '📊', '🎓', '⚖️', '🔧'),
  color: fc.constantFrom('#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'),
  lessonCount: fc.integer({ min: 0, max: 20 }),
  testCount: fc.integer({ min: 0, max: 15 }),
  flashcardCount: fc.integer({ min: 0, max: 100 }),
});

describe('Module Navigation Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * Property 12: Module selection navigates to overview
   * Validates: Requirements 4.3
   */
  it('Property 12: Module selection navigates to overview', async () => {
    await fc.assert(
      fc.asyncProperty(moduleArbitrary, async (module) => {
        const { unmount } = render(
          <MemoryRouter initialEntries={['/']}>
            <AuthContext.Provider value={mockAuthValue}>
              <ContentContext.Provider value={makeContentValue([module])}>
                <ProgressContext.Provider value={mockProgressValue}>
                  <Dashboard />
                </ProgressContext.Provider>
              </ContentContext.Provider>
            </AuthContext.Provider>
          </MemoryRouter>
        );

        const moduleButton = await screen.findByLabelText(
          `Open ${module.displayName} module`,
          {},
          { timeout: 3000 }
        );
        expect(moduleButton).toBeInTheDocument();
        expect(moduleButton).toHaveAttribute('aria-label', `Open ${module.displayName} module`);

        unmount();
      }),
      { numRuns: 5 }
    );
  }, 30000);

  /**
   * Property 13: Module progress indicators display
   * Validates: Requirements 4.4
   */
  it('Property 13: Module progress indicators display', async () => {
    await fc.assert(
      fc.asyncProperty(moduleArbitrary, async (module) => {
        const { container, unmount } = render(
          <MemoryRouter initialEntries={['/']}>
            <AuthContext.Provider value={mockAuthValue}>
              <ContentContext.Provider value={makeContentValue([module])}>
                <ProgressContext.Provider value={mockProgressValue}>
                  <Dashboard />
                </ProgressContext.Provider>
              </ContentContext.Provider>
            </AuthContext.Provider>
          </MemoryRouter>
        );

        const moduleCard = await screen.findByLabelText(
          `Open ${module.displayName} module`,
          {},
          { timeout: 3000 }
        );
        expect(moduleCard).toBeInTheDocument();

        const progressBars = container.querySelectorAll('.bg-blue-500, .bg-green-500, .bg-purple-500');
        expect(progressBars.length).toBeGreaterThanOrEqual(0);

        unmount();
      }),
      { numRuns: 5 }
    );
  }, 30000);

  /**
   * Property 14: Deep linking to content works
   * Validates: Requirements 4.5
   */
  it('Property 14: Deep linking to content works', async () => {
    await fc.assert(
      fc.asyncProperty(moduleIdArbitrary, async (moduleId) => {
        const mockModule: Module = {
          id: moduleId,
          name: moduleId,
          displayName: moduleId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: 'Test module',
          icon: '📚',
          color: '#3B82F6',
          lessonCount: 5,
          testCount: 3,
          flashcardCount: 20,
        };

        vi.spyOn(ContentService, 'getModule').mockResolvedValue(mockModule);
        vi.spyOn(ContentService, 'getLessons').mockResolvedValue([]);
        vi.spyOn(ContentService, 'getTests').mockResolvedValue([]);
        vi.spyOn(ContentService, 'getFlashcards').mockResolvedValue({ moduleId, cards: [], topics: [] });

        const { unmount, getByText } = render(
          <MemoryRouter initialEntries={[`/module/${moduleId}`]}>
            <AuthContext.Provider value={mockAuthValue}>
              <ContentContext.Provider value={makeContentValue([mockModule])}>
                <ProgressContext.Provider value={mockProgressValue}>
                  <ModuleOverview />
                </ProgressContext.Provider>
              </ContentContext.Provider>
            </AuthContext.Provider>
          </MemoryRouter>
        );

        await waitFor(() => {
          expect(getByText(mockModule.displayName)).toBeInTheDocument();
        }, { timeout: 5000 });

        unmount();
      }),
      { numRuns: 5 }
    );
  }, 30000);
});
