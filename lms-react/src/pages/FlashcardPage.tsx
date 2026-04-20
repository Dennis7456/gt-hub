/**
 * FlashcardPage - Flashcard study page
 * 
 * Integrates FlashcardDeck, FlashcardCard, and FlashcardControls.
 * Loads flashcards from ContentService.
 * Handles loading and error states.
 * Displays flashcard topics if available.
 * Saves review progress on page unload.
 * 
 * **Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5, 7.6**
 */

import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, AlertCircle, RefreshCw, Inbox, Tag } from 'lucide-react';
import { FlashcardDeck } from '../components/flashcard/FlashcardDeck';
import { useContent } from '../context/ContentContext';
import * as ContentService from '../services/content.service';
import type { FlashcardSet } from '../types';
import { ComponentErrorBoundary } from '../components/common/ErrorBoundary';

export function FlashcardPage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { modules } = useContent();
  
  const [flashcardSet, setFlashcardSet] = useState<FlashcardSet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get module info
  const module = modules.find(m => m.id === moduleId);

  // Load flashcards
  useEffect(() => {
    const loadFlashcards = async () => {
      if (!moduleId) {
        setError('Module ID is required');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const flashcards = await ContentService.getFlashcards(moduleId);
        setFlashcardSet(flashcards);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load flashcards';
        setError(errorMessage);
        console.error('Error loading flashcards:', err);
      } finally {
        setLoading(false);
      }
    };

    loadFlashcards();
  }, [moduleId]);

  // Handle completion
  const handleComplete = () => {
    // Navigate back to module overview
    if (moduleId) {
      navigate(`/module/${moduleId}`);
    }
  };

  // Loading state
  if (loading) {
    return (
      <main id="main-content" aria-label="Flashcards" aria-live="polite" aria-busy="true" className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center" role="status" aria-label="Loading flashcards">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" aria-hidden="true"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading flashcards...</p>
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main id="main-content" aria-label="Flashcards" className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto gt-card p-8 text-center" role="alert" aria-live="assertive">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-xl font-bold text-red-700 dark:text-red-300 mb-2">Error Loading Flashcards</h2>
          <p className="text-red-600 dark:text-red-400 mb-5">{error}</p>
          <button onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 min-h-[44px]">
            <RefreshCw className="w-4 h-4" aria-hidden="true" /> Retry
          </button>
        </div>
      </main>
    );
  }

  // No flashcards state
  if (!flashcardSet || flashcardSet.cards.length === 0) {
    return (
      <main id="main-content" aria-label="Flashcards" className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto gt-card p-8 text-center">
          <Inbox className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">No Flashcards Available</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-5">There are no flashcards for this module yet.</p>
          {moduleId && (
            <Link to={`/module/${moduleId}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-white rounded-xl font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 min-h-[44px]"
              style={{ backgroundColor: '#006633' }}>
              Back to Module
            </Link>
          )}
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" aria-label={`Flashcards: ${module?.displayName || 'Flashcards'}`}
      className="container mx-auto px-4 py-6 sm:py-8" style={{ backgroundColor: 'var(--surface-bg)' }}>
      {/* Header */}
      <header className="max-w-2xl mx-auto mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-4">
          {moduleId && (
            <Link to={`/module/${moduleId}`}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-green-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Back to module">
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </Link>
          )}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {module?.displayName || 'Flashcards'}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-0.5 text-sm">
              {flashcardSet.cards.length} cards to study
            </p>
          </div>
        </div>

        {/* Topics */}
        {flashcardSet.topics && flashcardSet.topics.length > 0 && (
          <div className="gt-card p-4">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2 text-green-800 dark:text-green-400">
              <Tag className="w-3.5 h-3.5" aria-hidden="true" /> Topics Covered
            </p>
            <div className="flex flex-wrap gap-2">
              {flashcardSet.topics.map(topic => (
                <span key={topic.id}
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300"
                  title={`Cards ${topic.range[0]} – ${topic.range[1]}`}>
                  {topic.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </header>

      <ComponentErrorBoundary>
        <FlashcardDeck flashcards={flashcardSet.cards} moduleId={moduleId!} onComplete={handleComplete} />
      </ComponentErrorBoundary>
    </main>
  );
}
