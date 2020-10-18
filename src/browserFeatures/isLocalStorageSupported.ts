/**
 * Tests for LocalStorage support
 */
export default ((): boolean => {
  try {
    return !!window.localStorage;
  } catch (err) {
    return false;
  }
})();
