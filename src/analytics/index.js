// Analytics
import { record } from '../utilities/record';

// Features
import { getFeatures } from '../features';

const createEventObject = (options = {}) => {
	Object.assign(this, options);

	switch (typeof this.value) {
		case 'object':
			Object.keys(this.value).forEach((value) => {
				console.log(value, this.value[value]);
			});
			break;
		case 'boolean':
		case 'number':
			// console.log(this.category, this.feature, this.value);
			record({
				eventCategory: `${this.category}`,
				eventAction: `${this.feature}`,
				eventValue: `${this.value}`,
			});
			break;
		case 'string':
			// console.log(this.category, this.feature, this.value);
			record({
				eventCategory: `${this.category}`,
				eventAction: `${this.feature}`,
				eventLabel: `${this.value}`,
			});
			break;
		default:
			console.warn(`Value of type: ${this.value} could not be recognized`);
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

		Object.keys(features).forEach((category) => {
			Object.keys(features[category]).forEach((feature) => {
				createEventObject({
					category,
					feature,
					value: features[category][feature],
				});
			});
		});
	},
};
