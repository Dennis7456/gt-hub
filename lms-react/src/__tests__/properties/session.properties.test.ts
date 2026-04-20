import { describe, it, expect, vi, beforeEach } from 'vitest';
import fc from 'fast-check';
import { authService } from '../../services/auth.service';
import { supabase } from '../../services/supabase.client';

// Mock the Supabase client
vi.mock('../../services/supabase.client', () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
      resetPasswordForEmail: vi.fn(),
      getUser: vi.fn(),
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(() => ({
        data: { subscription: { unsubscribe: vi.fn() } },
      })),
    },
  },
}));

describe('Session Management Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it('Property 8: Session token storage after authentication', async () => {
    // Feature: learning-management-system-react, Property 8: Session token storage after authentication
    // **Validates: Requirements 3.1**
    
    await fc.assert(
      fc.asyncProperty(
        fc.emailAddress(),
        fc.string({ minLength: 8, maxLength: 50 }),
        async (email, password) => {
          // Mock successful login with session
          const mockSession = {
            access_token: crypto.randomUUID(),
            refresh_token: crypto.randomUUID(),
            expires_in: 3600,
            token_type: 'bearer',
            user: {
              id: crypto.randomUUID(),
              email,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              app_metadata: {},
              user_metadata: {},
              aud: 'authenticated',
              role: 'authenticated',
            },
          };
          
          vi.mocked(supabase.auth.signInWithPassword).mockResolvedValueOnce({
            data: {
              user: mockSession.user as any,
              session: mockSession as any,
            },
            error: null,
          });
          
          vi.mocked(supabase.auth.getSession).mockResolvedValueOnce({
            data: {
              session: mockSession as any,
            },
            error: null,
          });
          
          // Login should create a session
          const session = await authService.login(email, password);
          
          // Verify session token exists
          expect(session).toBeDefined();
          expect(session.access_token).toBeDefined();
          expect(session.access_token).toBe(mockSession.access_token);
          
          // Verify session can be retrieved
          const retrievedSession = await authService.getSession();
          expect(retrievedSession).toBeDefined();
          expect(retrievedSession?.access_token).toBe(mockSession.access_token);
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 9: Valid session restoration', async () => {
    // Feature: learning-management-system-react, Property 9: Valid session restoration
    // **Validates: Requirements 3.2**
    
    await fc.assert(
      fc.asyncProperty(
        fc.emailAddress(),
        fc.string({ minLength: 8, maxLength: 50 }),
        async (email, _password) => {
          // Clear mocks for this iteration
          vi.clearAllMocks();
          vi.resetAllMocks();
          
          // Mock a valid stored session
          const mockSession = {
            access_token: crypto.randomUUID(),
            refresh_token: crypto.randomUUID(),
            expires_in: 3600,
            expires_at: Math.floor(Date.now() / 1000) + 3600, // Valid for 1 hour
            token_type: 'bearer',
            user: {
              id: crypto.randomUUID(),
              email,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          };
          
          // Mock getSession to always return the same session
          vi.mocked(supabase.auth.getSession).mockResolvedValue({
            data: {
              session: mockSession as any,
            },
            error: null,
          });
          
          // Mock getUser to return the user
          vi.mocked(supabase.auth.getUser).mockResolvedValue({
            data: {
              user: mockSession.user as any,
            },
            error: null,
          });
          
          // Restore session
          const session = await authService.getSession();
          expect(session).toBeDefined();
          expect(session?.access_token).toBe(mockSession.access_token);
          
          // Verify user can be retrieved from session
          const user = await authService.getCurrentUser();
          expect(user).toBeDefined();
          expect(user?.email).toBe(email);
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 10: Expired session prompts re-authentication', async () => {
    // Feature: learning-management-system-react, Property 10: Expired session prompts re-authentication
    // **Validates: Requirements 3.3**
    
    await fc.assert(
      fc.asyncProperty(
        fc.emailAddress(),
        async (_email) => {
          // Clear all previous mocks
          vi.clearAllMocks();
          
          // Mock an expired session (no session returned)
          vi.mocked(supabase.auth.getSession).mockResolvedValue({
            data: {
              session: null,
            },
            error: null,
          });
          
          vi.mocked(supabase.auth.getUser).mockResolvedValue({
            data: {
              user: null,
            },
            error: {
              name: 'AuthSessionMissingError',
              message: 'Auth session missing!',
            } as any,
          });
          
          // Attempt to get session should return null
          const session = await authService.getSession();
          expect(session).toBeNull();
          
          // Attempt to get user should return null
          const user = await authService.getCurrentUser();
          expect(user).toBeNull();
        }
      ),
      { numRuns: 5 }
    );
  });
});
