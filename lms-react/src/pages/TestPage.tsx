import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTest } from '../services/content.service';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import type { Test } from '../types';
import { QuestionCard } from '../components/test/QuestionCard';
import { TestTimer } from '../components/test/TestTimer';
import { TestResults } from '../components/test/TestResults';
import { ComponentErrorBoundary } from '../components/common/ErrorBoundary';

/**
 * TestPage - Test taking page
 * 
 * Integrates QuestionCard, TestTimer, and TestResults components.
 * Manages test state (answers, time remaining, submitted).
 * Implements confirmation dialog before submission.
 * Saves test results to ProgressService on submission.
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8
 */
export function TestPage() {
  const { moduleId, testId } = useParams<{ moduleId: string; testId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { saveTestResult } = useProgress();

  // Test data and loading state
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Test state
  const [userAnswers, setUserAnswers] = useState<(number | undefined)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [completedAt, setCompletedAt] = useState<Date | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  /**
   * Load test data
   */
  useEffect(() => {
    const loadTest = async () => {
      if (!moduleId || !testId) {
        setError('Invalid test parameters');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const testData = await getTest(moduleId, testId);
        setTest(testData);
        // Initialize answers array with undefined values
        setUserAnswers(new Array(testData.questions.length).fill(undefined));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load test';
        setError(errorMessage);
        console.error('Error loading test:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTest();
  }, [moduleId, testId]);

  /**
   * Handle answer selection
   */
  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    if (submitted) return;

    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = answerIndex;
      return newAnswers;
    });
  };

  /**
   * Calculate score
   */
  const calculateScore = useCallback((): number => {
    if (!test) return 0;

    let correct = 0;
    test.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correct) {
        correct++;
      }
    });

    return correct;
  }, [test, userAnswers]);

  /**
   * Handle test submission
   */
  const handleSubmit = async () => {
    if (!test || !user || !moduleId) return;

    // Close confirmation dialog
    setShowConfirmDialog(false);

    // Mark as submitted
    setSubmitted(true);
    setCompletedAt(new Date());

    // Calculate score
    const score = calculateScore();

    // Save to database
    try {
      await saveTestResult(moduleId, test.id, score, test.questions.length);
    } catch (err) {
      console.error('Error saving test result:', err);
      // Continue even if save fails (it will be queued for offline sync)
    }
  };

  /**
   * Handle time up (auto-submit)
   */
  const handleTimeUp = useCallback(() => {
    if (!submitted) {
      handleSubmit();
    }
  }, [submitted]);

  /**
   * Handle retake
   */
  const handleRetake = () => {
    // Reset test state
    setUserAnswers(new Array(test?.questions.length || 0).fill(undefined));
    setSubmitted(false);
    setCompletedAt(null);
    setIsPaused(false);
  };

  /**
   * Handle back to module
   */
  const handleBackToModule = () => {
    navigate(`/module/${moduleId}`);
  };

  /**
   * Show confirmation dialog
   */
  const handleSubmitClick = () => {
    // Check if all questions are answered
    const unansweredCount = userAnswers.filter((a) => a === undefined).length;
    
    if (unansweredCount > 0) {
      const confirmed = window.confirm(
        `You have ${unansweredCount} unanswered question(s). Are you sure you want to submit?`
      );
      if (!confirmed) return;
    }

    setShowConfirmDialog(true);
  };

  // Loading state
  if (loading) {
    return (
      <main id="main-content" aria-label="Test" aria-live="polite" aria-busy="true" className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center" role="status" aria-label="Loading test">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" aria-hidden="true"></div>
            <p className="text-gray-600">Loading test...</p>
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error || !test) {
    return (
      <main id="main-content" aria-label="Test" className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center" role="alert" aria-live="assertive">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Error Loading Test</h2>
          <p className="text-red-600 mb-4">{error || 'Test not found'}</p>
          <button
            onClick={handleBackToModule}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            Back to Module
          </button>
        </div>
      </main>
    );
  }

  // Show results if submitted
  if (submitted && completedAt) {
    const score = calculateScore();
    return (
      <main id="main-content" aria-label="Test Results" aria-live="polite" className="container mx-auto px-4 py-8">
        <TestResults
          score={score}
          totalQuestions={test.questions.length}
          questions={test.questions}
          userAnswers={userAnswers}
          onRetake={handleRetake}
          completedAt={completedAt}
        />
        
        <div className="text-center mt-8">
          <button
            onClick={handleBackToModule}
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 min-h-[44px]"
          >
            Back to Module
          </button>
        </div>
      </main>
    );
  }

  // Show test interface
  return (
    <ComponentErrorBoundary>
    <main id="main-content" aria-label={`Test: ${test.title}`} className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{test.title}</h1>
        <p className="text-gray-600">{test.description}</p>
      </header>

      {/* Timer */}
      <div className="mb-6" aria-live="polite">
        <TestTimer
          duration={test.duration}
          onTimeUp={handleTimeUp}
          isPaused={isPaused}
        />
      </div>

      {/* Progress Indicator */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg" aria-live="polite" aria-atomic="true">
        <div className="flex items-center justify-between text-sm text-gray-600 flex-wrap gap-2">
          <span>
            Questions answered: {userAnswers.filter((a) => a !== undefined).length} / {test.questions.length}
          </span>
          <span>
            Passing score: {test.passingScore}%
          </span>
        </div>
      </div>

      {/* Questions */}
      <section aria-label="Test questions" className="mb-8">
        {test.questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            questionNumber={index + 1}
            selectedAnswer={userAnswers[index]}
            showFeedback={false}
            onAnswer={(answerIndex) => handleAnswer(index, answerIndex)}
          />
        ))}
      </section>

      {/* Submit Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleSubmitClick}
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 min-h-[44px]"
        >
          Submit Test
        </button>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-dialog-title"
          aria-describedby="confirm-dialog-desc"
        >
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full shadow-xl">
            <h3 id="confirm-dialog-title" className="text-xl font-bold text-gray-900 mb-4">Confirm Submission</h3>
            <p id="confirm-dialog-desc" className="text-gray-600 mb-6">
              Are you sure you want to submit your test? You won't be able to change your answers after submission.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 min-h-[44px]"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 min-h-[44px]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
    </ComponentErrorBoundary>
  );
}
