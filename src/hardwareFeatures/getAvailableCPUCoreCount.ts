/**
 * Gets the CPU cores available for web worker threading
 */
export default ((): number => navigator.hardwareConcurrency || 0)();
