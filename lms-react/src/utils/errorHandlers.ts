/**
 * Error Handling Utilities
 *
 * Centralised helpers for:
 * - Classifying errors into semantic categories
 * - Mapping raw errors to user-friendly messages (no sensitive data exposed)
 * - Retrying async operations with exponential back-off
 * - Logging errors to the console in a consistent format
 *
 * Validates: Requirements 17.1, 17.2, 17.3, 17.4, 17.5
 */

// ---------------------------------------------------------------------------
// Error categories
// ---------------------------------------------------------------------------

export type ErrorCategory =
  | 'auth'        // Authentication / authorisation failures
  | 'network'     // Connectivity / fetch failures
  | 'content'     // Content loading failures
  | 'validation'  // Input validation failures
  | 'unknown';    // Anything else

// ---------------------------------------------------------------------------
// Sensitive-data patterns to scrub from messages before display
// ---------------------------------------------------------------------------

/**
 * Patterns that may indicate sensitive information.
 * Any error message matching one of these patterns is replaced with a generic
 * fallback so that tokens, passwords, or stack traces are never shown to users.
 */
const SENSITIVE_PATTERNS: RegExp[] = [
  /password/i,
  /token/i,
  /secret/i,
  /key/i,
  /credential/i,
  /authorization/i,
  /bearer/i,
  /jwt/i,
  /api[_-]?key/i,
  /supabase/i,
  /postgres/i,
  /sql/i,
  /stack\s*trace/i,
  /at\s+[\w.]+\s+\(/,   // JS stack-trace lines
];

const GENERIC_FALLBACK = 'An unexpected error occurred. Please try again.';

/**
 * Returns true when the message contains potentially sensitive information.
 */
export function containsSensitiveInfo(message: string): boolean {
  return SENSITIVE_PATTERNS.some((pattern) => pattern.test(message));
}

/**
 * Sanitises an error message so that sensitive information is never exposed.
 */
export function sanitiseMessage(message: string): string {
  if (containsSensitiveInfo(message)) {
    return GENERIC_FALLBACK;
  }
  return message;
}

// ---------------------------------------------------------------------------
// Error classification
// ---------------------------------------------------------------------------

/** Known Supabase / network error substrings → category mapping */
const CATEGORY_MAP: Array<{ pattern: RegExp; category: ErrorCategory }> = [
  // Auth errors
  { pattern: /invalid login credentials/i, category: 'auth' },
  { pattern: /user already registered/i, category: 'auth' },
  { pattern: /email not confirmed/i, category: 'auth' },
  { pattern: /invalid email/i, category: 'auth' },
  { pattern: /password/i, category: 'auth' },
  { pattern: /not authenticated/i, category: 'auth' },
  { pattern: /session expired/i, category: 'auth' },
  { pattern: /jwt expired/i, category: 'auth' },
  { pattern: /unauthorized/i, category: 'auth' },
  { pattern: /401/i, category: 'auth' },
  { pattern: /403/i, category: 'auth' },
  // Network errors
  { pattern: /network request failed/i, category: 'network' },
  { pattern: /failed to fetch/i, category: 'network' },
  { pattern: /network\s*error/i, category: 'network' },
  { pattern: /timeout/i, category: 'network' },
  { pattern: /aborted/i, category: 'network' },
  { pattern: /offline/i, category: 'network' },
  { pattern: /econnrefused/i, category: 'network' },
  { pattern: /enotfound/i, category: 'network' },
  // Content errors
  { pattern: /not found/i, category: 'content' },
  { pattern: /failed to load/i, category: 'content' },
  { pattern: /invalid module/i, category: 'content' },
  { pattern: /invalid lesson/i, category: 'content' },
  { pattern: /parse error/i, category: 'content' },
];

/**
 * Classifies an error into a semantic category.
 */
export function classifyError(error: unknown): ErrorCategory {
  const message =
    error instanceof Error ? error.message : String(error ?? '');

  for (const { pattern, category } of CATEGORY_MAP) {
    if (pattern.test(message)) {
      return category;
    }
  }

  return 'unknown';
}

// ---------------------------------------------------------------------------
// User-friendly message mapping
// ---------------------------------------------------------------------------

/** Per-category default messages shown when no specific mapping matches */
const CATEGORY_DEFAULTS: Record<ErrorCategory, string> = {
  auth: 'Authentication failed. Please check your credentials and try again.',
  network: 'A network error occurred. Please check your connection and try again.',
  content: 'Failed to load content. Please try again.',
  validation: 'Please check your input and try again.',
  unknown: GENERIC_FALLBACK,
};

/** Specific Supabase error message → user-friendly message */
const SPECIFIC_MESSAGES: Array<{ pattern: RegExp; message: string }> = [
  {
    pattern: /invalid login credentials/i,
    message: 'Invalid email or password. Please try again.',
  },
  {
    pattern: /user already registered/i,
    message: 'An account with this email already exists.',
  },
  {
    pattern: /email not confirmed/i,
    message: 'Please confirm your email address before logging in.',
  },
  {
    pattern: /network request failed|failed to fetch/i,
    message: 'Network error. Please check your connection and try again.',
  },
  {
    pattern: /timeout/i,
    message: 'The request timed out. Please check your connection and try again.',
  },
  {
    pattern: /aborted|offline|econnrefused|enotfound|network\s*error/i,
    message: 'Network error. Please check your connection and try again.',
  },
  {
    pattern: /not found/i,
    message: 'The requested content could not be found.',
  },
];

/**
 * Maps any error to a user-friendly message.
 * Sensitive information is always scrubbed before returning.
 *
 * @param error - The error to map.
 * @returns A safe, user-friendly string.
 */
export function getUserFriendlyMessage(error: unknown): string {
  const rawMessage =
    error instanceof Error ? error.message : String(error ?? '');

  // Check specific patterns first
  for (const { pattern, message } of SPECIFIC_MESSAGES) {
    if (pattern.test(rawMessage)) {
      return message; // These are already safe
    }
  }

  // Fall back to category default
  const category = classifyError(error);
  const categoryDefault = CATEGORY_DEFAULTS[category];

  // Sanitise the raw message; if it's safe, prefer it over the generic default
  const sanitised = sanitiseMessage(rawMessage);
  if (sanitised !== GENERIC_FALLBACK && sanitised.length > 0) {
    return sanitised;
  }

  return categoryDefault;
}

// ---------------------------------------------------------------------------
// Error logging
// ---------------------------------------------------------------------------

/**
 * Logs an error to the console in a consistent format.
 * The raw error (including stack trace) is logged for debugging, but the
 * user-facing message is sanitised so that sensitive data is never exposed.
 *
 * Validates: Requirements 17.4, 17.5
 */
export function logError(
  context: string,
  error: unknown,
  extra?: Record<string, unknown>
): void {
  const category = classifyError(error);
  const safeMessage = getUserFriendlyMessage(error);

  console.error(`[${context}] ${category.toUpperCase()} error: ${safeMessage}`);

  if (extra && Object.keys(extra).length > 0) {
    // Only log non-sensitive extra fields
    const safeExtra = Object.fromEntries(
      Object.entries(extra).filter(([key]) => !containsSensitiveInfo(key))
    );
    if (Object.keys(safeExtra).length > 0) {
      console.error(`[${context}] Additional context:`, safeExtra);
    }
  }

  // Log the raw error object for developer debugging (stack trace etc.)
  if (error instanceof Error) {
    console.error(`[${context}] Original error:`, error);
  }
}

// ---------------------------------------------------------------------------
// Retry with exponential back-off
// ---------------------------------------------------------------------------

export interface RetryOptions {
  /** Maximum number of attempts (including the first). Default: 3 */
  maxAttempts?: number;
  /** Base delay in milliseconds. Default: 1000 */
  baseDelayMs?: number;
  /** Maximum delay cap in milliseconds. Default: 30 000 */
  maxDelayMs?: number;
  /** Jitter factor 0–1 added to each delay. Default: 0.2 */
  jitter?: number;
  /**
   * Optional predicate; when provided, only errors for which it returns true
   * will be retried. Defaults to retrying all errors.
   */
  shouldRetry?: (error: unknown, attempt: number) => boolean;
  /** Optional callback invoked before each retry attempt. */
  onRetry?: (error: unknown, attempt: number, delayMs: number) => void;
}

/**
 * Executes an async operation and retries it on failure using exponential
 * back-off with optional jitter.
 *
 * @param operation - The async function to execute.
 * @param options   - Retry configuration.
 * @returns The resolved value of the operation.
 * @throws The last error if all attempts are exhausted.
 *
 * Validates: Requirements 17.2
 */
export async function withRetry<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    maxAttempts = 3,
    baseDelayMs = 1000,
    maxDelayMs = 30_000,
    jitter = 0.2,
    shouldRetry = () => true,
    onRetry,
  } = options;

  let lastError: unknown;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      const isLastAttempt = attempt === maxAttempts;
      if (isLastAttempt || !shouldRetry(error, attempt)) {
        break;
      }

      // Exponential back-off: baseDelay * 2^(attempt-1)
      const exponential = baseDelayMs * Math.pow(2, attempt - 1);
      const jitterAmount = exponential * jitter * Math.random();
      const delayMs = Math.min(exponential + jitterAmount, maxDelayMs);

      logError('withRetry', error, { attempt, delayMs: Math.round(delayMs) });

      if (onRetry) {
        onRetry(error, attempt, delayMs);
      }

      await sleep(delayMs);
    }
  }

  throw lastError;
}

/**
 * Returns a promise that resolves after the given number of milliseconds.
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// Network-aware retry helper
// ---------------------------------------------------------------------------

/**
 * Retries only network-category errors; other errors are thrown immediately.
 * Convenience wrapper around `withRetry` for data-fetching operations.
 *
 * Validates: Requirements 17.2
 */
export async function withNetworkRetry<T>(
  operation: () => Promise<T>,
  options: Omit<RetryOptions, 'shouldRetry'> = {}
): Promise<T> {
  return withRetry(operation, {
    ...options,
    shouldRetry: (error) => classifyError(error) === 'network',
  });
}
