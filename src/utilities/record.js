export const record = (obj = {}) => {
	const defaultEventObject = {
		hitType: 'event',
		eventCategory: 'Features',
		eventAction: '',
		eventLabel: '',
		nonInteraction: true,
	};

	if (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {
		const callback = () => {
			window.GA_FEATURE_ANALYTICS('send', { ...defaultEventObject, ...obj });
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
