/**
 * Content Context
 * 
 * Provides global state for content loading and caching.
 * Loads modules on initialization and provides content access methods.
 */

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Module } from '../types';
import * as ContentService from '../services/content.service';

interface ContentContextType {
  modules: Module[];
  loading: boolean;
  error: string | null;
  refreshModules: () => Promise<void>;
  clearCache: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export { ContentContext };

interface ContentProviderProps {
  children: ReactNode;
}

export function ContentProvider({ children }: ContentProviderProps) {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Load modules on mount
   */
  useEffect(() => {
    loadModules();
  }, []);

  /**
   * Load modules from content service
   */
  const loadModules = async () => {
    try {
      setLoading(true);
      setError(null);
      const loadedModules = await ContentService.getModules();
      setModules(loadedModules);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load modules';
      setError(errorMessage);
      console.error('Error loading modules:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Refresh modules (force reload)
   */
  const refreshModules = async () => {
    ContentService.clearCache();
    await loadModules();
  };

  /**
   * Clear all content caches
   */
  const clearCache = () => {
    ContentService.clearCache();
    setModules([]);
    setError(null);
  };

  const value: ContentContextType = {
    modules,
    loading,
    error,
    refreshModules,
    clearCache
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}

/**
 * Hook to access content context
 */
export function useContent(): ContentContextType {
  const context = useContext(ContentContext);
  
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  
  return context;
}
