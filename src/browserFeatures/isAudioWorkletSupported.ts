/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for Audio Worklet support
 */
export default ((): boolean => !!(window as any).AudioWorklet || false)();
