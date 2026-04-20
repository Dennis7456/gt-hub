/**
 * Property-Based Tests for Common UI Components
 * Tests Properties 55 and 56
 * Validates: Requirements 14.3, 14.4
 */

import { describe, it, expect, vi } from 'vitest';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fc from 'fast-check';
import { Loading } from '../../components/common/Loading';
import { ErrorBoundary } from '../../components/common/ErrorBoundary';
import { Button } from '../../components/common/Button';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/common/Card';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** A component that throws during render to trigger the ErrorBoundary */
function ThrowingComponent({ message }: { message: string }): never {
  throw new Error(message);
}

/**
 * Arbitrary that generates non-empty, non-whitespace-only strings.
 * Trailing/leading whitespace is stripped to avoid accessible-name mismatches.
 */
const visibleString = fc
  .string({ minLength: 2, maxLength: 60 })
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

const visibleString30 = fc
  .string({ minLength: 2, maxLength: 30 })
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

const visibleString80 = fc
  .string({ minLength: 2, maxLength: 80 })
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

// ---------------------------------------------------------------------------
// Property 55: Loading states display during data fetching
// Validates: Requirements 14.3
// ---------------------------------------------------------------------------

describe('Property 55: Loading states display during data fetching', () => {
  it('renders a status role element with the provided label', () => {
    fc.assert(
      fc.property(visibleString, (label) => {
        const { container, unmount } = render(<Loading label={label} />);
        const scope = within(container);

        const status = scope.getByRole('status');
        expect(status).toBeInTheDocument();
        expect(status).toHaveAttribute('aria-label', label);

        unmount();
      }),
      { numRuns: 5 }
    );
  });

  it('renders a spinner animation element for every size', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('sm', 'md', 'lg') as fc.Arbitrary<'sm' | 'md' | 'lg'>,
        (size) => {
          const { container, unmount } = render(<Loading size={size} />);

          const spinner = container.querySelector('.animate-spin');
          expect(spinner).not.toBeNull();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('renders in full-page mode when fullPage=true', () => {
    const { container, unmount } = render(<Loading fullPage label="Loading page…" />);

    const wrapper = container.querySelector('.min-h-screen');
    expect(wrapper).not.toBeNull();

    unmount();
  });

  it('displays the label text visibly', () => {
    fc.assert(
      fc.property(visibleString, (label) => {
        const { container, unmount } = render(<Loading label={label} />);
        const scope = within(container);

        // The label is rendered in a <span> inside the status element
        expect(scope.getByText(label)).toBeInTheDocument();

        unmount();
      }),
      { numRuns: 5 }
    );
  });
});

// ---------------------------------------------------------------------------
// Property 56: Error messages display on operation failure
// Validates: Requirements 14.4
// ---------------------------------------------------------------------------

describe('Property 56: Error messages display on operation failure', () => {
  it('catches render errors and displays a fallback alert', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    fc.assert(
      fc.property(visibleString80, (errorMessage) => {
        const { container, unmount } = render(
          <ErrorBoundary>
            <ThrowingComponent message={errorMessage} />
          </ErrorBoundary>
        );
        const scope = within(container);

        const alert = scope.getByRole('alert');
        expect(alert).toBeInTheDocument();
        expect(scope.getByText(errorMessage)).toBeInTheDocument();

        unmount();
      }),
      { numRuns: 5 }
    );

    consoleSpy.mockRestore();
  });

  it('renders children normally when no error occurs', () => {
    fc.assert(
      fc.property(visibleString, (content) => {
        const { container, unmount } = render(
          <ErrorBoundary>
            <p>{content}</p>
          </ErrorBoundary>
        );
        const scope = within(container);

        expect(scope.getByText(content)).toBeInTheDocument();
        expect(scope.queryByRole('alert')).not.toBeInTheDocument();

        unmount();
      }),
      { numRuns: 5 }
    );
  });

  it('calls a custom fallback renderer with the error', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    fc.assert(
      fc.property(visibleString80, (errorMessage) => {
        const customFallback = (error: Error) => (
          <div role="alert" data-testid="custom-fallback">
            Custom: {error.message}
          </div>
        );

        const { container, unmount } = render(
          <ErrorBoundary fallback={customFallback}>
            <ThrowingComponent message={errorMessage} />
          </ErrorBoundary>
        );
        const scope = within(container);

        const fallback = scope.getByTestId('custom-fallback');
        expect(fallback).toBeInTheDocument();
        expect(fallback).toHaveTextContent(`Custom: ${errorMessage}`);

        unmount();
      }),
      { numRuns: 5 }
    );

    consoleSpy.mockRestore();
  });

  it('exposes a reset button in the default fallback UI', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const { container, unmount } = render(
      <ErrorBoundary>
        <ThrowingComponent message="boom" />
      </ErrorBoundary>
    );
    const scope = within(container);

    // Fallback is shown
    expect(scope.getByRole('alert')).toBeInTheDocument();

    // A "Try again" reset button must be present
    const resetButton = scope.getByRole('button', { name: /try again/i });
    expect(resetButton).toBeInTheDocument();

    unmount();
    consoleSpy.mockRestore();
  });

  it('resets the boundary state when the reset button is clicked', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const user = userEvent.setup();

    // Use a controlled flag so we can stop throwing after reset
    let shouldThrow = true;

    function MaybeThrow() {
      if (shouldThrow) throw new Error('controlled error');
      return <p data-testid="recovered">Recovered</p>;
    }

    const { container, unmount } = render(
      <ErrorBoundary>
        <MaybeThrow />
      </ErrorBoundary>
    );
    const scope = within(container);

    // Boundary caught the error
    expect(scope.getByRole('alert')).toBeInTheDocument();

    // Stop throwing before reset so children render successfully
    shouldThrow = false;
    const resetButton = scope.getByRole('button', { name: /try again/i });
    await user.click(resetButton);

    // After reset the children render without error
    expect(scope.getByTestId('recovered')).toBeInTheDocument();
    expect(scope.queryByRole('alert')).not.toBeInTheDocument();

    unmount();
    consoleSpy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// Button component — keyboard navigation and variant rendering
// ---------------------------------------------------------------------------

describe('Button component — keyboard navigation and variants', () => {
  it('is focusable for every variant', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('primary', 'secondary', 'danger') as fc.Arbitrary<'primary' | 'secondary' | 'danger'>,
        visibleString30,
        (variant, label) => {
          const { container, unmount } = render(
            <Button variant={variant}>{label}</Button>
          );
          const scope = within(container);

          const btn = scope.getByRole('button', { name: label });
          expect(btn).toBeInTheDocument();
          btn.focus();
          expect(document.activeElement).toBe(btn);

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('is disabled and aria-disabled when loading=true', () => {
    fc.assert(
      fc.property(visibleString30, (label) => {
        const { container, unmount } = render(
          <Button loading>{label}</Button>
        );
        const scope = within(container);

        const btn = scope.getByRole('button');
        expect(btn).toBeDisabled();
        expect(btn).toHaveAttribute('aria-disabled', 'true');
        expect(btn).toHaveAttribute('aria-busy', 'true');

        unmount();
      }),
      { numRuns: 5 }
    );
  });

  it('is not disabled when loading=false', () => {
    fc.assert(
      fc.property(visibleString30, (label) => {
        const { container, unmount } = render(
          <Button loading={false}>{label}</Button>
        );
        const scope = within(container);

        const btn = scope.getByRole('button', { name: label });
        expect(btn).not.toBeDisabled();

        unmount();
      }),
      { numRuns: 5 }
    );
  });
});

// ---------------------------------------------------------------------------
// Card component — structure and accessibility
// ---------------------------------------------------------------------------

describe('Card component — structure and accessibility', () => {
  it('renders children inside the card', () => {
    fc.assert(
      fc.property(visibleString, (content) => {
        const { container, unmount } = render(<Card>{content}</Card>);
        const scope = within(container);

        expect(scope.getByText(content)).toBeInTheDocument();

        unmount();
      }),
      { numRuns: 5 }
    );
  });

  it('renders CardHeader, CardBody, and CardFooter children', () => {
    fc.assert(
      fc.property(
        visibleString30,
        visibleString30,
        visibleString30,
        (header, body, footer) => {
          // Ensure the three values are distinct to avoid getByText ambiguity
          fc.pre(header !== body && body !== footer && header !== footer);

          const { container, unmount } = render(
            <Card padded={false}>
              <CardHeader>{header}</CardHeader>
              <CardBody>{body}</CardBody>
              <CardFooter>{footer}</CardFooter>
            </Card>
          );
          const scope = within(container);

          expect(scope.getByText(header)).toBeInTheDocument();
          expect(scope.getByText(body)).toBeInTheDocument();
          expect(scope.getByText(footer)).toBeInTheDocument();

          unmount();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('interactive card has role=button and is keyboard-focusable', () => {
    fc.assert(
      fc.property(visibleString30, (label) => {
        const { container, unmount } = render(
          <Card interactive aria-label={label}>
            Content
          </Card>
        );
        const scope = within(container);

        const card = scope.getByRole('button', { name: label });
        expect(card).toBeInTheDocument();
        expect(card).toHaveAttribute('tabindex', '0');

        unmount();
      }),
      { numRuns: 5 }
    );
  });
});
