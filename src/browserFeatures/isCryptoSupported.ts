/**
 * Tests for crypto support
 */
export default ((): boolean => (!!window.crypto && !!window.crypto.getRandomValues) || false)();
