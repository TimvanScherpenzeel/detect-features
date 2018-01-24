export const record = (options = {}) => {
	const defaults = {
		nonInteraction: true,
	};

	const eventObject = { ...options, ...defaults };

	if (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {
		const callback = () => {
			window.GA_FEATURE_ANALYTICS('send', 'event', eventObject);
		};

		if ('requestIdleCallback' in window) {
			window.requestIdleCallback(callback);
		} else {
			callback();
		}
	} else {
		console.error('Google Feature Analytics has not been initialized');
	}
};
