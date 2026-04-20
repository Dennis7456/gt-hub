/**
 * SearchPage - Search results page
 * Displays search results across all modules with content type and module indicators.
 * Highlights search terms in results and navigates to content on selection.
 * Validates: Requirements 20.2, 20.3, 20.4, 20.5
 */

import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ChevronLeft, Search, Loader2, AlertCircle, RefreshCw, SearchX } from 'lucide-react';
import * as ContentService from '../services/content.service';
import type { SearchResult } from '../services/content.service';

/** Map content type to a human-readable label and color classes */
const CONTENT_TYPE_CONFIG: Record<
  SearchResult['type'],
  { label: string; badgeClass: string; icon: string }
> = {
  module: {
    label: 'Module',
    badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    icon: '🗂️',
  },
  lesson: {
    label: 'Lesson',
    badgeClass: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    icon: '📖',
  },
  test: {
    label: 'Test',
    badgeClass: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    icon: '✅',
  },
  flashcard: {
    label: 'Flashcard',
    badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
    icon: '🃏',
  },
};

/**
 * Build the navigation URL for a search result
 */
function buildResultUrl(result: SearchResult): string {
  switch (result.type) {
    case 'module':
      return `/module/${result.moduleId}`;
    case 'lesson':
      return `/module/${result.moduleId}/lesson/${result.id}`;
    case 'test':
      return `/module/${result.moduleId}/test/${result.id}`;
    case 'flashcard':
      return `/module/${result.moduleId}/flashcards`;
    default:
      return `/module/${result.moduleId}`;
  }
}

/**
 * Highlight occurrences of `term` inside `text` with a <mark> element.
 * Returns an array of React nodes.
 */
function HighlightedText({
  text,
  term,
}: {
  text: string;
  term: string;
}): React.ReactElement {
  if (!term.trim()) {
    return <span>{text}</span>;
  }

  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedTerm})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-yellow-200 dark:bg-yellow-700 text-gray-900 dark:text-white rounded px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

export function SearchPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /** Run the search whenever `query` changes */
  const runSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const found = await ContentService.searchContent(searchQuery);
      setResults(found);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Search failed';
      setError(msg);
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    runSearch(query);
  }, [query, runSearch]);

  /** Sync URL param → local state when the user navigates back/forward */
  useEffect(() => {
    const urlQuery = searchParams.get('q') || '';
    setInputValue(urlQuery);
    setQuery(urlQuery);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      setSearchParams({ q: trimmed });
      setQuery(trimmed);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    navigate(buildResultUrl(result));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--surface-bg)' }}>
      <main id="main-content" aria-label="Search" className="container mx-auto px-4 py-6 sm:py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4" aria-hidden="true" /> Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Search</h1>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="mb-8" role="search">
          <div className="relative">
            <input
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search modules, lessons, tests, and flashcards..."
              aria-label="Search content"
              className="w-full px-4 py-3 pl-12 pr-28 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent text-base placeholder-gray-400 dark:placeholder-gray-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" aria-hidden="true" />
            <button type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 text-white text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
              style={{ backgroundColor: '#006633' }}>
              Search
            </button>
          </div>
        </form>

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-16 gap-3" aria-live="polite" aria-busy="true">
            <Loader2 className="w-6 h-6 animate-spin text-green-600" aria-hidden="true" />
            <p className="text-gray-600 dark:text-gray-300">Searching…</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="gt-card p-4 mb-6 border-red-200 dark:border-red-800" role="alert">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
              <p className="text-red-700 dark:text-red-300 font-medium">{error}</p>
            </div>
            <button onClick={() => runSearch(query)}
              className="inline-flex items-center gap-1.5 text-sm text-red-600 dark:text-red-400 hover:underline">
              <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" /> Retry
            </button>
          </div>
        )}

        {/* Results */}
        {!loading && !error && query.trim() && (
          <>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4" aria-live="polite">
              {results.length === 0
                ? `No results for "${query}"`
                : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
            </p>

            {results.length === 0 && (
              <div className="text-center py-16">
                <SearchX className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" aria-hidden="true" />
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No results found</h2>
                <p className="text-gray-500 dark:text-gray-400">Try different keywords or browse the modules from the dashboard.</p>
              </div>
            )}

            {results.length > 0 && (
              <ul className="space-y-3" aria-label="Search results">
                {results.map((result, index) => {
                  const config = CONTENT_TYPE_CONFIG[result.type];
                  const url = buildResultUrl(result);
                  return (
                    <li key={`${result.type}-${result.moduleId}-${result.id}-${index}`}>
                      <button
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left gt-card p-4 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-green-500"
                        aria-label={`${config.label}: ${result.title} in ${result.moduleName}`}
                        data-result-url={url}
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${config.badgeClass}`}>
                            <span aria-hidden="true">{config.icon}</span>
                            {config.label}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                            {result.moduleName}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                          <HighlightedText text={result.title} term={query} />
                        </h3>
                        {result.snippet && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            <HighlightedText text={result.snippet} term={query} />
                          </p>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}

        {/* Initial empty state */}
        {!loading && !error && !query.trim() && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-200 dark:text-gray-700 mx-auto mb-4" aria-hidden="true" />
            <p className="text-gray-500 dark:text-gray-400">Enter a search term above to find lessons, tests, and flashcards.</p>
          </div>
        )}
      </main>
    </div>
  );
}
