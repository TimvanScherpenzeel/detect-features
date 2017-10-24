export default (() => {
	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

	/* eslint-disable no-undef */
	if(!gl || !gl instanceof WebGLRenderingContext) return false;
	/* eslint-enable no-undef */

	const glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');

	console.log(gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT));

	const features = {
		renderer: gl.getParameter(gl.RENDERER),
		vendor: gl.getParameter(gl.VENDOR),
		version: gl.getParameter(gl.VERSION),
		shaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
		rendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),
		vendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),

		supportedExtensions: gl.getSupportedExtensions(),
		antialias: gl.getContextAttributes().antialias ? true : false,

		redBits: gl.getParameter(gl.RED_BITS),
		greenBits: gl.getParameter(gl.GREEN_BITS),
		blueBits: gl.getParameter(gl.BLUE_BITS),
		alphaBits: gl.getParameter(gl.ALPHA_BITS),
		depthBits: gl.getParameter(gl.DEPTH_BITS),
		stencilBits: gl.getParameter(gl.STENCIL_BITS),

		maxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
		maxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
		maxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
		maxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
		maxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
		maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
		maxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),
		maxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
		maxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
		maxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
		aliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),
		aliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),
		maxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS),

		vertexShaderHighPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT),
		vertexShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT),
		vertexShaderLowPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT),

		fragmentShaderHighPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT),
		fragmentShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT),
		fragmentShaderLowPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT),
	};

	console.log(features);

	return features;
})();
