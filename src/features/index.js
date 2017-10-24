// Device features
import getDevicePixelRatio from './getDevicePixelRatio';

// Browser features
import getEndian from './getEndian';
import getWebWorkerPoolSize from './getWebWorkerPoolSize';

// Browser support
import isGamepadSupported from './isGamepadSupported';
import isRequestIdleCallbackSupported from './isRequestIdleCallbackSupported';
import isServiceWorkerSupported from './isServiceWorkerSupported';
import isWebAssemblySupported from './isWebAssemblySupported';
import isWebAudioSupported from './isWebAudioSupported';
import isWebGL2Supported from './isWebGL2Supported';
import isWebGLSupported from './isWebGLSupported';
import isWebSocketSupported from './isWebSocketSupported';
import isWebRTCSupported from './isWebRTCSupported';
import isWebVRDeviceAvailable from './isWebVRDeviceAvailable';
import isWebWorkerSupported from './isWebWorkerSupported';

// Verbose features
import getWebGL2Features from './getWebGL2Features';
import getWebGLFeatures from './getWebGLFeatures';

// Features
export const getFeatures = (verbose = false) => {
	const features = {
		// Device features
		devicePixelRatio: getDevicePixelRatio,

		// Browser features
		endian: getEndian,
		workerPoolSize: getWebWorkerPoolSize,

		// Browser support
		isGamepadSupported,
		isRequestIdleCallbackSupported,
		isServiceWorkerSupported,
		isWebAssemblySupported,
		isWebAudioSupported,
		isWebGL2Supported,
		isWebGLSupported,
		isWebRTCSupported,
		isWebSocketSupported,
		isWebVRDeviceAvailable,
		isWebWorkerSupported,
	}

	// Verbose features
	if (verbose) {
		return { ...features, ...{
			webGL2Features: getWebGL2Features,
			webGLFeatures: getWebGLFeatures,
		}};
	} else {
		return features;
	}
};
