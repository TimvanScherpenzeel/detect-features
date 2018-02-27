// Features
import { getFeatures } from './features';

export function register(options = {}) {
	this.log = false;
	this.element = null;

	Object.assign(this, options);

	const features = getFeatures();

	if (this.log) {
		console.log(features);
	}

	if (this.element) {
		this.element.appendChild(document.createTextNode(JSON.stringify(features, null, 2)));
	}
}
