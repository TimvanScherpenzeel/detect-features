/**
 * Tests for Image decode support
 */
export default ((): boolean => {
  try {
    const image = new Image();
    return !!image.decode;
  } catch (err) {
    return false;
  }
})();
