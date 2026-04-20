/**
 * FlashcardDeck Component
 * 
 * Manages flashcard navigation, shuffle mode, and progress tracking.
 * Handles keyboard navigation (arrow keys, space to flip).
 * Records progress to ProgressService.
 * 
 * **Validates: Requirements 7.1, 7.3, 7.4, 7.5, 7.6**
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import type { Flashcard } from '../../types';
import { FlashcardCard } from './FlashcardCard';
import { FlashcardControls } from './FlashcardControls';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';

interface FlashcardDeckProps {
  flashcards: Flashcard[];
  moduleId: string;
  onComplete?: () => void;
}

export function FlashcardDeck({ flashcards, moduleId, onComplete }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<Flashcard[]>(flashcards);
  // Use a Set for deduplication but track size separately as a plain number
  // so the save-progress effect doesn't re-run on every card navigation.
  const [_reviewedCardIds, setReviewedCardIds] = useState<Set<number>>(new Set());
  const [reviewedCount, setReviewedCount] = useState(0);

  const { recordFlashcardReview } = useProgress();
  const { user } = useAuth();

  // Keep a stable ref to the latest values needed by the save/unmount logic
  // so those effects never need to re-run just because these values changed.
  const saveRef = useRef({
    reviewedCount: 0,
    moduleId,
    totalCards: flashcards.length,
    user,
    recordFlashcardReview,
    online: navigator.onLine,
  });

  // Keep the ref in sync on every render (no effect needed — refs are mutable)
  saveRef.current = {
    reviewedCount,
    moduleId,
    totalCards: flashcards.length,
    user,
    recordFlashcardReview,
    online: navigator.onLine,
  };

  // Reset when the flashcard set changes
  useEffect(() => {
    setShuffledCards(flashcards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsShuffled(false);
    setReviewedCardIds(new Set());
    setReviewedCount(0);
  }, [flashcards]);

  // Get current card
  const currentCard = shuffledCards[currentIndex];

  // Mark card as reviewed when viewed — only updates state when the card is new
  useEffect(() => {
    if (!currentCard) return;
    setReviewedCardIds((prev) => {
      if (prev.has(currentCard.id)) return prev; // already seen — no state change
      const next = new Set(prev);
      next.add(currentCard.id);
      setReviewedCount(next.size); // update the plain-number counter
      return next;
    });
  }, [currentCard]);

  // Periodic save — depends only on stable values via saveRef, so this effect
  // runs exactly once per mount and never re-registers due to card navigation.
  useEffect(() => {
    const save = async () => {
      const { reviewedCount: count, moduleId: mid, totalCards, user: u, online, recordFlashcardReview: record } = saveRef.current;
      if (!u || count === 0 || !online) return;
      try {
        await record(mid, mid, count, totalCards);
      } catch {
        // Already handled/queued in ProgressContext
      }
    };

    const interval = setInterval(save, 30000);

    // Save once on unmount
    return () => {
      clearInterval(interval);
      save();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps — intentionally stable

  // Handle flip
  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  // Handle previous card
  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  // Handle next card
  const handleNext = useCallback(() => {
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, shuffledCards.length, onComplete]);

  // Handle shuffle
  const handleShuffle = useCallback(() => {
    if (isShuffled) {
      setShuffledCards(flashcards);
      setIsShuffled(false);
      setCurrentIndex(0);
      setIsFlipped(false);
    } else {
      const shuffled = [...flashcards];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledCards(shuffled);
      setIsShuffled(true);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  }, [isShuffled, flashcards]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      switch (e.key) {
        case 'ArrowLeft': e.preventDefault(); handlePrevious(); break;
        case 'ArrowRight': e.preventDefault(); handleNext(); break;
        case ' ': e.preventDefault(); handleFlip(); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext, handleFlip]);

  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No flashcards available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <FlashcardCard
        flashcard={currentCard}
        isFlipped={isFlipped}
        onFlip={handleFlip}
      />

      <FlashcardControls
        currentIndex={currentIndex}
        total={shuffledCards.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onShuffle={handleShuffle}
        isShuffled={isShuffled}
      />

      <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        Reviewed: {reviewedCount} / {flashcards.length} cards
      </div>
    </div>
  );
}
