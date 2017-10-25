// Analytics
import { record } from '../utilities/record';

// Features
import { getFeatures } from '../features';

let category;
let feature;
let value;

const createEventObject = () => {
	switch (typeof value) {
		case 'boolean':
		case 'number':
			console.log(category, feature, value);
			record({
			 	eventCategory: `${category}`,
			 	eventAction: `${feature}`,
			 	eventValue: `${value}`,
			});
			break;
		case 'string':
			console.log(category, feature, value);
			record({
				eventCategory: `${category}`,
				eventAction: `${feature}`,
				eventLabel: `${value}`,
			});
			break;
		case 'object':
			const _value = value;
			const _feature = feature;

			Object.keys(_value).forEach((data) => {
				category = category.concat(' ' + _feature);
				feature = data;
				value = _value[data];
				createEventObject();
			});
			break;
		default:
			console.warn(`Type of value: ${value} could not be recognized`)
			break;
	}
};

export const analytics = {
	initialize: (trackingId) => {
		// Inject Google Analytics

		/* eslint-disable */
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','GA_FEATURE_ANALYTICS');
		window.GA_FEATURE_ANALYTICS('create', `${trackingId}`, 'auto');
		window.GA_FEATURE_ANALYTICS('send', 'pageview');
		/* eslint-enable */
	},

	register: (verbose = false) => {
		const features = getFeatures(verbose);

		Object.keys(features).forEach((_category) => {
			Object.keys(features[_category]).forEach((_feature) => {
				category = _category;
				feature = _feature;
				value = features[category][feature];

				createEventObject();
			});
		});
	},
};
