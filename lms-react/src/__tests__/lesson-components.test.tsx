/**
 * Unit tests for Lesson components
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LessonContent } from '../components/lesson/LessonContent';
import { LessonNavigation } from '../components/lesson/LessonNavigation';
import { LessonProgress } from '../components/lesson/LessonProgress';
import { ProgressProvider } from '../context/ProgressContext';
import { AuthProvider } from '../context/AuthContext';
import type { Lesson } from '../types';

// Mock Supabase
vi.mock('../services/supabase.client', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({ 
        data: { session: { user: { id: 'test-user' } } }, 
        error: null 
      }),
      onAuthStateChange: vi.fn().mockReturnValue({ 
        data: { subscription: { unsubscribe: vi.fn() } } 
      }),
    },
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
      upsert: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: null, error: { code: 'PGRST116' } }),
    })),
  },
}));

// Mock auth service
vi.mock('../services/auth.service', () => ({
  authService: {
    getCurrentUser: vi.fn().mockResolvedValue({ 
      id: 'test-user', 
      email: 'test@example.com' 
    }),
    getSession: vi.fn().mockResolvedValue({ 
      user: { id: 'test-user' } 
    }),
  },
}));

// Mock progress service
vi.mock('../services/progress.service', () => ({
  progressService: {
    getLessonProgress: vi.fn().mockResolvedValue([]),
    markLessonComplete: vi.fn().mockResolvedValue(undefined),
    getOfflineQueueSize: vi.fn().mockReturnValue(0),
    getOverallProgress: vi.fn().mockResolvedValue({
      userId: 'test-user',
      modules: {},
    }),
  },
}));

describe('LessonContent', () => {
  const mockLesson: Lesson = {
    id: 'lesson-1',
    moduleId: 'test-module',
    title: 'Test Lesson',
    content: '# Heading\n\nThis is a test lesson with **bold** and *italic* text.',
    order: 1,
    estimatedMinutes: 10,
  };

  it('renders lesson title and content', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProgressProvider>
            <LessonContent lesson={mockLesson} moduleId="test-module" />
          </ProgressProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Test Lesson')).toBeInTheDocument();
    expect(screen.getByText(/Estimated time: 10 minutes/i)).toBeInTheDocument();
  });

  it('formats markdown-style content', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProgressProvider>
            <LessonContent lesson={mockLesson} moduleId="test-module" />
          </ProgressProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    // Check for heading
    const heading = screen.getByText('Heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});

describe('LessonNavigation', () => {
  const mockLessons: Lesson[] = [
    {
      id: 'lesson-1',
      moduleId: 'test-module',
      title: 'Lesson 1',
      content: 'Content 1',
      order: 1,
      estimatedMinutes: 10,
    },
    {
      id: 'lesson-2',
      moduleId: 'test-module',
      title: 'Lesson 2',
      content: 'Content 2',
      order: 2,
      estimatedMinutes: 15,
    },
    {
      id: 'lesson-3',
      moduleId: 'test-module',
      title: 'Lesson 3',
      content: 'Content 3',
      order: 3,
      estimatedMinutes: 20,
    },
  ];

  it('renders navigation buttons', () => {
    render(
      <BrowserRouter>
        <LessonNavigation
          currentLessonId="lesson-2"
          lessons={mockLessons}
          moduleId="test-module"
        />
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Previous lesson')).toBeInTheDocument();
    expect(screen.getByLabelText('Next lesson')).toBeInTheDocument();
    expect(screen.getByLabelText('Back to module overview')).toBeInTheDocument();
  });

  it('disables previous button on first lesson', () => {
    render(
      <BrowserRouter>
        <LessonNavigation
          currentLessonId="lesson-1"
          lessons={mockLessons}
          moduleId="test-module"
        />
      </BrowserRouter>
    );

    const previousButton = screen.getByLabelText('Previous lesson');
    expect(previousButton).toBeDisabled();
  });

  it('disables next button on last lesson', () => {
    render(
      <BrowserRouter>
        <LessonNavigation
          currentLessonId="lesson-3"
          lessons={mockLessons}
          moduleId="test-module"
        />
      </BrowserRouter>
    );

    const nextButton = screen.getByLabelText('Next lesson');
    expect(nextButton).toBeDisabled();
  });

  it('displays lesson position', () => {
    render(
      <BrowserRouter>
        <LessonNavigation
          currentLessonId="lesson-2"
          lessons={mockLessons}
          moduleId="test-module"
        />
      </BrowserRouter>
    );

    expect(screen.getByText('Lesson 2 of 3')).toBeInTheDocument();
  });

  it('displays progress percentage', () => {
    render(
      <BrowserRouter>
        <LessonNavigation
          currentLessonId="lesson-2"
          lessons={mockLessons}
          moduleId="test-module"
        />
      </BrowserRouter>
    );

    // Lesson 2 of 3 = 67%
    expect(screen.getByText('67%')).toBeInTheDocument();
  });
});

describe('LessonProgress', () => {
  const mockLessons: Lesson[] = [
    {
      id: 'lesson-1',
      moduleId: 'test-module',
      title: 'Lesson 1',
      content: 'Content 1',
      order: 1,
      estimatedMinutes: 10,
    },
    {
      id: 'lesson-2',
      moduleId: 'test-module',
      title: 'Lesson 2',
      content: 'Content 2',
      order: 2,
      estimatedMinutes: 15,
    },
  ];

  it('renders progress header', async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ProgressProvider>
            <LessonProgress moduleId="test-module" lessons={mockLessons} />
          </ProgressProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    // Wait for loading to complete
    await screen.findByText('Learning Path Progress');
    expect(screen.getByText('Learning Path Progress')).toBeInTheDocument();
  });
});
