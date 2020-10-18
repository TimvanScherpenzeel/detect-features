/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for requestIdleCallback support
 */
export default ((): boolean =>
  !!(window as any).requestIdleCallback || false)();
