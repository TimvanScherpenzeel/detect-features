export default (() => {
	return navigator.hardwareConcurrency || 0;
})();