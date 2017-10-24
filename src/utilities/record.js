export const record = (options = {}) => {
	const defaults = {
		hitType: 'event',
		nonInteraction: true,
	};

	const eventObject = { ...defaults, ...options };

	console.log(eventObject);

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
		console.error('Please provide a valid UA code (UA-xxxx-yy)');
	}
};
