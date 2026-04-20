/**
 * FlashcardControls Component
 * **Validates: Requirements 7.3, 7.4, 7.5, 15.1**
 */

import { memo } from 'react';
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw, Keyboard } from 'lucide-react';

interface FlashcardControlsProps {
  currentIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: () => void;
  isShuffled?: boolean;
}

export const FlashcardControls = memo(function FlashcardControls({
  currentIndex,
  total,
  onPrevious,
  onNext,
  onShuffle,
  isShuffled = false,
}: FlashcardControlsProps) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      {/* Progress indicator */}
      <div className="text-center mb-5">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          {currentIndex + 1} <span className="text-gray-400 font-normal">/</span> {total}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center justify-center gap-1.5">
          {isShuffled ? (
            <><Shuffle className="w-3.5 h-3.5" aria-hidden="true" /> Shuffled mode</>
          ) : (
            'Original order'
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%`, backgroundColor: '#006633' }}
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label={`Card ${currentIndex + 1} of ${total}`}
        />
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between gap-3">
        {/* Previous */}
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${
            isFirst
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-sm'
          }`}
          aria-label="Previous card"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Shuffle */}
        <button
          onClick={onShuffle}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${
            isShuffled
              ? 'text-white shadow-sm'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-sm'
          }`}
          style={isShuffled ? { backgroundColor: '#006633' } : {}}
          aria-label={isShuffled ? 'Reset to original order' : 'Shuffle cards'}
          title={isShuffled ? 'Reset to original order' : 'Shuffle cards'}
        >
          {isShuffled ? (
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
          ) : (
            <Shuffle className="w-4 h-4" aria-hidden="true" />
          )}
          <span className="hidden sm:inline">{isShuffled ? 'Reset' : 'Shuffle'}</span>
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          disabled={isLast}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all min-h-[44px] focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 ${
            isLast
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
              : 'text-white shadow-sm hover:opacity-90'
          }`}
          style={!isLast ? { backgroundColor: '#006633' } : {}}
          aria-label="Next card"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="text-center mt-6 text-xs text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1.5">
        <Keyboard className="w-3.5 h-3.5" aria-hidden="true" />
        <span>
          <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-mono">←</kbd>
          {' '}/{' '}
          <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-mono">→</kbd>
          {' '}navigate,{' '}
          <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 font-mono">Space</kbd>
          {' '}flip
        </span>
      </div>
    </div>
  );
});
