/**
 * Checks if the user has cookies enabled
 * This is useful for adhering to user wishes regarding analytics tracking
 */
export default ((): boolean => !!navigator.cookieEnabled || false)();
