/**
 * Tests for OffscreenCanvas support
 */
export default ((): boolean => !!(window as any).OffscreenCanvas || false)();
