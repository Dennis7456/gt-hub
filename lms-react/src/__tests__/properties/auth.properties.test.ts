import { describe, it, expect, vi, beforeEach } from 'vitest';
import fc from 'fast-check';
import { authService, validateEmail } from '../../services/auth.service';
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
    },
  },
}));

describe('Authentication Properties', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Property 1: User registration with valid credentials creates account', async () => {
    // Feature: learning-management-system-react, Property 1: User registration with valid credentials creates account
    // **Validates: Requirements 2.1**
    
    await fc.assert(
      fc.asyncProperty(
        fc.emailAddress(),
        fc.string({ minLength: 8, maxLength: 50 }),
        async (email, password) => {
          // Mock successful registration
          const mockUser = {
            id: crypto.randomUUID(),
            email,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            app_metadata: {},
            user_metadata: {},
            aud: 'authenticated',
            role: 'authenticated',
          };
          
          vi.mocked(supabase.auth.signUp).mockResolvedValueOnce({
            data: {
              user: mockUser as any,
              session: null,
            },
            error: null,
          });
          
          const result = await authService.register(email, password);
          
          expect(result).toBeDefined();
          expect(result.email).toBe(email);
          expect(result.id).toBeDefined();
          expect(supabase.auth.signUp).toHaveBeenCalledWith({
            email,
            password,
          });
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 2: Valid credentials authenticate and create session', async () => {
    // Feature: learning-management-system-react, Property 2: Valid credentials authenticate and create session
    // **Validates: Requirements 2.2**
    
    await fc.assert(
      fc.asyncProperty(
        fc.emailAddress(),
        fc.string({ minLength: 8, maxLength: 50 }),
        async (email, password) => {
          // Mock successful login
          const mockSession = {
            access_token: 'mock-access-token',
            refresh_token: 'mock-refresh-token',
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
          
          const result = await authService.login(email, password);
          
          expect(result).toBeDefined();
          expect(result.access_token).toBeDefined();
          expect(result.user.email).toBe(email);
          expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
            email,
            password,
          });
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 6: Invalid email formats are rejected', async () => {
    // Feature: learning-management-system-react, Property 6: Invalid email formats are rejected
    // **Validates: Requirements 2.6**
    
    await fc.assert(
      fc.asyncProperty(
        // Generate strings that are NOT valid emails
        fc.string().filter(s => !validateEmail(s)),
        fc.string({ minLength: 8, maxLength: 50 }),
        async (invalidEmail, password) => {
          // Attempt to register with invalid email should throw
          await expect(
            authService.register(invalidEmail, password)
          ).rejects.toThrow(/valid email/i);
          
          // Supabase should not be called
          expect(supabase.auth.signUp).not.toHaveBeenCalled();
        }
      ),
      { numRuns: 5 }
    );
  });

  it('Property 7: Short passwords are rejected', async () => {
    // Feature: learning-management-system-react, Property 7: Short passwords are rejected
    // **Validates: Requirements 2.7**
    
    await fc.assert(
      fc.asyncProperty(
        fc.emailAddress(),
        // Generate passwords shorter than 8 characters
        fc.string({ minLength: 0, maxLength: 7 }),
        async (email, shortPassword) => {
          // Attempt to register with short password should throw
          await expect(
            authService.register(email, shortPassword)
          ).rejects.toThrow(/at least 8 characters/i);
          
          // Supabase should not be called
          expect(supabase.auth.signUp).not.toHaveBeenCalled();
        }
      ),
      { numRuns: 5 }
    );
  });
});
