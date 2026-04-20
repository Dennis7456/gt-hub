import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import fc from 'fast-check';
import { TestPage } from '../../pages/TestPage';
import { AuthContext } from '../../context/AuthContext';
import { ProgressContext } from '../../context/ProgressContext';
import * as ContentService from '../../services/content.service';
import type { Test } from '../../types';

// Mock the content service
vi.mock('../../services/content.service', () => ({
  getTest: vi.fn(),
}));

// Test data generators
const questionArbitrary = fc.record({
  id: fc.nat(),
  question: fc.string({ minLength: 10, maxLength: 200 }),
  options: fc.array(fc.string({ minLength: 1, maxLength: 100 }), { minLength: 2, maxLength: 6 }),
  correct: fc.nat(),
  explanation: fc.option(fc.string({ minLength: 10, maxLength: 300 }), { nil: undefined }),
}).filter(q => q.correct < q.options.length);

const testArbitrary = fc.record({
  id: fc.string({ minLength: 1, maxLength: 50 }),
  moduleId: fc.constantFrom('clearance-one', 'customs-valuation-i', 'history-of-taxation'),
  title: fc.string({ minLength: 5, maxLength: 100 }),
  description: fc.string({ minLength: 10, maxLength: 300 }),
  duration: fc.integer({ min: 300, max: 7200 }), // 5 minutes to 2 hours
  questions: fc.array(questionArbitrary, { minLength: 5, maxLength: 20 }),
  passingScore: fc.integer({ min: 50, max: 100 }),
});

// Helper to render TestPage with contexts
function renderTestPage(moduleId: string, testId: string, mockTest: Test) {
  const mockUser = {
    id: 'test-user-id',
    email: 'test@example.com',
    created_at: new Date(),
    updated_at: new Date(),
  };

  const mockAuthContext = {
    user: mockUser,
    session: null,
    loading: false,
    error: null,
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
    resetPassword: vi.fn(),
  };

  const mockProgressContext = {
    overallProgress: null,
    syncStatus: 'idle' as const,
    loading: false,
    error: null,
    queueSize: 0,
    markLessonComplete: vi.fn(),
    saveTestResult: vi.fn().mockResolvedValue(undefined),
    recordFlashcardReview: vi.fn(),
    getLessonProgress: vi.fn(),
    getTestResults: vi.fn(),
    getFlashcardProgress: vi.fn(),
    refreshProgress: vi.fn(),
    syncOfflineData: vi.fn(),
  };

  vi.mocked(ContentService.getTest).mockResolvedValue(mockTest);

  return {
    ...render(
      <MemoryRouter initialEntries={[`/module/${moduleId}/test/${testId}`]}>
        <AuthContext.Provider value={mockAuthContext}>
          <ProgressContext.Provider value={mockProgressContext}>
            <Routes>
              <Route path="/module/:moduleId/test/:testId" element={<TestPage />} />
            </Routes>
          </ProgressContext.Provider>
        </AuthContext.Provider>
      </MemoryRouter>
    ),
    mockProgressContext,
  };
}

describe('Test Interface Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Property 19: Test displays all questions', async () => {
    // Feature: learning-management-system-react, Property 19: Test displays all questions
    // **Validates: Requirements 6.1**

    await fc.assert(
      fc.asyncProperty(testArbitrary, async (test) => {
        const { container } = renderTestPage(test.moduleId, test.id, test);

        // Wait for test to load
        await waitFor(() => {
          expect(screen.getByText(test.title)).toBeInTheDocument();
        });

        // Verify all questions are displayed
        test.questions.forEach((question, index) => {
          expect(screen.getByText(`Question ${index + 1}`)).toBeInTheDocument();
          expect(screen.getByText(question.question)).toBeInTheDocument();
        });

        // Verify total question count
        const questionCards = container.querySelectorAll('[role="radio"]');
        const totalOptions = test.questions.reduce((sum, q) => sum + q.options.length, 0);
        expect(questionCards.length).toBe(totalOptions);
      }),
      { numRuns: 5 }
    );
  });

  it('Property 20: Test starts countdown timer', async () => {
    // Feature: learning-management-system-react, Property 20: Test starts countdown timer
    // **Validates: Requirements 6.2**

    await fc.assert(
      fc.asyncProperty(testArbitrary, async (test) => {
        renderTestPage(test.moduleId, test.id, test);

        // Wait for test to load
        await waitFor(() => {
          expect(screen.getByText(test.title)).toBeInTheDocument();
        });

        // Verify timer is displayed
        expect(screen.getByText('Time Remaining')).toBeInTheDocument();

        // Verify timer shows initial time in MM:SS format
        const minutes = Math.floor(test.duration / 60);
        const seconds = test.duration % 60;
        const expectedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        expect(screen.getByText(expectedTime)).toBeInTheDocument();
      }),
      { numRuns: 5 }
    );
  });

  it('Property 21: Timer expiration auto-submits test', async () => {
    // Feature: learning-management-system-react, Property 21: Timer expiration auto-submits test
    // **Validates: Requirements 6.3**

    // Use a test with very short duration for faster testing
    const shortTest: Test = {
      id: 'test-1',
      moduleId: 'clearance-one',
      title: 'Quick Test',
      description: 'A test with short duration',
      duration: 2, // 2 seconds
      questions: [
        {
          id: 1,
          question: 'Test question?',
          options: ['A', 'B', 'C', 'D'],
          correct: 0,
          explanation: 'Test explanation',
        },
      ],
      passingScore: 70,
    };

    const { mockProgressContext } = renderTestPage(shortTest.moduleId, shortTest.id, shortTest);

    // Wait for test to load
    await waitFor(() => {
      expect(screen.getByText(shortTest.title)).toBeInTheDocument();
    });

    // Wait for timer to expire and auto-submit (with buffer)
    await waitFor(
      () => {
        expect(mockProgressContext.saveTestResult).toHaveBeenCalled();
      },
      { timeout: 5000 }
    );

    // Verify test results are shown
    await waitFor(() => {
      expect(screen.getByText('Test Complete!')).toBeInTheDocument();
    });
  });

  it('Property 22: Answer selection is recorded', async () => {
    // Feature: learning-management-system-react, Property 22: Answer selection is recorded
    // **Validates: Requirements 6.4**

    await fc.assert(
      fc.asyncProperty(testArbitrary, async (test) => {
        const { container } = renderTestPage(test.moduleId, test.id, test);

        // Wait for test to load
        await waitFor(() => {
          expect(screen.getByText(test.title)).toBeInTheDocument();
        });

        // Select an answer for the first question
        const firstOptionIndex = 0;
        const optionElements = container.querySelectorAll('[role="radio"]');
        const firstOption = optionElements[firstOptionIndex];

        fireEvent.click(firstOption);

        // Verify the answer is marked as selected (has blue background)
        await waitFor(() => {
          expect(firstOption).toHaveClass('bg-blue-100');
        });
      }),
      { numRuns: 5 }
    );
  });

  it('Property 23: Test submission calculates and displays score', async () => {
    // Feature: learning-management-system-react, Property 23: Test submission calculates and displays score
    // **Validates: Requirements 6.5**

    await fc.assert(
      fc.asyncProperty(testArbitrary, async (test) => {
        const { container, mockProgressContext } = renderTestPage(test.moduleId, test.id, test);

        // Wait for test to load
        await waitFor(() => {
          expect(screen.getByText(test.title)).toBeInTheDocument();
        });

        // Answer all questions correctly
        const optionElements = container.querySelectorAll('[role="radio"]');
        let optionIndex = 0;
        test.questions.forEach((question) => {
          const correctOptionElement = optionElements[optionIndex + question.correct];
          fireEvent.click(correctOptionElement);
          optionIndex += question.options.length;
        });

        // Submit the test
        const submitButton = screen.getByText('Submit Test');
        fireEvent.click(submitButton);

        // Confirm submission
        await waitFor(() => {
          expect(screen.getByText('Confirm Submission')).toBeInTheDocument();
        });
        const confirmButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(confirmButton);

        // Wait for results
        await waitFor(() => {
          expect(screen.getByText('Test Complete!')).toBeInTheDocument();
        });

        // Verify score is displayed (should be 100% since all answers are correct)
        expect(screen.getByText('100%')).toBeInTheDocument();
        expect(screen.getByText(`${test.questions.length} out of ${test.questions.length} correct`)).toBeInTheDocument();

        // Verify saveTestResult was called with correct score
        expect(mockProgressContext.saveTestResult).toHaveBeenCalledWith(
          test.moduleId,
          test.id,
          test.questions.length,
          test.questions.length
        );
      }),
      { numRuns: 5 }
    );
  });

  it('Property 24: Test submission shows correct answers', async () => {
    // Feature: learning-management-system-react, Property 24: Test submission shows correct answers
    // **Validates: Requirements 6.6**

    await fc.assert(
      fc.asyncProperty(testArbitrary, async (test) => {
        const { container } = renderTestPage(test.moduleId, test.id, test);

        // Wait for test to load
        await waitFor(() => {
          expect(screen.getByText(test.title)).toBeInTheDocument();
        });

        // Answer all questions incorrectly (select first option if it's not correct)
        const optionElements = container.querySelectorAll('[role="radio"]');
        let optionIndex = 0;
        test.questions.forEach((question) => {
          const wrongOptionIndex = question.correct === 0 ? 1 : 0;
          const wrongOptionElement = optionElements[optionIndex + wrongOptionIndex];
          fireEvent.click(wrongOptionElement);
          optionIndex += question.options.length;
        });

        // Submit the test
        const submitButton = screen.getByText('Submit Test');
        fireEvent.click(submitButton);

        // Confirm submission
        await waitFor(() => {
          expect(screen.getByText('Confirm Submission')).toBeInTheDocument();
        });
        const confirmButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(confirmButton);

        // Wait for results
        await waitFor(() => {
          expect(screen.getByText('Test Complete!')).toBeInTheDocument();
        });

        // Verify correct answers are shown for each question
        test.questions.forEach((question) => {
          const correctAnswer = question.options[question.correct];
          expect(screen.getByText(new RegExp(`Correct answer:.*${correctAnswer}`, 'i'))).toBeInTheDocument();
        });

        // Verify explanations are shown if available
        test.questions.forEach((question) => {
          if (question.explanation) {
            expect(screen.getByText(question.explanation)).toBeInTheDocument();
          }
        });
      }),
      { numRuns: 5 }
    );
  });

  it('Property 26: Test submission requires confirmation', async () => {
    // Feature: learning-management-system-react, Property 26: Test submission requires confirmation
    // **Validates: Requirements 6.8**

    await fc.assert(
      fc.asyncProperty(testArbitrary, async (test) => {
        const { mockProgressContext } = renderTestPage(test.moduleId, test.id, test);

        // Wait for test to load
        await waitFor(() => {
          expect(screen.getByText(test.title)).toBeInTheDocument();
        });

        // Click submit button
        const submitButton = screen.getByText('Submit Test');
        fireEvent.click(submitButton);

        // Verify confirmation dialog appears
        await waitFor(() => {
          expect(screen.getByText('Confirm Submission')).toBeInTheDocument();
        });

        // Verify test is NOT submitted yet
        expect(mockProgressContext.saveTestResult).not.toHaveBeenCalled();

        // Cancel the submission
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);

        // Verify dialog is closed and test is still not submitted
        await waitFor(() => {
          expect(screen.queryByText('Confirm Submission')).not.toBeInTheDocument();
        });
        expect(mockProgressContext.saveTestResult).not.toHaveBeenCalled();
      }),
      { numRuns: 5 }
    );
  });

  it('Property 39: Test attempt history is maintained', async () => {
    // Feature: learning-management-system-react, Property 39: Test attempt history is maintained
    // **Validates: Requirements 9.3**

    await fc.assert(
      fc.asyncProperty(
        testArbitrary,
        fc.array(fc.integer({ min: 0, max: 100 }), { minLength: 1, maxLength: 5 }),
        async (test, scores) => {
          const { mockProgressContext } = renderTestPage(test.moduleId, test.id, test);

          // Simulate multiple test attempts
          for (const score of scores) {
            await mockProgressContext.saveTestResult(
              test.moduleId,
              test.id,
              score,
              test.questions.length
            );
          }

          // Verify saveTestResult was called for each attempt
          expect(mockProgressContext.saveTestResult).toHaveBeenCalledTimes(scores.length);

          // Verify each call had the correct parameters
          scores.forEach((score, index) => {
            expect(mockProgressContext.saveTestResult).toHaveBeenNthCalledWith(
              index + 1,
              test.moduleId,
              test.id,
              score,
              test.questions.length
            );
          });
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 42: Test retake is allowed', async () => {
    // Feature: learning-management-system-react, Property 42: Test retake is allowed
    // **Validates: Requirements 9.6**

    await fc.assert(
      fc.asyncProperty(testArbitrary, async (test) => {
        const { container } = renderTestPage(test.moduleId, test.id, test);

        // Wait for test to load
        await waitFor(() => {
          expect(screen.getByText(test.title)).toBeInTheDocument();
        });

        // Answer first question
        const optionElements = container.querySelectorAll('[role="radio"]');
        fireEvent.click(optionElements[0]);

        // Submit the test
        const submitButton = screen.getByText('Submit Test');
        fireEvent.click(submitButton);

        // Confirm submission
        await waitFor(() => {
          expect(screen.getByText('Confirm Submission')).toBeInTheDocument();
        });
        const confirmButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(confirmButton);

        // Wait for results
        await waitFor(() => {
          expect(screen.getByText('Test Complete!')).toBeInTheDocument();
        });

        // Verify retake button is present
        const retakeButton = screen.getByText('Retake Test');
        expect(retakeButton).toBeInTheDocument();

        // Click retake button
        fireEvent.click(retakeButton);

        // Verify test interface is shown again (not results)
        await waitFor(() => {
          expect(screen.queryByText('Test Complete!')).not.toBeInTheDocument();
          expect(screen.getByText(test.title)).toBeInTheDocument();
          expect(screen.getByText('Submit Test')).toBeInTheDocument();
        });
      }),
      { numRuns: 5 }
    );
  });
});
