import isWebVRSupported from './isWebVRSupported';

export default (() => {
	if (isWebVRSupported) {
		navigator.getVRDisplays().then((displays) => {
			if (displays.length === 0) {
				return false;
			} else {
				return true;
			}
		});
	} else {
		return false;
	}
})();
