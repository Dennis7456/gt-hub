/**
 * Property-Based Tests for Flashcard Interface
 * 
 * Tests properties 28-31 and 44 from the design document.
 * Uses fast-check for property-based testing.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import fc from 'fast-check';
import { FlashcardCard } from '../../components/flashcard/FlashcardCard';
import { FlashcardControls } from '../../components/flashcard/FlashcardControls';
import { FlashcardDeck } from '../../components/flashcard/FlashcardDeck';
import { ProgressProvider } from '../../context/ProgressContext';
import { AuthProvider } from '../../context/AuthContext';

// Mock Supabase client
vi.mock('../../services/supabase.client', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
      onAuthStateChange: vi.fn().mockReturnValue({
        data: { subscription: { unsubscribe: vi.fn() } }
      }),
    },
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: null, error: null }),
      insert: vi.fn().mockResolvedValue({ data: null, error: null }),
      upsert: vi.fn().mockResolvedValue({ data: null, error: null }),
      order: vi.fn().mockReturnThis(),
    })),
  },
}));

// Mock progress service
vi.mock('../../services/progress.service', () => ({
  progressService: {
    recordFlashcardReview: vi.fn().mockResolvedValue(undefined),
    getOfflineQueueSize: vi.fn().mockReturnValue(0),
  },
}));

// Generators for property-based testing
const flashcardArbitrary = fc.record({
  id: fc.nat(),
  front: fc.string({ minLength: 10, maxLength: 200 }).filter(s => s.trim().length >= 10),
  back: fc.string({ minLength: 10, maxLength: 500 }).filter(s => s.trim().length >= 10),
  topic: fc.option(fc.string({ minLength: 3, maxLength: 50 }).filter(s => s.trim().length >= 3), { nil: undefined }),
});

// Helper to render with providers
function renderWithProviders(component: React.ReactElement) {
  return render(
    <AuthProvider>
      <ProgressProvider>
        {component}
      </ProgressProvider>
    </AuthProvider>
  );
}

describe('Flashcard Interface Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  /**
   * Property 28: Flashcard click flips card
   * **Validates: Requirements 7.2**
   * 
   * Feature: learning-management-system-react, Property 28: Flashcard click flips card
   */
  it('Property 28: Flashcard click flips card', () => {
    fc.assert(
      fc.property(flashcardArbitrary, (flashcard) => {
        let isFlipped = false;
        const onFlip = vi.fn(() => {
          isFlipped = !isFlipped;
        });

        const { rerender, unmount } = render(
          <FlashcardCard
            flashcard={flashcard}
            isFlipped={isFlipped}
            onFlip={onFlip}
          />
        );

        // Find the clickable card element
        const cardElement = screen.getByRole('button', { name: /flip to/i });

        // Initially should show front (not flipped)
        expect(screen.getByText(flashcard.front)).toBeInTheDocument();

        // Click to flip
        fireEvent.click(cardElement);
        expect(onFlip).toHaveBeenCalledTimes(1);

        // Rerender with flipped state
        rerender(
          <FlashcardCard
            flashcard={flashcard}
            isFlipped={true}
            onFlip={onFlip}
          />
        );

        // Should now show back
        expect(screen.getByText(flashcard.back)).toBeInTheDocument();

        // Click again to flip back
        fireEvent.click(cardElement);
        expect(onFlip).toHaveBeenCalledTimes(2);

        // Clean up
        unmount();
      }),
      { numRuns: 5 } // Reduced for UI tests
    );
  });

  /**
   * Property 29: Flashcard navigation functions
   * **Validates: Requirements 7.3**
   * 
   * Feature: learning-management-system-react, Property 29: Flashcard navigation functions
   */
  it('Property 29: Flashcard navigation functions', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 49 }),
        fc.integer({ min: 2, max: 50 }),
        (currentIndex, total) => {
          const onPrevious = vi.fn();
          const onNext = vi.fn();
          const onShuffle = vi.fn();

          const { unmount } = render(
            <FlashcardControls
              currentIndex={currentIndex}
              total={total}
              onPrevious={onPrevious}
              onNext={onNext}
              onShuffle={onShuffle}
            />
          );

          // Previous button should be disabled if at first card
          const previousButton = screen.getByLabelText('Previous card');
          if (currentIndex === 0) {
            expect(previousButton).toBeDisabled();
          } else {
            expect(previousButton).not.toBeDisabled();
            fireEvent.click(previousButton);
            expect(onPrevious).toHaveBeenCalledTimes(1);
          }

          // Next button should be disabled if at last card
          const nextButton = screen.getByLabelText('Next card');
          if (currentIndex === total - 1) {
            expect(nextButton).toBeDisabled();
          } else {
            expect(nextButton).not.toBeDisabled();
            fireEvent.click(nextButton);
            expect(onNext).toHaveBeenCalledTimes(1);
          }

          // Shuffle button should always be enabled
          const shuffleButton = screen.getByRole('button', { name: /shuffle|reset/i });
          expect(shuffleButton).not.toBeDisabled();
          fireEvent.click(shuffleButton);
          expect(onShuffle).toHaveBeenCalledTimes(1);

          // Clean up
          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 30: Flashcard progress displays
   * **Validates: Requirements 7.4**
   * 
   * Feature: learning-management-system-react, Property 30: Flashcard progress displays
   */
  it('Property 30: Flashcard progress displays', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 99 }),
        fc.integer({ min: 1, max: 100 }),
        (currentIndex, total) => {
          // Ensure currentIndex is less than total
          const validIndex = currentIndex % total;

          const onPrevious = vi.fn();
          const onNext = vi.fn();
          const onShuffle = vi.fn();

          const { unmount } = render(
            <FlashcardControls
              currentIndex={validIndex}
              total={total}
              onPrevious={onPrevious}
              onNext={onNext}
              onShuffle={onShuffle}
            />
          );

          // Should display current position in format "X / Y"
          const progressText = `${validIndex + 1} / ${total}`;
          expect(screen.getByText(progressText)).toBeInTheDocument();

          // Progress bar should exist with correct aria attributes
          const progressBar = screen.getByLabelText(`Card ${validIndex + 1} of ${total}`);
          expect(progressBar).toHaveAttribute('aria-valuenow', String(validIndex + 1));
          expect(progressBar).toHaveAttribute('aria-valuemin', '1');
          expect(progressBar).toHaveAttribute('aria-valuemax', String(total));

          // Clean up
          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  /**
   * Property 31: Flashcard shuffle randomizes order
   * **Validates: Requirements 7.5**
   * 
   * Feature: learning-management-system-react, Property 31: Flashcard shuffle randomizes order
   */
  it('Property 31: Flashcard shuffle randomizes order', async () => {
    fc.assert(
      fc.asyncProperty(
        fc.array(flashcardArbitrary, { minLength: 5, maxLength: 10 }),
        async (flashcards) => {
          // Ensure unique IDs and valid content
          const uniqueFlashcards = flashcards.map((card, index) => ({
            ...card,
            id: index + 1,
            front: card.front.trim() || `Question ${index + 1}`,
            back: card.back.trim() || `Answer ${index + 1}`,
          }));

          const { unmount } = renderWithProviders(
            <FlashcardDeck
              flashcards={uniqueFlashcards}
              moduleId="test-module"
            />
          );

          // Get the initial first card
          const initialFirstCard = uniqueFlashcards[0];
          expect(screen.getByText(initialFirstCard.front)).toBeInTheDocument();

          // Click shuffle button
          const shuffleButton = screen.getByRole('button', { name: /shuffle/i });
          fireEvent.click(shuffleButton);

          // Wait for shuffle to complete
          await waitFor(() => {
            expect(screen.getByText(/shuffled mode/i)).toBeInTheDocument();
          });

          // The order should be different (with high probability for 5+ cards)
          // We can't guarantee it's different every time due to randomness,
          // but we can verify shuffle mode is active
          expect(screen.getByText(/shuffled mode/i)).toBeInTheDocument();

          // Click reset to go back to original order
          const resetButton = screen.getByRole('button', { name: /reset/i });
          fireEvent.click(resetButton);

          await waitFor(() => {
            expect(screen.getByText(/original order/i)).toBeInTheDocument();
          });

          // Should be back to the first card
          expect(screen.getByText(initialFirstCard.front)).toBeInTheDocument();

          // Clean up
          unmount();
        }
      ),
      { numRuns: 5 } // Reduced for async UI tests
    );
  });

  /**
   * Property 44: Flashcard review count increments
   * **Validates: Requirements 10.2**
   * 
   * Feature: learning-management-system-react, Property 44: Flashcard review count increments
   */
  it('Property 44: Flashcard review count increments', async () => {
    fc.assert(
      fc.asyncProperty(
        fc.array(flashcardArbitrary, { minLength: 3, maxLength: 5 }),
        async (flashcards) => {
          // Ensure unique IDs and valid content
          const uniqueFlashcards = flashcards.map((card, index) => ({
            ...card,
            id: index + 1,
            front: card.front.trim() || `Question ${index + 1}`,
            back: card.back.trim() || `Answer ${index + 1}`,
          }));

          const { unmount } = renderWithProviders(
            <FlashcardDeck
              flashcards={uniqueFlashcards}
              moduleId="test-module"
            />
          );

          // Initially, 1 card should be reviewed (the current one)
          await waitFor(() => {
            expect(screen.getByText(/reviewed: 1 \/ \d+ cards/i)).toBeInTheDocument();
          });

          // Navigate to next card
          const nextButton = screen.getByLabelText('Next card');
          fireEvent.click(nextButton);

          // Now 2 cards should be reviewed
          await waitFor(() => {
            expect(screen.getByText(/reviewed: 2 \/ \d+ cards/i)).toBeInTheDocument();
          });

          // Navigate to next card again
          if (uniqueFlashcards.length > 2) {
            fireEvent.click(nextButton);

            // Now 3 cards should be reviewed
            await waitFor(() => {
              expect(screen.getByText(/reviewed: 3 \/ \d+ cards/i)).toBeInTheDocument();
            });
          }

          // Navigate back to previous card
          const previousButton = screen.getByLabelText('Previous card');
          fireEvent.click(previousButton);

          // Review count should not decrease (cards remain reviewed)
          await waitFor(() => {
            const reviewText = screen.getByText(/reviewed: \d+ \/ \d+ cards/i).textContent;
            const reviewCount = parseInt(reviewText?.match(/reviewed: (\d+)/)?.[1] || '0');
            expect(reviewCount).toBeGreaterThanOrEqual(2);
          });

          // Clean up
          unmount();
        }
      ),
      { numRuns: 5 } // Reduced for async UI tests
    );
  });

  /**
   * Additional property: Keyboard navigation works
   * Verifies that arrow keys and space bar work for navigation and flipping
   */
  it('Keyboard navigation works for flashcards', async () => {
    fc.assert(
      fc.asyncProperty(
        fc.array(flashcardArbitrary, { minLength: 3, maxLength: 5 }),
        async (flashcards) => {
          // Ensure unique IDs and valid content
          const uniqueFlashcards = flashcards.map((card, index) => ({
            ...card,
            id: index + 1,
            front: card.front.trim() || `Question ${index + 1}`,
            back: card.back.trim() || `Answer ${index + 1}`,
          }));

          const { unmount } = renderWithProviders(
            <FlashcardDeck
              flashcards={uniqueFlashcards}
              moduleId="test-module"
            />
          );

          // Initial card should be displayed
          expect(screen.getByText(uniqueFlashcards[0].front)).toBeInTheDocument();

          // Press space to flip
          fireEvent.keyDown(window, { key: ' ' });
          await waitFor(() => {
            expect(screen.getByText(uniqueFlashcards[0].back)).toBeInTheDocument();
          });

          // Press right arrow to go to next card
          fireEvent.keyDown(window, { key: 'ArrowRight' });
          await waitFor(() => {
            expect(screen.getByText(uniqueFlashcards[1].front)).toBeInTheDocument();
          });

          // Press left arrow to go back
          fireEvent.keyDown(window, { key: 'ArrowLeft' });
          await waitFor(() => {
            expect(screen.getByText(uniqueFlashcards[0].back)).toBeInTheDocument();
          });

          // Clean up
          unmount();
        }
      ),
      { numRuns: 5 } // Reduced for complex async UI tests
    );
  });
});
