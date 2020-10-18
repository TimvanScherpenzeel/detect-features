/**
 * Tests for SessionStorage support
 */
export default ((): boolean => {
  try {
    return !!window.sessionStorage;
  } catch (err) {
    return false;
  }
})();
