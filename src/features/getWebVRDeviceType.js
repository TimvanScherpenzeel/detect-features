import isWebVRSupported from './isWebVRSupported';

export default (() => {
	if (isWebVRSupported) {
		navigator.getVRDisplays()
			.then((displays) => {
				if (displays.length > 0) {
					const displayName = displays[0].displayName;

					if (/daydream/i.test(displayName)) {
						return 'Google Daydream';
					} else if (/vive/i.test(displayName)) {
						return 'HTC Vive';
					} else if (/oculus/i.test(displayName)) {
						return 'Oculus Rift';
					} else if (/SamsungBrowser.+Mobile VR/i.test(window.navigator.userAgent)) {
						return 'Samsung GearVR';
					} else {
						return 'Unknown';
					}
				} else {
					return false;
				}
			});
	} else {
		return false;
	}
})();
