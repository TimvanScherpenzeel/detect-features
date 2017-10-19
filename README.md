# Feature analytics

A general analytics instance to collect data on specific feature support.

## Example output

```json
{
  "features": {
    "devicePixelRatio": 2,
    "endian": "little",
    "workerPoolSize": 4,
    "webGL2Features": {
      "renderer": "WebKit WebGL",
      "vendor": "WebKit",
      "version": "WebGL 2.0 (OpenGL ES 3.0 Chromium)",
      "shaderVersion": "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)",
      "rendererUnmasked": "Intel(R) Iris(TM) Graphics 6100",
      "vendorUnmasked": "Intel",
      "supportedExtensions": [
        "EXT_color_buffer_float",
        "EXT_disjoint_timer_query_webgl2",
        "EXT_texture_filter_anisotropic",
        "OES_texture_float_linear",
        "WEBGL_compressed_texture_s3tc",
        "WEBGL_compressed_texture_s3tc_srgb",
        "WEBGL_debug_renderer_info",
        "WEBGL_debug_shaders",
        "WEBGL_lose_context"
      ],
      "antialias": true,
      "redBits": 8,
      "greenBits": 8,
      "blueBits": 8,
      "alphaBits": 8,
      "depthBits": 24,
      "stencilBits": 0,
      "maxRenderBufferSize": 16384,
      "maxCombinedTextureImageUnits": 80,
      "maxCubeMapTextureSize": 16384,
      "maxFragmentUniformVectors": 1024,
      "maxTextureImageUnits": 16,
      "maxTextureSize": 16384,
      "maxVaryingVectors": 15,
      "maxVertexAttributes": 16,
      "maxVertexTextureImageUnits": 16,
      "maxVertexUniformVectors": 1024,
      "aliasedLineWidthRange": {
        "0": 1,
        "1": 1
      },
      "aliasedPointSizeRange": {
        "0": 1,
        "1": 255.875
      },
      "maxViewportDimensions": {
        "0": 16384,
        "1": 16384
      },
      "vertexShaderHighPrecision": [
        127,
        127,
        23
      ],
      "vertexShaderMediumPrecision": [
        127,
        127,
        23
      ],
      "vertexShaderLowPrecision": [
        127,
        127,
        23
      ],
      "fragmentShaderHighPrecision": [
        127,
        127,
        23
      ],
      "fragmentShaderMediumPrecision": [
        127,
        127,
        23
      ],
      "fragmentShaderLowPrecision": [
        127,
        127,
        23
      ],
      "maxVertexUniformComponents": 4096,
      "maxVertexUniformBlocks": 15,
      "maxVertexOutputComponents": 128,
      "maxVaryingComponents": 60,
      "maxFragmentUniformComponents": 4096,
      "maxFragmentUniformBlocks": 15,
      "maxFragmentInputComponents": 128,
      "minProgramTexelOffset": -8,
      "maxProgramTexelOffset": 7,
      "maxDrawBuffers": 8,
      "maxColorAttachments": 8,
      "maxSamples": 8,
      "max3dTextureSize": 2048,
      "maxArrayTextureLayers": 2048,
      "maxTextureLodBias": 16,
      "maxUniformBufferBindings": 75,
      "maxUniformBlockSize": 65536,
      "uniformBufferOffsetAlignment": 256,
      "maxCombinedUniformBlocks": 75,
      "maxCombinedVertexUniformComponents": 249856,
      "maxCombinedFragmentUniformComponents": 249856,
      "maxTransformFeedbackInterleavedComponents": 64,
      "maxTransformFeedbackSeparateAttribs": 4,
      "maxTransformFeedbackSeparateComponents": 4,
      "maxElementIndex": 4294967295,
      "maxServerWaitTimeout": 0
    },
    "webGLFeatures": {
      "renderer": "WebKit WebGL",
      "vendor": "WebKit",
      "version": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
      "shaderVersion": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
      "rendererUnmasked": "Intel(R) Iris(TM) Graphics 6100",
      "vendorUnmasked": "Intel",
      "supportedExtensions": [
        "ANGLE_instanced_arrays",
        "EXT_blend_minmax",
        "EXT_disjoint_timer_query",
        "EXT_frag_depth",
        "EXT_shader_texture_lod",
        "EXT_sRGB",
        "EXT_texture_filter_anisotropic",
        "WEBKIT_EXT_texture_filter_anisotropic",
        "OES_element_index_uint",
        "OES_standard_derivatives",
        "OES_texture_float",
        "OES_texture_float_linear",
        "OES_texture_half_float",
        "OES_texture_half_float_linear",
        "OES_vertex_array_object",
        "WEBGL_compressed_texture_s3tc",
        "WEBKIT_WEBGL_compressed_texture_s3tc",
        "WEBGL_compressed_texture_s3tc_srgb",
        "WEBGL_debug_renderer_info",
        "WEBGL_debug_shaders",
        "WEBGL_depth_texture",
        "WEBKIT_WEBGL_depth_texture",
        "WEBGL_draw_buffers",
        "WEBGL_lose_context",
        "WEBKIT_WEBGL_lose_context"
      ],
      "antialias": true,
      "redBits": 8,
      "greenBits": 8,
      "blueBits": 8,
      "alphaBits": 8,
      "depthBits": 24,
      "stencilBits": 0,
      "maxRenderBufferSize": 16384,
      "maxCombinedTextureImageUnits": 80,
      "maxCubeMapTextureSize": 16384,
      "maxFragmentUniformVectors": 1024,
      "maxTextureImageUnits": 16,
      "maxTextureSize": 16384,
      "maxVaryingVectors": 15,
      "maxVertexAttributes": 16,
      "maxVertexTextureImageUnits": 16,
      "maxVertexUniformVectors": 1024,
      "aliasedLineWidthRange": {
        "0": 1,
        "1": 1
      },
      "aliasedPointSizeRange": {
        "0": 1,
        "1": 255.875
      },
      "maxViewportDimensions": {
        "0": 16384,
        "1": 16384
      },
      "vertexShaderHighPrecision": [
        127,
        127,
        23
      ],
      "vertexShaderMediumPrecision": [
        127,
        127,
        23
      ],
      "vertexShaderLowPrecision": [
        127,
        127,
        23
      ],
      "fragmentShaderHighPrecision": [
        127,
        127,
        23
      ],
      "fragmentShaderMediumPrecision": [
        127,
        127,
        23
      ],
      "fragmentShaderLowPrecision": [
        127,
        127,
        23
      ]
    },
    "isGamepadSupported": true,
    "isRequestIdleCallbackSupported": true,
    "isServiceWorkerSupported": true,
    "isWebAssemblySupported": true,
    "isWebAudioSupported": true,
    "isWebGL2Supported": true,
    "isWebGLSupported": true,
    "isWebRTCSupported": true,
    "isWebSocketSupported": true,
    "isWebVRDeviceAvailable": false,
    "isWebWorkerSupported": true
  }
}
```
