/**
 * Tests for IndexedDB support
 */
export default ((): boolean => {
  try {
    return !!window.indexedDB;
  } catch (err) {
    return false;
  }
})();
