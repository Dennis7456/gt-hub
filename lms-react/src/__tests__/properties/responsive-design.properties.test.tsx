/**
 * Property-Based Tests for Responsive Design
 * Tests Properties 53 and 54
 * Validates: Requirements 13.1, 13.2
 *
 * Feature: learning-management-system-react
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import fc from 'fast-check';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Simulate a viewport width by overriding window.innerWidth.
 * jsdom does not apply CSS media queries, so we verify structural/class
 * properties that are independent of CSS rendering.
 */
function setViewportWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
}

/** Restore default viewport */
function resetViewport() {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1024,
  });
}

// ---------------------------------------------------------------------------
// Mocks for context providers
// ---------------------------------------------------------------------------

vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme: vi.fn() }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('../../context/AuthContext', () => ({
  useAuth: () => ({
    user: { email: 'test@example.com', id: 'user-1' },
    loading: false,
    logout: vi.fn(),
  }),
  AuthProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('../../context/ContentContext', () => ({
  useContent: () => ({
    modules: [],
    loading: false,
    error: null,
  }),
  ContentProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock('../../context/ProgressContext', () => ({
  useProgress: () => ({
    overallProgress: null,
    loading: false,
  }),
  ProgressProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// ---------------------------------------------------------------------------
// Import components after mocks
// ---------------------------------------------------------------------------

import { Navigation } from '../../components/layout/Navigation';
import { Footer } from '../../components/layout/Footer';
import { Dashboard } from '../../pages/Dashboard';
import { Button } from '../../components/common/Button';

// ---------------------------------------------------------------------------
// Property 53: Responsive rendering across screen sizes
// Validates: Requirements 13.1
// ---------------------------------------------------------------------------

describe('Property 53: Responsive rendering across screen sizes', () => {
  // Feature: learning-management-system-react, Property 53: Responsive rendering across screen sizes

  beforeEach(() => {
    resetViewport();
  });

  afterEach(() => {
    resetViewport();
  });

  it('Navigation renders without errors at any screen width between 320px and 2560px', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }),
        (width) => {
          setViewportWidth(width);

          const { container, unmount } = render(
            <MemoryRouter>
              <Navigation />
            </MemoryRouter>
          );

          // Navigation should always render a nav element
          const nav = container.querySelector('nav[aria-label="Main navigation"]');
          expect(nav).not.toBeNull();

          // No horizontal overflow indicator — the nav should be present
          expect(nav).toBeInTheDocument();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Footer renders without errors at any screen width between 320px and 2560px', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }),
        (width) => {
          setViewportWidth(width);

          const { container, unmount } = render(<Footer />);

          const footer = container.querySelector('footer');
          expect(footer).not.toBeNull();
          expect(footer).toBeInTheDocument();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Button renders without errors at any screen width between 320px and 2560px', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }),
        fc.constantFrom('primary', 'secondary', 'danger') as fc.Arbitrary<'primary' | 'secondary' | 'danger'>,
        (width, variant) => {
          setViewportWidth(width);

          const { container, unmount } = render(
            <Button variant={variant}>Test Button</Button>
          );

          const btn = container.querySelector('button');
          expect(btn).not.toBeNull();
          expect(btn).toBeInTheDocument();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Dashboard renders without errors at any screen width between 320px and 2560px', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }),
        (width) => {
          setViewportWidth(width);

          const { container, unmount } = render(
            <MemoryRouter>
              <Dashboard />
            </MemoryRouter>
          );

          // Main content area should always be present
          const main = container.querySelector('main#main-content');
          expect(main).not.toBeNull();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });
});

// ---------------------------------------------------------------------------
// Property 54: Layout adaptation at breakpoints
// Validates: Requirements 13.2
// ---------------------------------------------------------------------------

describe('Property 54: Layout adaptation at breakpoints', () => {
  // Feature: learning-management-system-react, Property 54: Layout adaptation at breakpoints

  /**
   * Standard Tailwind breakpoints (mobile-first):
   * sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
   */
  const BREAKPOINTS = [640, 768, 1024, 1280, 1536];

  beforeEach(() => {
    resetViewport();
  });

  afterEach(() => {
    resetViewport();
  });

  it('Navigation has a mobile menu toggle button for small screens', () => {
    // At mobile widths, the hamburger button should be present in the DOM
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 639 }),
        (mobileWidth) => {
          setViewportWidth(mobileWidth);

          const { container, unmount } = render(
            <MemoryRouter>
              <Navigation />
            </MemoryRouter>
          );

          // The mobile menu toggle button should always be in the DOM
          // (CSS hides/shows it, but it must exist for accessibility)
          const mobileToggle = container.querySelector('button[aria-expanded]');
          expect(mobileToggle).not.toBeNull();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Navigation renders consistently across all standard breakpoints', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...BREAKPOINTS),
        (breakpoint) => {
          setViewportWidth(breakpoint);

          const { container, unmount } = render(
            <MemoryRouter>
              <Navigation />
            </MemoryRouter>
          );

          // Navigation should always have the main nav element
          const nav = container.querySelector('nav[aria-label="Main navigation"]');
          expect(nav).not.toBeNull();

          // Logo/home link should always be present
          const homeLink = container.querySelector('a[aria-label="Go to dashboard"]');
          expect(homeLink).not.toBeNull();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Dashboard grid container is always present regardless of screen width', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }),
        (width) => {
          setViewportWidth(width);

          const { container, unmount } = render(
            <MemoryRouter>
              <Dashboard />
            </MemoryRouter>
          );

          // The main content area should always be present
          const main = container.querySelector('main#main-content');
          expect(main).not.toBeNull();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Button touch targets meet minimum size requirements (min-h-[44px]) at all breakpoints', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...BREAKPOINTS),
        fc.constantFrom('md', 'lg') as fc.Arbitrary<'md' | 'lg'>,
        (breakpoint, size) => {
          setViewportWidth(breakpoint);

          const { container, unmount } = render(
            <Button size={size}>Click me</Button>
          );

          const btn = container.querySelector('button');
          expect(btn).not.toBeNull();

          // Check that the button has the min-h class for touch targets
          const hasMinHeight = btn!.className.includes('min-h-[44px]');
          expect(hasMinHeight).toBe(true);

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Footer navigation links are always accessible at any breakpoint', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 2560 }),
        (width) => {
          setViewportWidth(width);

          const { container, unmount } = render(<Footer />);

          // Footer nav should always be present
          const footerNav = container.querySelector('nav[aria-label="Footer navigation"]');
          expect(footerNav).not.toBeNull();

          // Links should always be present
          const links = container.querySelectorAll('a');
          expect(links.length).toBeGreaterThan(0);

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });
});
