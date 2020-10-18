/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for PerformanceObserver support
 */
export default ((): boolean =>
  !!(window as any).PerformanceObserver || false)();
