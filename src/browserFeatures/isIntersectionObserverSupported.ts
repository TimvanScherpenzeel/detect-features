/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for IntersectionObserver support
 */
export default ((): boolean =>
  !!(window as any).IntersectionObserver || false)();
