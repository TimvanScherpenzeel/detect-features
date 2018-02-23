// Features
import { getFeatures } from '../features';

export const analytics = {
	register: (verbose = false, log = false, element = null) => {
		const features = getFeatures(verbose);

		if (log) {
			console.log(features);
		}

		if (element) {
			element.appendChild(document.createTextNode(JSON.stringify(features, null, 2)));
		}
	},
};
