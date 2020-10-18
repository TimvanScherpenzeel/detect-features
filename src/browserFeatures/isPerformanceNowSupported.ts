/**
 * Tests for performance.now support
 */
export default ((): boolean => !!(window.performance && window.performance.now) || false)();
