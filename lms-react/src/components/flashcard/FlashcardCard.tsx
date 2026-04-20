/**
 * FlashcardCard Component
 *
 * Displays a single flashcard with flip animation.
 * Supports both touch and click interactions.
 * Memoized with React.memo — the parent FlashcardDeck re-renders on every
 * navigation step, but the card itself only needs to re-render when the
 * flashcard content or flip state changes.
 *
 * **Validates: Requirements 7.2, 15.1**
 */

import { memo, useState } from 'react';
import type { Flashcard } from '../../types';

interface FlashcardCardProps {
  flashcard: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

export const FlashcardCard = memo(function FlashcardCard({ flashcard, isFlipped, onFlip }: FlashcardCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    onFlip();
    
    // Reset animation state after transition completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className="perspective-1000 w-full max-w-2xl mx-auto">
      <div
        className={`relative w-full h-72 sm:h-96 cursor-pointer transition-transform duration-600 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={isFlipped ? 'Flip to front of card' : 'Flip to back of card'}
        aria-pressed={isFlipped}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg flex items-center justify-center p-8 border-2 ${
            isFlipped ? 'invisible' : 'visible'
          }`}
          style={{
            backgroundColor: 'var(--surface-card)',
            borderColor: '#006633',
          }}
        >
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full inline-block bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
              Question
            </div>
            <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white leading-relaxed">
              {flashcard.front}
            </p>
            {flashcard.topic && (
              <div className="mt-6 inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300">
                {flashcard.topic}
              </div>
            )}
            <div className="mt-8 text-sm text-gray-400 dark:text-gray-500">
              Click or tap to reveal answer
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-lg flex items-center justify-center p-8 rotate-y-180 ${
            isFlipped ? 'visible' : 'invisible'
          }`}
          style={{ background: 'linear-gradient(135deg, #006633 0%, #004d26 100%)' }}
        >
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full inline-block"
              style={{ backgroundColor: 'rgba(255,184,0,0.25)', color: '#FFB800' }}>
              Answer
            </div>
            <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
              {flashcard.back}
            </p>
            {flashcard.topic && (
              <div className="mt-6 inline-block px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#e2f5ea' }}>
                {flashcard.topic}
              </div>
            )}
            <div className="mt-8 text-sm text-green-200">
              Click or tap to see question
            </div>
          </div>
        </div>

        {/* Flip indicator */}
        <div className="absolute top-4 right-4 pointer-events-none" aria-hidden="true">
          <svg
            className={`w-6 h-6 transition-transform duration-600 text-gray-400 dark:text-gray-500 ${
              isFlipped ? 'rotate-180 text-green-200' : ''
            }`}
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
        </div>
      </div>

      {/* Screen reader announcement for flip state */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {isFlipped ? 'Card flipped to answer' : 'Card showing question'}
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </div>
  );
});
