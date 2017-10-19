export default (() => {
	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl2');

	/* eslint-disable no-undef */
	return (gl && gl instanceof WebGL2RenderingContext);
	/* eslint-enable no-undef */
})();
