// Analytics
import { record } from '../utilities/record';

// Features
import * as features from '../features';

export const analytics = {
	initialize: (trackingId) => {
		// Inject Google Analytics
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','GA_FEATURE_ANALYTICS');
		window.GA_FEATURE_ANALYTICS('create', `${trackingId}`, 'auto');
		window.GA_FEATURE_ANALYTICS('send', 'pageview');
	},

	register: () => {
		window.FEATURE_ANALYTICS = features;

		// WebGL support detection
		if (features.isWebGLSupported) {
			record({
				hitType: 'event',
				eventCategory: 'Features',
				eventAction: 'WebGL Detect',
				eventLabel: 'WebGL is supported',
				nonInteraction: true,
			});
		} else {
			record({
				hitType: 'event',
				eventCategory: 'Features',
				eventAction: 'WebGL Detect',
				eventLabel: 'WebGL is not supported',
				nonInteraction: true,
			});
		}

		// WebGL2 support detection
		if (features.isWebGL2Supported) {
			record({
				hitType: 'event',
				eventCategory: 'Features',
				eventAction: 'WebGL2 Detect',
				eventLabel: 'WebGL2 is supported',
				nonInteraction: true,
			});
		} else {
			record({
				hitType: 'event',
				eventCategory: 'Features',
				eventAction: 'WebGL2 Detect',
				eventLabel: 'WebGL2 is not supported',
				nonInteraction: true,
			});
		}
	},
};