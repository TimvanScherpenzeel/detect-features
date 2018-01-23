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
      }
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
      }
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
