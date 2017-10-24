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
				let value = features[category][feature];
				console.log(value);

				switch (feature) {

					// Browser features
					case 'isGamepadSupported':
						break;
					case 'isRequestIdleCallbackSupported':
						break;
					case 'isServiceWorkerSupported':
						break;
					case 'isWebAssemblySupported':
						break;
					case 'isWebAudioSupported':
						break;
					case 'isWebGL2Supported':
						break;
					case 'isWebGLSupported':
						break;
					case 'isWebRTCSupported':
						break;
					case 'isWebSocketSupported':
						break;
					case 'isWebVRSupported':
						break;
					case 'isWebWorkerSupported':
						break;

					// Browser settings
					case 'isCookieEnabled':
						break;
					case 'isDoNotTrackEnabled':
						break;

					// Hardware features
					case 'devicePixelRatio':
						break;
					case 'workerPoolSize':
						break;

					default:
						break;
				}
			});
		});
	},
};
