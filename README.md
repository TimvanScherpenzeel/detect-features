# Detect features

[![npm version](https://badge.fury.io/js/detect-features.svg)](https://badge.fury.io/js/detect-features)
[![gzip size](https://img.badgesize.io/https:/unpkg.com/detect-features/dist/detect-features.esm.js?compression=gzip)](https://unpkg.com/detect-features)
[![install size](https://packagephobia.now.sh/badge?p=detect-features)](https://packagephobia.now.sh/result?p=detect-features)

Detect and report browser and hardware features.

## Demo

[Live demo](https://timvanscherpenzeel.github.io/detect-features/)

## Installation

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
 $ npm install detect-features
```

## Usage

```ts
import { getFeatures } from 'detect-features';

(async () => {
  const features = await getFeatures();
})();
```

Example output

```json
{
  "browserFeatures": {
    "browserType": {
      "browserName": "Chrome",
      "browserVersion": "86.0",
      "isAndroid": false,
      "isChrome": true,
      "isChromium": false,
      "isDesktop": true,
      "isEdge": false,
      "isFirefox": false,
      "isInternetExplorer": false,
      "isMobile": false,
      "isOpera": false,
      "isSafari": false,
      "isSamsungBrowser": false,
      "isTablet": false,
      "isUCBrowser": false,
      "isYandexBrowser": false,
      "isiOS": false
    },
    "isAnimationWorkletSupported": false,
    "isAudioWorkletSupported": true,
    "isBroadcastChannelSupported": true,
    "isCryptoSupported": true,
    "isFetchSupported": true,
    "isGamepadSupported": true,
    "isImageBitmapSupported": true,
    "isImageDecodeSupported": true,
    "isIndexedDBSupported": true,
    "isIntersectionObserverSupported": true,
    "isLayoutWorkletSupported": false,
    "isLocalStorageSupported": true,
    "isMutationObserverSupported": true,
    "isOffscreenCanvasSupported": true,
    "isPaintWorkletSupported": true,
    "isPerformanceNowSupported": true,
    "isPerformanceObserverSupported": true,
    "isRequestIdleCallbackSupported": true,
    "isServiceWorkerSupported": true,
    "isSessionStorageSupported": true,
    "isUserActivationSupported": true,
    "isWebAssemblySupported": true,
    "isWebAudioSupported": true,
    "isWebGL2Supported": true,
    "isWebGLSupported": true,
    "isWebPSupported": true,
    "isWebRTCSupported": true,
    "isWebSocketSupported": true,
    "isWebVRSupported": false,
    "isWebWorkerInlineSupported": true,
    "isWebWorkerSupported": true,
    "isWebXRSupported": true,
    "mediaFeatures": {
      "audio": {
        "MP3": true,
        "Ogg": true,
        "WAV": true
      },
      "video": {
        "HLS": false,
        "MP4": true,
        "Ogg": true,
        "WebM": true
      }
    },
    "webGL2Features": {
      "base": {
        "renderer": "WebKit WebGL",
        "rendererUnmasked": "Intel(R) Iris(TM) Graphics 6100",
        "shaderVersion": "WebGL GLSL ES 3.00 (OpenGL ES GLSL ES 3.0 Chromium)",
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
        "supportedExtensions": [
          "EXT_color_buffer_float",
          "EXT_disjoint_timer_query_webgl2",
          "EXT_float_blend",
          "EXT_texture_compression_rgtc",
          "EXT_texture_filter_anisotropic",
          "EXT_texture_norm16",
          "OES_texture_float_linear",
          "WEBGL_compressed_texture_s3tc",
          "WEBGL_compressed_texture_s3tc_srgb",
          "WEBGL_debug_renderer_info",
          "WEBGL_debug_shaders",
          "WEBGL_lose_context",
          "WEBGL_multi_draw",
          "WEBGL_video_texture"
        ],
        "compressedTextureASTCExtension": null,
        "compressedTextureATCExtension": null,
        "compressedTextureETC1Extension": null,
        "compressedTextureETCExtension": null,
        "compressedTexturePVRTCExtension": null,
        "compressedTextureS3TCExtension": {},
        "compressedTextureS3TCSRGBExtension": {}
      },
      "specific": {
        "max3DTextureSize": 2048,
        "maxArrayTextureLayers": 2048,
        "maxClientWaitTimeout": 0,
        "maxColorAttachments": 8,
        "maxCombinedFragmentUniformComponents": 249856,
        "maxCombinedUniformBlocks": 75,
        "maxCombinedVertexUniformComponents": 249856,
        "maxDrawBuffers": 8,
        "maxElementIndex": 4294967295,
        "maxElementsIndices": 150000,
        "maxElementsVertices": 1048575,
        "maxFragmentInputComponents": 128,
        "maxFragmentUniformBlocks": 15,
        "maxFragmentUniformComponents": 4096,
        "maxProgramTexelOffset": 7,
        "maxSamples": 8,
        "maxServerWaitTimeout": 0,
        "maxTextureLODBias": 16,
        "maxTransformFeedbackInterleavedComponents": 64,
        "maxTransformFeedbackSeparateAttribs": 4,
        "maxTransformFeedbackSeparateComponents": 4,
        "maxUniformBlockSize": 65536,
        "maxUniformBufferBindings": 75,
        "maxVaryingComponents": 60,
        "maxVertexOutputComponents": 128,
        "maxVertexUniformBlocks": 15,
        "maxVertexUniformComponents": 4096,
        "minProgramTexelOffset": -8,
        "uniformBufferOffsetAlignment": 256
      }
    },
    "webGLFeatures": {
      "base": {
        "renderer": "WebKit WebGL",
        "rendererUnmasked": "Intel(R) Iris(TM) Graphics 6100",
        "shaderVersion": "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
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
        "supportedExtensions": [
          "ANGLE_instanced_arrays",
          "EXT_blend_minmax",
          "EXT_color_buffer_half_float",
          "EXT_disjoint_timer_query",
          "EXT_float_blend",
          "EXT_frag_depth",
          "EXT_shader_texture_lod",
          "EXT_texture_compression_rgtc",
          "EXT_texture_filter_anisotropic",
          "WEBKIT_EXT_texture_filter_anisotropic",
          "EXT_sRGB",
          "OES_element_index_uint",
          "OES_fbo_render_mipmap",
          "OES_standard_derivatives",
          "OES_texture_float",
          "OES_texture_float_linear",
          "OES_texture_half_float",
          "OES_texture_half_float_linear",
          "OES_vertex_array_object",
          "WEBGL_color_buffer_float",
          "WEBGL_compressed_texture_s3tc",
          "WEBKIT_WEBGL_compressed_texture_s3tc",
          "WEBGL_compressed_texture_s3tc_srgb",
          "WEBGL_debug_renderer_info",
          "WEBGL_debug_shaders",
          "WEBGL_depth_texture",
          "WEBKIT_WEBGL_depth_texture",
          "WEBGL_draw_buffers",
          "WEBGL_lose_context",
          "WEBKIT_WEBGL_lose_context",
          "WEBGL_multi_draw",
          "WEBGL_video_texture"
        ],
        "compressedTextureASTCExtension": null,
        "compressedTextureATCExtension": null,
        "compressedTextureETC1Extension": null,
        "compressedTextureETCExtension": null,
        "compressedTexturePVRTCExtension": null,
        "compressedTextureS3TCExtension": {},
        "compressedTextureS3TCSRGBExtension": {}
      }
    }
  },
  "browserSettings": {
    "isCookieEnabled": true,
    "isDoNotTrackEnabled": true
  },
  "hardwareFeatures": {
    "GPUTier": {
      "fps": 21,
      "gpu": "intel iris graphics 6100",
      "isMobile": false,
      "tier": 1,
      "type": "BENCHMARK"
    },
    "availableCPUCores": 4,
    "devicePixelRatio": 2,
    "endianness": "little"
  }
}
```

## Support

Special care has been taken to make sure all browsers that support `WebGL` are also supported by `detect-features` including `IE 11`.

## Licence

My work is released under the [MIT license](https://raw.githubusercontent.com/TimvanScherpenzeel/detect-features/master/LICENSE).
