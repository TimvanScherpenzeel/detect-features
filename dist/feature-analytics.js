(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FeatureAnalytics", [], factory);
	else if(typeof exports === 'object')
		exports["FeatureAnalytics"] = factory();
	else
		root["FeatureAnalytics"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: initialize */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"initialize\"] = initialize;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analytics__ = __webpack_require__(/*! ./analytics */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__ = __webpack_require__(/*! ./utilities/isValidUACode */ 20);\n// Analytics\n\n\n// Utilities\n\n\nfunction initialize(trackingId) {\n\tif (trackingId === undefined || !Object(__WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__[\"a\" /* default */])(trackingId)) {\n\t\tconsole.error('Please provide a valid UA code (UA-xxxx-yy)');\n\t\treturn;\n\t};\n\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].initialize(trackingId);\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].register();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmFseXRpY3NcbmltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgaXNWYWxpZFVBQ29kZSBmcm9tICcuL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUodHJhY2tpbmdJZCkge1xuXHRpZiAodHJhY2tpbmdJZCA9PT0gdW5kZWZpbmVkIHx8ICFpc1ZhbGlkVUFDb2RlKHRyYWNraW5nSWQpKSB7XG5cdFx0Y29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBVQSBjb2RlIChVQS14eHh4LXl5KScpO1xuXHRcdHJldHVybjtcblx0fTtcblxuXHRhbmFseXRpY3MuaW5pdGlhbGl6ZSh0cmFja2luZ0lkKTtcblx0YW5hbHl0aWNzLnJlZ2lzdGVyKCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./analytics/index.js ***!
  \****************************/
/*! exports provided: analytics */
/*! exports used: analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return analytics; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_record__ = __webpack_require__(/*! ../utilities/record */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features__ = __webpack_require__(/*! ../features */ 3);\n// Analytics\n\n\n// Features\n\n\nvar analytics = {\n\tinitialize: function initialize(trackingId) {\n\t\t// Inject Google Analytics\n\t\t(function (i, s, o, g, r, a, m) {\n\t\t\ti['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {\n\t\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t\t}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);\n\t\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'GA_FEATURE_ANALYTICS');\n\t\twindow.GA_FEATURE_ANALYTICS('create', '' + trackingId, 'auto');\n\t\twindow.GA_FEATURE_ANALYTICS('send', 'pageview');\n\t},\n\n\tregister: function register() {\n\t\twindow.FEATURE_ANALYTICS = __WEBPACK_IMPORTED_MODULE_1__features__;\n\n\t\t// WebGL support detection\n\t\tif (__WEBPACK_IMPORTED_MODULE_1__features__[\"isWebGLSupported\"]) {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\teventAction: 'WebGL Detect',\n\t\t\t\teventLabel: 'WebGL is supported'\n\t\t\t});\n\t\t} else {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\teventAction: 'WebGL Detect',\n\t\t\t\teventLabel: 'WebGL is not supported'\n\t\t\t});\n\t\t}\n\n\t\t// WebGL2 support detection\n\t\tif (__WEBPACK_IMPORTED_MODULE_1__features__[\"isWebGL2Supported\"]) {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\teventAction: 'WebGL2 Detect',\n\t\t\t\teventLabel: 'WebGL2 is supported'\n\t\t\t});\n\t\t} else {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\teventAction: 'WebGL2 Detect',\n\t\t\t\teventLabel: 'WebGL2 is not supported'\n\t\t\t});\n\t\t}\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYW5hbHl0aWNzL2luZGV4LmpzPzRiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5hbHl0aWNzXG5pbXBvcnQgeyByZWNvcmQgfSBmcm9tICcuLi91dGlsaXRpZXMvcmVjb3JkJztcblxuLy8gRmVhdHVyZXNcbmltcG9ydCAqIGFzIGZlYXR1cmVzIGZyb20gJy4uL2ZlYXR1cmVzJztcblxuZXhwb3J0IGNvbnN0IGFuYWx5dGljcyA9IHtcblx0aW5pdGlhbGl6ZTogKHRyYWNraW5nSWQpID0+IHtcblx0XHQvLyBJbmplY3QgR29vZ2xlIEFuYWx5dGljc1xuXHRcdChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcblx0XHQoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcblx0XHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG5cdFx0fSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdHQV9GRUFUVVJFX0FOQUxZVElDUycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnY3JlYXRlJywgYCR7dHJhY2tpbmdJZH1gLCAnYXV0bycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsICdwYWdldmlldycpO1xuXHR9LFxuXG5cdHJlZ2lzdGVyOiAoKSA9PiB7XG5cdFx0d2luZG93LkZFQVRVUkVfQU5BTFlUSUNTID0gZmVhdHVyZXM7XG5cblx0XHQvLyBXZWJHTCBzdXBwb3J0IGRldGVjdGlvblxuXHRcdGlmIChmZWF0dXJlcy5pc1dlYkdMU3VwcG9ydGVkKSB7XG5cdFx0XHRyZWNvcmQoe1xuXHRcdFx0XHRldmVudEFjdGlvbjogJ1dlYkdMIERldGVjdCcsXG5cdFx0XHRcdGV2ZW50TGFiZWw6ICdXZWJHTCBpcyBzdXBwb3J0ZWQnLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdGV2ZW50QWN0aW9uOiAnV2ViR0wgRGV0ZWN0Jyxcblx0XHRcdFx0ZXZlbnRMYWJlbDogJ1dlYkdMIGlzIG5vdCBzdXBwb3J0ZWQnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gV2ViR0wyIHN1cHBvcnQgZGV0ZWN0aW9uXG5cdFx0aWYgKGZlYXR1cmVzLmlzV2ViR0wyU3VwcG9ydGVkKSB7XG5cdFx0XHRyZWNvcmQoe1xuXHRcdFx0XHRldmVudEFjdGlvbjogJ1dlYkdMMiBEZXRlY3QnLFxuXHRcdFx0XHRldmVudExhYmVsOiAnV2ViR0wyIGlzIHN1cHBvcnRlZCcsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVjb3JkKHtcblx0XHRcdFx0ZXZlbnRBY3Rpb246ICdXZWJHTDIgRGV0ZWN0Jyxcblx0XHRcdFx0ZXZlbnRMYWJlbDogJ1dlYkdMMiBpcyBub3Qgc3VwcG9ydGVkJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hbmFseXRpY3MvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUF2Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./utilities/record.js ***!
  \*****************************/
/*! exports provided: record */
/*! exports used: record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return record; });\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar record = function record() {\n\tvar obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\n\tvar defaultEventObject = {\n\t\thitType: 'event',\n\t\teventCategory: 'Features',\n\t\teventAction: '',\n\t\teventLabel: '',\n\t\tnonInteraction: true\n\t};\n\n\tvar eventObject = _extends({}, defaultEventObject, obj);\n\n\tconsole.log(eventObject);\n\n\tif (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {\n\t\tvar callback = function callback() {\n\t\t\twindow.GA_FEATURE_ANALYTICS('send', eventObject);\n\t\t};\n\n\t\tif ('requestIdleCallback' in window) {\n\t\t\twindow.requestIdleCallback(callback);\n\t\t} else {\n\t\t\tcallback();\n\t\t}\n\t} else {\n\t\tconsole.log('Your checking code might not be valid.');\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbGl0aWVzL3JlY29yZC5qcz8wNDMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNvcmQgPSAob2JqID0ge30pID0+IHtcblx0XG5cdGNvbnN0IGRlZmF1bHRFdmVudE9iamVjdCA9IHtcblx0XHRoaXRUeXBlOiAnZXZlbnQnLFxuXHRcdGV2ZW50Q2F0ZWdvcnk6ICdGZWF0dXJlcycsXG5cdFx0ZXZlbnRBY3Rpb246ICcnLFxuXHRcdGV2ZW50TGFiZWw6ICcnLFxuXHRcdG5vbkludGVyYWN0aW9uOiB0cnVlLFxuXHR9O1xuXG5cdGNvbnN0IGV2ZW50T2JqZWN0ID0gey4uLmRlZmF1bHRFdmVudE9iamVjdCwgLi4ub2JqfTtcblxuXHRjb25zb2xlLmxvZyhldmVudE9iamVjdCk7XG5cblx0aWYgKHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsIGV2ZW50T2JqZWN0KTtcblx0XHR9O1xuXG5cdFx0aWYgKCdyZXF1ZXN0SWRsZUNhbGxiYWNrJyBpbiB3aW5kb3cpIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNhbGxiYWNrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ1lvdXIgY2hlY2tpbmcgY29kZSBtaWdodCBub3QgYmUgdmFsaWQuJyk7XG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlsaXRpZXMvcmVjb3JkLmpzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./features/index.js ***!
  \***************************/
/*! exports provided: features */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"features\", function() { return features; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getDevicePixelRatio__ = __webpack_require__(/*! ./getDevicePixelRatio */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getEndian__ = __webpack_require__(/*! ./getEndian */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWebGL2Features__ = __webpack_require__(/*! ./getWebGL2Features */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getWebGLFeatures__ = __webpack_require__(/*! ./getWebGLFeatures */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getWebWorkerPoolSize__ = __webpack_require__(/*! ./getWebWorkerPoolSize */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isGamepadSupported__ = __webpack_require__(/*! ./isGamepadSupported */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isRequestIdleCallbackSupported__ = __webpack_require__(/*! ./isRequestIdleCallbackSupported */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isServiceWorkerSupported__ = __webpack_require__(/*! ./isServiceWorkerSupported */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isWebAssemblySupported__ = __webpack_require__(/*! ./isWebAssemblySupported */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isWebAudioSupported__ = __webpack_require__(/*! ./isWebAudioSupported */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isWebGL2Supported__ = __webpack_require__(/*! ./isWebGL2Supported */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isWebGLSupported__ = __webpack_require__(/*! ./isWebGLSupported */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isWebSocketSupported__ = __webpack_require__(/*! ./isWebSocketSupported */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__isWebRTCSupported__ = __webpack_require__(/*! ./isWebRTCSupported */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isWebVRDeviceAvailable__ = __webpack_require__(/*! ./isWebVRDeviceAvailable */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isWebWorkerSupported__ = __webpack_require__(/*! ./isWebWorkerSupported */ 19);\n/*\n\tAlready covered by Google Analytics\n\t- Platform (deviced by device, OS, browser, etc..)\n\t- Device (desktop, tablet, phone)\n\t- Inbound links\n\t- Total time spend on site\n*/\n\n\n\n\n\n\n\n// Support\n\n\n\n\n\n\n\n\n\n\n\n\n// Features\nvar features = {\n\tdevicePixelRatio: __WEBPACK_IMPORTED_MODULE_0__getDevicePixelRatio__[\"a\" /* default */],\n\tendian: __WEBPACK_IMPORTED_MODULE_1__getEndian__[\"a\" /* default */],\n\tworkerPoolSize: __WEBPACK_IMPORTED_MODULE_4__getWebWorkerPoolSize__[\"a\" /* default */],\n\twebGL2Features: __WEBPACK_IMPORTED_MODULE_2__getWebGL2Features__[\"a\" /* default */],\n\twebGLFeatures: __WEBPACK_IMPORTED_MODULE_3__getWebGLFeatures__[\"a\" /* default */],\n\n\tisGamepadSupported: __WEBPACK_IMPORTED_MODULE_5__isGamepadSupported__[\"a\" /* default */],\n\tisRequestIdleCallbackSupported: __WEBPACK_IMPORTED_MODULE_6__isRequestIdleCallbackSupported__[\"a\" /* default */],\n\tisServiceWorkerSupported: __WEBPACK_IMPORTED_MODULE_7__isServiceWorkerSupported__[\"a\" /* default */],\n\tisWebAssemblySupported: __WEBPACK_IMPORTED_MODULE_8__isWebAssemblySupported__[\"a\" /* default */],\n\tisWebAudioSupported: __WEBPACK_IMPORTED_MODULE_9__isWebAudioSupported__[\"a\" /* default */],\n\tisWebGL2Supported: __WEBPACK_IMPORTED_MODULE_10__isWebGL2Supported__[\"a\" /* default */],\n\tisWebGLSupported: __WEBPACK_IMPORTED_MODULE_11__isWebGLSupported__[\"a\" /* default */],\n\tisWebRTCSupported: __WEBPACK_IMPORTED_MODULE_13__isWebRTCSupported__[\"a\" /* default */],\n\tisWebSocketSupported: __WEBPACK_IMPORTED_MODULE_12__isWebSocketSupported__[\"a\" /* default */],\n\tisWebVRDeviceAvailable: __WEBPACK_IMPORTED_MODULE_14__isWebVRDeviceAvailable__[\"a\" /* default */],\n\tisWebWorkerSupported: __WEBPACK_IMPORTED_MODULE_15__isWebWorkerSupported__[\"a\" /* default */]\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaW5kZXguanM/NzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXHRBbHJlYWR5IGNvdmVyZWQgYnkgR29vZ2xlIEFuYWx5dGljc1xuXHQtIFBsYXRmb3JtIChkZXZpY2VkIGJ5IGRldmljZSwgT1MsIGJyb3dzZXIsIGV0Yy4uKVxuXHQtIERldmljZSAoZGVza3RvcCwgdGFibGV0LCBwaG9uZSlcblx0LSBJbmJvdW5kIGxpbmtzXG5cdC0gVG90YWwgdGltZSBzcGVuZCBvbiBzaXRlXG4qL1xuXG5pbXBvcnQgZ2V0RGV2aWNlUGl4ZWxSYXRpbyBmcm9tICcuL2dldERldmljZVBpeGVsUmF0aW8nO1xuaW1wb3J0IGdldEVuZGlhbiBmcm9tICcuL2dldEVuZGlhbic7XG5pbXBvcnQgZ2V0V2ViR0wyRmVhdHVyZXMgZnJvbSAnLi9nZXRXZWJHTDJGZWF0dXJlcyc7XG5pbXBvcnQgZ2V0V2ViR0xGZWF0dXJlcyBmcm9tICcuL2dldFdlYkdMRmVhdHVyZXMnO1xuaW1wb3J0IGdldFdlYldvcmtlclBvb2xTaXplIGZyb20gJy4vZ2V0V2ViV29ya2VyUG9vbFNpemUnO1xuXG4vLyBTdXBwb3J0XG5pbXBvcnQgaXNHYW1lcGFkU3VwcG9ydGVkIGZyb20gJy4vaXNHYW1lcGFkU3VwcG9ydGVkJztcbmltcG9ydCBpc1JlcXVlc3RJZGxlQ2FsbGJhY2tTdXBwb3J0ZWQgZnJvbSAnLi9pc1JlcXVlc3RJZGxlQ2FsbGJhY2tTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzU2VydmljZVdvcmtlclN1cHBvcnRlZCBmcm9tICcuL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJBc3NlbWJseVN1cHBvcnRlZCBmcm9tICcuL2lzV2ViQXNzZW1ibHlTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViQXVkaW9TdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYkF1ZGlvU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkdMMlN1cHBvcnRlZCBmcm9tICcuL2lzV2ViR0wyU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkdMU3VwcG9ydGVkIGZyb20gJy4vaXNXZWJHTFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJTb2NrZXRTdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYlNvY2tldFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJSVENTdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYlJUQ1N1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJWUkRldmljZUF2YWlsYWJsZSBmcm9tICcuL2lzV2ViVlJEZXZpY2VBdmFpbGFibGUnO1xuaW1wb3J0IGlzV2ViV29ya2VyU3VwcG9ydGVkIGZyb20gJy4vaXNXZWJXb3JrZXJTdXBwb3J0ZWQnO1xuXG4vLyBGZWF0dXJlc1xuZXhwb3J0IGNvbnN0IGZlYXR1cmVzID0ge1xuXHRkZXZpY2VQaXhlbFJhdGlvOiBnZXREZXZpY2VQaXhlbFJhdGlvLFxuXHRlbmRpYW46IGdldEVuZGlhbixcblx0d29ya2VyUG9vbFNpemU6IGdldFdlYldvcmtlclBvb2xTaXplLFxuXHR3ZWJHTDJGZWF0dXJlczogZ2V0V2ViR0wyRmVhdHVyZXMsXG5cdHdlYkdMRmVhdHVyZXM6IGdldFdlYkdMRmVhdHVyZXMsXG5cdFxuXHRpc0dhbWVwYWRTdXBwb3J0ZWQsXG5cdGlzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZCxcblx0aXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkLFxuXHRpc1dlYkFzc2VtYmx5U3VwcG9ydGVkLFxuXHRpc1dlYkF1ZGlvU3VwcG9ydGVkLFxuXHRpc1dlYkdMMlN1cHBvcnRlZCxcblx0aXNXZWJHTFN1cHBvcnRlZCxcblx0aXNXZWJSVENTdXBwb3J0ZWQsXG5cdGlzV2ViU29ja2V0U3VwcG9ydGVkLFxuXHRpc1dlYlZSRGV2aWNlQXZhaWxhYmxlLFxuXHRpc1dlYldvcmtlclN1cHBvcnRlZCxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./features/getDevicePixelRatio.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn window.devicePixelRatio || 1;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0RGV2aWNlUGl4ZWxSYXRpby5qcz8yMWM4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2dldERldmljZVBpeGVsUmF0aW8uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./features/getEndian.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tif (window.ArrayBuffer !== null) {\n\t\tvar buffer = new ArrayBuffer(4);\n\t\tvar intView = new Uint32Array(buffer);\n\t\tvar byteView = new Uint8Array(buffer);\n\t\tintView[0] = 1;\n\n\t\treturn byteView[0] === 1 ? 'little' : 'big';\n\t} else {\n\t\treturn 'unknown';\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0RW5kaWFuLmpzP2NjZTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0aWYgKHdpbmRvdy5BcnJheUJ1ZmZlciAhPT0gbnVsbCkge1xuXHRcdGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcig0KTtcblx0XHRjb25zdCBpbnRWaWV3ID0gbmV3IFVpbnQzMkFycmF5KGJ1ZmZlcik7XG5cdFx0Y29uc3QgYnl0ZVZpZXcgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXHRcdGludFZpZXdbMF0gPSAxO1xuXG5cdFx0cmV0dXJuIChieXRlVmlld1swXSA9PT0gMSkgPyAnbGl0dGxlJyA6ICdiaWcnO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAndW5rbm93bic7XG5cdH1cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9nZXRFbmRpYW4uanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************!*\
  !*** ./features/getWebGL2Features.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\tif (!gl || !gl instanceof WebGL2RenderingContext) return;\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: gl.getContextAttributes().antialias ? true : false,\n\n\t\tredBits: gl.getParameter(gl.RED_BITS),\n\t\tgreenBits: gl.getParameter(gl.GREEN_BITS),\n\t\tblueBits: gl.getParameter(gl.BLUE_BITS),\n\t\talphaBits: gl.getParameter(gl.ALPHA_BITS),\n\t\tdepthBits: gl.getParameter(gl.DEPTH_BITS),\n\t\tstencilBits: gl.getParameter(gl.STENCIL_BITS),\n\n\t\tmaxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),\n\t\tmaxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),\n\t\tmaxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),\n\t\tmaxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),\n\t\tmaxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),\n\t\tmaxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),\n\t\tmaxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),\n\t\tmaxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),\n\t\tmaxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),\n\t\tmaxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),\n\t\taliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),\n\t\taliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),\n\t\tmaxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS),\n\n\t\tvertexShaderHighPrecision: [gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision],\n\n\t\tvertexShaderMediumPrecision: [gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision],\n\n\t\tvertexShaderLowPrecision: [gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).precision],\n\n\t\tfragmentShaderHighPrecision: [gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision],\n\n\t\tfragmentShaderMediumPrecision: [gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision],\n\n\t\tfragmentShaderLowPrecision: [gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).precision],\n\n\t\tmaxVertexUniformComponents: gl.getParameter(gl.MAX_VERTEX_UNIFORM_COMPONENTS),\n\t\tmaxVertexUniformBlocks: gl.getParameter(gl.MAX_VERTEX_UNIFORM_BLOCKS),\n\t\tmaxVertexOutputComponents: gl.getParameter(gl.MAX_VERTEX_OUTPUT_COMPONENTS),\n\t\tmaxVaryingComponents: gl.getParameter(gl.MAX_VARYING_COMPONENTS),\n\t\tmaxFragmentUniformComponents: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_COMPONENTS),\n\t\tmaxFragmentUniformBlocks: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_BLOCKS),\n\t\tmaxFragmentInputComponents: gl.getParameter(gl.MAX_FRAGMENT_INPUT_COMPONENTS),\n\t\tminProgramTexelOffset: gl.getParameter(gl.MIN_PROGRAM_TEXEL_OFFSET),\n\t\tmaxProgramTexelOffset: gl.getParameter(gl.MAX_PROGRAM_TEXEL_OFFSET),\n\t\tmaxDrawBuffers: gl.getParameter(gl.MAX_DRAW_BUFFERS),\n\t\tmaxColorAttachments: gl.getParameter(gl.MAX_COLOR_ATTACHMENTS),\n\t\tmaxSamples: gl.getParameter(gl.MAX_SAMPLES),\n\t\tmax3dTextureSize: gl.getParameter(gl.MAX_3D_TEXTURE_SIZE),\n\t\tmaxArrayTextureLayers: gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS),\n\t\tmaxTextureLodBias: gl.getParameter(gl.MAX_TEXTURE_LOD_BIAS),\n\t\tmaxUniformBufferBindings: gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS),\n\t\tmaxUniformBlockSize: gl.getParameter(gl.MAX_UNIFORM_BLOCK_SIZE),\n\t\tuniformBufferOffsetAlignment: gl.getParameter(gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT),\n\t\tmaxCombinedUniformBlocks: gl.getParameter(gl.MAX_COMBINED_UNIFORM_BLOCKS),\n\t\tmaxCombinedVertexUniformComponents: gl.getParameter(gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS),\n\t\tmaxCombinedFragmentUniformComponents: gl.getParameter(gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS),\n\t\tmaxTransformFeedbackInterleavedComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS),\n\t\tmaxTransformFeedbackSeparateAttribs: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS),\n\t\tmaxTransformFeedbackSeparateComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS),\n\t\tmaxElementIndex: gl.getParameter(gl.MAX_ELEMENT_INDEX),\n\t\tmaxServerWaitTimeout: gl.getParameter(gl.MAX_SERVER_WAIT_TIMEOUT)\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0V2ViR0wyRmVhdHVyZXMuanM/MjVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XG5cdFxuXHRpZighZ2wgfHwgIWdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkgcmV0dXJuO1xuXG5cdGNvbnN0IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlYnVnX3JlbmRlcmVyX2luZm8nKTtcblxuXHRjb25zdCBmZWF0dXJlcyA9IHtcblx0XHRyZW5kZXJlcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlJFTkRFUkVSKSxcblx0XHR2ZW5kb3I6IGdsLmdldFBhcmFtZXRlcihnbC5WRU5ET1IpLFxuXHRcdHZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5WRVJTSU9OKSxcblx0XHRzaGFkZXJWZXJzaW9uOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OKSxcblx0XHRyZW5kZXJlclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1JFTkRFUkVSX1dFQkdMKSxcblx0XHR2ZW5kb3JVbm1hc2tlZDogZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyAmJiBnbC5nZXRQYXJhbWV0ZXIoZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mby5VTk1BU0tFRF9WRU5ET1JfV0VCR0wpLFxuXG5cdFx0c3VwcG9ydGVkRXh0ZW5zaW9uczogZ2wuZ2V0U3VwcG9ydGVkRXh0ZW5zaW9ucygpLFxuXHRcdGFudGlhbGlhczogZ2wuZ2V0Q29udGV4dEF0dHJpYnV0ZXMoKS5hbnRpYWxpYXMgPyB0cnVlIDogZmFsc2UsXG5cdFx0XG5cdFx0cmVkQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLlJFRF9CSVRTKSxcblx0XHRncmVlbkJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5HUkVFTl9CSVRTKSxcblx0XHRibHVlQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkJMVUVfQklUUyksXG5cdFx0YWxwaGFCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUxQSEFfQklUUyksXG5cdFx0ZGVwdGhCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuREVQVEhfQklUUyksXG5cdFx0c3RlbmNpbEJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5TVEVOQ0lMX0JJVFMpLFxuXG5cdFx0bWF4UmVuZGVyQnVmZmVyU2l6ZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9SRU5ERVJCVUZGRVJfU0laRSksXG5cdFx0bWF4Q29tYmluZWRUZXh0dXJlSW1hZ2VVbml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcblx0XHRtYXhDdWJlTWFwVGV4dHVyZVNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQ1VCRV9NQVBfVEVYVFVSRV9TSVpFKSxcblx0XHRtYXhGcmFnbWVudFVuaWZvcm1WZWN0b3JzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0ZSQUdNRU5UX1VOSUZPUk1fVkVDVE9SUyksXG5cdFx0bWF4VGV4dHVyZUltYWdlVW5pdHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUyksXG5cdFx0bWF4VGV4dHVyZVNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKSxcblx0XHRtYXhWYXJ5aW5nVmVjdG9yczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WQVJZSU5HX1ZFQ1RPUlMpLFxuXHRcdG1heFZlcnRleEF0dHJpYnV0ZXM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX0FUVFJJQlMpLFxuXHRcdG1heFZlcnRleFRleHR1cmVJbWFnZVVuaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcblx0XHRtYXhWZXJ0ZXhVbmlmb3JtVmVjdG9yczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfVU5JRk9STV9WRUNUT1JTKSxcblx0XHRhbGlhc2VkTGluZVdpZHRoUmFuZ2U6IGdsLmdldFBhcmFtZXRlcihnbC5BTElBU0VEX0xJTkVfV0lEVEhfUkFOR0UpLFxuXHRcdGFsaWFzZWRQb2ludFNpemVSYW5nZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLkFMSUFTRURfUE9JTlRfU0laRV9SQU5HRSksXG5cdFx0bWF4Vmlld3BvcnREaW1lbnNpb25zOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZJRVdQT1JUX0RJTVMpLFxuXG5cdFx0dmVydGV4U2hhZGVySGlnaFByZWNpc2lvbjogW1xuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLkhJR0hfRkxPQVQpLnJhbmdlTWluLCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5ISUdIX0ZMT0FUKS5yYW5nZU1heCwgXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuSElHSF9GTE9BVCkucHJlY2lzaW9uLFxuXHRcdF0sXG5cblx0XHR2ZXJ0ZXhTaGFkZXJNZWRpdW1QcmVjaXNpb246IFtcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLnJhbmdlTWluLCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLnJhbmdlTWF4LCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLnByZWNpc2lvbixcblx0XHRdLFxuXG5cdFx0dmVydGV4U2hhZGVyTG93UHJlY2lzaW9uOiBbXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuTE9XX0ZMT0FUKS5yYW5nZU1pbiwgXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuTE9XX0ZMT0FUKS5yYW5nZU1heCwgXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuTE9XX0ZMT0FUKS5wcmVjaXNpb24sXG5cdFx0XSxcblxuXHRcdGZyYWdtZW50U2hhZGVySGlnaFByZWNpc2lvbjogW1xuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuSElHSF9GTE9BVCkucmFuZ2VNaW4sIFxuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuSElHSF9GTE9BVCkucmFuZ2VNYXgsIFxuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuSElHSF9GTE9BVCkucHJlY2lzaW9uLFxuXHRcdF0sXG5cblx0XHRmcmFnbWVudFNoYWRlck1lZGl1bVByZWNpc2lvbjogW1xuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuTUVESVVNX0ZMT0FUKS5yYW5nZU1pbiwgXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLnJhbmdlTWF4LCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCkucHJlY2lzaW9uLFxuXHRcdF0sXG5cblx0XHRmcmFnbWVudFNoYWRlckxvd1ByZWNpc2lvbjogW1xuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuTE9XX0ZMT0FUKS5yYW5nZU1pbiwgXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5MT1dfRkxPQVQpLnJhbmdlTWF4LCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLkxPV19GTE9BVCkucHJlY2lzaW9uLFxuXHRcdF0sXG5cblx0XHRtYXhWZXJ0ZXhVbmlmb3JtQ29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfVU5JRk9STV9DT01QT05FTlRTKSxcblx0XHRtYXhWZXJ0ZXhVbmlmb3JtQmxvY2tzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9VTklGT1JNX0JMT0NLUyksXG5cdFx0bWF4VmVydGV4T3V0cHV0Q29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfT1VUUFVUX0NPTVBPTkVOVFMpLFxuXHRcdG1heFZhcnlpbmdDb21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZBUllJTkdfQ09NUE9ORU5UUyksXG5cdFx0bWF4RnJhZ21lbnRVbmlmb3JtQ29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9GUkFHTUVOVF9VTklGT1JNX0NPTVBPTkVOVFMpLFxuXHRcdG1heEZyYWdtZW50VW5pZm9ybUJsb2NrczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9GUkFHTUVOVF9VTklGT1JNX0JMT0NLUyksXG5cdFx0bWF4RnJhZ21lbnRJbnB1dENvbXBvbmVudHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfRlJBR01FTlRfSU5QVVRfQ09NUE9ORU5UUyksXG5cdFx0bWluUHJvZ3JhbVRleGVsT2Zmc2V0OiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUlOX1BST0dSQU1fVEVYRUxfT0ZGU0VUKSxcblx0XHRtYXhQcm9ncmFtVGV4ZWxPZmZzZXQ6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfUFJPR1JBTV9URVhFTF9PRkZTRVQpLFxuXHRcdG1heERyYXdCdWZmZXJzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0RSQVdfQlVGRkVSUyksXG5cdFx0bWF4Q29sb3JBdHRhY2htZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT0xPUl9BVFRBQ0hNRU5UUyksXG5cdFx0bWF4U2FtcGxlczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9TQU1QTEVTKSxcblx0XHRtYXgzZFRleHR1cmVTaXplOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYXzNEX1RFWFRVUkVfU0laRSksXG5cdFx0bWF4QXJyYXlUZXh0dXJlTGF5ZXJzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0FSUkFZX1RFWFRVUkVfTEFZRVJTKSxcblx0XHRtYXhUZXh0dXJlTG9kQmlhczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX0xPRF9CSUFTKSxcblx0XHRtYXhVbmlmb3JtQnVmZmVyQmluZGluZ3M6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVU5JRk9STV9CVUZGRVJfQklORElOR1MpLFxuXHRcdG1heFVuaWZvcm1CbG9ja1NpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVU5JRk9STV9CTE9DS19TSVpFKSxcblx0XHR1bmlmb3JtQnVmZmVyT2Zmc2V0QWxpZ25tZW50OiBnbC5nZXRQYXJhbWV0ZXIoZ2wuVU5JRk9STV9CVUZGRVJfT0ZGU0VUX0FMSUdOTUVOVCksXG5cdFx0bWF4Q29tYmluZWRVbmlmb3JtQmxvY2tzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NPTUJJTkVEX1VOSUZPUk1fQkxPQ0tTKSxcblx0XHRtYXhDb21iaW5lZFZlcnRleFVuaWZvcm1Db21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NPTUJJTkVEX1ZFUlRFWF9VTklGT1JNX0NPTVBPTkVOVFMpLFxuXHRcdG1heENvbWJpbmVkRnJhZ21lbnRVbmlmb3JtQ29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT01CSU5FRF9GUkFHTUVOVF9VTklGT1JNX0NPTVBPTkVOVFMpLFxuXHRcdG1heFRyYW5zZm9ybUZlZWRiYWNrSW50ZXJsZWF2ZWRDb21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RSQU5TRk9STV9GRUVEQkFDS19JTlRFUkxFQVZFRF9DT01QT05FTlRTKSxcblx0XHRtYXhUcmFuc2Zvcm1GZWVkYmFja1NlcGFyYXRlQXR0cmliczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9UUkFOU0ZPUk1fRkVFREJBQ0tfU0VQQVJBVEVfQVRUUklCUyksXG5cdFx0bWF4VHJhbnNmb3JtRmVlZGJhY2tTZXBhcmF0ZUNvbXBvbmVudHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVFJBTlNGT1JNX0ZFRURCQUNLX1NFUEFSQVRFX0NPTVBPTkVOVFMpLFxuXHRcdG1heEVsZW1lbnRJbmRleDogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9FTEVNRU5UX0lOREVYKSxcblx0XHRtYXhTZXJ2ZXJXYWl0VGltZW91dDogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9TRVJWRVJfV0FJVF9USU1FT1VUKSxcblx0fTtcblxuXHRyZXR1cm4gZmVhdHVyZXM7XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvZ2V0V2ViR0wyRmVhdHVyZXMuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdGQTtBQUNBO0FBK0ZBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**************************************!*\
  !*** ./features/getWebGLFeatures.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\tif (!gl || !gl instanceof WebGLRenderingContext) return;\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: gl.getContextAttributes().antialias ? true : false,\n\n\t\tredBits: gl.getParameter(gl.RED_BITS),\n\t\tgreenBits: gl.getParameter(gl.GREEN_BITS),\n\t\tblueBits: gl.getParameter(gl.BLUE_BITS),\n\t\talphaBits: gl.getParameter(gl.ALPHA_BITS),\n\t\tdepthBits: gl.getParameter(gl.DEPTH_BITS),\n\t\tstencilBits: gl.getParameter(gl.STENCIL_BITS),\n\n\t\tmaxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),\n\t\tmaxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),\n\t\tmaxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),\n\t\tmaxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),\n\t\tmaxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),\n\t\tmaxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),\n\t\tmaxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),\n\t\tmaxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),\n\t\tmaxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),\n\t\tmaxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),\n\t\taliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),\n\t\taliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),\n\t\tmaxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS),\n\n\t\tvertexShaderHighPrecision: [gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision],\n\n\t\tvertexShaderMediumPrecision: [gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision],\n\n\t\tvertexShaderLowPrecision: [gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).precision],\n\n\t\tfragmentShaderHighPrecision: [gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision],\n\n\t\tfragmentShaderMediumPrecision: [gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision],\n\n\t\tfragmentShaderLowPrecision: [gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMin, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMax, gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).precision]\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0V2ViR0xGZWF0dXJlcy5qcz9lNTlkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTtcblxuXHRpZighZ2wgfHwgIWdsIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0KSByZXR1cm47XG5cblx0Y29uc3QgZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbycpO1xuXG5cdGNvbnN0IGZlYXR1cmVzID0ge1xuXHRcdHJlbmRlcmVyOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuUkVOREVSRVIpLFxuXHRcdHZlbmRvcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFTkRPUiksXG5cdFx0dmVyc2lvbjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLFxuXHRcdHNoYWRlclZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5TSEFESU5HX0xBTkdVQUdFX1ZFUlNJT04pLFxuXHRcdHJlbmRlcmVyVW5tYXNrZWQ6IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gJiYgZ2wuZ2V0UGFyYW1ldGVyKGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8uVU5NQVNLRURfUkVOREVSRVJfV0VCR0wpLFxuXHRcdHZlbmRvclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1ZFTkRPUl9XRUJHTCksXG5cblx0XHRzdXBwb3J0ZWRFeHRlbnNpb25zOiBnbC5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zKCksXG5cdFx0YW50aWFsaWFzOiBnbC5nZXRDb250ZXh0QXR0cmlidXRlcygpLmFudGlhbGlhcyA/IHRydWUgOiBmYWxzZSxcblx0XHRcblx0XHRyZWRCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuUkVEX0JJVFMpLFxuXHRcdGdyZWVuQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkdSRUVOX0JJVFMpLFxuXHRcdGJsdWVCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQkxVRV9CSVRTKSxcblx0XHRhbHBoYUJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5BTFBIQV9CSVRTKSxcblx0XHRkZXB0aEJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5ERVBUSF9CSVRTKSxcblx0XHRzdGVuY2lsQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLlNURU5DSUxfQklUUyksXG5cblx0XHRtYXhSZW5kZXJCdWZmZXJTaXplOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1JFTkRFUkJVRkZFUl9TSVpFKSxcblx0XHRtYXhDb21iaW5lZFRleHR1cmVJbWFnZVVuaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NPTUJJTkVEX1RFWFRVUkVfSU1BR0VfVU5JVFMpLFxuXHRcdG1heEN1YmVNYXBUZXh0dXJlU2l6ZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DVUJFX01BUF9URVhUVVJFX1NJWkUpLFxuXHRcdG1heEZyYWdtZW50VW5pZm9ybVZlY3RvcnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfRlJBR01FTlRfVU5JRk9STV9WRUNUT1JTKSxcblx0XHRtYXhUZXh0dXJlSW1hZ2VVbml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcblx0XHRtYXhUZXh0dXJlU2l6ZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpLFxuXHRcdG1heFZhcnlpbmdWZWN0b3JzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZBUllJTkdfVkVDVE9SUyksXG5cdFx0bWF4VmVydGV4QXR0cmlidXRlczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfQVRUUklCUyksXG5cdFx0bWF4VmVydGV4VGV4dHVyZUltYWdlVW5pdHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX1RFWFRVUkVfSU1BR0VfVU5JVFMpLFxuXHRcdG1heFZlcnRleFVuaWZvcm1WZWN0b3JzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9VTklGT1JNX1ZFQ1RPUlMpLFxuXHRcdGFsaWFzZWRMaW5lV2lkdGhSYW5nZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLkFMSUFTRURfTElORV9XSURUSF9SQU5HRSksXG5cdFx0YWxpYXNlZFBvaW50U2l6ZVJhbmdlOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUxJQVNFRF9QT0lOVF9TSVpFX1JBTkdFKSxcblx0XHRtYXhWaWV3cG9ydERpbWVuc2lvbnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVklFV1BPUlRfRElNUyksXG5cblx0XHR2ZXJ0ZXhTaGFkZXJIaWdoUHJlY2lzaW9uOiBbXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuSElHSF9GTE9BVCkucmFuZ2VNaW4sIFxuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLkhJR0hfRkxPQVQpLnJhbmdlTWF4LCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5ISUdIX0ZMT0FUKS5wcmVjaXNpb24sXG5cdFx0XSxcblxuXHRcdHZlcnRleFNoYWRlck1lZGl1bVByZWNpc2lvbjogW1xuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCkucmFuZ2VNaW4sIFxuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCkucmFuZ2VNYXgsIFxuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCkucHJlY2lzaW9uLFxuXHRcdF0sXG5cblx0XHR2ZXJ0ZXhTaGFkZXJMb3dQcmVjaXNpb246IFtcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5MT1dfRkxPQVQpLnJhbmdlTWluLCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5MT1dfRkxPQVQpLnJhbmdlTWF4LCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5MT1dfRkxPQVQpLnByZWNpc2lvbixcblx0XHRdLFxuXG5cdFx0ZnJhZ21lbnRTaGFkZXJIaWdoUHJlY2lzaW9uOiBbXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5ISUdIX0ZMT0FUKS5yYW5nZU1pbiwgXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5ISUdIX0ZMT0FUKS5yYW5nZU1heCwgXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5ISUdIX0ZMT0FUKS5wcmVjaXNpb24sXG5cdFx0XSxcblxuXHRcdGZyYWdtZW50U2hhZGVyTWVkaXVtUHJlY2lzaW9uOiBbXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLnJhbmdlTWluLCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCkucmFuZ2VNYXgsIFxuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuTUVESVVNX0ZMT0FUKS5wcmVjaXNpb24sXG5cdFx0XSxcblxuXHRcdGZyYWdtZW50U2hhZGVyTG93UHJlY2lzaW9uOiBbXG5cdFx0XHRnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5MT1dfRkxPQVQpLnJhbmdlTWluLCBcblx0XHRcdGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLkxPV19GTE9BVCkucmFuZ2VNYXgsIFxuXHRcdFx0Z2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuTE9XX0ZMT0FUKS5wcmVjaXNpb24sXG5cdFx0XSxcblx0fTtcblxuXHRyZXR1cm4gZmVhdHVyZXM7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9nZXRXZWJHTEZlYXR1cmVzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUE5REE7QUFDQTtBQW9FQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!******************************************!*\
  !*** ./features/getWebWorkerPoolSize.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn navigator.hardwareConcurrency || 0;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0V2ViV29ya2VyUG9vbFNpemUuanM/MzU0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gbmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kgfHwgMDtcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9nZXRXZWJXb3JrZXJQb29sU2l6ZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!****************************************!*\
  !*** ./features/isGamepadSupported.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Gamepad || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaXNHYW1lcGFkU3VwcG9ydGVkLmpzPzllNzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhd2luZG93LkdhbWVwYWQgfHwgZmFsc2U7XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNHYW1lcGFkU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!****************************************************!*\
  !*** ./features/isRequestIdleCallbackSupported.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.requestIdleCallback || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZC5qcz9hOWRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrIHx8IGZhbHNlO1xufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**********************************************!*\
  !*** ./features/isServiceWorkerSupported.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.serviceWorker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZC5qcz9kNWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyIHx8IGZhbHNlO1xufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!********************************************!*\
  !*** ./features/isWebAssemblySupported.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebAssembly || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViQXNzZW1ibHlTdXBwb3J0ZWQuanM/YmFkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISF3aW5kb3cuV2ViQXNzZW1ibHkgfHwgZmFsc2U7XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNXZWJBc3NlbWJseVN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*****************************************!*\
  !*** ./features/isWebAudioSupported.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.AudioContext || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViQXVkaW9TdXBwb3J0ZWQuanM/YTAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISF3aW5kb3cuQXVkaW9Db250ZXh0IHx8IGZhbHNlO1xufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzV2ViQXVkaW9TdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************************!*\
  !*** ./features/isWebGL2Supported.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\treturn gl && gl instanceof WebGL2RenderingContext;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViR0wyU3VwcG9ydGVkLmpzP2NkMzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xuXHRyZXR1cm4gKGdsICYmIGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCk7XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNXZWJHTDJTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**************************************!*\
  !*** ./features/isWebGLSupported.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\treturn gl && gl instanceof WebGLRenderingContext;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViR0xTdXBwb3J0ZWQuanM/MWQxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cdHJldHVybiAoZ2wgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpO1xufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzV2ViR0xTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!******************************************!*\
  !*** ./features/isWebSocketSupported.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebSocket || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViU29ja2V0U3VwcG9ydGVkLmpzPzk2YTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICghIXdpbmRvdy5XZWJTb2NrZXQpIHx8IGZhbHNlO1xufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzV2ViU29ja2V0U3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!***************************************!*\
  !*** ./features/isWebRTCSupported.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.RTCPeerConnection && !!window.RTCDataChannelEvent || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViUlRDU3VwcG9ydGVkLmpzP2Y3MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICghIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJiAhIXdpbmRvdy5SVENEYXRhQ2hhbm5lbEV2ZW50KSB8fCBmYWxzZTtcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pc1dlYlJUQ1N1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!********************************************!*\
  !*** ./features/isWebVRDeviceAvailable.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.getVRDisplays || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViVlJEZXZpY2VBdmFpbGFibGUuanM/NmQyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISFuYXZpZ2F0b3IuZ2V0VlJEaXNwbGF5cyB8fCBmYWxzZTtcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pc1dlYlZSRGV2aWNlQXZhaWxhYmxlLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!******************************************!*\
  !*** ./features/isWebWorkerSupported.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Worker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViV29ya2VyU3VwcG9ydGVkLmpzPzE2YWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhd2luZG93LldvcmtlciB8fCBmYWxzZTtcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pc1dlYldvcmtlclN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!************************************!*\
  !*** ./utilities/isValidUACode.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = isValidUACode;\nfunction isValidUACode(str) {\n    return (/^ua-\\d{4,9}-\\d{1,4}$/i.test(str.toString())\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlLmpzPzNiZDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZFVBQ29kZShzdHIpe1xuICAgIHJldHVybiAoL151YS1cXGR7NCw5fS1cXGR7MSw0fSQvaSkudGVzdChzdHIudG9TdHJpbmcoKSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlsaXRpZXMvaXNWYWxpZFVBQ29kZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ })
/******/ ]);
});