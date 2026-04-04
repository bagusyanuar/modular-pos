/**
 * Utility for interacting with localStorage with JSON support and type safety.
 * This is designed to be shared across shell apps and modules.
 */

export const browserStorage = {
  /**
   * Set a value in localStorage.
   * Automatically serializes objects to JSON.
   */
  set: <T>(key: string, value: T): void => {
    try {
      const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
      window.localStorage.setItem(key, stringValue);
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  },

  /**
   * Get a value from localStorage.
   * Automatically parses JSON strings back to objects.
   */
  get: <T>(key: string): T | null => {
    try {
      const value = window.localStorage.getItem(key);
      if (!value) return null;

      // Try to parse as JSON, if it fails, return as is (string)
      try {
        return JSON.parse(value) as T;
      } catch {
        return value as unknown as T;
      }
    } catch (error) {
      console.error(`Error getting localStorage key "${key}":`, error);
      return null;
    }
  },

  /**
   * Remove an item from localStorage.
   */
  remove: (key: string): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  },

  /**
   * Clear all items from localStorage.
   */
  clear: (): void => {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },
};
