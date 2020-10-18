/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for WebXR support
 */
export default ((): boolean => !!(navigator as any).xr || false)();
