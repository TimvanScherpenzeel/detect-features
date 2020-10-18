/**
 * Tests for WebVR support
 */
export default ((): boolean => !!navigator.getVRDisplays || false)();
