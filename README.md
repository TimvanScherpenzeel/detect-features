# Feature analytics

Reports hardware features and browser support of features to Google Analytics.

## Usage
```javascript
FeatureAnalytics.register({
    trackingId: 'UA-XXXXXXXX-Y',
    verbose: true,
});
```

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
  npm install
```

## Development

```sh
  npm start

  npm run lint

  npm run dist
```

## Reported features (verbose mode)
```json
{
  "browserFeatures": {
    "isGamepadSupported": true,
    "isRequestIdleCallbackSupported": true,
    "isServiceWorkerSupported": true,
    "isWebAssemblySupported": true,
    "isWebAudioSupported": true,
    "isWebGL2Supported": true,
    "isWebGLSupported": true,
    "isWebRTCSupported": true,
    "isWebSocketSupported": true,
    "isWebVRSupported": false,
    "isWebWorkerSupported": true,
    "webGL2Features": {
      "renderer": "WebKit WebGL",
      "vendor": "WebKit",
      "version": "WebGL 2.0 (OpenGL ES 3.0 Chromium)",
      "shaderVersion": "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)",
      "rendererUnmasked": "NVIDIA GeForce GT 650M OpenGL Engine",
      "vendorUnmasked": "NVIDIA Corporation",
      "supportedExtensions": [
        "EXT_color_buffer_float",
        "EXT_disjoint_timer_query_webgl2",
        "EXT_texture_filter_anisotropic",
        "OES_texture_float_linear",
        "WEBGL_compressed_texture_s3tc",
        "WEBGL_compressed_texture_s3tc_srgb",
        "WEBGL_debug_renderer_info",
        "WEBGL_debug_shaders",
        "WEBGL_get_buffer_sub_data_async",
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
      "maxFragmentUniformVectors": 512,
      "maxTextureImageUnits": 16,
      "maxTextureSize": 16384,
      "maxVaryingVectors": 31,
      "maxVertexAttributes": 16,
      "maxVertexTextureImageUnits": 16,
      "maxVertexUniformVectors": 1024,
      "aliasedLineWidthRange": {
        "0": 1,
        "1": 1
      },
      "aliasedPointSizeRange": {
        "0": 1,
        "1": 2047
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
      "maxVertexUniformBlocks": 14,
      "maxVertexOutputComponents": 128,
      "maxVaryingComponents": 124,
      "maxFragmentUniformComponents": 2048,
      "maxFragmentUniformBlocks": 14,
      "maxFragmentInputComponents": 128,
      "minProgramTexelOffset": -8,
      "maxProgramTexelOffset": 7,
      "maxDrawBuffers": 8,
      "maxColorAttachments": 8,
      "maxSamples": 8,
      "max3dTextureSize": 2048,
      "maxArrayTextureLayers": 2048,
      "maxTextureLodBias": 15,
      "maxUniformBufferBindings": 70,
      "maxUniformBlockSize": 65536,
      "uniformBufferOffsetAlignment": 256,
      "maxCombinedUniformBlocks": 70,
      "maxCombinedVertexUniformComponents": 233472,
      "maxCombinedFragmentUniformComponents": 231424,
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
      "rendererUnmasked": "NVIDIA GeForce GT 650M OpenGL Engine",
      "vendorUnmasked": "NVIDIA Corporation",
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
      "maxFragmentUniformVectors": 512,
      "maxTextureImageUnits": 16,
      "maxTextureSize": 16384,
      "maxVaryingVectors": 31,
      "maxVertexAttributes": 16,
      "maxVertexTextureImageUnits": 16,
      "maxVertexUniformVectors": 1024,
      "aliasedLineWidthRange": {
        "0": 1,
        "1": 1
      },
      "aliasedPointSizeRange": {
        "0": 1,
        "1": 2047
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
    }
  },
  "browserSettings": {
    "isCookieEnabled": true,
    "isDoNotTrackEnabled": true
  },
  "hardwareFeatures": {
    "devicePixelRatio": 1,
    "workerPoolSize": 8,
    "endianness": "little"
  }
}
```
