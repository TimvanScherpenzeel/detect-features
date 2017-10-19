// Device
import getDevicePixelRatio from './getDevicePixelRatio';

// RequestIdleCallback
import isRequestIdleCallbackSupported from './isRequestIdleCallbackSupported';

// WebGL
import isWebGL2Supported from './isWebGL2Supported';
import isWebGLSupported from './isWebGLSupported';

// Service worker
import isServiceWorkerSupported from './isServiceWorkerSupported';

// Workers
import isWorkerSupported from './isWebWorkerSupported';
import getWorkerPoolSize from './getWebWorkerPoolSize';

export const features = {
	// Device
	devicePixelRatio: getDevicePixelRatio,

	// RequestIdleCallback
	isRequestIdleCallbackSupported,

	// WebGL
	isWebGLSupported,
	isWebGL2Supported,

	// Service worker
	isServiceWorkerSupported,

	// Workers
	isWorkerSupported,
	workerPoolSize: getWorkerPoolSize,
}