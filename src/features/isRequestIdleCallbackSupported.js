export default (() => {
	return !!window.requestIdleCallback || false;
})();