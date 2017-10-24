// Browser features
import getWebGL2Features from './browserFeatures/getWebGL2Features';
import getWebGLFeatures from './browserFeatures/getWebGLFeatures';
import isGamepadSupported from './browserFeatures/isGamepadSupported';
import isRequestIdleCallbackSupported from './browserFeatures/isRequestIdleCallbackSupported';
import isServiceWorkerSupported from './browserFeatures/isServiceWorkerSupported';
import isWebAssemblySupported from './browserFeatures/isWebAssemblySupported';
import isWebAudioSupported from './browserFeatures/isWebAudioSupported';
import isWebGL2Supported from './browserFeatures/isWebGL2Supported';
import isWebGLSupported from './browserFeatures/isWebGLSupported';
import isWebRTCSupported from './browserFeatures/isWebRTCSupported';
import isWebSocketSupported from './browserFeatures/isWebSocketSupported';
import isWebVRSupported from './browserFeatures/isWebVRSupported';
import isWebWorkerSupported from './browserFeatures/isWebWorkerSupported';

// Browser settings
import isCookieEnabled from './browserSettings/isCookieEnabled';
import isDoNotTrackEnabled from './browserSettings/isDoNotTrackEnabled';

// Hardware features
import getDevicePixelRatio from './hardwareFeatures/getDevicePixelRatio';
import getEndianness from './hardwareFeatures/getEndianness';
import getWebWorkerPoolSize from './hardwareFeatures/getWebWorkerPoolSize';
import getWebVRDeviceType from './hardwareFeatures/getWebVRDeviceType';


// Features
export const getFeatures = (verbose = false) => {
	// Default features
	const features = {
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

		// Browser settings
		browserSettings: {
			isCookieEnabled,
			isDoNotTrackEnabled,
		},

		// Hardware features
		hardwareFeatures: {
			devicePixelRatio: getDevicePixelRatio,
			workerPoolSize: getWebWorkerPoolSize,
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
		features.browserFeatures = { ...features.browserFeatures, ...{
			// Browser features
			webGL2Features: getWebGL2Features,
			webGLFeatures: getWebGLFeatures,
		}};

		features.hardwareFeatures = { ...features.hardwareFeatures, ...{
			// Hardware features
			endianness: getEndianness,
		}};
	}
	
	return features;
};
