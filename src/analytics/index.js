// Analytics
import { record } from '../utilities/record';

// Features
import { getFeatures } from '../features';

const createEventObject = (options = {}) => {
	Object.assign(this, options);

	switch (typeof this.value) {
		case 'object':
			Object.keys(this.value).forEach((value) => {
				if (typeof this.value[value] !== 'string' && this.value[value] !== undefined) {
					Object.keys(this.value[value]).forEach((key) => {
						if (this.log) {
							console.log({
								eventCategory: `${this.category}`,
								eventAction: `${value}`,
								eventValue: `${key}`,
							});
						}

						record({
							eventCategory: `${this.category}`,
							eventAction: `${value}`,
							eventValue: `${key}`,
						});
					});
				}

				if (typeof this.value[value] === 'string') {
					if (this.log) {
						console.log({
							eventCategory: `${this.category}`,
							eventAction: `${value}`,
							eventValue: `${this.value[value]}`,
						});
					}

					record({
						eventCategory: `${this.category}`,
						eventAction: `${value}`,
						eventValue: `${this.value[value]}`,
					});
				}
			});

			break;
		case 'boolean':
		case 'number':
			if (this.log) {
				console.log({
					eventCategory: `${this.category}`,
					eventAction: `${this.feature}`,
					eventValue: `${this.value}`,
				});
			}

			record({
				eventCategory: `${this.category}`,
				eventAction: `${this.feature}`,
				eventValue: `${this.value}`,
			});

			break;
		case 'string':
			if (this.log) {
				console.log({
					eventCategory: `${this.category}`,
					eventAction: `${this.feature}`,
					eventLabel: `${this.value}`,
				});
			}

			record({
				eventCategory: `${this.category}`,
				eventAction: `${this.feature}`,
				eventLabel: `${this.value}`,
			});

			break;
		default:
			if (this.log && this.value !== undefined) {
				console.warn(`Value of type: ${this.value} could not be recognized`);
			}

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

	register: (verbose = false, log = false) => {
		const features = getFeatures(verbose);

		Object.keys(features).forEach((category) => {
			Object.keys(features[category]).forEach((feature) => {
				createEventObject({
					category,
					feature,
					value: features[category][feature],
					log,
				});
			});
		});
	},
};
