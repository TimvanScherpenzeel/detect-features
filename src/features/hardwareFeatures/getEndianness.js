export default (() => {
	if (window.ArrayBuffer !== null) {
		const buffer = new ArrayBuffer(4);
		const intView = new Uint32Array(buffer);
		const byteView = new Uint8Array(buffer);
		intView[0] = 1;

		return (byteView[0] === 1) ? 'little' : 'big';
	} else {
		return 'Unknown';
	}
})();
