export default (() => {
	const doNotTrack = navigator.doNotTrack || false;

	if (!!doNotTrack || doNotTrack === 'unspecified') {
		return false;
	} else {
		return true;
	}
})();
