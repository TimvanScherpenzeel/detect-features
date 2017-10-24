// Analytics
import { record } from '../utilities/record';

// Features
import { getFeatures } from '../features';

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
				const value = features[category][feature];

				if (typeof value === 'boolean' || typeof value === 'number') {
					record({
						eventCategory: `${category}`, 
						eventAction: `${feature}`, 
						eventValue: `${value}`,
					});
				} else if (typeof value === 'string') {
					record({
						eventCategory: `${category}`, 
						eventAction: `${feature}`, 
						eventLabel: `${value}`,
					});
				} else {
					// WebGLFeatures and WebGL2Features
					console.log(value);	
				}
			});
		});
	},
};
