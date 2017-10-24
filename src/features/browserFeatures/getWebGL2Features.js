export default (() => {
	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl2');

	/* eslint-disable no-undef */
	if(!gl || !gl instanceof WebGL2RenderingContext) return false;
	/* eslint-enable no-undef */

	const glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');

	const features = {
		renderer: gl.getParameter(gl.RENDERER),
		vendor: gl.getParameter(gl.VENDOR),
		version: gl.getParameter(gl.VERSION),
		shaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
		rendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),
		vendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),

		supportedExtensions: gl.getSupportedExtensions(),
		antialias: !!gl.getContextAttributes().antialias,

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

		vertexShaderHighPrecision: [
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMin,
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMax,
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision,
		],

		vertexShaderMediumPrecision: [
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin,
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax,
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision,
		],

		vertexShaderLowPrecision: [
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMin,
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMax,
			gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).precision,
		],

		fragmentShaderHighPrecision: [
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMin,
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMax,
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision,
		],

		fragmentShaderMediumPrecision: [
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMin,
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMax,
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision,
		],

		fragmentShaderLowPrecision: [
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMin,
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMax,
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).precision,
		],
		
		maxVertexUniformComponents: gl.getParameter(gl.MAX_VERTEX_UNIFORM_COMPONENTS),
		maxVertexUniformBlocks: gl.getParameter(gl.MAX_VERTEX_UNIFORM_BLOCKS),
		maxVertexOutputComponents: gl.getParameter(gl.MAX_VERTEX_OUTPUT_COMPONENTS),
		maxVaryingComponents: gl.getParameter(gl.MAX_VARYING_COMPONENTS),
		maxFragmentUniformComponents: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_COMPONENTS),
		maxFragmentUniformBlocks: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_BLOCKS),
		maxFragmentInputComponents: gl.getParameter(gl.MAX_FRAGMENT_INPUT_COMPONENTS),
		minProgramTexelOffset: gl.getParameter(gl.MIN_PROGRAM_TEXEL_OFFSET),
		maxProgramTexelOffset: gl.getParameter(gl.MAX_PROGRAM_TEXEL_OFFSET),
		maxDrawBuffers: gl.getParameter(gl.MAX_DRAW_BUFFERS),
		maxColorAttachments: gl.getParameter(gl.MAX_COLOR_ATTACHMENTS),
		maxSamples: gl.getParameter(gl.MAX_SAMPLES),
		max3dTextureSize: gl.getParameter(gl.MAX_3D_TEXTURE_SIZE),
		maxArrayTextureLayers: gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS),
		maxTextureLodBias: gl.getParameter(gl.MAX_TEXTURE_LOD_BIAS),
		maxUniformBufferBindings: gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS),
		maxUniformBlockSize: gl.getParameter(gl.MAX_UNIFORM_BLOCK_SIZE),
		uniformBufferOffsetAlignment: gl.getParameter(gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT),
		maxCombinedUniformBlocks: gl.getParameter(gl.MAX_COMBINED_UNIFORM_BLOCKS),
		maxCombinedVertexUniformComponents: gl.getParameter(gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS),
		maxCombinedFragmentUniformComponents: gl.getParameter(gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS),
		maxTransformFeedbackInterleavedComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS),
		maxTransformFeedbackSeparateAttribs: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS),
		maxTransformFeedbackSeparateComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS),
		maxElementIndex: gl.getParameter(gl.MAX_ELEMENT_INDEX),
		maxServerWaitTimeout: gl.getParameter(gl.MAX_SERVER_WAIT_TIMEOUT),
	};

	return features;
})();
