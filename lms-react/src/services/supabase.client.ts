import { createClient } from '@supabase/supabase-js';

// Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env file and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.'
  );
}

// Create and export Supabase client instance.
//
// lock: undefined disables the Web Locks API that Supabase uses to serialise
// token refreshes. The default lock implementation causes
// NavigatorLockAcquireTimeoutError when multiple tabs are open, because each
// tab's client races to acquire the same named lock. Disabling it is safe for
// a SPA — Supabase's in-memory token cache still prevents redundant refreshes
// within a single tab, and cross-tab session sync is handled by the
// onAuthStateChange listener reacting to localStorage events.
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    lock: undefined,
  },
});
