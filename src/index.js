// Analytics
import { analytics } from './analytics';

export function register(options = {}) {
	this.verbose = false;
	this.log = false;

	Object.assign(this, options);

	analytics.register(this.verbose, this.log);
}
