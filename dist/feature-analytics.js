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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: register */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"register\"] = register;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analytics__ = __webpack_require__(/*! ./analytics */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__ = __webpack_require__(/*! ./utilities/isValidUACode */ 23);\n// Analytics\n\n\n// Utilities\n\n\nfunction register() {\n\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\tthis.verbose = false;\n\n\tObject.assign(this, options);\n\n\tif (this.trackingId === undefined || !Object(__WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__[\"a\" /* default */])(this.trackingId)) {\n\t\tconsole.error('Please provide a valid UA code (UA-XXXXXXXX-YY)');\n\t\treturn;\n\t}\n\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].initialize(this.trackingId);\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].register(this.verbose);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmFseXRpY3NcbmltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgaXNWYWxpZFVBQ29kZSBmcm9tICcuL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKG9wdGlvbnMgPSB7fSkge1xuXHR0aGlzLnZlcmJvc2UgPSBmYWxzZTtcblxuXHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG5cdGlmICh0aGlzLnRyYWNraW5nSWQgPT09IHVuZGVmaW5lZCB8fCAhaXNWYWxpZFVBQ29kZSh0aGlzLnRyYWNraW5nSWQpKSB7XG5cdFx0Y29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBVQSBjb2RlIChVQS1YWFhYWFhYWC1ZWSknKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhbmFseXRpY3MuaW5pdGlhbGl6ZSh0aGlzLnRyYWNraW5nSWQpO1xuXHRhbmFseXRpY3MucmVnaXN0ZXIodGhpcy52ZXJib3NlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** ./analytics/index.js ***!
  \****************************/
/*! exports provided: analytics */
/*! exports used: analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return analytics; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_record__ = __webpack_require__(/*! ../utilities/record */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features__ = __webpack_require__(/*! ../features */ 4);\n// Analytics\n\n\n// Features\n\n\nvar analytics = {\n\tinitialize: function initialize(trackingId) {\n\t\t// Inject Google Analytics\n\n\t\t/* eslint-disable */\n\t\t(function (i, s, o, g, r, a, m) {\n\t\t\ti['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {\n\t\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t\t}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);\n\t\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'GA_FEATURE_ANALYTICS');\n\t\twindow.GA_FEATURE_ANALYTICS('create', '' + trackingId, 'auto');\n\t\twindow.GA_FEATURE_ANALYTICS('send', 'pageview');\n\t\t/* eslint-enable */\n\t},\n\n\tregister: function register() {\n\t\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t\tvar features = Object(__WEBPACK_IMPORTED_MODULE_1__features__[\"a\" /* getFeatures */])(verbose);\n\n\t\tObject.keys(features).forEach(function (category) {\n\t\t\tObject.keys(features[category]).forEach(function (feature) {\n\t\t\t\tvar value = features[category][feature];\n\n\t\t\t\tif (typeof value === 'boolean' || typeof value === 'number') {\n\t\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\t\teventCategory: '' + category,\n\t\t\t\t\t\teventAction: '' + feature,\n\t\t\t\t\t\teventValue: '' + value\n\t\t\t\t\t});\n\t\t\t\t} else if (typeof value === 'string') {\n\t\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\t\teventCategory: '' + category,\n\t\t\t\t\t\teventAction: '' + feature,\n\t\t\t\t\t\teventLabel: '' + value\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t// WebGLFeatures and WebGL2Features\n\t\t\t\t\tconsole.log(value);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYW5hbHl0aWNzL2luZGV4LmpzPzRiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5hbHl0aWNzXG5pbXBvcnQgeyByZWNvcmQgfSBmcm9tICcuLi91dGlsaXRpZXMvcmVjb3JkJztcblxuLy8gRmVhdHVyZXNcbmltcG9ydCB7IGdldEZlYXR1cmVzIH0gZnJvbSAnLi4vZmVhdHVyZXMnO1xuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0ge1xuXHRpbml0aWFsaXplOiAodHJhY2tpbmdJZCkgPT4ge1xuXHRcdC8vIEluamVjdCBHb29nbGUgQW5hbHl0aWNzXG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXHRcdChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcblx0XHQoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcblx0XHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG5cdFx0fSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdHQV9GRUFUVVJFX0FOQUxZVElDUycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnY3JlYXRlJywgYCR7dHJhY2tpbmdJZH1gLCAnYXV0bycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgKi9cblx0fSxcblxuXHRyZWdpc3RlcjogKHZlcmJvc2UgPSBmYWxzZSkgPT4ge1xuXHRcdGNvbnN0IGZlYXR1cmVzID0gZ2V0RmVhdHVyZXModmVyYm9zZSk7XG5cblx0XHRPYmplY3Qua2V5cyhmZWF0dXJlcykuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcblx0XHRcdE9iamVjdC5rZXlzKGZlYXR1cmVzW2NhdGVnb3J5XSkuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGZlYXR1cmVzW2NhdGVnb3J5XVtmZWF0dXJlXTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdFx0XHRldmVudENhdGVnb3J5OiBgJHtjYXRlZ29yeX1gLCBcblx0XHRcdFx0XHRcdGV2ZW50QWN0aW9uOiBgJHtmZWF0dXJlfWAsIFxuXHRcdFx0XHRcdFx0ZXZlbnRWYWx1ZTogYCR7dmFsdWV9YCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0cmVjb3JkKHtcblx0XHRcdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6IGAke2NhdGVnb3J5fWAsIFxuXHRcdFx0XHRcdFx0ZXZlbnRBY3Rpb246IGAke2ZlYXR1cmV9YCwgXG5cdFx0XHRcdFx0XHRldmVudExhYmVsOiBgJHt2YWx1ZX1gLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFdlYkdMRmVhdHVyZXMgYW5kIFdlYkdMMkZlYXR1cmVzXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codmFsdWUpO1x0XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYW5hbHl0aWNzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./utilities/record.js ***!
  \*****************************/
/*! exports provided: record */
/*! exports used: record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return record; });\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar record = function record() {\n\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\tvar defaults = {\n\t\thitType: 'event',\n\t\tnonInteraction: true\n\t};\n\n\tvar eventObject = _extends({}, defaults, options);\n\n\tconsole.log(eventObject);\n\n\tif (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {\n\t\tvar callback = function callback() {\n\t\t\twindow.GA_FEATURE_ANALYTICS('send', eventObject);\n\t\t};\n\n\t\tif ('requestIdleCallback' in window) {\n\t\t\twindow.requestIdleCallback(callback);\n\t\t} else {\n\t\t\tcallback();\n\t\t}\n\t} else {\n\t\tconsole.error('Please provide a valid UA code (UA-xxxx-yy)');\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbGl0aWVzL3JlY29yZC5qcz8wNDMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNvcmQgPSAob3B0aW9ucyA9IHt9KSA9PiB7XG5cdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdGhpdFR5cGU6ICdldmVudCcsXG5cdFx0bm9uSW50ZXJhY3Rpb246IHRydWUsXG5cdH07XG5cblx0Y29uc3QgZXZlbnRPYmplY3QgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG5cblx0Y29uc29sZS5sb2coZXZlbnRPYmplY3QpO1xuXG5cdGlmICh3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LkdBX0ZFQVRVUkVfQU5BTFlUSUNTID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0XHR3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MoJ3NlbmQnLCBldmVudE9iamVjdCk7XG5cdFx0fTtcblxuXHRcdGlmICgncmVxdWVzdElkbGVDYWxsYmFjaycgaW4gd2luZG93KSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayhjYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgVUEgY29kZSAoVUEteHh4eC15eSknKTtcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdXRpbGl0aWVzL3JlY29yZC5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./features/index.js ***!
  \***************************/
/*! exports provided: getFeatures */
/*! exports used: getFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getFeatures; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browserFeatures_getWebGL2Features__ = __webpack_require__(/*! ./browserFeatures/getWebGL2Features */ 42);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browserFeatures_getWebGLFeatures__ = __webpack_require__(/*! ./browserFeatures/getWebGLFeatures */ 43);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browserFeatures_isGamepadSupported__ = __webpack_require__(/*! ./browserFeatures/isGamepadSupported */ 31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browserFeatures_isRequestIdleCallbackSupported__ = __webpack_require__(/*! ./browserFeatures/isRequestIdleCallbackSupported */ 32);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browserFeatures_isServiceWorkerSupported__ = __webpack_require__(/*! ./browserFeatures/isServiceWorkerSupported */ 33);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browserFeatures_isWebAssemblySupported__ = __webpack_require__(/*! ./browserFeatures/isWebAssemblySupported */ 34);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browserFeatures_isWebAudioSupported__ = __webpack_require__(/*! ./browserFeatures/isWebAudioSupported */ 35);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__browserFeatures_isWebGL2Supported__ = __webpack_require__(/*! ./browserFeatures/isWebGL2Supported */ 36);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__browserFeatures_isWebGLSupported__ = __webpack_require__(/*! ./browserFeatures/isWebGLSupported */ 37);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__browserFeatures_isWebRTCSupported__ = __webpack_require__(/*! ./browserFeatures/isWebRTCSupported */ 38);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browserFeatures_isWebSocketSupported__ = __webpack_require__(/*! ./browserFeatures/isWebSocketSupported */ 39);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__browserFeatures_isWebVRSupported__ = __webpack_require__(/*! ./browserFeatures/isWebVRSupported */ 40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__browserFeatures_isWebWorkerSupported__ = __webpack_require__(/*! ./browserFeatures/isWebWorkerSupported */ 41);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__browserSettings_isCookieEnabled__ = __webpack_require__(/*! ./browserSettings/isCookieEnabled */ 29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__browserSettings_isDoNotTrackEnabled__ = __webpack_require__(/*! ./browserSettings/isDoNotTrackEnabled */ 30);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hardwareFeatures_getDevicePixelRatio__ = __webpack_require__(/*! ./hardwareFeatures/getDevicePixelRatio */ 25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hardwareFeatures_getEndianness__ = __webpack_require__(/*! ./hardwareFeatures/getEndianness */ 26);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__hardwareFeatures_getWebWorkerPoolSize__ = __webpack_require__(/*! ./hardwareFeatures/getWebWorkerPoolSize */ 27);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__hardwareFeatures_getWebVRDeviceType__ = __webpack_require__(/*! ./hardwareFeatures/getWebVRDeviceType */ 28);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n// Browser features\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Browser settings\n\n\n\n// Hardware features\n\n\n\n\n\n// Features\nvar getFeatures = function getFeatures() {\n\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t// Default features\n\tvar features = {\n\t\t// Browser features\n\t\tbrowserFeatures: {\n\t\t\tisGamepadSupported: __WEBPACK_IMPORTED_MODULE_2__browserFeatures_isGamepadSupported__[\"a\" /* default */],\n\t\t\tisRequestIdleCallbackSupported: __WEBPACK_IMPORTED_MODULE_3__browserFeatures_isRequestIdleCallbackSupported__[\"a\" /* default */],\n\t\t\tisServiceWorkerSupported: __WEBPACK_IMPORTED_MODULE_4__browserFeatures_isServiceWorkerSupported__[\"a\" /* default */],\n\t\t\tisWebAssemblySupported: __WEBPACK_IMPORTED_MODULE_5__browserFeatures_isWebAssemblySupported__[\"a\" /* default */],\n\t\t\tisWebAudioSupported: __WEBPACK_IMPORTED_MODULE_6__browserFeatures_isWebAudioSupported__[\"a\" /* default */],\n\t\t\tisWebGL2Supported: __WEBPACK_IMPORTED_MODULE_7__browserFeatures_isWebGL2Supported__[\"a\" /* default */],\n\t\t\tisWebGLSupported: __WEBPACK_IMPORTED_MODULE_8__browserFeatures_isWebGLSupported__[\"a\" /* default */],\n\t\t\tisWebRTCSupported: __WEBPACK_IMPORTED_MODULE_9__browserFeatures_isWebRTCSupported__[\"a\" /* default */],\n\t\t\tisWebSocketSupported: __WEBPACK_IMPORTED_MODULE_10__browserFeatures_isWebSocketSupported__[\"a\" /* default */],\n\t\t\tisWebVRSupported: __WEBPACK_IMPORTED_MODULE_11__browserFeatures_isWebVRSupported__[\"a\" /* default */],\n\t\t\tisWebWorkerSupported: __WEBPACK_IMPORTED_MODULE_12__browserFeatures_isWebWorkerSupported__[\"a\" /* default */]\n\t\t},\n\n\t\t// Browser settings\n\t\tbrowserSettings: {\n\t\t\tisCookieEnabled: __WEBPACK_IMPORTED_MODULE_13__browserSettings_isCookieEnabled__[\"a\" /* default */],\n\t\t\tisDoNotTrackEnabled: __WEBPACK_IMPORTED_MODULE_14__browserSettings_isDoNotTrackEnabled__[\"a\" /* default */]\n\t\t},\n\n\t\t// Hardware features\n\t\thardwareFeatures: {\n\t\t\tdevicePixelRatio: __WEBPACK_IMPORTED_MODULE_15__hardwareFeatures_getDevicePixelRatio__[\"a\" /* default */],\n\t\t\tworkerPoolSize: __WEBPACK_IMPORTED_MODULE_17__hardwareFeatures_getWebWorkerPoolSize__[\"a\" /* default */]\n\t\t}\n\n\t\t// WebVR features\n\t};if (__WEBPACK_IMPORTED_MODULE_11__browserFeatures_isWebVRSupported__[\"a\" /* default */]) {\n\t\treturn _extends({}, features.hardwareFeatures, {\n\t\t\t// Hardware features\n\t\t\twebVRDeviceType: __WEBPACK_IMPORTED_MODULE_18__hardwareFeatures_getWebVRDeviceType__[\"a\" /* default */]\n\t\t});\n\t}\n\n\t// Verbose features\n\tif (verbose) {\n\t\tfeatures.browserFeatures = _extends({}, features.browserFeatures, {\n\t\t\t// Browser features\n\t\t\twebGL2Features: __WEBPACK_IMPORTED_MODULE_0__browserFeatures_getWebGL2Features__[\"a\" /* default */],\n\t\t\twebGLFeatures: __WEBPACK_IMPORTED_MODULE_1__browserFeatures_getWebGLFeatures__[\"a\" /* default */]\n\t\t});\n\n\t\tfeatures.hardwareFeatures = _extends({}, features.hardwareFeatures, {\n\t\t\t// Hardware features\n\t\t\tendianness: __WEBPACK_IMPORTED_MODULE_16__hardwareFeatures_getEndianness__[\"a\" /* default */]\n\t\t});\n\t}\n\n\treturn features;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaW5kZXguanM/NzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCcm93c2VyIGZlYXR1cmVzXG5pbXBvcnQgZ2V0V2ViR0wyRmVhdHVyZXMgZnJvbSAnLi9icm93c2VyRmVhdHVyZXMvZ2V0V2ViR0wyRmVhdHVyZXMnO1xuaW1wb3J0IGdldFdlYkdMRmVhdHVyZXMgZnJvbSAnLi9icm93c2VyRmVhdHVyZXMvZ2V0V2ViR0xGZWF0dXJlcyc7XG5pbXBvcnQgaXNHYW1lcGFkU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzR2FtZXBhZFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNSZXF1ZXN0SWRsZUNhbGxiYWNrU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZCc7XG5pbXBvcnQgaXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJBc3NlbWJseVN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkFzc2VtYmx5U3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkF1ZGlvU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViQXVkaW9TdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViR0wyU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViR0wyU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkdMU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViR0xTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViUlRDU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViUlRDU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYlNvY2tldFN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJWUlN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlZSU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYldvcmtlclN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYldvcmtlclN1cHBvcnRlZCc7XG5cbi8vIEJyb3dzZXIgc2V0dGluZ3NcbmltcG9ydCBpc0Nvb2tpZUVuYWJsZWQgZnJvbSAnLi9icm93c2VyU2V0dGluZ3MvaXNDb29raWVFbmFibGVkJztcbmltcG9ydCBpc0RvTm90VHJhY2tFbmFibGVkIGZyb20gJy4vYnJvd3NlclNldHRpbmdzL2lzRG9Ob3RUcmFja0VuYWJsZWQnO1xuXG4vLyBIYXJkd2FyZSBmZWF0dXJlc1xuaW1wb3J0IGdldERldmljZVBpeGVsUmF0aW8gZnJvbSAnLi9oYXJkd2FyZUZlYXR1cmVzL2dldERldmljZVBpeGVsUmF0aW8nO1xuaW1wb3J0IGdldEVuZGlhbm5lc3MgZnJvbSAnLi9oYXJkd2FyZUZlYXR1cmVzL2dldEVuZGlhbm5lc3MnO1xuaW1wb3J0IGdldFdlYldvcmtlclBvb2xTaXplIGZyb20gJy4vaGFyZHdhcmVGZWF0dXJlcy9nZXRXZWJXb3JrZXJQb29sU2l6ZSc7XG5pbXBvcnQgZ2V0V2ViVlJEZXZpY2VUeXBlIGZyb20gJy4vaGFyZHdhcmVGZWF0dXJlcy9nZXRXZWJWUkRldmljZVR5cGUnO1xuXG5cbi8vIEZlYXR1cmVzXG5leHBvcnQgY29uc3QgZ2V0RmVhdHVyZXMgPSAodmVyYm9zZSA9IGZhbHNlKSA9PiB7XG5cdC8vIERlZmF1bHQgZmVhdHVyZXNcblx0Y29uc3QgZmVhdHVyZXMgPSB7XG5cdFx0Ly8gQnJvd3NlciBmZWF0dXJlc1xuXHRcdGJyb3dzZXJGZWF0dXJlczoge1xuXHRcdFx0aXNHYW1lcGFkU3VwcG9ydGVkLFxuXHRcdFx0aXNSZXF1ZXN0SWRsZUNhbGxiYWNrU3VwcG9ydGVkLFxuXHRcdFx0aXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkLFxuXHRcdFx0aXNXZWJBc3NlbWJseVN1cHBvcnRlZCxcblx0XHRcdGlzV2ViQXVkaW9TdXBwb3J0ZWQsXG5cdFx0XHRpc1dlYkdMMlN1cHBvcnRlZCxcblx0XHRcdGlzV2ViR0xTdXBwb3J0ZWQsXG5cdFx0XHRpc1dlYlJUQ1N1cHBvcnRlZCxcblx0XHRcdGlzV2ViU29ja2V0U3VwcG9ydGVkLFxuXHRcdFx0aXNXZWJWUlN1cHBvcnRlZCxcblx0XHRcdGlzV2ViV29ya2VyU3VwcG9ydGVkLFxuXHRcdH0sXG5cblx0XHQvLyBCcm93c2VyIHNldHRpbmdzXG5cdFx0YnJvd3NlclNldHRpbmdzOiB7XG5cdFx0XHRpc0Nvb2tpZUVuYWJsZWQsXG5cdFx0XHRpc0RvTm90VHJhY2tFbmFibGVkLFxuXHRcdH0sXG5cblx0XHQvLyBIYXJkd2FyZSBmZWF0dXJlc1xuXHRcdGhhcmR3YXJlRmVhdHVyZXM6IHtcblx0XHRcdGRldmljZVBpeGVsUmF0aW86IGdldERldmljZVBpeGVsUmF0aW8sXG5cdFx0XHR3b3JrZXJQb29sU2l6ZTogZ2V0V2ViV29ya2VyUG9vbFNpemUsXG5cdFx0fSxcblx0fVxuXG5cdC8vIFdlYlZSIGZlYXR1cmVzXG5cdGlmIChpc1dlYlZSU3VwcG9ydGVkKSB7XG5cdFx0cmV0dXJuIHsgLi4uZmVhdHVyZXMuaGFyZHdhcmVGZWF0dXJlcywgLi4ue1xuXHRcdFx0Ly8gSGFyZHdhcmUgZmVhdHVyZXNcblx0XHRcdHdlYlZSRGV2aWNlVHlwZTogZ2V0V2ViVlJEZXZpY2VUeXBlLFxuXHRcdH19O1xuXHR9XG5cblx0Ly8gVmVyYm9zZSBmZWF0dXJlc1xuXHRpZiAodmVyYm9zZSkge1xuXHRcdGZlYXR1cmVzLmJyb3dzZXJGZWF0dXJlcyA9IHsgLi4uZmVhdHVyZXMuYnJvd3NlckZlYXR1cmVzLCAuLi57XG5cdFx0XHQvLyBCcm93c2VyIGZlYXR1cmVzXG5cdFx0XHR3ZWJHTDJGZWF0dXJlczogZ2V0V2ViR0wyRmVhdHVyZXMsXG5cdFx0XHR3ZWJHTEZlYXR1cmVzOiBnZXRXZWJHTEZlYXR1cmVzLFxuXHRcdH19O1xuXG5cdFx0ZmVhdHVyZXMuaGFyZHdhcmVGZWF0dXJlcyA9IHsgLi4uZmVhdHVyZXMuaGFyZHdhcmVGZWF0dXJlcywgLi4ue1xuXHRcdFx0Ly8gSGFyZHdhcmUgZmVhdHVyZXNcblx0XHRcdGVuZGlhbm5lc3M6IGdldEVuZGlhbm5lc3MsXG5cdFx0fX07XG5cdH1cblx0XG5cdHJldHVybiBmZWF0dXJlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQTdCQTtBQStCQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/*!************************************!*\
  !*** ./utilities/isValidUACode.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = isValidUACode;\nfunction isValidUACode(str) {\n    return (/^ua-\\d{4,9}-\\d{1,4}$/i.test(str.toString())\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlLmpzPzNiZDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZFVBQ29kZShzdHIpIHtcbiAgICByZXR1cm4gKC9edWEtXFxkezQsOX0tXFxkezEsNH0kL2kpLnRlc3Qoc3RyLnRvU3RyaW5nKCkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlsaXRpZXMvaXNWYWxpZFVBQ29kZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */,
/* 25 */
/*!**********************************************************!*\
  !*** ./features/hardwareFeatures/getDevicePixelRatio.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn window.devicePixelRatio || 1;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0RGV2aWNlUGl4ZWxSYXRpby5qcz83ODMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaGFyZHdhcmVGZWF0dXJlcy9nZXREZXZpY2VQaXhlbFJhdGlvLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!****************************************************!*\
  !*** ./features/hardwareFeatures/getEndianness.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tif (window.ArrayBuffer !== null) {\n\t\tvar buffer = new ArrayBuffer(4);\n\t\tvar intView = new Uint32Array(buffer);\n\t\tvar byteView = new Uint8Array(buffer);\n\t\tintView[0] = 1;\n\n\t\treturn byteView[0] === 1 ? 'little' : 'big';\n\t} else {\n\t\treturn 'unknown';\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0RW5kaWFubmVzcy5qcz9jNzI0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGlmICh3aW5kb3cuQXJyYXlCdWZmZXIgIT09IG51bGwpIHtcblx0XHRjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG5cdFx0Y29uc3QgaW50VmlldyA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuXHRcdGNvbnN0IGJ5dGVWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcblx0XHRpbnRWaWV3WzBdID0gMTtcblxuXHRcdHJldHVybiAoYnl0ZVZpZXdbMF0gPT09IDEpID8gJ2xpdHRsZScgOiAnYmlnJztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ3Vua25vd24nO1xuXHR9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9oYXJkd2FyZUZlYXR1cmVzL2dldEVuZGlhbm5lc3MuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!***********************************************************!*\
  !*** ./features/hardwareFeatures/getWebWorkerPoolSize.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn navigator.hardwareConcurrency || 0;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0V2ViV29ya2VyUG9vbFNpemUuanM/MzRlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gbmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kgfHwgMDtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0V2ViV29ya2VyUG9vbFNpemUuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*********************************************************!*\
  !*** ./features/hardwareFeatures/getWebVRDeviceType.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browserFeatures_isWebVRSupported__ = __webpack_require__(/*! ./../browserFeatures/isWebVRSupported */ 40);\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tif (__WEBPACK_IMPORTED_MODULE_0__browserFeatures_isWebVRSupported__[\"a\" /* default */]) {\n\t\tnavigator.getVRDisplays().then(function (displays) {\n\t\t\tif (displays.length > 0) {\n\t\t\t\tvar displayName = displays[0].displayName;\n\n\t\t\t\tif (/daydream/i.test(displayName)) {\n\t\t\t\t\treturn 'Google Daydream';\n\t\t\t\t} else if (/vive/i.test(displayName)) {\n\t\t\t\t\treturn 'HTC Vive';\n\t\t\t\t} else if (/oculus/i.test(displayName)) {\n\t\t\t\t\treturn 'Oculus Rift';\n\t\t\t\t} else if (/SamsungBrowser.+Mobile VR/i.test(window.navigator.userAgent)) {\n\t\t\t\t\treturn 'Samsung GearVR';\n\t\t\t\t} else {\n\t\t\t\t\treturn 'Unknown';\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t});\n\t} else {\n\t\treturn false;\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0V2ViVlJEZXZpY2VUeXBlLmpzP2YxNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzV2ViVlJTdXBwb3J0ZWQgZnJvbSAnLi8uLi9icm93c2VyRmVhdHVyZXMvaXNXZWJWUlN1cHBvcnRlZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGlmIChpc1dlYlZSU3VwcG9ydGVkKSB7XG5cdFx0bmF2aWdhdG9yLmdldFZSRGlzcGxheXMoKVxuXHRcdFx0LnRoZW4oKGRpc3BsYXlzKSA9PiB7XG5cdFx0XHRcdGlmIChkaXNwbGF5cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgZGlzcGxheU5hbWUgPSBkaXNwbGF5c1swXS5kaXNwbGF5TmFtZTtcblxuXHRcdFx0XHRcdGlmICgvZGF5ZHJlYW0vaS50ZXN0KGRpc3BsYXlOYW1lKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdHb29nbGUgRGF5ZHJlYW0nO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoL3ZpdmUvaS50ZXN0KGRpc3BsYXlOYW1lKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdIVEMgVml2ZSc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgvb2N1bHVzL2kudGVzdChkaXNwbGF5TmFtZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnT2N1bHVzIFJpZnQnO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoL1NhbXN1bmdCcm93c2VyLitNb2JpbGUgVlIvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdTYW1zdW5nIEdlYXJWUic7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnVW5rbm93bic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9oYXJkd2FyZUZlYXR1cmVzL2dldFdlYlZSRGV2aWNlVHlwZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*****************************************************!*\
  !*** ./features/browserSettings/isCookieEnabled.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.cookieEnabled || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0Nvb2tpZUVuYWJsZWQuanM/M2I2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISFuYXZpZ2F0b3IuY29va2llRW5hYmxlZCB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0Nvb2tpZUVuYWJsZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*********************************************************!*\
  !*** ./features/browserSettings/isDoNotTrackEnabled.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar doNotTrack = navigator.doNotTrack || false;\n\n\tif (!!doNotTrack || doNotTrack === \"unspecified\") {\n\t\treturn false;\n\t} else {\n\t\treturn true;\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0RvTm90VHJhY2tFbmFibGVkLmpzP2ZjMWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgZG9Ob3RUcmFjayA9IG5hdmlnYXRvci5kb05vdFRyYWNrIHx8IGZhbHNlO1xuXG5cdGlmICghIWRvTm90VHJhY2sgfHwgZG9Ob3RUcmFjayA9PT0gXCJ1bnNwZWNpZmllZFwiKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyU2V0dGluZ3MvaXNEb05vdFRyYWNrRW5hYmxlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!********************************************************!*\
  !*** ./features/browserFeatures/isGamepadSupported.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Gamepad || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc0dhbWVwYWRTdXBwb3J0ZWQuanM/ZDQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISF3aW5kb3cuR2FtZXBhZCB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc0dhbWVwYWRTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!********************************************************************!*\
  !*** ./features/browserFeatures/isRequestIdleCallbackSupported.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.requestIdleCallback || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1JlcXVlc3RJZGxlQ2FsbGJhY2tTdXBwb3J0ZWQuanM/NTFmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISF3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1JlcXVlc3RJZGxlQ2FsbGJhY2tTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!**************************************************************!*\
  !*** ./features/browserFeatures/isServiceWorkerSupported.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.serviceWorker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1NlcnZpY2VXb3JrZXJTdXBwb3J0ZWQuanM/YWZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlciB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1NlcnZpY2VXb3JrZXJTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!************************************************************!*\
  !*** ./features/browserFeatures/isWebAssemblySupported.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebAssembly || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkFzc2VtYmx5U3VwcG9ydGVkLmpzPzAzN2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhd2luZG93LldlYkFzc2VtYmx5IHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzV2ViQXNzZW1ibHlTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!*********************************************************!*\
  !*** ./features/browserFeatures/isWebAudioSupported.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.AudioContext || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkF1ZGlvU3VwcG9ydGVkLmpzPzI3OTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhd2luZG93LkF1ZGlvQ29udGV4dCB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkF1ZGlvU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/isWebGL2Supported.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\t/* eslint-disable no-undef */\n\treturn gl && gl instanceof WebGL2RenderingContext || false;\n\t/* eslint-enable no-undef */\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMMlN1cHBvcnRlZC5qcz9iNWM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXHRyZXR1cm4gKGdsICYmIGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkgfHwgZmFsc2U7XG5cdC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMMlN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/isWebGLSupported.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\treturn gl && gl instanceof WebGLRenderingContext || false;\n\t/* eslint-enable no-undef */\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMU3VwcG9ydGVkLmpzP2FkMmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cdHJldHVybiAoZ2wgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHx8IGZhbHNlO1xuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJHTFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/isWebRTCSupported.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.RTCPeerConnection && !!window.RTCDataChannelEvent || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlJUQ1N1cHBvcnRlZC5qcz9iYzk5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAoISF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgISF3aW5kb3cuUlRDRGF0YUNoYW5uZWxFdmVudCkgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJSVENTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!**********************************************************!*\
  !*** ./features/browserFeatures/isWebSocketSupported.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebSocket || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZC5qcz9jZjM4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAoISF3aW5kb3cuV2ViU29ja2V0KSB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/isWebVRSupported.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.getVRDisplays || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlZSU3VwcG9ydGVkLmpzPzk2NjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhbmF2aWdhdG9yLmdldFZSRGlzcGxheXMgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJWUlN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!**********************************************************!*\
  !*** ./features/browserFeatures/isWebWorkerSupported.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Worker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYldvcmtlclN1cHBvcnRlZC5qcz9jYWVjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5Xb3JrZXIgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJXb3JrZXJTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/getWebGL2Features.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGL2RenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: !!gl.getContextAttributes().antialias,\n\n\t\tredBits: gl.getParameter(gl.RED_BITS),\n\t\tgreenBits: gl.getParameter(gl.GREEN_BITS),\n\t\tblueBits: gl.getParameter(gl.BLUE_BITS),\n\t\talphaBits: gl.getParameter(gl.ALPHA_BITS),\n\t\tdepthBits: gl.getParameter(gl.DEPTH_BITS),\n\t\tstencilBits: gl.getParameter(gl.STENCIL_BITS),\n\n\t\tmaxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),\n\t\tmaxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),\n\t\tmaxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),\n\t\tmaxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),\n\t\tmaxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),\n\t\tmaxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),\n\t\tmaxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),\n\t\tmaxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),\n\t\tmaxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),\n\t\tmaxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),\n\t\taliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),\n\t\taliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),\n\t\tmaxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS),\n\n\t\tvertexShaderHighPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT),\n\t\tvertexShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT),\n\t\tvertexShaderLowPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT),\n\n\t\tfragmentShaderHighPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT),\n\t\tfragmentShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT),\n\t\tfragmentShaderLowPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT),\n\n\t\tmaxVertexUniformComponents: gl.getParameter(gl.MAX_VERTEX_UNIFORM_COMPONENTS),\n\t\tmaxVertexUniformBlocks: gl.getParameter(gl.MAX_VERTEX_UNIFORM_BLOCKS),\n\t\tmaxVertexOutputComponents: gl.getParameter(gl.MAX_VERTEX_OUTPUT_COMPONENTS),\n\t\tmaxVaryingComponents: gl.getParameter(gl.MAX_VARYING_COMPONENTS),\n\t\tmaxFragmentUniformComponents: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_COMPONENTS),\n\t\tmaxFragmentUniformBlocks: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_BLOCKS),\n\t\tmaxFragmentInputComponents: gl.getParameter(gl.MAX_FRAGMENT_INPUT_COMPONENTS),\n\t\tminProgramTexelOffset: gl.getParameter(gl.MIN_PROGRAM_TEXEL_OFFSET),\n\t\tmaxProgramTexelOffset: gl.getParameter(gl.MAX_PROGRAM_TEXEL_OFFSET),\n\t\tmaxDrawBuffers: gl.getParameter(gl.MAX_DRAW_BUFFERS),\n\t\tmaxColorAttachments: gl.getParameter(gl.MAX_COLOR_ATTACHMENTS),\n\t\tmaxSamples: gl.getParameter(gl.MAX_SAMPLES),\n\t\tmax3dTextureSize: gl.getParameter(gl.MAX_3D_TEXTURE_SIZE),\n\t\tmaxArrayTextureLayers: gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS),\n\t\tmaxTextureLodBias: gl.getParameter(gl.MAX_TEXTURE_LOD_BIAS),\n\t\tmaxUniformBufferBindings: gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS),\n\t\tmaxUniformBlockSize: gl.getParameter(gl.MAX_UNIFORM_BLOCK_SIZE),\n\t\tuniformBufferOffsetAlignment: gl.getParameter(gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT),\n\t\tmaxCombinedUniformBlocks: gl.getParameter(gl.MAX_COMBINED_UNIFORM_BLOCKS),\n\t\tmaxCombinedVertexUniformComponents: gl.getParameter(gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS),\n\t\tmaxCombinedFragmentUniformComponents: gl.getParameter(gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS),\n\t\tmaxTransformFeedbackInterleavedComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS),\n\t\tmaxTransformFeedbackSeparateAttribs: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS),\n\t\tmaxTransformFeedbackSeparateComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS),\n\t\tmaxElementIndex: gl.getParameter(gl.MAX_ELEMENT_INDEX),\n\t\tmaxServerWaitTimeout: gl.getParameter(gl.MAX_SERVER_WAIT_TIMEOUT)\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9nZXRXZWJHTDJGZWF0dXJlcy5qcz9lMWNkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXHRpZighZ2wgfHwgIWdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkgcmV0dXJuIGZhbHNlO1xuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG5cblx0Y29uc3QgZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbycpO1xuXG5cdGNvbnN0IGZlYXR1cmVzID0ge1xuXHRcdHJlbmRlcmVyOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuUkVOREVSRVIpLFxuXHRcdHZlbmRvcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFTkRPUiksXG5cdFx0dmVyc2lvbjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLFxuXHRcdHNoYWRlclZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5TSEFESU5HX0xBTkdVQUdFX1ZFUlNJT04pLFxuXHRcdHJlbmRlcmVyVW5tYXNrZWQ6IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gJiYgZ2wuZ2V0UGFyYW1ldGVyKGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8uVU5NQVNLRURfUkVOREVSRVJfV0VCR0wpLFxuXHRcdHZlbmRvclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1ZFTkRPUl9XRUJHTCksXG5cblx0XHRzdXBwb3J0ZWRFeHRlbnNpb25zOiBnbC5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zKCksXG5cdFx0YW50aWFsaWFzOiAhIWdsLmdldENvbnRleHRBdHRyaWJ1dGVzKCkuYW50aWFsaWFzLFxuXG5cdFx0cmVkQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLlJFRF9CSVRTKSxcblx0XHRncmVlbkJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5HUkVFTl9CSVRTKSxcblx0XHRibHVlQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkJMVUVfQklUUyksXG5cdFx0YWxwaGFCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUxQSEFfQklUUyksXG5cdFx0ZGVwdGhCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuREVQVEhfQklUUyksXG5cdFx0c3RlbmNpbEJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5TVEVOQ0lMX0JJVFMpLFxuXG5cdFx0bWF4UmVuZGVyQnVmZmVyU2l6ZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9SRU5ERVJCVUZGRVJfU0laRSksXG5cdFx0bWF4Q29tYmluZWRUZXh0dXJlSW1hZ2VVbml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcblx0XHRtYXhDdWJlTWFwVGV4dHVyZVNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQ1VCRV9NQVBfVEVYVFVSRV9TSVpFKSxcblx0XHRtYXhGcmFnbWVudFVuaWZvcm1WZWN0b3JzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0ZSQUdNRU5UX1VOSUZPUk1fVkVDVE9SUyksXG5cdFx0bWF4VGV4dHVyZUltYWdlVW5pdHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUyksXG5cdFx0bWF4VGV4dHVyZVNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKSxcblx0XHRtYXhWYXJ5aW5nVmVjdG9yczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WQVJZSU5HX1ZFQ1RPUlMpLFxuXHRcdG1heFZlcnRleEF0dHJpYnV0ZXM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX0FUVFJJQlMpLFxuXHRcdG1heFZlcnRleFRleHR1cmVJbWFnZVVuaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcblx0XHRtYXhWZXJ0ZXhVbmlmb3JtVmVjdG9yczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfVU5JRk9STV9WRUNUT1JTKSxcblx0XHRhbGlhc2VkTGluZVdpZHRoUmFuZ2U6IGdsLmdldFBhcmFtZXRlcihnbC5BTElBU0VEX0xJTkVfV0lEVEhfUkFOR0UpLFxuXHRcdGFsaWFzZWRQb2ludFNpemVSYW5nZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLkFMSUFTRURfUE9JTlRfU0laRV9SQU5HRSksXG5cdFx0bWF4Vmlld3BvcnREaW1lbnNpb25zOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZJRVdQT1JUX0RJTVMpLFxuXG5cdFx0dmVydGV4U2hhZGVySGlnaFByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLkhJR0hfRkxPQVQpLFxuXHRcdHZlcnRleFNoYWRlck1lZGl1bVByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCksXG5cdFx0dmVydGV4U2hhZGVyTG93UHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuTE9XX0ZMT0FUKSxcblxuXHRcdGZyYWdtZW50U2hhZGVySGlnaFByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuSElHSF9GTE9BVCksXG5cdFx0ZnJhZ21lbnRTaGFkZXJNZWRpdW1QcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCksXG5cdFx0ZnJhZ21lbnRTaGFkZXJMb3dQcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLkxPV19GTE9BVCksXG5cblx0XHRtYXhWZXJ0ZXhVbmlmb3JtQ29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfVU5JRk9STV9DT01QT05FTlRTKSxcblx0XHRtYXhWZXJ0ZXhVbmlmb3JtQmxvY2tzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9VTklGT1JNX0JMT0NLUyksXG5cdFx0bWF4VmVydGV4T3V0cHV0Q29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfT1VUUFVUX0NPTVBPTkVOVFMpLFxuXHRcdG1heFZhcnlpbmdDb21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZBUllJTkdfQ09NUE9ORU5UUyksXG5cdFx0bWF4RnJhZ21lbnRVbmlmb3JtQ29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9GUkFHTUVOVF9VTklGT1JNX0NPTVBPTkVOVFMpLFxuXHRcdG1heEZyYWdtZW50VW5pZm9ybUJsb2NrczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9GUkFHTUVOVF9VTklGT1JNX0JMT0NLUyksXG5cdFx0bWF4RnJhZ21lbnRJbnB1dENvbXBvbmVudHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfRlJBR01FTlRfSU5QVVRfQ09NUE9ORU5UUyksXG5cdFx0bWluUHJvZ3JhbVRleGVsT2Zmc2V0OiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUlOX1BST0dSQU1fVEVYRUxfT0ZGU0VUKSxcblx0XHRtYXhQcm9ncmFtVGV4ZWxPZmZzZXQ6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfUFJPR1JBTV9URVhFTF9PRkZTRVQpLFxuXHRcdG1heERyYXdCdWZmZXJzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0RSQVdfQlVGRkVSUyksXG5cdFx0bWF4Q29sb3JBdHRhY2htZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT0xPUl9BVFRBQ0hNRU5UUyksXG5cdFx0bWF4U2FtcGxlczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9TQU1QTEVTKSxcblx0XHRtYXgzZFRleHR1cmVTaXplOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYXzNEX1RFWFRVUkVfU0laRSksXG5cdFx0bWF4QXJyYXlUZXh0dXJlTGF5ZXJzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0FSUkFZX1RFWFRVUkVfTEFZRVJTKSxcblx0XHRtYXhUZXh0dXJlTG9kQmlhczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX0xPRF9CSUFTKSxcblx0XHRtYXhVbmlmb3JtQnVmZmVyQmluZGluZ3M6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVU5JRk9STV9CVUZGRVJfQklORElOR1MpLFxuXHRcdG1heFVuaWZvcm1CbG9ja1NpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVU5JRk9STV9CTE9DS19TSVpFKSxcblx0XHR1bmlmb3JtQnVmZmVyT2Zmc2V0QWxpZ25tZW50OiBnbC5nZXRQYXJhbWV0ZXIoZ2wuVU5JRk9STV9CVUZGRVJfT0ZGU0VUX0FMSUdOTUVOVCksXG5cdFx0bWF4Q29tYmluZWRVbmlmb3JtQmxvY2tzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NPTUJJTkVEX1VOSUZPUk1fQkxPQ0tTKSxcblx0XHRtYXhDb21iaW5lZFZlcnRleFVuaWZvcm1Db21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NPTUJJTkVEX1ZFUlRFWF9VTklGT1JNX0NPTVBPTkVOVFMpLFxuXHRcdG1heENvbWJpbmVkRnJhZ21lbnRVbmlmb3JtQ29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT01CSU5FRF9GUkFHTUVOVF9VTklGT1JNX0NPTVBPTkVOVFMpLFxuXHRcdG1heFRyYW5zZm9ybUZlZWRiYWNrSW50ZXJsZWF2ZWRDb21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RSQU5TRk9STV9GRUVEQkFDS19JTlRFUkxFQVZFRF9DT01QT05FTlRTKSxcblx0XHRtYXhUcmFuc2Zvcm1GZWVkYmFja1NlcGFyYXRlQXR0cmliczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9UUkFOU0ZPUk1fRkVFREJBQ0tfU0VQQVJBVEVfQVRUUklCUyksXG5cdFx0bWF4VHJhbnNmb3JtRmVlZGJhY2tTZXBhcmF0ZUNvbXBvbmVudHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVFJBTlNGT1JNX0ZFRURCQUNLX1NFUEFSQVRFX0NPTVBPTkVOVFMpLFxuXHRcdG1heEVsZW1lbnRJbmRleDogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9FTEVNRU5UX0lOREVYKSxcblx0XHRtYXhTZXJ2ZXJXYWl0VGltZW91dDogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9TRVJWRVJfV0FJVF9USU1FT1VUKSxcblx0fTtcblxuXHRyZXR1cm4gZmVhdHVyZXM7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvZ2V0V2ViR0wyRmVhdHVyZXMuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakVBO0FBQ0E7QUFtRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/getWebGLFeatures.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGLRenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: !!gl.getContextAttributes().antialias,\n\n\t\tredBits: gl.getParameter(gl.RED_BITS),\n\t\tgreenBits: gl.getParameter(gl.GREEN_BITS),\n\t\tblueBits: gl.getParameter(gl.BLUE_BITS),\n\t\talphaBits: gl.getParameter(gl.ALPHA_BITS),\n\t\tdepthBits: gl.getParameter(gl.DEPTH_BITS),\n\t\tstencilBits: gl.getParameter(gl.STENCIL_BITS),\n\n\t\tmaxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),\n\t\tmaxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),\n\t\tmaxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),\n\t\tmaxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),\n\t\tmaxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),\n\t\tmaxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),\n\t\tmaxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),\n\t\tmaxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),\n\t\tmaxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),\n\t\tmaxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),\n\t\taliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),\n\t\taliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),\n\t\tmaxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS),\n\n\t\tvertexShaderHighPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT),\n\t\tvertexShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT),\n\t\tvertexShaderLowPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT),\n\n\t\tfragmentShaderHighPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT),\n\t\tfragmentShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT),\n\t\tfragmentShaderLowPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT)\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9nZXRXZWJHTEZlYXR1cmVzLmpzP2QzM2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cdGlmKCFnbCB8fCAhZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHJldHVybiBmYWxzZTtcblx0LyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuXG5cdGNvbnN0IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlYnVnX3JlbmRlcmVyX2luZm8nKTtcblxuXHRjb25zdCBmZWF0dXJlcyA9IHtcblx0XHRyZW5kZXJlcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlJFTkRFUkVSKSxcblx0XHR2ZW5kb3I6IGdsLmdldFBhcmFtZXRlcihnbC5WRU5ET1IpLFxuXHRcdHZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5WRVJTSU9OKSxcblx0XHRzaGFkZXJWZXJzaW9uOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OKSxcblx0XHRyZW5kZXJlclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1JFTkRFUkVSX1dFQkdMKSxcblx0XHR2ZW5kb3JVbm1hc2tlZDogZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyAmJiBnbC5nZXRQYXJhbWV0ZXIoZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mby5VTk1BU0tFRF9WRU5ET1JfV0VCR0wpLFxuXG5cdFx0c3VwcG9ydGVkRXh0ZW5zaW9uczogZ2wuZ2V0U3VwcG9ydGVkRXh0ZW5zaW9ucygpLFxuXHRcdGFudGlhbGlhczogISFnbC5nZXRDb250ZXh0QXR0cmlidXRlcygpLmFudGlhbGlhcyxcblxuXHRcdHJlZEJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5SRURfQklUUyksXG5cdFx0Z3JlZW5CaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuR1JFRU5fQklUUyksXG5cdFx0Ymx1ZUJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5CTFVFX0JJVFMpLFxuXHRcdGFscGhhQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkFMUEhBX0JJVFMpLFxuXHRcdGRlcHRoQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkRFUFRIX0JJVFMpLFxuXHRcdHN0ZW5jaWxCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuU1RFTkNJTF9CSVRTKSxcblxuXHRcdG1heFJlbmRlckJ1ZmZlclNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfUkVOREVSQlVGRkVSX1NJWkUpLFxuXHRcdG1heENvbWJpbmVkVGV4dHVyZUltYWdlVW5pdHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQ09NQklORURfVEVYVFVSRV9JTUFHRV9VTklUUyksXG5cdFx0bWF4Q3ViZU1hcFRleHR1cmVTaXplOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NVQkVfTUFQX1RFWFRVUkVfU0laRSksXG5cdFx0bWF4RnJhZ21lbnRVbmlmb3JtVmVjdG9yczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9GUkFHTUVOVF9VTklGT1JNX1ZFQ1RPUlMpLFxuXHRcdG1heFRleHR1cmVJbWFnZVVuaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFMpLFxuXHRcdG1heFRleHR1cmVTaXplOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSksXG5cdFx0bWF4VmFyeWluZ1ZlY3RvcnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkFSWUlOR19WRUNUT1JTKSxcblx0XHRtYXhWZXJ0ZXhBdHRyaWJ1dGVzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9BVFRSSUJTKSxcblx0XHRtYXhWZXJ0ZXhUZXh0dXJlSW1hZ2VVbml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfVEVYVFVSRV9JTUFHRV9VTklUUyksXG5cdFx0bWF4VmVydGV4VW5pZm9ybVZlY3RvcnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX1VOSUZPUk1fVkVDVE9SUyksXG5cdFx0YWxpYXNlZExpbmVXaWR0aFJhbmdlOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUxJQVNFRF9MSU5FX1dJRFRIX1JBTkdFKSxcblx0XHRhbGlhc2VkUG9pbnRTaXplUmFuZ2U6IGdsLmdldFBhcmFtZXRlcihnbC5BTElBU0VEX1BPSU5UX1NJWkVfUkFOR0UpLFxuXHRcdG1heFZpZXdwb3J0RGltZW5zaW9uczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WSUVXUE9SVF9ESU1TKSxcblxuXHRcdHZlcnRleFNoYWRlckhpZ2hQcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5ISUdIX0ZMT0FUKSxcblx0XHR2ZXJ0ZXhTaGFkZXJNZWRpdW1QcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLFxuXHRcdHZlcnRleFNoYWRlckxvd1ByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLkxPV19GTE9BVCksXG5cblx0XHRmcmFnbWVudFNoYWRlckhpZ2hQcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLkhJR0hfRkxPQVQpLFxuXHRcdGZyYWdtZW50U2hhZGVyTWVkaXVtUHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLFxuXHRcdGZyYWdtZW50U2hhZGVyTG93UHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5MT1dfRkxPQVQpLFxuXHR9O1xuXG5cdHJldHVybiBmZWF0dXJlcztcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9nZXRXZWJHTEZlYXR1cmVzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRDQTtBQUNBO0FBd0NBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///43\n");

/***/ })
/******/ ]);
});