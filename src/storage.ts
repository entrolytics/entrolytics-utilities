/**
 * Storage utility functions for browser localStorage/sessionStorage
 */

/**
 * Safe localStorage wrapper
 */
export const storage = {
  /**
   * Get item from localStorage with JSON parsing
   */
  get<T>(key: string, defaultValue?: T): T | null {
    if (typeof window === "undefined") return defaultValue ?? null;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : (defaultValue ?? null);
    } catch {
      return defaultValue ?? null;
    }
  },

  /**
   * Set item in localStorage with JSON stringification
   */
  set<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to set localStorage item:", error);
    }
  },

  /**
   * Remove item from localStorage
   */
  remove(key: string): void {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error("Failed to remove localStorage item:", error);
    }
  },

  /**
   * Clear all localStorage
   */
  clear(): void {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.clear();
    } catch (error) {
      console.error("Failed to clear localStorage:", error);
    }
  },
};

/**
 * Safe sessionStorage wrapper
 */
export const sessionStorage = {
  /**
   * Get item from sessionStorage with JSON parsing
   */
  get<T>(key: string, defaultValue?: T): T | null {
    if (typeof window === "undefined") return defaultValue ?? null;

    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : (defaultValue ?? null);
    } catch {
      return defaultValue ?? null;
    }
  },

  /**
   * Set item in sessionStorage with JSON stringification
   */
  set<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;

    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to set sessionStorage item:", error);
    }
  },

  /**
   * Remove item from sessionStorage
   */
  remove(key: string): void {
    if (typeof window === "undefined") return;

    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.error("Failed to remove sessionStorage item:", error);
    }
  },

  /**
   * Clear all sessionStorage
   */
  clear(): void {
    if (typeof window === "undefined") return;

    try {
      window.sessionStorage.clear();
    } catch (error) {
      console.error("Failed to clear sessionStorage:", error);
    }
  },
};
