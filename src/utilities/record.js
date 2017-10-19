export const record = (obj = {}) => {

	const defaultEventObject = {
		hitType: 'event',
		eventCategory: 'Features',
		eventAction: '',
		eventLabel: '',
		nonInteraction: true,
	};

	const eventObject = {...defaultEventObject, ...obj};

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
		console.log('Your checking code might not be valid.');
	}
};
