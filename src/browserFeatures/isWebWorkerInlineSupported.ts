/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Tests for inline web worker support
 */
export default ((): boolean => {
  try {
    const URL = window.URL || (window as any).webkitURL;

    if (
      URL === undefined ||
      window.Blob === undefined ||
      (window as any).Worker === undefined
    ) {
      return false;
    }

    const blob = new Blob(['']);
    const oURL = URL.createObjectURL(blob);
    const worker = new Worker(oURL);

    URL.revokeObjectURL(oURL);

    if (worker) {
      worker.terminate();
      return true;
    }

    return false;
  } catch (err) {
    return false;
  }
})();
