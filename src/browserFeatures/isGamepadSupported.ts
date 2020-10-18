/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for gamepad support
 */
export default ((): boolean => !!(window as any).Gamepad || false)();
