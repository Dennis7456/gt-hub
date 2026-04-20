/**
 * Property-based tests for Theme Support
 * Validates: Requirements 20.1
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import fc from 'fast-check';
import { renderHook, act } from '@testing-library/react';
import { ThemeProvider, useTheme, type Theme } from '../../context/ThemeContext';
import type { ReactNode } from 'react';

function wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

describe('Theme Properties', () => {
  beforeEach(() => {
    // Reset <html> class and localStorage before each test
    document.documentElement.classList.remove('dark');
    localStorage.clear();

    // Mock matchMedia (not available in jsdom)
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  it('Property 57: Theme switching works', () => {
    // **Validates: Requirements 20.1**
    //
    // Tests:
    // 1. Setting theme to 'dark' adds the `dark` class to <html>
    // 2. Setting theme to 'light' removes the `dark` class from <html>
    // 3. Theme is persisted to localStorage on every change
    // 4. Toggling light → dark → light cycles correctly
    // 5. ThemeContext initialises from localStorage

    fc.assert(
      fc.property(
        // Arbitrary sequence of theme values to set
        fc.array(fc.constantFrom<Theme>('light', 'dark'), { minLength: 1, maxLength: 10 }),
        (themeSequence) => {
          // --- Sub-property 1 & 2: dark class on <html> matches theme ---
          for (const theme of themeSequence) {
            document.documentElement.classList.remove('dark');
            localStorage.clear();

            const { result, unmount } = renderHook(() => useTheme(), { wrapper });

            act(() => {
              result.current.setTheme(theme);
            });

            if (theme === 'dark') {
              expect(document.documentElement.classList.contains('dark')).toBe(true);
            } else {
              expect(document.documentElement.classList.contains('dark')).toBe(false);
            }

            // --- Sub-property 3: persisted to localStorage ---
            expect(localStorage.getItem('theme')).toBe(theme);

            unmount();
          }
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 57a: Toggle cycles light → dark → light', () => {
    // **Validates: Requirements 20.1**
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 20 }),
        (toggleCount) => {
          document.documentElement.classList.remove('dark');
          localStorage.clear();

          const { result, unmount } = renderHook(() => useTheme(), { wrapper });

          // Record initial theme
          const initialTheme = result.current.theme;
          let expectedTheme = initialTheme;

          for (let i = 0; i < toggleCount; i++) {
            act(() => {
              result.current.toggleTheme();
            });
            expectedTheme = expectedTheme === 'dark' ? 'light' : 'dark';
          }

          // After N toggles, theme should match expected
          expect(result.current.theme).toBe(expectedTheme);

          // DOM and localStorage should be in sync
          if (expectedTheme === 'dark') {
            expect(document.documentElement.classList.contains('dark')).toBe(true);
          } else {
            expect(document.documentElement.classList.contains('dark')).toBe(false);
          }
          expect(localStorage.getItem('theme')).toBe(expectedTheme);

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 57b: ThemeContext initialises from localStorage', () => {
    // **Validates: Requirements 20.1**
    fc.assert(
      fc.property(
        fc.constantFrom<Theme>('light', 'dark'),
        (storedTheme) => {
          document.documentElement.classList.remove('dark');
          localStorage.clear();

          // Pre-seed localStorage before the provider mounts
          localStorage.setItem('theme', storedTheme);

          const { result, unmount } = renderHook(() => useTheme(), { wrapper });

          // The context should have picked up the stored theme
          expect(result.current.theme).toBe(storedTheme);

          // DOM should reflect it too
          if (storedTheme === 'dark') {
            expect(document.documentElement.classList.contains('dark')).toBe(true);
          } else {
            expect(document.documentElement.classList.contains('dark')).toBe(false);
          }

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });
});
