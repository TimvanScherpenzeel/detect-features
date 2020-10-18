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
  GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS,
  GL_MAX_CUBE_MAP_TEXTURE_SIZE,
  GL_MAX_FRAGMENT_UNIFORM_VECTORS,
  GL_MAX_RENDERBUFFER_SIZE,
  GL_MAX_TEXTURE_IMAGE_UNITS,
  GL_MAX_TEXTURE_SIZE,
  GL_MAX_VARYING_VECTORS,
  GL_MAX_VERTEX_ATTRIBS,
  GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS,
  GL_MAX_VERTEX_UNIFORM_VECTORS,
  GL_MAX_VIEWPORT_DIMS,
  GL_MEDIUM_FLOAT,
  GL_RED_BITS,
  GL_RENDERER,
  GL_SHADING_LANGUAGE_VERSION,
  GL_STENCIL_BITS,
  GL_STENCIL_TEST,
  GL_SUBPIXEL_BITS,
  GL_VENDOR,
  GL_VERSION,
  GL_VERTEX_SHADER,
} from 'webgl-constants';

/**
 * Wrapper function for better minification (saves ~ 1kB)
 *
 * @param gl WebGL rendering context
 * @param parameter Context parameter
 */
export const getParameter = (
  gl: WebGLRenderingContext | WebGL2RenderingContext,
  parameter: GLenum
): any => gl.getParameter(parameter);

/**
 * Wrapper function for better minification (saves ~ 1kB)
 *
 * @param gl WebGL rendering context
 * @param shaderType Shader type
 * @param precisionType Precision type
 */
export const getShaderPrecisionFormat = (
  gl: WebGLRenderingContext | WebGL2RenderingContext,
  shaderType: GLenum,
  precisionType: GLenum
): any => gl.getShaderPrecisionFormat(shaderType, precisionType);

/**
 * Wrapper function for better minification (saves ~ 1kB)
 *
 * @param gl WebGL rendering context
 * @param extension WebGL extension
 */
export const getExtension = (
  gl: WebGLRenderingContext | WebGL2RenderingContext,
  extension: string
): any => gl.getExtension(extension);

/**
 * Collect and structure all major device and browser specific WebGL features
 */
// TODO: add proper type definition
export default ((): any => {
  const attributes = {
    stencil: true,
  };

  const canvas = document.createElement('canvas');
  const gl =
    canvas.getContext('webgl', attributes) ||
    canvas.getContext('experimental-webgl', attributes);

  if (!gl || !(gl instanceof WebGLRenderingContext)) {
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
  const glDrawBufferExtension = getExtension(gl, 'WEBGL_draw_buffers');

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
      maxDrawBuffers: glDrawBufferExtension
        ? getParameter(gl, glDrawBufferExtension.MAX_DRAW_BUFFERS_WEBGL)
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
  };

  return features;
})();
