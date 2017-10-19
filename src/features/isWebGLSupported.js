export default (() => {
	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	return (gl && gl instanceof WebGLRenderingContext);
})();