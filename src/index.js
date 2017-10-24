// Analytics
import { analytics } from './analytics';

// Utilities
import isValidUACode from './utilities/isValidUACode';

export function register(options = {}) {
	this.verbose = false;

	Object.assign(this, options);

	if (this.trackingId === undefined || !isValidUACode(this.trackingId)) {
		console.error('Please provide a valid UA code (UA-XXXXXXXX-YY)');
		return;
	}

	analytics.initialize(this.trackingId);
	analytics.register(this.verbose);
}
