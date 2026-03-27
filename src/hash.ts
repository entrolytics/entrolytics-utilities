/**
 * Hashing utility functions
 */

/**
 * Simple hash function for strings (non-cryptographic)
 */
export function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Generate a simple hash string from input
 */
export function hashString(str: string): string {
  return simpleHash(str).toString(36);
}

/**
 * Generate a deterministic ID from multiple values
 */
export function generateId(...values: (string | number)[]): string {
  const combined = values.join("|");
  return hashString(combined);
}
