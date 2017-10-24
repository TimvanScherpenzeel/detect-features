// Hardware features
import getDevicePixelRatio from './getDevicePixelRatio';
import getEndianness from './getEndianness';
import getWebWorkerPoolSize from './getWebWorkerPoolSize';
import getWebVRDeviceType from './getWebVRDeviceType';

// Browser settings
import isCookieEnabled from './isCookieEnabled';
import isDoNotTrackEnabled from './isDoNotTrackEnabled';

// Browser features
import isGamepadSupported from './isGamepadSupported';
import isRequestIdleCallbackSupported from './isRequestIdleCallbackSupported';
import isServiceWorkerSupported from './isServiceWorkerSupported';
import isWebAssemblySupported from './isWebAssemblySupported';
import isWebAudioSupported from './isWebAudioSupported';
import isWebGL2Supported from './isWebGL2Supported';
import isWebGLSupported from './isWebGLSupported';
import isWebRTCSupported from './isWebRTCSupported';
import isWebSocketSupported from './isWebSocketSupported';
import isWebVRSupported from './isWebVRSupported';
import isWebWorkerSupported from './isWebWorkerSupported';

// Browser features
import getWebGL2Features from './getWebGL2Features';
import getWebGLFeatures from './getWebGLFeatures';

// Features
export const getFeatures = (verbose = false) => {
	// Default features
	const features = {
		// Hardware features
		hardwareFeatures: {
			devicePixelRatio: getDevicePixelRatio,
			workerPoolSize: getWebWorkerPoolSize,
		},

		// Browser settings
		browserSettings: {
			isCookieEnabled,
			isDoNotTrackEnabled,
		},

		// Browser features
		browserFeatures: {
			isGamepadSupported,
			isRequestIdleCallbackSupported,
			isServiceWorkerSupported,
			isWebAssemblySupported,
			isWebAudioSupported,
			isWebGL2Supported,
			isWebGLSupported,
			isWebRTCSupported,
			isWebSocketSupported,
			isWebVRSupported,
			isWebWorkerSupported,
		},
	}

	// WebVR features
	if (isWebVRSupported) {
		return { ...features.hardwareFeatures, ...{
			// Hardware features
			webVRDeviceType: getWebVRDeviceType,
		}};
	}

	// Verbose features
	if (verbose) {
		features.hardwareFeatures = { ...features.hardwareFeatures, ...{
			// Hardware features
			endianness: getEndianness,
		}};

		features.browserFeatures = { ...features.browserFeatures, ...{
			// Browser features
			webGL2Features: getWebGL2Features,
			webGLFeatures: getWebGLFeatures,
		}};
	}
	
	return features;
};
