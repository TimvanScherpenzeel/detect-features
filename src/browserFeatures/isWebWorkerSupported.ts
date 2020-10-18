/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for inline web worker support
 */
export default ((): boolean => !!(window as any).Worker || false)();
