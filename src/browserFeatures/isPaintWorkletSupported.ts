/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for Paint Worklet support
 */
export default ((): boolean =>
  (!!(window as any).CSS && !!(window as any).CSS.paintWorklet) || false)();
