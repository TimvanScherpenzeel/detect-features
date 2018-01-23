export default (() => {
	return !!window.AudioContext || !!window.webkitAudioContext || false;
})();
