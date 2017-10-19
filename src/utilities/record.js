export const record = (obj) => {
	if (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {
		const callback = () => {
			window.GA_FEATURE_ANALYTICS('send', obj);
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