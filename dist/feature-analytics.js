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
/* 0 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/isWebVRSupported.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.getVRDisplays || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzV2ViVlJTdXBwb3J0ZWQuanM/OTY2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISFuYXZpZ2F0b3IuZ2V0VlJEaXNwbGF5cyB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlZSU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return analytics; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_record__ = __webpack_require__(/*! ../utilities/record */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features__ = __webpack_require__(/*! ../features */ 4);\n// Analytics\n\n\n// Features\n\n\nvar analytics = {\n\tinitialize: function initialize(trackingId) {\n\t\t// Inject Google Analytics\n\n\t\t/* eslint-disable */\n\t\t(function (i, s, o, g, r, a, m) {\n\t\t\ti['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {\n\t\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t\t}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);\n\t\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'GA_FEATURE_ANALYTICS');\n\t\twindow.GA_FEATURE_ANALYTICS('create', '' + trackingId, 'auto');\n\t\twindow.GA_FEATURE_ANALYTICS('send', 'pageview');\n\t\t/* eslint-enable */\n\t},\n\n\tregister: function register() {\n\t\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t\tvar features = Object(__WEBPACK_IMPORTED_MODULE_1__features__[\"a\" /* getFeatures */])(verbose);\n\n\t\tObject.keys(features).forEach(function (category) {\n\t\t\tObject.keys(features[category]).forEach(function (feature) {\n\t\t\t\tvar value = features[category][feature];\n\n\t\t\t\tif (typeof value === 'boolean' || typeof value === 'number') {\n\t\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\t\teventCategory: '' + category,\n\t\t\t\t\t\teventAction: '' + feature,\n\t\t\t\t\t\teventValue: '' + value\n\t\t\t\t\t});\n\t\t\t\t} else if (typeof value === 'string') {\n\t\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\t\teventCategory: '' + category,\n\t\t\t\t\t\teventAction: '' + feature,\n\t\t\t\t\t\teventLabel: '' + value\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t// WebGLFeatures and WebGL2Features\n\t\t\t\t\t// console.log(value);\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYW5hbHl0aWNzL2luZGV4LmpzPzRiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5hbHl0aWNzXG5pbXBvcnQgeyByZWNvcmQgfSBmcm9tICcuLi91dGlsaXRpZXMvcmVjb3JkJztcblxuLy8gRmVhdHVyZXNcbmltcG9ydCB7IGdldEZlYXR1cmVzIH0gZnJvbSAnLi4vZmVhdHVyZXMnO1xuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0ge1xuXHRpbml0aWFsaXplOiAodHJhY2tpbmdJZCkgPT4ge1xuXHRcdC8vIEluamVjdCBHb29nbGUgQW5hbHl0aWNzXG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXHRcdChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcblx0XHQoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcblx0XHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG5cdFx0fSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdHQV9GRUFUVVJFX0FOQUxZVElDUycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnY3JlYXRlJywgYCR7dHJhY2tpbmdJZH1gLCAnYXV0bycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgKi9cblx0fSxcblxuXHRyZWdpc3RlcjogKHZlcmJvc2UgPSBmYWxzZSkgPT4ge1xuXHRcdGNvbnN0IGZlYXR1cmVzID0gZ2V0RmVhdHVyZXModmVyYm9zZSk7XG5cblx0XHRPYmplY3Qua2V5cyhmZWF0dXJlcykuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcblx0XHRcdE9iamVjdC5rZXlzKGZlYXR1cmVzW2NhdGVnb3J5XSkuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGZlYXR1cmVzW2NhdGVnb3J5XVtmZWF0dXJlXTtcblxuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdFx0XHRldmVudENhdGVnb3J5OiBgJHtjYXRlZ29yeX1gLFxuXHRcdFx0XHRcdFx0ZXZlbnRBY3Rpb246IGAke2ZlYXR1cmV9YCxcblx0XHRcdFx0XHRcdGV2ZW50VmFsdWU6IGAke3ZhbHVlfWAsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdFx0XHRldmVudENhdGVnb3J5OiBgJHtjYXRlZ29yeX1gLFxuXHRcdFx0XHRcdFx0ZXZlbnRBY3Rpb246IGAke2ZlYXR1cmV9YCxcblx0XHRcdFx0XHRcdGV2ZW50TGFiZWw6IGAke3ZhbHVlfWAsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2ViR0xGZWF0dXJlcyBhbmQgV2ViR0wyRmVhdHVyZXNcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYW5hbHl0aWNzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./utilities/record.js ***!
  \*****************************/
/*! exports provided: record */
/*! exports used: record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return record; });\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar record = function record() {\n\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\tvar defaults = {\n\t\thitType: 'event',\n\t\tnonInteraction: true\n\t};\n\n\tvar eventObject = _extends({}, defaults, options);\n\n\tif (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {\n\t\tvar callback = function callback() {\n\t\t\twindow.GA_FEATURE_ANALYTICS('send', eventObject);\n\t\t};\n\n\t\tif ('requestIdleCallback' in window) {\n\t\t\twindow.requestIdleCallback(callback);\n\t\t} else {\n\t\t\tcallback();\n\t\t}\n\t} else {\n\t\tconsole.error('Google Analytics has not been initialized');\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbGl0aWVzL3JlY29yZC5qcz8wNDMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNvcmQgPSAob3B0aW9ucyA9IHt9KSA9PiB7XG5cdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdGhpdFR5cGU6ICdldmVudCcsXG5cdFx0bm9uSW50ZXJhY3Rpb246IHRydWUsXG5cdH07XG5cblx0Y29uc3QgZXZlbnRPYmplY3QgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG5cblx0aWYgKHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsIGV2ZW50T2JqZWN0KTtcblx0XHR9O1xuXG5cdFx0aWYgKCdyZXF1ZXN0SWRsZUNhbGxiYWNrJyBpbiB3aW5kb3cpIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNhbGxiYWNrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignR29vZ2xlIEFuYWx5dGljcyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQnKTtcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdXRpbGl0aWVzL3JlY29yZC5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./features/index.js ***!
  \***************************/
/*! exports provided: getFeatures */
/*! exports used: getFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getFeatures; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browserFeatures_getWebGL2Features__ = __webpack_require__(/*! ./browserFeatures/getWebGL2Features */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browserFeatures_getWebGLFeatures__ = __webpack_require__(/*! ./browserFeatures/getWebGLFeatures */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browserFeatures_isGamepadSupported__ = __webpack_require__(/*! ./browserFeatures/isGamepadSupported */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browserFeatures_isRequestIdleCallbackSupported__ = __webpack_require__(/*! ./browserFeatures/isRequestIdleCallbackSupported */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browserFeatures_isServiceWorkerSupported__ = __webpack_require__(/*! ./browserFeatures/isServiceWorkerSupported */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browserFeatures_isWebAssemblySupported__ = __webpack_require__(/*! ./browserFeatures/isWebAssemblySupported */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browserFeatures_isWebAudioSupported__ = __webpack_require__(/*! ./browserFeatures/isWebAudioSupported */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__browserFeatures_isWebGL2Supported__ = __webpack_require__(/*! ./browserFeatures/isWebGL2Supported */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__browserFeatures_isWebGLSupported__ = __webpack_require__(/*! ./browserFeatures/isWebGLSupported */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__browserFeatures_isWebRTCSupported__ = __webpack_require__(/*! ./browserFeatures/isWebRTCSupported */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browserFeatures_isWebSocketSupported__ = __webpack_require__(/*! ./browserFeatures/isWebSocketSupported */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__browserFeatures_isWebVRSupported__ = __webpack_require__(/*! ./browserFeatures/isWebVRSupported */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__browserFeatures_isWebWorkerSupported__ = __webpack_require__(/*! ./browserFeatures/isWebWorkerSupported */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__browserSettings_isCookieEnabled__ = __webpack_require__(/*! ./browserSettings/isCookieEnabled */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__browserSettings_isDoNotTrackEnabled__ = __webpack_require__(/*! ./browserSettings/isDoNotTrackEnabled */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hardwareFeatures_getDevicePixelRatio__ = __webpack_require__(/*! ./hardwareFeatures/getDevicePixelRatio */ 19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hardwareFeatures_getEndianness__ = __webpack_require__(/*! ./hardwareFeatures/getEndianness */ 20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__hardwareFeatures_getWebWorkerPoolSize__ = __webpack_require__(/*! ./hardwareFeatures/getWebWorkerPoolSize */ 21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__hardwareFeatures_getWebVRDeviceType__ = __webpack_require__(/*! ./hardwareFeatures/getWebVRDeviceType */ 22);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n// Browser features\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Browser settings\n\n\n\n// Hardware features\n\n\n\n\n\n// Features\nvar getFeatures = function getFeatures() {\n\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t// Default features\n\tvar features = {\n\t\t// Browser features\n\t\tbrowserFeatures: {\n\t\t\tisGamepadSupported: __WEBPACK_IMPORTED_MODULE_2__browserFeatures_isGamepadSupported__[\"a\" /* default */],\n\t\t\tisRequestIdleCallbackSupported: __WEBPACK_IMPORTED_MODULE_3__browserFeatures_isRequestIdleCallbackSupported__[\"a\" /* default */],\n\t\t\tisServiceWorkerSupported: __WEBPACK_IMPORTED_MODULE_4__browserFeatures_isServiceWorkerSupported__[\"a\" /* default */],\n\t\t\tisWebAssemblySupported: __WEBPACK_IMPORTED_MODULE_5__browserFeatures_isWebAssemblySupported__[\"a\" /* default */],\n\t\t\tisWebAudioSupported: __WEBPACK_IMPORTED_MODULE_6__browserFeatures_isWebAudioSupported__[\"a\" /* default */],\n\t\t\tisWebGL2Supported: __WEBPACK_IMPORTED_MODULE_7__browserFeatures_isWebGL2Supported__[\"a\" /* default */],\n\t\t\tisWebGLSupported: __WEBPACK_IMPORTED_MODULE_8__browserFeatures_isWebGLSupported__[\"a\" /* default */],\n\t\t\tisWebRTCSupported: __WEBPACK_IMPORTED_MODULE_9__browserFeatures_isWebRTCSupported__[\"a\" /* default */],\n\t\t\tisWebSocketSupported: __WEBPACK_IMPORTED_MODULE_10__browserFeatures_isWebSocketSupported__[\"a\" /* default */],\n\t\t\tisWebVRSupported: __WEBPACK_IMPORTED_MODULE_11__browserFeatures_isWebVRSupported__[\"a\" /* default */],\n\t\t\tisWebWorkerSupported: __WEBPACK_IMPORTED_MODULE_12__browserFeatures_isWebWorkerSupported__[\"a\" /* default */]\n\t\t},\n\n\t\t// Browser settings\n\t\tbrowserSettings: {\n\t\t\tisCookieEnabled: __WEBPACK_IMPORTED_MODULE_13__browserSettings_isCookieEnabled__[\"a\" /* default */],\n\t\t\tisDoNotTrackEnabled: __WEBPACK_IMPORTED_MODULE_14__browserSettings_isDoNotTrackEnabled__[\"a\" /* default */]\n\t\t},\n\n\t\t// Hardware features\n\t\thardwareFeatures: {\n\t\t\tdevicePixelRatio: __WEBPACK_IMPORTED_MODULE_15__hardwareFeatures_getDevicePixelRatio__[\"a\" /* default */],\n\t\t\tworkerPoolSize: __WEBPACK_IMPORTED_MODULE_17__hardwareFeatures_getWebWorkerPoolSize__[\"a\" /* default */]\n\t\t}\n\t};\n\n\t// WebVR features\n\tif (__WEBPACK_IMPORTED_MODULE_11__browserFeatures_isWebVRSupported__[\"a\" /* default */]) {\n\t\treturn _extends({}, features.hardwareFeatures, {\n\t\t\t// Hardware features\n\t\t\twebVRDeviceType: __WEBPACK_IMPORTED_MODULE_18__hardwareFeatures_getWebVRDeviceType__[\"a\" /* default */]\n\t\t});\n\t}\n\n\t// Verbose features\n\tif (verbose) {\n\t\tfeatures.browserFeatures = _extends({}, features.browserFeatures, {\n\t\t\t// Browser features\n\t\t\twebGL2Features: __WEBPACK_IMPORTED_MODULE_0__browserFeatures_getWebGL2Features__[\"a\" /* default */],\n\t\t\twebGLFeatures: __WEBPACK_IMPORTED_MODULE_1__browserFeatures_getWebGLFeatures__[\"a\" /* default */]\n\t\t});\n\n\t\tfeatures.hardwareFeatures = _extends({}, features.hardwareFeatures, {\n\t\t\t// Hardware features\n\t\t\tendianness: __WEBPACK_IMPORTED_MODULE_16__hardwareFeatures_getEndianness__[\"a\" /* default */]\n\t\t});\n\t}\n\n\treturn features;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaW5kZXguanM/NzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCcm93c2VyIGZlYXR1cmVzXG5pbXBvcnQgZ2V0V2ViR0wyRmVhdHVyZXMgZnJvbSAnLi9icm93c2VyRmVhdHVyZXMvZ2V0V2ViR0wyRmVhdHVyZXMnO1xuaW1wb3J0IGdldFdlYkdMRmVhdHVyZXMgZnJvbSAnLi9icm93c2VyRmVhdHVyZXMvZ2V0V2ViR0xGZWF0dXJlcyc7XG5pbXBvcnQgaXNHYW1lcGFkU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzR2FtZXBhZFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNSZXF1ZXN0SWRsZUNhbGxiYWNrU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZCc7XG5pbXBvcnQgaXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJBc3NlbWJseVN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkFzc2VtYmx5U3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkF1ZGlvU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViQXVkaW9TdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViR0wyU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViR0wyU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkdMU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViR0xTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViUlRDU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViUlRDU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYlNvY2tldFN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJWUlN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlZSU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYldvcmtlclN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYldvcmtlclN1cHBvcnRlZCc7XG5cbi8vIEJyb3dzZXIgc2V0dGluZ3NcbmltcG9ydCBpc0Nvb2tpZUVuYWJsZWQgZnJvbSAnLi9icm93c2VyU2V0dGluZ3MvaXNDb29raWVFbmFibGVkJztcbmltcG9ydCBpc0RvTm90VHJhY2tFbmFibGVkIGZyb20gJy4vYnJvd3NlclNldHRpbmdzL2lzRG9Ob3RUcmFja0VuYWJsZWQnO1xuXG4vLyBIYXJkd2FyZSBmZWF0dXJlc1xuaW1wb3J0IGdldERldmljZVBpeGVsUmF0aW8gZnJvbSAnLi9oYXJkd2FyZUZlYXR1cmVzL2dldERldmljZVBpeGVsUmF0aW8nO1xuaW1wb3J0IGdldEVuZGlhbm5lc3MgZnJvbSAnLi9oYXJkd2FyZUZlYXR1cmVzL2dldEVuZGlhbm5lc3MnO1xuaW1wb3J0IGdldFdlYldvcmtlclBvb2xTaXplIGZyb20gJy4vaGFyZHdhcmVGZWF0dXJlcy9nZXRXZWJXb3JrZXJQb29sU2l6ZSc7XG5pbXBvcnQgZ2V0V2ViVlJEZXZpY2VUeXBlIGZyb20gJy4vaGFyZHdhcmVGZWF0dXJlcy9nZXRXZWJWUkRldmljZVR5cGUnO1xuXG5cbi8vIEZlYXR1cmVzXG5leHBvcnQgY29uc3QgZ2V0RmVhdHVyZXMgPSAodmVyYm9zZSA9IGZhbHNlKSA9PiB7XG5cdC8vIERlZmF1bHQgZmVhdHVyZXNcblx0Y29uc3QgZmVhdHVyZXMgPSB7XG5cdFx0Ly8gQnJvd3NlciBmZWF0dXJlc1xuXHRcdGJyb3dzZXJGZWF0dXJlczoge1xuXHRcdFx0aXNHYW1lcGFkU3VwcG9ydGVkLFxuXHRcdFx0aXNSZXF1ZXN0SWRsZUNhbGxiYWNrU3VwcG9ydGVkLFxuXHRcdFx0aXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkLFxuXHRcdFx0aXNXZWJBc3NlbWJseVN1cHBvcnRlZCxcblx0XHRcdGlzV2ViQXVkaW9TdXBwb3J0ZWQsXG5cdFx0XHRpc1dlYkdMMlN1cHBvcnRlZCxcblx0XHRcdGlzV2ViR0xTdXBwb3J0ZWQsXG5cdFx0XHRpc1dlYlJUQ1N1cHBvcnRlZCxcblx0XHRcdGlzV2ViU29ja2V0U3VwcG9ydGVkLFxuXHRcdFx0aXNXZWJWUlN1cHBvcnRlZCxcblx0XHRcdGlzV2ViV29ya2VyU3VwcG9ydGVkLFxuXHRcdH0sXG5cblx0XHQvLyBCcm93c2VyIHNldHRpbmdzXG5cdFx0YnJvd3NlclNldHRpbmdzOiB7XG5cdFx0XHRpc0Nvb2tpZUVuYWJsZWQsXG5cdFx0XHRpc0RvTm90VHJhY2tFbmFibGVkLFxuXHRcdH0sXG5cblx0XHQvLyBIYXJkd2FyZSBmZWF0dXJlc1xuXHRcdGhhcmR3YXJlRmVhdHVyZXM6IHtcblx0XHRcdGRldmljZVBpeGVsUmF0aW86IGdldERldmljZVBpeGVsUmF0aW8sXG5cdFx0XHR3b3JrZXJQb29sU2l6ZTogZ2V0V2ViV29ya2VyUG9vbFNpemUsXG5cdFx0fSxcblx0fTtcblxuXHQvLyBXZWJWUiBmZWF0dXJlc1xuXHRpZiAoaXNXZWJWUlN1cHBvcnRlZCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5mZWF0dXJlcy5oYXJkd2FyZUZlYXR1cmVzLFxuXHRcdFx0Li4ue1xuXHRcdFx0XHQvLyBIYXJkd2FyZSBmZWF0dXJlc1xuXHRcdFx0XHR3ZWJWUkRldmljZVR5cGU6IGdldFdlYlZSRGV2aWNlVHlwZSxcblx0XHRcdH0sXG5cdFx0fTtcblx0fVxuXG5cdC8vIFZlcmJvc2UgZmVhdHVyZXNcblx0aWYgKHZlcmJvc2UpIHtcblx0XHRmZWF0dXJlcy5icm93c2VyRmVhdHVyZXMgPSB7XG5cdFx0XHQuLi5mZWF0dXJlcy5icm93c2VyRmVhdHVyZXMsXG5cdFx0XHQuLi57XG5cdFx0XHRcdC8vIEJyb3dzZXIgZmVhdHVyZXNcblx0XHRcdFx0d2ViR0wyRmVhdHVyZXM6IGdldFdlYkdMMkZlYXR1cmVzLFxuXHRcdFx0XHR3ZWJHTEZlYXR1cmVzOiBnZXRXZWJHTEZlYXR1cmVzLFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0ZmVhdHVyZXMuaGFyZHdhcmVGZWF0dXJlcyA9IHtcblx0XHRcdC4uLmZlYXR1cmVzLmhhcmR3YXJlRmVhdHVyZXMsXG5cdFx0XHQuLi57XG5cdFx0XHRcdC8vIEhhcmR3YXJlIGZlYXR1cmVzXG5cdFx0XHRcdGVuZGlhbm5lc3M6IGdldEVuZGlhbm5lc3MsXG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZmVhdHVyZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQXZCQTtBQUNBO0FBNEJBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/getWebGL2Features.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGL2RenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: !!gl.getContextAttributes().antialias\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2dldFdlYkdMMkZlYXR1cmVzLmpzP2UxY2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cdGlmKCFnbCB8fCAhZ2wgaW5zdGFuY2VvZiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSByZXR1cm4gZmFsc2U7XG5cdC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cblxuXHRjb25zdCBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZWJ1Z19yZW5kZXJlcl9pbmZvJyk7XG5cblx0Y29uc3QgZmVhdHVyZXMgPSB7XG5cdFx0cmVuZGVyZXI6IGdsLmdldFBhcmFtZXRlcihnbC5SRU5ERVJFUiksXG5cdFx0dmVuZG9yOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuVkVORE9SKSxcblx0XHR2ZXJzaW9uOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuVkVSU0lPTiksXG5cdFx0c2hhZGVyVmVyc2lvbjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlNIQURJTkdfTEFOR1VBR0VfVkVSU0lPTiksXG5cdFx0cmVuZGVyZXJVbm1hc2tlZDogZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyAmJiBnbC5nZXRQYXJhbWV0ZXIoZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mby5VTk1BU0tFRF9SRU5ERVJFUl9XRUJHTCksXG5cdFx0dmVuZG9yVW5tYXNrZWQ6IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gJiYgZ2wuZ2V0UGFyYW1ldGVyKGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8uVU5NQVNLRURfVkVORE9SX1dFQkdMKSxcblxuXHRcdHN1cHBvcnRlZEV4dGVuc2lvbnM6IGdsLmdldFN1cHBvcnRlZEV4dGVuc2lvbnMoKSxcblx0XHRhbnRpYWxpYXM6ICEhZ2wuZ2V0Q29udGV4dEF0dHJpYnV0ZXMoKS5hbnRpYWxpYXMsXG5cdH07XG5cblx0cmV0dXJuIGZlYXR1cmVzO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2dldFdlYkdMMkZlYXR1cmVzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/getWebGLFeatures.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGLRenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: !!gl.getContextAttributes().antialias\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2dldFdlYkdMRmVhdHVyZXMuanM/ZDMzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblx0aWYoIWdsIHx8ICFnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgcmV0dXJuIGZhbHNlO1xuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG5cblx0Y29uc3QgZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbycpO1xuXG5cdGNvbnN0IGZlYXR1cmVzID0ge1xuXHRcdHJlbmRlcmVyOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuUkVOREVSRVIpLFxuXHRcdHZlbmRvcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFTkRPUiksXG5cdFx0dmVyc2lvbjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLFxuXHRcdHNoYWRlclZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5TSEFESU5HX0xBTkdVQUdFX1ZFUlNJT04pLFxuXHRcdHJlbmRlcmVyVW5tYXNrZWQ6IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gJiYgZ2wuZ2V0UGFyYW1ldGVyKGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8uVU5NQVNLRURfUkVOREVSRVJfV0VCR0wpLFxuXHRcdHZlbmRvclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1ZFTkRPUl9XRUJHTCksXG5cblx0XHRzdXBwb3J0ZWRFeHRlbnNpb25zOiBnbC5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zKCksXG5cdFx0YW50aWFsaWFzOiAhIWdsLmdldENvbnRleHRBdHRyaWJ1dGVzKCkuYW50aWFsaWFzLFxuXHR9O1xuXG5cdHJldHVybiBmZWF0dXJlcztcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9nZXRXZWJHTEZlYXR1cmVzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************************************!*\
  !*** ./features/browserFeatures/isGamepadSupported.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Gamepad || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzR2FtZXBhZFN1cHBvcnRlZC5qcz9kNDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5HYW1lcGFkIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzR2FtZXBhZFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!********************************************************************!*\
  !*** ./features/browserFeatures/isRequestIdleCallbackSupported.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.requestIdleCallback || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZC5qcz81MWYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************************************!*\
  !*** ./features/browserFeatures/isServiceWorkerSupported.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.serviceWorker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZC5qcz9hZmE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!************************************************************!*\
  !*** ./features/browserFeatures/isWebAssemblySupported.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebAssembly || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkFzc2VtYmx5U3VwcG9ydGVkLmpzPzAzN2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhd2luZG93LldlYkFzc2VtYmx5IHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzV2ViQXNzZW1ibHlTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*********************************************************!*\
  !*** ./features/browserFeatures/isWebAudioSupported.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.AudioContext || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkF1ZGlvU3VwcG9ydGVkLmpzPzI3OTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhd2luZG93LkF1ZGlvQ29udGV4dCB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkF1ZGlvU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/isWebGL2Supported.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\t/* eslint-disable no-undef */\n\treturn gl && gl instanceof WebGL2RenderingContext || false;\n\t/* eslint-enable no-undef */\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMMlN1cHBvcnRlZC5qcz9iNWM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXHRyZXR1cm4gKGdsICYmIGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkgfHwgZmFsc2U7XG5cdC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMMlN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/isWebGLSupported.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\treturn gl && gl instanceof WebGLRenderingContext || false;\n\t/* eslint-enable no-undef */\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMU3VwcG9ydGVkLmpzP2FkMmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cdHJldHVybiAoZ2wgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHx8IGZhbHNlO1xuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJHTFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/isWebRTCSupported.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.RTCPeerConnection && !!window.RTCDataChannelEvent || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlJUQ1N1cHBvcnRlZC5qcz9iYzk5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAoISF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgISF3aW5kb3cuUlRDRGF0YUNoYW5uZWxFdmVudCkgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJSVENTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************!*\
  !*** ./features/browserFeatures/isWebSocketSupported.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebSocket || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZC5qcz9jZjM4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAoISF3aW5kb3cuV2ViU29ja2V0KSB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**********************************************************!*\
  !*** ./features/browserFeatures/isWebWorkerSupported.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Worker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYldvcmtlclN1cHBvcnRlZC5qcz9jYWVjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5Xb3JrZXIgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJXb3JrZXJTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*****************************************************!*\
  !*** ./features/browserSettings/isCookieEnabled.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.cookieEnabled || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0Nvb2tpZUVuYWJsZWQuanM/M2I2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISFuYXZpZ2F0b3IuY29va2llRW5hYmxlZCB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0Nvb2tpZUVuYWJsZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************!*\
  !*** ./features/browserSettings/isDoNotTrackEnabled.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar doNotTrack = navigator.doNotTrack || false;\n\n\tif (!!doNotTrack || doNotTrack === \"unspecified\") {\n\t\treturn false;\n\t} else {\n\t\treturn true;\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0RvTm90VHJhY2tFbmFibGVkLmpzP2ZjMWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgZG9Ob3RUcmFjayA9IG5hdmlnYXRvci5kb05vdFRyYWNrIHx8IGZhbHNlO1xuXG5cdGlmICghIWRvTm90VHJhY2sgfHwgZG9Ob3RUcmFjayA9PT0gXCJ1bnNwZWNpZmllZFwiKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyU2V0dGluZ3MvaXNEb05vdFRyYWNrRW5hYmxlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************!*\
  !*** ./features/hardwareFeatures/getDevicePixelRatio.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn window.devicePixelRatio || 1;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0RGV2aWNlUGl4ZWxSYXRpby5qcz83ODMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaGFyZHdhcmVGZWF0dXJlcy9nZXREZXZpY2VQaXhlbFJhdGlvLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!****************************************************!*\
  !*** ./features/hardwareFeatures/getEndianness.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tif (window.ArrayBuffer !== null) {\n\t\tvar buffer = new ArrayBuffer(4);\n\t\tvar intView = new Uint32Array(buffer);\n\t\tvar byteView = new Uint8Array(buffer);\n\t\tintView[0] = 1;\n\n\t\treturn byteView[0] === 1 ? 'little' : 'big';\n\t} else {\n\t\treturn 'unknown';\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0RW5kaWFubmVzcy5qcz9jNzI0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGlmICh3aW5kb3cuQXJyYXlCdWZmZXIgIT09IG51bGwpIHtcblx0XHRjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG5cdFx0Y29uc3QgaW50VmlldyA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuXHRcdGNvbnN0IGJ5dGVWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcblx0XHRpbnRWaWV3WzBdID0gMTtcblxuXHRcdHJldHVybiAoYnl0ZVZpZXdbMF0gPT09IDEpID8gJ2xpdHRsZScgOiAnYmlnJztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ3Vua25vd24nO1xuXHR9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9oYXJkd2FyZUZlYXR1cmVzL2dldEVuZGlhbm5lc3MuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!***********************************************************!*\
  !*** ./features/hardwareFeatures/getWebWorkerPoolSize.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn navigator.hardwareConcurrency || 0;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0V2ViV29ya2VyUG9vbFNpemUuanM/MzRlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gbmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kgfHwgMDtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0V2ViV29ya2VyUG9vbFNpemUuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*********************************************************!*\
  !*** ./features/hardwareFeatures/getWebVRDeviceType.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browserFeatures_isWebVRSupported__ = __webpack_require__(/*! ./../browserFeatures/isWebVRSupported */ 0);\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tif (__WEBPACK_IMPORTED_MODULE_0__browserFeatures_isWebVRSupported__[\"a\" /* default */]) {\n\t\tnavigator.getVRDisplays().then(function (displays) {\n\t\t\tif (displays.length > 0) {\n\t\t\t\tvar displayName = displays[0].displayName;\n\n\t\t\t\tif (/daydream/i.test(displayName)) {\n\t\t\t\t\treturn 'Google Daydream';\n\t\t\t\t} else if (/vive/i.test(displayName)) {\n\t\t\t\t\treturn 'HTC Vive';\n\t\t\t\t} else if (/oculus/i.test(displayName)) {\n\t\t\t\t\treturn 'Oculus Rift';\n\t\t\t\t} else if (/SamsungBrowser.+Mobile VR/i.test(window.navigator.userAgent)) {\n\t\t\t\t\treturn 'Samsung GearVR';\n\t\t\t\t} else {\n\t\t\t\t\treturn 'Unknown';\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t});\n\t} else {\n\t\treturn false;\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0V2ViVlJEZXZpY2VUeXBlLmpzP2YxNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzV2ViVlJTdXBwb3J0ZWQgZnJvbSAnLi8uLi9icm93c2VyRmVhdHVyZXMvaXNXZWJWUlN1cHBvcnRlZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGlmIChpc1dlYlZSU3VwcG9ydGVkKSB7XG5cdFx0bmF2aWdhdG9yLmdldFZSRGlzcGxheXMoKVxuXHRcdFx0LnRoZW4oKGRpc3BsYXlzKSA9PiB7XG5cdFx0XHRcdGlmIChkaXNwbGF5cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgZGlzcGxheU5hbWUgPSBkaXNwbGF5c1swXS5kaXNwbGF5TmFtZTtcblxuXHRcdFx0XHRcdGlmICgvZGF5ZHJlYW0vaS50ZXN0KGRpc3BsYXlOYW1lKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdHb29nbGUgRGF5ZHJlYW0nO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoL3ZpdmUvaS50ZXN0KGRpc3BsYXlOYW1lKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdIVEMgVml2ZSc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgvb2N1bHVzL2kudGVzdChkaXNwbGF5TmFtZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnT2N1bHVzIFJpZnQnO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoL1NhbXN1bmdCcm93c2VyLitNb2JpbGUgVlIvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdTYW1zdW5nIEdlYXJWUic7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnVW5rbm93bic7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9oYXJkd2FyZUZlYXR1cmVzL2dldFdlYlZSRGV2aWNlVHlwZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!************************************!*\
  !*** ./utilities/isValidUACode.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = isValidUACode;\nfunction isValidUACode(str) {\n    return (/^ua-\\d{4,9}-\\d{1,4}$/i.test(str.toString())\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlLmpzPzNiZDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZFVBQ29kZShzdHIpIHtcbiAgICByZXR1cm4gKC9edWEtXFxkezQsOX0tXFxkezEsNH0kL2kpLnRlc3Qoc3RyLnRvU3RyaW5nKCkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlsaXRpZXMvaXNWYWxpZFVBQ29kZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ })
/******/ ]);
});