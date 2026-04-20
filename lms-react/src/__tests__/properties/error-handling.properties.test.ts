/**
 * Property-Based Tests for Error Handling Utilities
 *
 * Tests Properties 62–66
 * Validates: Requirements 17.1, 17.2, 17.3, 17.4, 17.5
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import fc from 'fast-check';
import {
  classifyError,
  getUserFriendlyMessage,
  containsSensitiveInfo,
  sanitiseMessage,
  logError,
  withRetry,
  withNetworkRetry,
  type ErrorCategory,
} from '../../utils/errorHandlers';

// ---------------------------------------------------------------------------
// Arbitraries
// ---------------------------------------------------------------------------

/** Non-empty printable string, trimmed */
const visibleString = fc
  .string({ minLength: 2, maxLength: 80 })
  .map((s) => s.trim())
  .filter((s) => s.length > 0);

/** Auth-related error messages */
const authErrorMessages = fc.constantFrom(
  'Invalid login credentials',
  'User already registered',
  'Email not confirmed',
  'Not authenticated',
  'Session expired',
  'JWT expired',
  'Unauthorized access',
  '401 Unauthorized',
  '403 Forbidden'
);

/** Network-related error messages */
const networkErrorMessages = fc.constantFrom(
  'Network request failed',
  'Failed to fetch',
  'NetworkError when attempting to fetch resource',
  'Request timeout',
  'Connection aborted',
  'Device is offline',
  'ECONNREFUSED',
  'ENOTFOUND'
);

/** Content-related error messages */
const contentErrorMessages = fc.constantFrom(
  'Module not found',
  'Lesson not found',
  'Failed to load content',
  'Invalid module ID',
  'Parse error in lesson file'
);

/** Strings that contain sensitive keywords */
const sensitiveStrings = fc.constantFrom(
  'Invalid password provided',
  'Bearer token expired',
  'API key is invalid',
  'Supabase connection error',
  'PostgreSQL error: relation not found',
  'JWT secret mismatch',
  'Authorization header missing',
  'SQL syntax error near SELECT',
  'at Object.login (auth.service.ts:42)',
  'credential validation failed'
);

/** Strings that do NOT contain sensitive keywords */
const safePhrases = fc.constantFrom(
  'Content not found',
  'Please try again',
  'An error occurred',
  'Module unavailable',
  'Lesson could not be loaded',
  'Network connection lost',
  'Invalid email format',
  'Session has ended'
);

// ---------------------------------------------------------------------------
// Property 62: Authentication errors show user-friendly messages
// Validates: Requirements 17.1
// ---------------------------------------------------------------------------

describe('Property 62: Authentication errors show user-friendly messages', () => {
  it('maps auth error messages to non-empty user-friendly strings', () => {
    fc.assert(
      fc.property(authErrorMessages, (message) => {
        const error = new Error(message);
        const friendly = getUserFriendlyMessage(error);

        expect(typeof friendly).toBe('string');
        expect(friendly.length).toBeGreaterThan(0);
      }),
      { numRuns: 5 }
    );
  });

  it('classifies auth error messages as "auth" category', () => {
    fc.assert(
      fc.property(authErrorMessages, (message) => {
        const error = new Error(message);
        const category = classifyError(error);

        expect(category).toBe('auth');
      }),
      { numRuns: 5 }
    );
  });

  it('returns a different message than the raw error for sensitive auth errors', () => {
    // Sensitive auth errors (e.g. containing "password") must be sanitised
    const sensitiveAuthMessages = [
      'Invalid password provided',
      'JWT secret mismatch',
      'Bearer token expired',
    ];

    for (const message of sensitiveAuthMessages) {
      const error = new Error(message);
      const friendly = getUserFriendlyMessage(error);

      // The raw sensitive message must not appear verbatim in the output
      expect(friendly).not.toContain('password');
      expect(friendly).not.toContain('JWT');
      expect(friendly).not.toContain('Bearer');
    }
  });

  it('user-friendly auth messages do not expose raw Supabase internals', () => {
    fc.assert(
      fc.property(authErrorMessages, (message) => {
        const error = new Error(message);
        const friendly = getUserFriendlyMessage(error);

        expect(friendly.toLowerCase()).not.toContain('supabase');
        expect(friendly.toLowerCase()).not.toContain('postgres');
        expect(friendly.toLowerCase()).not.toContain('sql');
      }),
      { numRuns: 5 }
    );
  });
});

// ---------------------------------------------------------------------------
// Property 63: Network errors show retry option (message indicates retry)
// Validates: Requirements 17.2
// ---------------------------------------------------------------------------

describe('Property 63: Network errors show retry option', () => {
  it('classifies network error messages as "network" category', () => {
    fc.assert(
      fc.property(networkErrorMessages, (message) => {
        const error = new Error(message);
        const category = classifyError(error);

        expect(category).toBe('network');
      }),
      { numRuns: 5 }
    );
  });

  it('network error user-friendly messages suggest retrying', () => {
    fc.assert(
      fc.property(networkErrorMessages, (message) => {
        const error = new Error(message);
        const friendly = getUserFriendlyMessage(error);

        // The message should mention retrying or checking connection
        const suggestsRetry =
          /retry|try again|check your connection|connection/i.test(friendly);
        expect(suggestsRetry).toBe(true);
      }),
      { numRuns: 5 }
    );
  });

  it('withRetry retries the operation the expected number of times on failure', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.integer({ min: 1, max: 3 }),
        async (failCount) => {
          let attempts = 0;

          const operation = async () => {
            attempts++;
            if (attempts <= failCount) {
              throw new Error('Network request failed');
            }
            return 'success';
          };

          const result = await withRetry(operation, {
            maxAttempts: failCount + 1,
            baseDelayMs: 0, // no delay in tests
          });

          expect(result).toBe('success');
          expect(attempts).toBe(failCount + 1);
        }
      ),
      { numRuns: 5 }
    );
  });

  it('withRetry throws after exhausting all attempts', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.integer({ min: 1, max: 3 }),
        async (maxAttempts) => {
          let attempts = 0;

          const operation = async () => {
            attempts++;
            throw new Error('Network request failed');
          };

          await expect(
            withRetry(operation, { maxAttempts, baseDelayMs: 0 })
          ).rejects.toThrow();

          expect(attempts).toBe(maxAttempts);
        }
      ),
      { numRuns: 5 }
    );
  });

  it('withNetworkRetry does not retry non-network errors', async () => {
    let attempts = 0;

    const operation = async () => {
      attempts++;
      throw new Error('Module not found'); // content error, not network
    };

    await expect(
      withNetworkRetry(operation, { maxAttempts: 3, baseDelayMs: 0 })
    ).rejects.toThrow('Module not found');

    // Should only have tried once since it's not a network error
    expect(attempts).toBe(1);
  });

  it('withNetworkRetry retries network errors', async () => {
    let attempts = 0;

    const operation = async () => {
      attempts++;
      if (attempts < 3) throw new Error('Failed to fetch');
      return 'ok';
    };

    const result = await withNetworkRetry(operation, {
      maxAttempts: 3,
      baseDelayMs: 0,
    });

    expect(result).toBe('ok');
    expect(attempts).toBe(3);
  });
});

// ---------------------------------------------------------------------------
// Property 64: Content loading failures show error state
// Validates: Requirements 17.3
// ---------------------------------------------------------------------------

describe('Property 64: Content loading failures show error state', () => {
  it('classifies content error messages as "content" category', () => {
    fc.assert(
      fc.property(contentErrorMessages, (message) => {
        const error = new Error(message);
        const category = classifyError(error);

        expect(category).toBe('content');
      }),
      { numRuns: 5 }
    );
  });

  it('content error user-friendly messages are non-empty and safe', () => {
    fc.assert(
      fc.property(contentErrorMessages, (message) => {
        const error = new Error(message);
        const friendly = getUserFriendlyMessage(error);

        expect(typeof friendly).toBe('string');
        expect(friendly.length).toBeGreaterThan(0);
        expect(friendly.toLowerCase()).not.toContain('supabase');
        expect(friendly.toLowerCase()).not.toContain('postgres');
      }),
      { numRuns: 5 }
    );
  });

  it('getUserFriendlyMessage handles non-Error values gracefully', () => {
    const nonErrors: unknown[] = [null, undefined, 42, {}, [], 'plain string'];

    for (const value of nonErrors) {
      const friendly = getUserFriendlyMessage(value);
      expect(typeof friendly).toBe('string');
      expect(friendly.length).toBeGreaterThan(0);
    }
  });

  it('classifyError handles non-Error values without throwing', () => {
    const nonErrors: unknown[] = [null, undefined, 42, {}, []];

    for (const value of nonErrors) {
      expect(() => classifyError(value)).not.toThrow();
      const category: ErrorCategory = classifyError(value);
      expect(['auth', 'network', 'content', 'validation', 'unknown']).toContain(
        category
      );
    }
  });
});

// ---------------------------------------------------------------------------
// Property 65: Errors are logged to console
// Validates: Requirements 17.4
// ---------------------------------------------------------------------------

describe('Property 65: Errors are logged to console', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logError calls console.error at least once', () => {
    fc.assert(
      fc.property(visibleString, visibleString, (context, message) => {
        consoleSpy.mockClear();
        const error = new Error(message);

        logError(context, error);

        expect(consoleSpy).toHaveBeenCalled();
      }),
      { numRuns: 5 }
    );
  });

  it('logError includes the context string in the log output', () => {
    fc.assert(
      fc.property(visibleString, (context) => {
        consoleSpy.mockClear();
        const error = new Error('Some error');

        logError(context, error);

        const calls = consoleSpy.mock.calls.flat().join(' ');
        expect(calls).toContain(context);
      }),
      { numRuns: 5 }
    );
  });

  it('logError logs the original Error object for developer debugging', () => {
    fc.assert(
      fc.property(visibleString, (context) => {
        consoleSpy.mockClear();
        const error = new Error('debug error');

        logError(context, error);

        // At least one call should include the Error instance
        const hasErrorObject = consoleSpy.mock.calls.some((args: unknown[]) =>
          args.some((arg: unknown) => arg instanceof Error)
        );
        expect(hasErrorObject).toBe(true);
      }),
      { numRuns: 5 }
    );
  });

  it('logError accepts extra context metadata', () => {
    consoleSpy.mockClear();
    const error = new Error('test error');

    logError('TestContext', error, { moduleId: 'clearance-one', attempt: 2 });

    expect(consoleSpy).toHaveBeenCalled();
  });
});

// ---------------------------------------------------------------------------
// Property 66: Error messages don't expose sensitive information
// Validates: Requirements 17.5
// ---------------------------------------------------------------------------

describe('Property 66: Error messages do not expose sensitive information', () => {
  it('containsSensitiveInfo detects sensitive keywords', () => {
    fc.assert(
      fc.property(sensitiveStrings, (message) => {
        expect(containsSensitiveInfo(message)).toBe(true);
      }),
      { numRuns: 5 }
    );
  });

  it('containsSensitiveInfo does not flag safe phrases', () => {
    fc.assert(
      fc.property(safePhrases, (message) => {
        expect(containsSensitiveInfo(message)).toBe(false);
      }),
      { numRuns: 5 }
    );
  });

  it('sanitiseMessage replaces sensitive messages with a generic fallback', () => {
    fc.assert(
      fc.property(sensitiveStrings, (message) => {
        const sanitised = sanitiseMessage(message);

        // Must not contain the original sensitive content
        expect(sanitised.toLowerCase()).not.toContain('password');
        expect(sanitised.toLowerCase()).not.toContain('token');
        expect(sanitised.toLowerCase()).not.toContain('secret');
        expect(sanitised.toLowerCase()).not.toContain('supabase');
        expect(sanitised.toLowerCase()).not.toContain('postgres');
        expect(sanitised.toLowerCase()).not.toContain('sql');

        // Must still be a non-empty string
        expect(sanitised.length).toBeGreaterThan(0);
      }),
      { numRuns: 5 }
    );
  });

  it('sanitiseMessage passes through safe messages unchanged', () => {
    fc.assert(
      fc.property(safePhrases, (message) => {
        const sanitised = sanitiseMessage(message);
        expect(sanitised).toBe(message);
      }),
      { numRuns: 5 }
    );
  });

  it('getUserFriendlyMessage never exposes sensitive keywords for any error', () => {
    fc.assert(
      fc.property(sensitiveStrings, (message) => {
        const error = new Error(message);
        const friendly = getUserFriendlyMessage(error);

        expect(friendly.toLowerCase()).not.toContain('password');
        expect(friendly.toLowerCase()).not.toContain('token');
        expect(friendly.toLowerCase()).not.toContain('secret');
        expect(friendly.toLowerCase()).not.toContain('supabase');
        expect(friendly.toLowerCase()).not.toContain('postgres');
        expect(friendly.toLowerCase()).not.toContain('sql');
        expect(friendly.toLowerCase()).not.toContain('jwt');
        expect(friendly.toLowerCase()).not.toContain('bearer');
        expect(friendly.toLowerCase()).not.toContain('api key');
      }),
      { numRuns: 5 }
    );
  });

  it('logError does not log sensitive keys from extra context', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    logError('TestCtx', new Error('test'), {
      password: 'super-secret',
      token: 'abc123',
      moduleId: 'clearance-one',
    });

    const allOutput = consoleSpy.mock.calls.flat().join(' ');

    // Sensitive keys must not appear in the log output
    expect(allOutput).not.toContain('super-secret');
    expect(allOutput).not.toContain('abc123');

    consoleSpy.mockRestore();
  });
});
