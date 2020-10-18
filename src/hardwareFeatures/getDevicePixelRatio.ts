/**
 * Gets the device pixel ratio of the device
 * Note that different zooming levels change the device pixel ratio
 */
export default ((): number => window.devicePixelRatio || 1)();
