// Analytics
import { record } from '../utilities/record';

// Features
import * as features from '../features';

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
		window.FEATURE_ANALYTICS = features;

		// WebGL support detection
		if (verbose) {
			if (features.isWebGLSupported) {
				record({
					eventAction: 'WebGL Detect',
					eventLabel: 'WebGL is supported',
				});
			} else {
				record({
					eventAction: 'WebGL Detect',
					eventLabel: 'WebGL is not supported',
				});
			}
		}

		// WebGL2 support detection
		if (verbose) {
			if (features.isWebGL2Supported) {
				record({
					eventAction: 'WebGL2 Detect',
					eventLabel: 'WebGL2 is supported',
				});
			} else {
				record({
					eventAction: 'WebGL2 Detect',
					eventLabel: 'WebGL2 is not supported',
				});
			}
		}
	},
};
