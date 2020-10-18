/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Vendor
import {
  GL_ALIASED_LINE_WIDTH_RANGE,
  GL_ALIASED_POINT_SIZE_RANGE,
  GL_ALPHA_BITS,
  GL_BLUE_BITS,
  GL_DEPTH_BITS,
  GL_FRAGMENT_SHADER,
  GL_GREEN_BITS,
  GL_HIGH_FLOAT,
  GL_LOW_FLOAT,
  GL_MAX_3D_TEXTURE_SIZE,
  GL_MAX_ARRAY_TEXTURE_LAYERS,
  GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL,
  GL_MAX_COLOR_ATTACHMENTS,
  GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS,
  GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS,
  GL_MAX_COMBINED_UNIFORM_BLOCKS,
  GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS,
  GL_MAX_CUBE_MAP_TEXTURE_SIZE,
  GL_MAX_DRAW_BUFFERS,
  GL_MAX_ELEMENT_INDEX,
  GL_MAX_ELEMENTS_INDICES,
  GL_MAX_ELEMENTS_VERTICES,
  GL_MAX_FRAGMENT_INPUT_COMPONENTS,
  GL_MAX_FRAGMENT_UNIFORM_BLOCKS,
  GL_MAX_FRAGMENT_UNIFORM_COMPONENTS,
  GL_MAX_FRAGMENT_UNIFORM_VECTORS,
  GL_MAX_PROGRAM_TEXEL_OFFSET,
  GL_MAX_RENDERBUFFER_SIZE,
  GL_MAX_SAMPLES,
  GL_MAX_SERVER_WAIT_TIMEOUT,
  GL_MAX_TEXTURE_IMAGE_UNITS,
  GL_MAX_TEXTURE_LOD_BIAS,
  GL_MAX_TEXTURE_SIZE,
  GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS,
  GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS,
  GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS,
  GL_MAX_UNIFORM_BLOCK_SIZE,
  GL_MAX_UNIFORM_BUFFER_BINDINGS,
  GL_MAX_VARYING_COMPONENTS,
  GL_MAX_VARYING_VECTORS,
  GL_MAX_VERTEX_ATTRIBS,
  GL_MAX_VERTEX_OUTPUT_COMPONENTS,
  GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS,
  GL_MAX_VERTEX_UNIFORM_BLOCKS,
  GL_MAX_VERTEX_UNIFORM_COMPONENTS,
  GL_MAX_VERTEX_UNIFORM_VECTORS,
  GL_MAX_VIEWPORT_DIMS,
  GL_MEDIUM_FLOAT,
  GL_MIN_PROGRAM_TEXEL_OFFSET,
  GL_RED_BITS,
  GL_RENDERER,
  GL_SHADING_LANGUAGE_VERSION,
  GL_STENCIL_BITS,
  GL_STENCIL_TEST,
  GL_SUBPIXEL_BITS,
  GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT,
  GL_VENDOR,
  GL_VERSION,
  GL_VERTEX_SHADER,
} from 'webgl-constants';

// Features
import {
  getExtension,
  getParameter,
  getShaderPrecisionFormat,
} from './getWebGLFeatures';

/**
 * Collect and structure all major device and browser specific WebGL2 features
 */
// TODO: add proper type definition
export default ((): any => {
  const attributes = {
    stencil: true,
  };

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2', attributes);

  if (!gl || !(gl instanceof WebGL2RenderingContext)) {
    return false;
  }

  const glExtensionDebugRendererInfo = getExtension(
    gl,
    'WEBGL_debug_renderer_info'
  );

  // Enable features
  gl.enable(GL_STENCIL_TEST);

  // Enable extensions
  const glAnisotropicExtension =
    getExtension(gl, 'EXT_texture_filter_anisotropic') ||
    getExtension(gl, 'WEBKIT_EXT_texture_filter_anisotropic') ||
    getExtension(gl, 'MOZ_EXT_texture_filter_anisotropic');

  const features = {
    // Base
    base: {
      renderer: getParameter(gl, GL_RENDERER),
      rendererUnmasked:
        glExtensionDebugRendererInfo &&
        getParameter(gl, glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),
      shaderVersion: getParameter(gl, GL_SHADING_LANGUAGE_VERSION),
      vendor: getParameter(gl, GL_VENDOR),
      vendorUnmasked:
        glExtensionDebugRendererInfo &&
        getParameter(gl, glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),
      version: getParameter(gl, GL_VERSION),
    },

    // General
    general: {
      aliasedLineWidthRange: getParameter(
        gl,
        GL_ALIASED_LINE_WIDTH_RANGE
      ).toString(),
      aliasedPointSizeRange: getParameter(
        gl,
        GL_ALIASED_POINT_SIZE_RANGE
      ).toString(),
      alphaBits: getParameter(gl, GL_ALPHA_BITS),
      // @ts-ignore gl.getContextAttributes could return null
      antialias: !!gl.getContextAttributes().antialias,
      blueBits: getParameter(gl, GL_BLUE_BITS),
      depthBits: getParameter(gl, GL_DEPTH_BITS),
      greenBits: getParameter(gl, GL_GREEN_BITS),
      maxCombinedTextureImageUnits: getParameter(
        gl,
        GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS
      ),
      maxCubeMapTextureSize: getParameter(gl, GL_MAX_CUBE_MAP_TEXTURE_SIZE),
      maxFragmentUniformVectors: getParameter(
        gl,
        GL_MAX_FRAGMENT_UNIFORM_VECTORS
      ),
      maxRenderBufferSize: getParameter(gl, GL_MAX_RENDERBUFFER_SIZE),
      maxTextureImageUnits: getParameter(gl, GL_MAX_TEXTURE_IMAGE_UNITS),
      maxTextureSize: getParameter(gl, GL_MAX_TEXTURE_SIZE),
      maxVaryingVectors: getParameter(gl, GL_MAX_VARYING_VECTORS),
      maxVertexAttributes: getParameter(gl, GL_MAX_VERTEX_ATTRIBS),
      maxVertexTextureImageUnits: getParameter(
        gl,
        GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS
      ),
      maxVertexUniformVectors: getParameter(gl, GL_MAX_VERTEX_UNIFORM_VECTORS),
      maxViewportDimensions: getParameter(gl, GL_MAX_VIEWPORT_DIMS).toString(),
      precision: {
        fragmentShaderHighPrecision: [
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_HIGH_FLOAT)
            .rangeMin,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_HIGH_FLOAT)
            .rangeMax,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_HIGH_FLOAT)
            .precision,
        ].toString(),

        fragmentShaderLowPrecision: [
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_LOW_FLOAT)
            .rangeMin,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_LOW_FLOAT)
            .rangeMax,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_LOW_FLOAT)
            .precision,
        ].toString(),

        fragmentShaderMediumPrecision: [
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_MEDIUM_FLOAT)
            .rangeMin,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_MEDIUM_FLOAT)
            .rangeMax,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_FRAGMENT_SHADER, GL_MEDIUM_FLOAT)
            .precision,
        ].toString(),

        vertexShaderHighPrecision: [
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_HIGH_FLOAT)
            .rangeMin,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_HIGH_FLOAT)
            .rangeMax,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_HIGH_FLOAT)
            .precision,
        ].toString(),

        vertexShaderLowPrecision: [
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_LOW_FLOAT).rangeMin,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_LOW_FLOAT).rangeMax,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_LOW_FLOAT)
            .precision,
        ].toString(),

        vertexShaderMediumPrecision: [
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_MEDIUM_FLOAT)
            .rangeMin,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_MEDIUM_FLOAT)
            .rangeMax,
          // @ts-ignore gl.getShaderPrecisionFormat could return null
          getShaderPrecisionFormat(gl, GL_VERTEX_SHADER, GL_MEDIUM_FLOAT)
            .precision,
        ].toString(),
      },
      redBits: getParameter(gl, GL_RED_BITS),
      stencilBits: getParameter(gl, GL_STENCIL_BITS),
      subPixelBits: getParameter(gl, GL_SUBPIXEL_BITS),
    },

    // Extensions
    extensions: {
      maxAnisotropy: glAnisotropicExtension
        ? getParameter(
            gl,
            glAnisotropicExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT
          )
        : 0,
      supportedExtensions: gl.getSupportedExtensions(),

      // Compressed texture extensions
      compressedTextureASTCExtension:
        getExtension(gl, 'WEBGL_compressed_texture_astc') || null,
      compressedTextureATCExtension:
        getExtension(gl, 'WEBGL_compressed_texture_atc') || null,
      compressedTextureETC1Extension:
        getExtension(gl, 'WEBGL_compressed_texture_etc1') || null,
      compressedTextureETCExtension:
        getExtension(gl, 'WEBGL_compressed_texture_etc') || null,
      compressedTexturePVRTCExtension:
        getExtension(gl, 'WEBGL_compressed_texture_pvrtc') ||
        getExtension(gl, 'WEBKIT_WEBGL_compressed_texture_pvrtc') ||
        null,
      compressedTextureS3TCExtension:
        getExtension(gl, 'WEBGL_compressed_texture_s3tc') || null,
      compressedTextureS3TCSRGBExtension:
        getExtension(gl, 'WEBGL_compressed_texture_s3tc_srgb') || null,
    },

    // WebGL2 specific
    specific: {
      max3DTextureSize: getParameter(gl, GL_MAX_3D_TEXTURE_SIZE),
      maxArrayTextureLayers: getParameter(gl, GL_MAX_ARRAY_TEXTURE_LAYERS),
      maxClientWaitTimeout: getParameter(gl, GL_MAX_CLIENT_WAIT_TIMEOUT_WEBGL),
      maxColorAttachments: getParameter(gl, GL_MAX_COLOR_ATTACHMENTS),
      maxCombinedFragmentUniformComponents: getParameter(
        gl,
        GL_MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS
      ),
      maxCombinedUniformBlocks: getParameter(
        gl,
        GL_MAX_COMBINED_UNIFORM_BLOCKS
      ),
      maxCombinedVertexUniformComponents: getParameter(
        gl,
        GL_MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS
      ),
      maxDrawBuffers: getParameter(gl, GL_MAX_DRAW_BUFFERS),
      maxElementIndex: getParameter(gl, GL_MAX_ELEMENT_INDEX),
      maxElementsIndices: getParameter(gl, GL_MAX_ELEMENTS_INDICES),
      maxElementsVertices: getParameter(gl, GL_MAX_ELEMENTS_VERTICES),
      maxFragmentInputComponents: getParameter(
        gl,
        GL_MAX_FRAGMENT_INPUT_COMPONENTS
      ),
      maxFragmentUniformBlocks: getParameter(
        gl,
        GL_MAX_FRAGMENT_UNIFORM_BLOCKS
      ),
      maxFragmentUniformComponents: getParameter(
        gl,
        GL_MAX_FRAGMENT_UNIFORM_COMPONENTS
      ),
      maxProgramTexelOffset: getParameter(gl, GL_MAX_PROGRAM_TEXEL_OFFSET),
      maxSamples: getParameter(gl, GL_MAX_SAMPLES),
      maxServerWaitTimeout: getParameter(gl, GL_MAX_SERVER_WAIT_TIMEOUT),
      maxTextureLODBias: getParameter(gl, GL_MAX_TEXTURE_LOD_BIAS),
      maxTransformFeedbackInterleavedComponents: getParameter(
        gl,
        GL_MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS
      ),
      maxTransformFeedbackSeparateAttribs: getParameter(
        gl,
        GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS
      ),
      maxTransformFeedbackSeparateComponents: getParameter(
        gl,
        GL_MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS
      ),
      maxUniformBlockSize: getParameter(gl, GL_MAX_UNIFORM_BLOCK_SIZE),
      maxUniformBufferBindings: getParameter(
        gl,
        GL_MAX_UNIFORM_BUFFER_BINDINGS
      ),
      maxVaryingComponents: getParameter(gl, GL_MAX_VARYING_COMPONENTS),
      maxVertexOutputComponents: getParameter(
        gl,
        GL_MAX_VERTEX_OUTPUT_COMPONENTS
      ),
      maxVertexUniformBlocks: getParameter(gl, GL_MAX_VERTEX_UNIFORM_BLOCKS),
      maxVertexUniformComponents: getParameter(
        gl,
        GL_MAX_VERTEX_UNIFORM_COMPONENTS
      ),
      minProgramTexelOffset: getParameter(gl, GL_MIN_PROGRAM_TEXEL_OFFSET),
      uniformBufferOffsetAlignment: getParameter(
        gl,
        GL_UNIFORM_BUFFER_OFFSET_ALIGNMENT
      ),
    },
  };

  return features;
})();
