export default (() => {
	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

	/* eslint-disable no-undef */
	if (!gl || !(gl instanceof WebGLRenderingContext)) return false;
	/* eslint-enable no-undef */

	const glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');

	const features = {
		// Base
		base: {
			shaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
			renderer: gl.getParameter(gl.RENDERER),
			rendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),
			vendor: gl.getParameter(gl.VENDOR),
			vendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),
			version: gl.getParameter(gl.VERSION),
		},

		// General
		general: {
			aliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE).toString(),
			aliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE).toString(),
			alphaBits: gl.getParameter(gl.ALPHA_BITS),
			antialias: !!gl.getContextAttributes().antialias,
			blueBits: gl.getParameter(gl.BLUE_BITS),
			depthBits: gl.getParameter(gl.DEPTH_BITS),
			greenBits: gl.getParameter(gl.GREEN_BITS),
			maxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
			maxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
			maxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
			maxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
			maxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
			maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
			maxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),
			maxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
			maxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
			maxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
			maxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS).toString(),
			precision: {
				fragmentShaderHighPrecision: [
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMin,
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMax,
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision,
				].toString(),
	
				fragmentShaderLowPrecision: [
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMin,
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMax,
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).precision,
				].toString(),

				fragmentShaderMediumPrecision: [
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMin,
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMax,
					gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision,
				].toString(),

				vertexShaderHighPrecision: [
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMin,
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMax,
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision,
				].toString(),

				vertexShaderLowPrecision: [
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMin,
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMax,
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).precision,
				].toString(),

				vertexShaderMediumPrecision: [
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin,
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax,
					gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision,
				].toString(),
			},
			redBits: gl.getParameter(gl.RED_BITS),
			stencilBits: gl.getParameter(gl.STENCIL_BITS),
			supportedExtensions: gl.getSupportedExtensions().reduce((obj, key) => ({ ...obj, [key]: true }), {}),
		},
	};

	return features;
})();
