// Features
import { getFeatures } from '../features';

export const analytics = {
	register: (verbose = false, log = false) => {
		const features = getFeatures(verbose);

		if (log) console.log(features);
	},
};
