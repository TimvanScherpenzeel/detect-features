// Browser features
import getBrowserType from './browserFeatures/getBrowserType';
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
import isWebXRSupported from './browserFeatures/isWebXRSupported';

// Browser settings
import isCookieEnabled from './browserSettings/isCookieEnabled';
import isDoNotTrackEnabled from './browserSettings/isDoNotTrackEnabled';

// Hardware features
import getDevicePixelRatio from './hardwareFeatures/getDevicePixelRatio';
import getEndianness from './hardwareFeatures/getEndianness';
import getWebWorkerPoolSize from './hardwareFeatures/getWebWorkerPoolSize';

// Features
export const getFeatures = () => {
	// Default features
	const features = {
		// Browser features
		browserFeatures: {
			browserType: getBrowserType,
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
			isWebXRSupported,
			webGL2Features: getWebGL2Features,
			webGLFeatures: getWebGLFeatures,
		},

		// Browser settings
		browserSettings: {
			isCookieEnabled,
			isDoNotTrackEnabled,
		},

		// Hardware features
		hardwareFeatures: {
			devicePixelRatio: getDevicePixelRatio,
			endianness: getEndianness,
			workerPoolSize: getWebWorkerPoolSize,
		},
	};

	return features;
};
