// Analytics
import { analytics } from './analytics';

// Utilities
import isValidUACode from './utilities/isValidUACode';

export function initialize(trackingId) {
	if (trackingId === undefined || !isValidUACode(trackingId)) {
		console.error('Please provide a valid UA code (UA-xxxx-yy)');
		return;
	};

	analytics.initialize(trackingId);
	analytics.register();
}
