/**
 * Throttle utility
 */

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limitMs: number,
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  let lastArgs: Parameters<T> | null = null;

  return function throttled(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
        if (lastArgs !== null) {
          throttled(...lastArgs);
          lastArgs = null;
        }
      }, limitMs);
    } else {
      lastArgs = args;
    }
  };
}
