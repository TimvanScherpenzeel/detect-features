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
    "browserType": {
      "browserName": "Chrome",
      "browserVersion": "63.0.3239.132",
      "browserEngineName": "WebKit",
      "browserEngineVersion": "537.36",
      "operatingSystemName": "Mac OS",
      "operatingSystemVersion": "10.12.6",
      "deviceModel": "Unknown",
      "deviceType": "Unknown",
      "deviceVendor": "Unknown"
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
    "isWebVRSupported": false,
    "isWebWorkerSupported": true,
    "webGL2Features": {
      "renderer": "WebKit WebGL",
      "vendor": "WebKit",
      "version": "WebGL 2.0 (OpenGL ES 3.0 Chromium)",
      "shaderVersion": "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)",
      "rendererUnmasked": "AMD Radeon R9 M370X OpenGL Engine",
      "vendorUnmasked": "ATI Technologies Inc.",
      "supportedExtensions": {
        "EXT_color_buffer_float": true,
        "EXT_disjoint_timer_query_webgl2": true,
        "EXT_texture_filter_anisotropic": true,
        "OES_texture_float_linear": true,
        "WEBGL_compressed_texture_s3tc": true,
        "WEBGL_compressed_texture_s3tc_srgb": true,
        "WEBGL_debug_renderer_info": true,
        "WEBGL_debug_shaders": true,
        "WEBGL_lose_context": true
      },
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
      "maxVaryingVectors": 32,
      "maxVertexAttributes": 16,
      "maxVertexTextureImageUnits": 16,
      "maxVertexUniformVectors": 1024,
      "aliasedLineWidthRange": "1,1",
      "aliasedPointSizeRange": "1,8191",
      "maxViewportDimensions": "16384,16384",
      "maxVertexUniformComponents": 4096,
      "maxVertexUniformBlocks": 16,
      "maxVertexOutputComponents": 128,
      "maxVaryingComponents": 128,
      "maxFragmentUniformComponents": 4096,
      "maxFragmentUniformBlocks": 16,
      "maxFragmentInputComponents": 128,
      "minProgramTexelOffset": -8,
      "maxProgramTexelOffset": 7,
      "maxDrawBuffers": 8,
      "maxColorAttachments": 8,
      "maxSamples": 8,
      "max3dTextureSize": 16384,
      "maxArrayTextureLayers": 2048,
      "maxTextureLodBias": 16,
      "maxUniformBufferBindings": 80,
      "maxUniformBlockSize": 65536,
      "uniformBufferOffsetAlignment": 256,
      "maxCombinedUniformBlocks": 80,
      "maxCombinedVertexUniformComponents": 266240,
      "maxCombinedFragmentUniformComponents": 266240,
      "maxTransformFeedbackInterleavedComponents": 64,
      "maxTransformFeedbackSeparateAttribs": 4,
      "maxTransformFeedbackSeparateComponents": 4,
      "maxElementIndex": 4294967295,
      "maxServerWaitTimeout": 0,
      "vertexShaderHighPrecision": "127,127,23",
      "vertexShaderMediumPrecision": "127,127,23",
      "vertexShaderLowPrecision": "127,127,23",
      "fragmentShaderHighPrecision": "127,127,23",
      "fragmentShaderMediumPrecision": "127,127,23",
      "fragmentShaderLowPrecision": "127,127,23"
    },
    "webGLFeatures": {
      "renderer": "WebKit WebGL",
      "vendor": "WebKit",
      "version": "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
      "shaderVersion": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
      "rendererUnmasked": "AMD Radeon R9 M370X OpenGL Engine",
      "vendorUnmasked": "ATI Technologies Inc.",
      "supportedExtensions": {
        "ANGLE_instanced_arrays": true,
        "EXT_blend_minmax": true,
        "EXT_color_buffer_half_float": true,
        "EXT_disjoint_timer_query": true,
        "EXT_frag_depth": true,
        "EXT_shader_texture_lod": true,
        "EXT_texture_filter_anisotropic": true,
        "WEBKIT_EXT_texture_filter_anisotropic": true,
        "EXT_sRGB": true,
        "OES_element_index_uint": true,
        "OES_standard_derivatives": true,
        "OES_texture_float": true,
        "OES_texture_float_linear": true,
        "OES_texture_half_float": true,
        "OES_texture_half_float_linear": true,
        "OES_vertex_array_object": true,
        "WEBGL_color_buffer_float": true,
        "WEBGL_compressed_texture_s3tc": true,
        "WEBKIT_WEBGL_compressed_texture_s3tc": true,
        "WEBGL_compressed_texture_s3tc_srgb": true,
        "WEBGL_debug_renderer_info": true,
        "WEBGL_debug_shaders": true,
        "WEBGL_depth_texture": true,
        "WEBKIT_WEBGL_depth_texture": true,
        "WEBGL_draw_buffers": true,
        "WEBGL_lose_context": true,
        "WEBKIT_WEBGL_lose_context": true
      },
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
      "maxVaryingVectors": 32,
      "maxVertexAttributes": 16,
      "maxVertexTextureImageUnits": 16,
      "maxVertexUniformVectors": 1024,
      "aliasedLineWidthRange": "1,1",
      "aliasedPointSizeRange": "1,8191",
      "maxViewportDimensions": "16384,16384",
      "vertexShaderHighPrecision": "127,127,23",
      "vertexShaderMediumPrecision": "127,127,23",
      "vertexShaderLowPrecision": "127,127,23",
      "fragmentShaderHighPrecision": "127,127,23",
      "fragmentShaderMediumPrecision": "127,127,23",
      "fragmentShaderLowPrecision": "127,127,23"
    }
  },
  "browserSettings": {
    "isCookieEnabled": true,
    "isDoNotTrackEnabled": false
  },
  "hardwareFeatures": {
    "devicePixelRatio": 1,
    "workerPoolSize": 8,
    "endianness": "little"
  }
}
```
