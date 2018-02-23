// Features
import { getFeatures } from './features';

export function register(options = {}) {
	this.verbose = false;
	this.log = false;
	this.element = null;

	Object.assign(this, options);

	const features = getFeatures(this.verbose);

	if (this.log) {
		console.log(features);
	}

	if (this.element) {
		this.element.appendChild(document.createTextNode(JSON.stringify(features, null, 2)));
	}
}
