import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // In development, serve content files from the workspace root so that
  // fetch('/clearance-one/...'), fetch('/assets/...'), etc. resolve correctly
  // without needing to copy files.
  //
  // In production (CI / Vercel), run `npm run prepare-content` first to copy
  // the content directories into lms-react/public/, then build normally.
  // The VITE_USE_WORKSPACE_ROOT env var is set automatically in dev by the
  // dev script; production builds leave it unset so publicDir defaults to
  // 'public' (the standard Vite default).
  publicDir: process.env.NODE_ENV === 'development'
    ? path.resolve(__dirname, '..')
    : 'public',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
  },
  build: {
    // ---------------------------------------------------------------------------
    // Optimize bundle chunking for better caching and parallel loading
    // Validates: Requirements 15.2, 15.3, 15.5
    // ---------------------------------------------------------------------------
    rollupOptions: {
      output: {
        // Manual chunk splitting strategy:
        // 1. vendor-react: React + ReactDOM (largest, most stable — long cache TTL)
        // 2. vendor-router: React Router (changes less often than app code)
        // 3. vendor-supabase: Supabase client (large, loaded only after auth)
        // 4. vendor: remaining node_modules
        // 5. shared-context / shared-services / shared-components: app internals
        //    shared across multiple lazy page chunks
        manualChunks: (id) => {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          if (id.includes('node_modules/@supabase')) {
            return 'vendor-supabase';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Context providers — loaded early, shared across the whole app
          if (id.includes('/src/context/')) {
            return 'shared-context';
          }
          // Services — loaded early, shared across the whole app
          if (id.includes('/src/services/')) {
            return 'shared-services';
          }
          // Common + layout components — part of the app shell
          if (
            id.includes('/src/components/common/') ||
            id.includes('/src/components/layout/')
          ) {
            return 'shared-components';
          }
        },
      },
    },
    // Target modern browsers for smaller output
    target: 'es2020',
    // Use oxc minifier (built into Vite 8, replaces esbuild)
    minify: 'oxc',
    // Disable source maps in production builds (enable locally if needed)
    sourcemap: false,
    // Warn when any individual chunk exceeds 500 kB
    chunkSizeWarningLimit: 500,
  },
  // ---------------------------------------------------------------------------
  // Asset handling — include common image formats so Vite processes them
  // ---------------------------------------------------------------------------
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
})
