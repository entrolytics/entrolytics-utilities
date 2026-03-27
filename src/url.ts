/**
 * URL utility functions
 */

/**
 * Parse query parameters from URL
 */
export function parseQueryParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const urlObj = new URL(url);
  urlObj.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}

/**
 * Build query string from object
 */
export function buildQueryString(params: Record<string, unknown>): string {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (typeof value === "string") {
        searchParams.append(key, value);
        return;
      }

      if (typeof value === "number" || typeof value === "boolean" || typeof value === "bigint") {
        searchParams.append(key, String(value));
        return;
      }

      if (value instanceof Date) {
        searchParams.append(key, value.toISOString());
        return;
      }

      searchParams.append(key, JSON.stringify(value));
    }
  });
  return searchParams.toString();
}

/**
 * Get domain from URL
 */
export function getDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return "";
  }
}

/**
 * Get pathname from URL
 */
export function getPathname(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.pathname;
  } catch {
    return "";
  }
}

/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Combine URL parts
 */
export function combineUrl(base: string, ...paths: string[]): string {
  let url = base.replace(/\/+$/, "");
  for (const path of paths) {
    url += "/" + path.replace(/^\/+/, "");
  }
  return url;
}
