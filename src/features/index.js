// Hardware features
import getDevicePixelRatio from './getDevicePixelRatio';
import getEndian from './getEndian';
import getWebWorkerPoolSize from './getWebWorkerPoolSize';
import isWebVRDeviceAvailable from './isWebVRDeviceAvailable';

// Browser settings
import isCookieEnabled from './isCookieEnabled';
import isDoNotTrackEnabled from './isDoNotTrackEnabled';

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
import isWebVRSupported from './isWebVRSupported';
import isWebWorkerSupported from './isWebWorkerSupported';

// Verbose features
import getWebGL2Features from './getWebGL2Features';
import getWebGLFeatures from './getWebGLFeatures';

// Features
export const getFeatures = (verbose = false) => {
	const features = {
		// Hardware features
		devicePixelRatio: getDevicePixelRatio,
		endian: getEndian,
		workerPoolSize: getWebWorkerPoolSize,
		isWebVRDeviceAvailable,

		// Browser settings
		isCookieEnabled,
		isDoNotTrackEnabled,

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
		isWebVRSupported,
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
