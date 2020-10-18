/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for ImageBitmap support
 */
export default ((): boolean =>
  (!!(window as any).ImageBitmap && !!(window as any).createImageBitmap) ||
  false)();
