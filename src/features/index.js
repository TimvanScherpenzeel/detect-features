/*
	Already covered by Google Analytics
	- Platform (deviced by device, OS, browser, etc..)
	- Device (desktop, tablet, phone)
	- Inbound links
	- Total time spend on site
*/

import getDevicePixelRatio from './getDevicePixelRatio';
import getEndian from './getEndian';
import getWebGL2Features from './getWebGL2Features';
import getWebGLFeatures from './getWebGLFeatures';
import getWebWorkerPoolSize from './getWebWorkerPoolSize';

// Support
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

// Features
export const features = {
	devicePixelRatio: getDevicePixelRatio,
	endian: getEndian,
	workerPoolSize: getWebWorkerPoolSize,
	webGL2Features: getWebGL2Features,
	webGLFeatures: getWebGLFeatures,

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
