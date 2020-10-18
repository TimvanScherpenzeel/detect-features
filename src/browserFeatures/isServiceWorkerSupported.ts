/**
 * Tests for ServiceWorker support
 */
export default ((): boolean => !!navigator.serviceWorker || false)();
