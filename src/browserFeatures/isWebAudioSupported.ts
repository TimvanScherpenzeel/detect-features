/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for WebAudio support
 */
export default ((): boolean =>
  !!(window as any).AudioContext ||
  !!(window as any).webkitAudioContext ||
  false)();
