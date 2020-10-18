/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for BroadcastChannel support
 */
export default ((): boolean => !!(window as any).BroadcastChannel || false)();
