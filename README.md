# Feature detector

Reports hardware features and browser support of features.

## Demo

[Live demo](https://timvanscherpenzeel.github.io/feature-detector/)

## Usage
```javascript
  FeatureDetector.register({
      log: true,
      element: document.getElementById('app'),
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

  npm run serve

  npm run lint

  npm run dist
```

## Reported features
```json
{
  "browserFeatures": {
    "browserType": {
      "browserEngineName": "WebKit",
      "browserEngineVersion": "537.36",
      "browserName": "Chrome",
      "browserVersion": "64.0.3282.186",
      "deviceModel": "Unknown",
      "deviceType": "Unknown",
      "deviceVendor": "Unknown",
      "operatingSystemName": "Mac OS",
      "operatingSystemVersion": "10.13.3"
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
      "base": {
        "shaderVersion": "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)",
        "renderer": "WebKit WebGL",
        "rendererUnmasked": "Intel(R) Iris(TM) Plus Graphics 640",
        "vendor": "WebKit",
        "vendorUnmasked": "Intel Inc.",
        "version": "WebGL 2.0 (OpenGL ES 3.0 Chromium)"
      },
      "general": {
        "aliasedLineWidthRange": "1,1",
        "aliasedPointSizeRange": "1,255.875",
        "alphaBits": 8,
        "antialias": true,
        "blueBits": 8,
        "depthBits": 24,
        "greenBits": 8,
        "maxCombinedTextureImageUnits": 80,
        "maxCubeMapTextureSize": 16384,
        "maxFragmentUniformVectors": 1024,
        "maxRenderBufferSize": 16384,
        "maxTextureImageUnits": 16,
        "maxTextureSize": 16384,
        "maxVaryingVectors": 15,
        "maxVertexAttributes": 16,
        "maxVertexTextureImageUnits": 16,
        "maxVertexUniformVectors": 1024,
        "maxViewportDimensions": "16384,16384",
        "precision": {
          "fragmentShaderHighPrecision": "127,127,23",
          "fragmentShaderLowPrecision": "127,127,23",
          "fragmentShaderMediumPrecision": "127,127,23",
          "vertexShaderHighPrecision": "127,127,23",
          "vertexShaderLowPrecision": "127,127,23",
          "vertexShaderMediumPrecision": "127,127,23"
        },
        "redBits": 8,
        "stencilBits": 8,
        "subPixelBits": 8
      },
      "extensions": {
        "maxAnisotropy": 16,
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
        }
      },
      "specific": {
        "max3DTextureSize": 2048,
        "maxArrayTextureLayers": 2048,
        "maxClientWaitTimeout": 0,
        "maxColorAttachments": 8,
        "maxCombinedFragmentUniformComponents": 249856,
        "maxCombinedVertexUniformComponents": 249856,
        "maxCombinedUniformBlocks": 75,
        "maxDrawBuffers": 8,
        "maxElementIndex": 4294967295,
        "maxElementsIndices": 150000,
        "maxElementsVertices": 1048575,
        "maxFragmentInputComponents": 128,
        "maxFragmentUniformBlocks": 15,
        "maxFragmentUniformComponents": 4096,
        "maxProgramTexelOffset": 7,
        "maxSamples": 16,
        "maxServerWaitTimeout": 0,
        "maxTextureLODBias": 16,
        "maxTransformFeedbackInterleavedComponents": 64,
        "maxTransformFeedbackSeparateAttribs": 4,
        "maxTransformFeedbackSeparateComponents": 4,
        "maxUniformBlockSize": 65536,
        "maxUniformBufferBindings": 75,
        "maxVaryingComponents": 60,
        "maxVertexUniformBlocks": 15,
        "maxVertexOutputComponents": 128,
        "maxVertexUniformComponents": 4096,
        "minProgramTexelOffset": -8,
        "uniformBufferOffsetAlignment": 256
      }
    },
    "webGLFeatures": {
      "base": {
        "shaderVersion": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
        "renderer": "WebKit WebGL",
        "rendererUnmasked": "Intel(R) Iris(TM) Plus Graphics 640",
        "vendor": "WebKit",
        "vendorUnmasked": "Intel Inc.",
        "version": "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
      },
      "general": {
        "aliasedLineWidthRange": "1,1",
        "aliasedPointSizeRange": "1,255.875",
        "alphaBits": 8,
        "antialias": true,
        "blueBits": 8,
        "depthBits": 24,
        "greenBits": 8,
        "maxCombinedTextureImageUnits": 80,
        "maxCubeMapTextureSize": 16384,
        "maxFragmentUniformVectors": 1024,
        "maxRenderBufferSize": 16384,
        "maxTextureImageUnits": 16,
        "maxTextureSize": 16384,
        "maxVaryingVectors": 15,
        "maxVertexAttributes": 16,
        "maxVertexTextureImageUnits": 16,
        "maxVertexUniformVectors": 1024,
        "maxViewportDimensions": "16384,16384",
        "precision": {
          "fragmentShaderHighPrecision": "127,127,23",
          "fragmentShaderLowPrecision": "127,127,23",
          "fragmentShaderMediumPrecision": "127,127,23",
          "vertexShaderHighPrecision": "127,127,23",
          "vertexShaderLowPrecision": "127,127,23",
          "vertexShaderMediumPrecision": "127,127,23"
        },
        "redBits": 8,
        "stencilBits": 8,
        "subPixelBits": 8
      },
      "extensions": {
        "maxAnisotropy": 16,
        "maxDrawBuffers": 8,
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
        }
      }
    }
  },
  "browserSettings": {
    "isCookieEnabled": true,
    "isDoNotTrackEnabled": false
  },
  "hardwareFeatures": {
    "devicePixelRatio": 1,
    "endianness": "little",
    "workerPoolSize": 4
  }
}
```

## Licence

My work is released under the [MIT license](https://raw.githubusercontent.com/TimvanScherpenzeel/feature-detector/master/LICENSE).