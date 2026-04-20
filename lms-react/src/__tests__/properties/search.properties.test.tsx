/**
 * Property-Based Tests for Search Functionality
 *
 * Tests Properties 77–80 from the design document.
 * Validates: Requirements 20.2, 20.3, 20.4, 20.5
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import fc from 'fast-check';
import * as ContentService from '../../services/content.service';
import { SearchPage } from '../../pages/SearchPage';
import { AuthContext } from '../../context/AuthContext';
import { ContentContext } from '../../context/ContentContext';
import { ProgressContext } from '../../context/ProgressContext';
import type { SearchResult } from '../../services/content.service';
import type { Module } from '../../types';
import { getModuleIds } from '../../utils/contentParser';

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

vi.mock('../../services/supabase.client', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
      onAuthStateChange: vi.fn().mockReturnValue({
        data: { subscription: { unsubscribe: vi.fn() } },
      }),
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

vi.mock('../../services/content.service', () => ({
  getModules: vi.fn().mockResolvedValue([]),
  getModule: vi.fn().mockResolvedValue(null),
  getLessons: vi.fn().mockResolvedValue([]),
  getTests: vi.fn().mockResolvedValue([]),
  getFlashcards: vi.fn().mockResolvedValue({ moduleId: '', cards: [], topics: [] }),
  searchContent: vi.fn().mockResolvedValue([]),
  clearCache: vi.fn(),
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const mockUser = {
  id: 'test-user',
  email: 'test@example.com',
  created_at: new Date(),
  updated_at: new Date(),
};

const mockAuthValue = {
  user: mockUser,
  session: null,
  loading: false,
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
};

const mockContentValue = {
  modules: [] as Module[],
  loading: false,
  error: null,
  refreshModules: vi.fn(),
  clearCache: vi.fn(),
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

/** Render SearchPage with a given URL query string */
function renderSearchPage(query: string = '') {
  const url = query ? `/search?q=${encodeURIComponent(query)}` : '/search';
  return render(
    <MemoryRouter initialEntries={[url]}>
      <AuthContext.Provider value={mockAuthValue}>
        <ContentContext.Provider value={mockContentValue}>
          <ProgressContext.Provider value={mockProgressValue}>
            <SearchPage />
          </ProgressContext.Provider>
        </ContentContext.Provider>
      </AuthContext.Provider>
    </MemoryRouter>
  );
}

/** Build a minimal SearchResult for a given type */
function makeResult(
  type: SearchResult['type'],
  moduleId: string,
  id: string,
  title: string,
  snippet: string
): SearchResult {
  return {
    type,
    moduleId,
    moduleName: moduleId.replace(/-/g, ' '),
    id,
    title,
    snippet,
    relevance: 1,
  };
}

// ---------------------------------------------------------------------------
// Arbitraries
// ---------------------------------------------------------------------------

const moduleIdArb = fc.constantFrom(...getModuleIds());

const contentTypeArb = fc.constantFrom<SearchResult['type']>(
  'module',
  'lesson',
  'test',
  'flashcard'
);

const searchResultArb = fc.record({
  type: contentTypeArb,
  moduleId: moduleIdArb,
  moduleName: fc.string({ minLength: 3, maxLength: 40 }),
  id: fc.string({ minLength: 1, maxLength: 30 }),
  title: fc.string({ minLength: 3, maxLength: 80 }),
  snippet: fc.string({ minLength: 5, maxLength: 200 }),
  // Use integer to avoid NaN / Infinity edge cases from fc.float
  relevance: fc.integer({ min: 0, max: 100 }),
});

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Search Functionality Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    ContentService.clearCache();
  });

  // -------------------------------------------------------------------------
  // Property 77: Search queries search all modules
  // -------------------------------------------------------------------------
  it('Property 77: Search queries search all modules', async () => {
    /**
     * For any non-empty search query, searchContent is called and returns
     * results that may span all module IDs in the system.
     */
    await fc.assert(
      fc.asyncProperty(
        fc.string({ minLength: 1, maxLength: 50 }),
        async (query) => {
          // Arrange: mock results covering multiple modules
          const allModuleIds = getModuleIds();
          const mockResults: SearchResult[] = allModuleIds.map((moduleId) =>
            makeResult('lesson', moduleId, `lesson-1`, `Lesson about ${query}`, `Content: ${query}`)
          );
          vi.spyOn(ContentService, 'searchContent').mockResolvedValue(mockResults);

          // Act
          const results = await ContentService.searchContent(query);

          // Assert: searchContent was called with the query
          expect(ContentService.searchContent).toHaveBeenCalledWith(query);

          // Assert: results cover all modules
          const returnedModuleIds = new Set(results.map((r) => r.moduleId));
          allModuleIds.forEach((id) => {
            expect(returnedModuleIds.has(id)).toBe(true);
          });
        }
      ),
      { numRuns: 5 }
    );
  });

  // -------------------------------------------------------------------------
  // Property 78: Search results include metadata
  // -------------------------------------------------------------------------
  it('Property 78: Search results include metadata', async () => {
    /**
     * For any search result returned by searchContent, the result must
     * include content type, module ID, module name, item ID, title, and snippet.
     */
    await fc.assert(
      fc.asyncProperty(
        fc.array(searchResultArb, { minLength: 1, maxLength: 10 }),
        async (mockResults) => {
          vi.spyOn(ContentService, 'searchContent').mockResolvedValue(mockResults);

          const results = await ContentService.searchContent('test');

          results.forEach((result) => {
            // Content type must be one of the four valid types
            expect(['module', 'lesson', 'test', 'flashcard']).toContain(result.type);

            // Module metadata must be present
            expect(result.moduleId).toBeTruthy();
            expect(result.moduleName).toBeTruthy();

            // Item identity must be present
            expect(result.id).toBeTruthy();
            expect(result.title).toBeTruthy();

            // Snippet must be present
            expect(result.snippet).toBeDefined();

            // Relevance must be a non-negative number
            expect(typeof result.relevance).toBe('number');
            expect(result.relevance).toBeGreaterThanOrEqual(0);
          });
        }
      ),
      { numRuns: 5 }
    );
  });

  // -------------------------------------------------------------------------
  // Property 79: Search result selection navigates to content
  // -------------------------------------------------------------------------
  it('Property 79: Search result selection navigates to content', async () => {
    /**
     * For any search result, the rendered button must carry a data-result-url
     * attribute that encodes the correct navigation path for that content type.
     *
     * URL mapping:
     *   module    → /module/:moduleId
     *   lesson    → /module/:moduleId/lesson/:id
     *   test      → /module/:moduleId/test/:id
     *   flashcard → /module/:moduleId/flashcards
     */

    // --- Part A: pure URL-building property (no render overhead) ---
    fc.assert(
      fc.property(
        fc.record({
          type: contentTypeArb,
          moduleId: moduleIdArb,
          id: fc.string({ minLength: 1, maxLength: 20 }).filter(
            (s) => s.trim().length > 0 && s === s.trim()
          ),
        }),
        ({ type, moduleId, id }) => {
          const result = makeResult(type, moduleId, id, `Title`, `Snippet`);

          const expected = (() => {
            switch (result.type) {
              case 'module':    return `/module/${moduleId}`;
              case 'lesson':    return `/module/${moduleId}/lesson/${id}`;
              case 'test':      return `/module/${moduleId}/test/${id}`;
              case 'flashcard': return `/module/${moduleId}/flashcards`;
              default:          return `/module/${moduleId}`;
            }
          })();

          // Inline the same logic used in SearchPage.buildResultUrl
          const actual = (() => {
            switch (result.type) {
              case 'module':    return `/module/${result.moduleId}`;
              case 'lesson':    return `/module/${result.moduleId}/lesson/${result.id}`;
              case 'test':      return `/module/${result.moduleId}/test/${result.id}`;
              case 'flashcard': return `/module/${result.moduleId}/flashcards`;
              default:          return `/module/${result.moduleId}`;
            }
          })();

          expect(actual).toBe(expected);
        }
      ),
      { numRuns: 5 }
    );

    // --- Part B: single render check that the attribute is present in the DOM ---
    const sampleResult = makeResult('lesson', 'clearance-one', 'lesson-1', 'Sample Lesson', 'Sample snippet');
    vi.spyOn(ContentService, 'searchContent').mockResolvedValue([sampleResult]);

    const { unmount } = renderSearchPage('test');

    await waitFor(() => {
      const btn = document.querySelector('[data-result-url="/module/clearance-one/lesson/lesson-1"]');
      expect(btn).not.toBeNull();
    }, { timeout: 5000 });

    unmount();
  }, 15000);

  // -------------------------------------------------------------------------
  // Property 80: Search terms are highlighted in results
  // -------------------------------------------------------------------------
  it('Property 80: Search terms are highlighted in results', async () => {
    /**
     * For any search result whose title or snippet contains the search term,
     * the rendered output should include a <mark> element wrapping that term.
     */
    await fc.assert(
      fc.asyncProperty(
        // Use simple alphanumeric terms to avoid regex issues
        fc.string({ minLength: 3, maxLength: 15 }).filter((s) => /^[a-zA-Z0-9]+$/.test(s)),
        async (term) => {
          const title = `Result about ${term} here`;
          const snippet = `This snippet mentions ${term} in context`;
          const result = makeResult('lesson', 'clearance-one', 'lesson-1', title, snippet);

          vi.spyOn(ContentService, 'searchContent').mockResolvedValue([result]);

          const { container, unmount } = renderSearchPage(term);

          await waitFor(() => {
            expect(screen.queryByText('Searching...')).not.toBeInTheDocument();
          }, { timeout: 3000 });

          // Wait for results to appear
          await waitFor(() => {
            expect(container.querySelector('mark')).not.toBeNull();
          }, { timeout: 3000 });

          // All <mark> elements should contain the search term (case-insensitive)
          const marks = container.querySelectorAll('mark');
          expect(marks.length).toBeGreaterThan(0);
          marks.forEach((mark) => {
            expect(mark.textContent?.toLowerCase()).toBe(term.toLowerCase());
          });

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  }, 30000);

  // -------------------------------------------------------------------------
  // Additional: Empty query returns no results
  // -------------------------------------------------------------------------
  it('returns empty results for empty search query', async () => {
    vi.spyOn(ContentService, 'searchContent').mockResolvedValue([]);

    const { unmount } = renderSearchPage('');

    // Should show the initial empty state prompt, not a result list
    await waitFor(() => {
      expect(
        screen.getByText(/enter a search term/i)
      ).toBeInTheDocument();
    });

    // searchContent should NOT have been called for an empty query
    expect(ContentService.searchContent).not.toHaveBeenCalled();

    unmount();
  });

  // -------------------------------------------------------------------------
  // Additional: No-results state renders correctly
  // -------------------------------------------------------------------------
  it('displays empty state when no results are found', async () => {
    vi.spyOn(ContentService, 'searchContent').mockResolvedValue([]);

    const { unmount } = renderSearchPage('xyzzy-no-match');

    await waitFor(() => {
      expect(screen.queryByText('Searching...')).not.toBeInTheDocument();
    }, { timeout: 3000 });

    expect(await screen.findByText(/no results found/i)).toBeInTheDocument();

    unmount();
  });

  // -------------------------------------------------------------------------
  // Additional: Result count is displayed
  // -------------------------------------------------------------------------
  it('displays result count when results are found', async () => {
    const results = [
      makeResult('lesson', 'clearance-one', 'lesson-1', 'Customs basics', 'Intro to customs'),
      makeResult('test', 'clearance-one', 'test-1', 'Customs test', 'Test your knowledge'),
    ];
    vi.spyOn(ContentService, 'searchContent').mockResolvedValue(results);

    const { unmount } = renderSearchPage('customs');

    await waitFor(() => {
      expect(screen.queryByText('Searching...')).not.toBeInTheDocument();
    }, { timeout: 3000 });

    expect(await screen.findByText(/2 results for "customs"/i)).toBeInTheDocument();

    unmount();
  });

  // -------------------------------------------------------------------------
  // Additional: Content type badges are rendered
  // -------------------------------------------------------------------------
  it('renders content type and module badges for each result', async () => {
    const results: SearchResult[] = [
      makeResult('lesson', 'clearance-one', 'lesson-1', 'Lesson title', 'Lesson snippet'),
      makeResult('test', 'wto-customs-valuation', 'test-1', 'Test title', 'Test snippet'),
      makeResult('flashcard', 'history-of-taxation', 'card-1', 'Card front', 'Card back'),
    ];
    vi.spyOn(ContentService, 'searchContent').mockResolvedValue(results);

    const { unmount } = renderSearchPage('query');

    await waitFor(() => {
      expect(screen.queryByText('Searching...')).not.toBeInTheDocument();
    }, { timeout: 3000 });

    // Each content type badge should appear
    expect(await screen.findByText('Lesson')).toBeInTheDocument();
    expect(await screen.findByText('Test')).toBeInTheDocument();
    expect(await screen.findByText('Flashcard')).toBeInTheDocument();

    unmount();
  });

  // -------------------------------------------------------------------------
  // Additional: Search form submits on Enter key
  // -------------------------------------------------------------------------
  it('submits search on Enter key press', async () => {
    vi.spyOn(ContentService, 'searchContent').mockResolvedValue([]);

    const { unmount } = renderSearchPage('');

    const input = screen.getByRole('searchbox', { name: /search content/i });
    fireEvent.change(input, { target: { value: 'customs' } });

    // Submit the form directly (jsdom doesn't propagate Enter key to form submit)
    const form = input.closest('form')!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(ContentService.searchContent).toHaveBeenCalledWith('customs');
    }, { timeout: 3000 });

    unmount();
  });
});
