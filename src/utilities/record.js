export const record = (options = {}) => {
	const defaults = {
		hitType: 'event',
		nonInteraction: true,
	};

	const eventObject = { ...defaults, ...options };

	if (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {
		const callback = () => {
			window.GA_FEATURE_ANALYTICS('send', eventObject);
		};

		if ('requestIdleCallback' in window) {
			window.requestIdleCallback(callback);
		} else {
			callback();
		}
	} else {
		console.error('Google Analytics has not been initialized');
	}
};
