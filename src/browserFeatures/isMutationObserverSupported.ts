/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for MutationObserver support
 */
export default ((): boolean => !!(window as any).MutationObserver || false)();
