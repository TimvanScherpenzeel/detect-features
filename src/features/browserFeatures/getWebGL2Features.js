export default (() => {
	const attributes = {
		stencil: true,
	};

	const canvas = document.createElement('canvas');
	const gl = canvas.getContext('webgl2', attributes);

	/* eslint-disable no-undef */
	if (!gl || !(gl instanceof WebGL2RenderingContext)) return false;
	/* eslint-enable no-undef */

	const glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');

	// Enable features
	gl.enable(gl.STENCIL_TEST);

	// Enable extensions
	const glAnisotropicExtension = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');

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
			subPixelBits: gl.getParameter(gl.SUBPIXEL_BITS),

		},

		extensions: {
			maxAnisotropy: (glAnisotropicExtension) ? gl.getParameter(glAnisotropicExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
			supportedExtensions: gl.getSupportedExtensions().reduce((obj, key) => ({ ...obj, [key]: true }), {}),
		},

		// WebGL2 specific
		specific: {
			max3DTextureSize: gl.getParameter(gl.MAX_3D_TEXTURE_SIZE),
			maxArrayTextureLayers: gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS),
			maxClientWaitTimeout: gl.getParameter(gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL),
			maxColorAttachments: gl.getParameter(gl.MAX_COLOR_ATTACHMENTS),
			maxCombinedFragmentUniformComponents: gl.getParameter(gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS),
			maxCombinedVertexUniformComponents: gl.getParameter(gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS),
			maxCombinedUniformBlocks: gl.getParameter(gl.MAX_COMBINED_UNIFORM_BLOCKS),
			maxDrawBuffers: gl.getParameter(gl.MAX_DRAW_BUFFERS),
			maxElementIndex: gl.getParameter(gl.MAX_ELEMENT_INDEX),
			maxElementsIndices: gl.getParameter(gl.MAX_ELEMENT_INDICES),
			maxElementsVertices: gl.getParameter(gl.MAX_ELEMENT_VERTICES),
			maxFragmentInputComponents: gl.getParameter(gl.MAX_FRAGMENT_INPUT_COMPONENTS),
			maxFragmentUniformBlocks: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_BLOCKS),
			maxFragmentUniformComponents: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_COMPONENTS),
			maxProgramTexelOffset: gl.getParameter(gl.MAX_PROGRAM_TEXEL_OFFSET),
			maxSamples: gl.getParameter(gl.MAX_SAMPLES),
			maxServerWaitTimeout: gl.getParameter(gl.MAX_SERVER_WAIT_TIMEOUT),
			maxTextureLODBias: gl.getParameter(gl.MAX_TEXTURE_LOD_BIAS),
			maxTransformFeedbackInterleavedComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS),
			maxTransformFeedbackSeparateAttribs: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS),
			maxTransformFeedbackSeparateComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS),
			maxUniformBlockSize: gl.getParameter(gl.MAX_UNIFORM_BLOCK_SIZE),
			maxUniformBufferBindings: gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS),
			maxVaryingComponents: gl.getParameter(gl.MAX_VARYING_COMPONENTS),
			maxVertexUniformBlocks: gl.getParameter(gl.MAX_VERTEX_UNIFORM_BLOCKS),
			maxVertexOutputComponents: gl.getParameter(gl.MAX_VERTEX_OUTPUT_COMPONENTS),
			maxVertexUniformComponents: gl.getParameter(gl.MAX_VERTEX_UNIFORM_COMPONENTS),
			minProgramTexelOffset: gl.getParameter(gl.MIN_PROGRAM_TEXEL_OFFSET),
			uniformBufferOffsetAlignment: gl.getParameter(gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT),
		},
	};

	return features;
})();
