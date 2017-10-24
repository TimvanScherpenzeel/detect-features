// Analytics
import { analytics } from './analytics';

// Utilities
import isValidUACode from './utilities/isValidUACode';

export function register(options = {}) {
	this.trackingId = '';
	this.verbose = false;

	Object.assign(this, options);

	if (this.trackingId === undefined || !isValidUACode(this.trackingId)) {
		console.error('Please provide a valid UA code (UA-xxxx-yy)');
		return;
	}

	analytics.initialize(this.trackingId);
	analytics.register(this.verbose);
}
