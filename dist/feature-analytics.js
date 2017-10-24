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
/*!**************************************!*\
  !*** ./features/isWebVRSupported.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.getVRDisplays || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaXNXZWJWUlN1cHBvcnRlZC5qcz9jZWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIW5hdmlnYXRvci5nZXRWUkRpc3BsYXlzIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNXZWJWUlN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: register */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"register\"] = register;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analytics__ = __webpack_require__(/*! ./analytics */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__ = __webpack_require__(/*! ./utilities/isValidUACode */ 23);\n// Analytics\n\n\n// Utilities\n\n\nfunction register(trackingId) {\n\tvar verbose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n\tif (trackingId === undefined || !Object(__WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__[\"a\" /* default */])(trackingId)) {\n\t\tconsole.error('Please provide a valid UA code (UA-xxxx-yy)');\n\t\treturn;\n\t}\n\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].initialize(trackingId);\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].register(verbose);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmFseXRpY3NcbmltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgaXNWYWxpZFVBQ29kZSBmcm9tICcuL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKHRyYWNraW5nSWQsIHZlcmJvc2UgPSBmYWxzZSkge1xuXHRpZiAodHJhY2tpbmdJZCA9PT0gdW5kZWZpbmVkIHx8ICFpc1ZhbGlkVUFDb2RlKHRyYWNraW5nSWQpKSB7XG5cdFx0Y29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBVQSBjb2RlIChVQS14eHh4LXl5KScpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFuYWx5dGljcy5pbml0aWFsaXplKHRyYWNraW5nSWQpO1xuXHRhbmFseXRpY3MucmVnaXN0ZXIodmVyYm9zZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** ./analytics/index.js ***!
  \****************************/
/*! exports provided: analytics */
/*! exports used: analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return analytics; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_record__ = __webpack_require__(/*! ../utilities/record */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features__ = __webpack_require__(/*! ../features */ 4);\n// Analytics\n\n\n// Features\n\n\nvar analytics = {\n\tinitialize: function initialize(trackingId) {\n\t\t// Inject Google Analytics\n\t\t/* eslint-disable */\n\t\t(function (i, s, o, g, r, a, m) {\n\t\t\ti['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {\n\t\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t\t}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);\n\t\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'GA_FEATURE_ANALYTICS');\n\t\twindow.GA_FEATURE_ANALYTICS('create', '' + trackingId, 'auto');\n\t\twindow.GA_FEATURE_ANALYTICS('send', 'pageview');\n\t\t/* eslint-enable */\n\t},\n\n\tregister: function register() {\n\t\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t\tvar features = Object(__WEBPACK_IMPORTED_MODULE_1__features__[\"a\" /* getFeatures */])(verbose);\n\t\tconsole.log(features);\n\n\t\t// WebGL support detection\n\t\tif (verbose) {\n\t\t\tif (features.isWebGLSupported) {\n\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\teventAction: 'WebGL Detect',\n\t\t\t\t\teventLabel: 'WebGL is supported'\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\teventAction: 'WebGL Detect',\n\t\t\t\t\teventLabel: 'WebGL is not supported'\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\n\t\t// WebGL2 support detection\n\t\tif (verbose) {\n\t\t\tif (features.isWebGL2Supported) {\n\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\teventAction: 'WebGL2 Detect',\n\t\t\t\t\teventLabel: 'WebGL2 is supported'\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\teventAction: 'WebGL2 Detect',\n\t\t\t\t\teventLabel: 'WebGL2 is not supported'\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYW5hbHl0aWNzL2luZGV4LmpzPzRiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5hbHl0aWNzXG5pbXBvcnQgeyByZWNvcmQgfSBmcm9tICcuLi91dGlsaXRpZXMvcmVjb3JkJztcblxuLy8gRmVhdHVyZXNcbmltcG9ydCB7IGdldEZlYXR1cmVzIH0gZnJvbSAnLi4vZmVhdHVyZXMnO1xuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0ge1xuXHRpbml0aWFsaXplOiAodHJhY2tpbmdJZCkgPT4ge1xuXHRcdC8vIEluamVjdCBHb29nbGUgQW5hbHl0aWNzXG5cdFx0LyogZXNsaW50LWRpc2FibGUgKi9cblx0XHQoZnVuY3Rpb24oaSxzLG8sZyxyLGEsbSl7aVsnR29vZ2xlQW5hbHl0aWNzT2JqZWN0J109cjtpW3JdPWlbcl18fGZ1bmN0aW9uKCl7XG5cdFx0KGlbcl0ucT1pW3JdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9LGlbcl0ubD0xKm5ldyBEYXRlKCk7YT1zLmNyZWF0ZUVsZW1lbnQobyksXG5cdFx0bT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxuXHRcdH0pKHdpbmRvdyxkb2N1bWVudCwnc2NyaXB0JywnaHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpzJywnR0FfRkVBVFVSRV9BTkFMWVRJQ1MnKTtcblx0XHR3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MoJ2NyZWF0ZScsIGAke3RyYWNraW5nSWR9YCwgJ2F1dG8nKTtcblx0XHR3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblx0XHQvKiBlc2xpbnQtZW5hYmxlICovXG5cdH0sXG5cblx0cmVnaXN0ZXI6ICh2ZXJib3NlID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCBmZWF0dXJlcyA9IGdldEZlYXR1cmVzKHZlcmJvc2UpO1xuXHRcdGNvbnNvbGUubG9nKGZlYXR1cmVzKTtcblxuXHRcdC8vIFdlYkdMIHN1cHBvcnQgZGV0ZWN0aW9uXG5cdFx0aWYgKHZlcmJvc2UpIHtcblx0XHRcdGlmIChmZWF0dXJlcy5pc1dlYkdMU3VwcG9ydGVkKSB7XG5cdFx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdFx0ZXZlbnRBY3Rpb246ICdXZWJHTCBEZXRlY3QnLFxuXHRcdFx0XHRcdGV2ZW50TGFiZWw6ICdXZWJHTCBpcyBzdXBwb3J0ZWQnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdFx0ZXZlbnRBY3Rpb246ICdXZWJHTCBEZXRlY3QnLFxuXHRcdFx0XHRcdGV2ZW50TGFiZWw6ICdXZWJHTCBpcyBub3Qgc3VwcG9ydGVkJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gV2ViR0wyIHN1cHBvcnQgZGV0ZWN0aW9uXG5cdFx0aWYgKHZlcmJvc2UpIHtcblx0XHRcdGlmIChmZWF0dXJlcy5pc1dlYkdMMlN1cHBvcnRlZCkge1xuXHRcdFx0XHRyZWNvcmQoe1xuXHRcdFx0XHRcdGV2ZW50QWN0aW9uOiAnV2ViR0wyIERldGVjdCcsXG5cdFx0XHRcdFx0ZXZlbnRMYWJlbDogJ1dlYkdMMiBpcyBzdXBwb3J0ZWQnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdFx0ZXZlbnRBY3Rpb246ICdXZWJHTDIgRGV0ZWN0Jyxcblx0XHRcdFx0XHRldmVudExhYmVsOiAnV2ViR0wyIGlzIG5vdCBzdXBwb3J0ZWQnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hbmFseXRpY3MvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUE5Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./utilities/record.js ***!
  \*****************************/
/*! exports provided: record */
/*! exports used: record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return record; });\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar record = function record() {\n\tvar obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\tvar defaultEventObject = {\n\t\thitType: 'event',\n\t\teventCategory: 'Features',\n\t\teventAction: '',\n\t\teventLabel: '',\n\t\tnonInteraction: true\n\t};\n\n\tif (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {\n\t\tvar callback = function callback() {\n\t\t\twindow.GA_FEATURE_ANALYTICS('send', _extends({}, defaultEventObject, obj));\n\t\t};\n\n\t\tif ('requestIdleCallback' in window) {\n\t\t\twindow.requestIdleCallback(callback);\n\t\t} else {\n\t\t\tcallback();\n\t\t}\n\t} else {\n\t\tconsole.error('Please provide a valid UA code (UA-xxxx-yy)');\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbGl0aWVzL3JlY29yZC5qcz8wNDMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNvcmQgPSAob2JqID0ge30pID0+IHtcblx0Y29uc3QgZGVmYXVsdEV2ZW50T2JqZWN0ID0ge1xuXHRcdGhpdFR5cGU6ICdldmVudCcsXG5cdFx0ZXZlbnRDYXRlZ29yeTogJ0ZlYXR1cmVzJyxcblx0XHRldmVudEFjdGlvbjogJycsXG5cdFx0ZXZlbnRMYWJlbDogJycsXG5cdFx0bm9uSW50ZXJhY3Rpb246IHRydWUsXG5cdH07XG5cblx0aWYgKHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsIHsgLi4uZGVmYXVsdEV2ZW50T2JqZWN0LCAuLi5vYmogfSk7XG5cdFx0fTtcblxuXHRcdGlmICgncmVxdWVzdElkbGVDYWxsYmFjaycgaW4gd2luZG93KSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayhjYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgVUEgY29kZSAoVUEteHh4eC15eSknKTtcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdXRpbGl0aWVzL3JlY29yZC5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./features/index.js ***!
  \***************************/
/*! exports provided: getFeatures */
/*! exports used: getFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getFeatures; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getDevicePixelRatio__ = __webpack_require__(/*! ./getDevicePixelRatio */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getEndianness__ = __webpack_require__(/*! ./getEndianness */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWebWorkerPoolSize__ = __webpack_require__(/*! ./getWebWorkerPoolSize */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getWebVRDeviceType__ = __webpack_require__(/*! ./getWebVRDeviceType */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isCookieEnabled__ = __webpack_require__(/*! ./isCookieEnabled */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isDoNotTrackEnabled__ = __webpack_require__(/*! ./isDoNotTrackEnabled */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isGamepadSupported__ = __webpack_require__(/*! ./isGamepadSupported */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isRequestIdleCallbackSupported__ = __webpack_require__(/*! ./isRequestIdleCallbackSupported */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isServiceWorkerSupported__ = __webpack_require__(/*! ./isServiceWorkerSupported */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isWebAssemblySupported__ = __webpack_require__(/*! ./isWebAssemblySupported */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isWebAudioSupported__ = __webpack_require__(/*! ./isWebAudioSupported */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isWebGL2Supported__ = __webpack_require__(/*! ./isWebGL2Supported */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isWebGLSupported__ = __webpack_require__(/*! ./isWebGLSupported */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__isWebRTCSupported__ = __webpack_require__(/*! ./isWebRTCSupported */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isWebSocketSupported__ = __webpack_require__(/*! ./isWebSocketSupported */ 19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isWebVRSupported__ = __webpack_require__(/*! ./isWebVRSupported */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__isWebWorkerSupported__ = __webpack_require__(/*! ./isWebWorkerSupported */ 20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__getWebGL2Features__ = __webpack_require__(/*! ./getWebGL2Features */ 21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__getWebGLFeatures__ = __webpack_require__(/*! ./getWebGLFeatures */ 22);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n// Hardware features\n\n\n\n\n\n// Browser settings\n\n\n\n// Browser support\n\n\n\n\n\n\n\n\n\n\n\n\n// Browser features\n\n\n\n// Features\nvar getFeatures = function getFeatures() {\n\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t// Default features\n\tvar features = {\n\t\t// Hardware features\n\t\tdevicePixelRatio: __WEBPACK_IMPORTED_MODULE_0__getDevicePixelRatio__[\"a\" /* default */],\n\t\tworkerPoolSize: __WEBPACK_IMPORTED_MODULE_2__getWebWorkerPoolSize__[\"a\" /* default */],\n\n\t\t// Browser settings\n\t\tisCookieEnabled: __WEBPACK_IMPORTED_MODULE_4__isCookieEnabled__[\"a\" /* default */],\n\t\tisDoNotTrackEnabled: __WEBPACK_IMPORTED_MODULE_5__isDoNotTrackEnabled__[\"a\" /* default */],\n\n\t\t// Browser support\n\t\tisGamepadSupported: __WEBPACK_IMPORTED_MODULE_6__isGamepadSupported__[\"a\" /* default */],\n\t\tisRequestIdleCallbackSupported: __WEBPACK_IMPORTED_MODULE_7__isRequestIdleCallbackSupported__[\"a\" /* default */],\n\t\tisServiceWorkerSupported: __WEBPACK_IMPORTED_MODULE_8__isServiceWorkerSupported__[\"a\" /* default */],\n\t\tisWebAssemblySupported: __WEBPACK_IMPORTED_MODULE_9__isWebAssemblySupported__[\"a\" /* default */],\n\t\tisWebAudioSupported: __WEBPACK_IMPORTED_MODULE_10__isWebAudioSupported__[\"a\" /* default */],\n\t\tisWebGL2Supported: __WEBPACK_IMPORTED_MODULE_11__isWebGL2Supported__[\"a\" /* default */],\n\t\tisWebGLSupported: __WEBPACK_IMPORTED_MODULE_12__isWebGLSupported__[\"a\" /* default */],\n\t\tisWebRTCSupported: __WEBPACK_IMPORTED_MODULE_13__isWebRTCSupported__[\"a\" /* default */],\n\t\tisWebSocketSupported: __WEBPACK_IMPORTED_MODULE_14__isWebSocketSupported__[\"a\" /* default */],\n\t\tisWebVRSupported: __WEBPACK_IMPORTED_MODULE_15__isWebVRSupported__[\"a\" /* default */],\n\t\tisWebWorkerSupported: __WEBPACK_IMPORTED_MODULE_16__isWebWorkerSupported__[\"a\" /* default */]\n\n\t\t// WebVR specific features\n\t};if (__WEBPACK_IMPORTED_MODULE_15__isWebVRSupported__[\"a\" /* default */]) {\n\t\treturn _extends({}, features, {\n\t\t\twebVRDeviceType: __WEBPACK_IMPORTED_MODULE_3__getWebVRDeviceType__[\"a\" /* default */]\n\t\t});\n\t}\n\n\t// Verbose features\n\tif (verbose) {\n\t\treturn _extends({}, features, {\n\t\t\t// Hardware features\n\t\t\tendianness: __WEBPACK_IMPORTED_MODULE_1__getEndianness__[\"a\" /* default */],\n\n\t\t\t// Browser features\n\t\t\twebGL2Features: __WEBPACK_IMPORTED_MODULE_17__getWebGL2Features__[\"a\" /* default */],\n\t\t\twebGLFeatures: __WEBPACK_IMPORTED_MODULE_18__getWebGLFeatures__[\"a\" /* default */]\n\t\t});\n\t} else {\n\t\treturn features;\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaW5kZXguanM/NzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIYXJkd2FyZSBmZWF0dXJlc1xuaW1wb3J0IGdldERldmljZVBpeGVsUmF0aW8gZnJvbSAnLi9nZXREZXZpY2VQaXhlbFJhdGlvJztcbmltcG9ydCBnZXRFbmRpYW5uZXNzIGZyb20gJy4vZ2V0RW5kaWFubmVzcyc7XG5pbXBvcnQgZ2V0V2ViV29ya2VyUG9vbFNpemUgZnJvbSAnLi9nZXRXZWJXb3JrZXJQb29sU2l6ZSc7XG5pbXBvcnQgZ2V0V2ViVlJEZXZpY2VUeXBlIGZyb20gJy4vZ2V0V2ViVlJEZXZpY2VUeXBlJztcblxuLy8gQnJvd3NlciBzZXR0aW5nc1xuaW1wb3J0IGlzQ29va2llRW5hYmxlZCBmcm9tICcuL2lzQ29va2llRW5hYmxlZCc7XG5pbXBvcnQgaXNEb05vdFRyYWNrRW5hYmxlZCBmcm9tICcuL2lzRG9Ob3RUcmFja0VuYWJsZWQnO1xuXG4vLyBCcm93c2VyIHN1cHBvcnRcbmltcG9ydCBpc0dhbWVwYWRTdXBwb3J0ZWQgZnJvbSAnLi9pc0dhbWVwYWRTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZCBmcm9tICcuL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZCc7XG5pbXBvcnQgaXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkIGZyb20gJy4vaXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkFzc2VtYmx5U3VwcG9ydGVkIGZyb20gJy4vaXNXZWJBc3NlbWJseVN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJBdWRpb1N1cHBvcnRlZCBmcm9tICcuL2lzV2ViQXVkaW9TdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViR0wyU3VwcG9ydGVkIGZyb20gJy4vaXNXZWJHTDJTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViR0xTdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYkdMU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYlJUQ1N1cHBvcnRlZCBmcm9tICcuL2lzV2ViUlRDU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYlNvY2tldFN1cHBvcnRlZCBmcm9tICcuL2lzV2ViU29ja2V0U3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYlZSU3VwcG9ydGVkIGZyb20gJy4vaXNXZWJWUlN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJXb3JrZXJTdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYldvcmtlclN1cHBvcnRlZCc7XG5cbi8vIEJyb3dzZXIgZmVhdHVyZXNcbmltcG9ydCBnZXRXZWJHTDJGZWF0dXJlcyBmcm9tICcuL2dldFdlYkdMMkZlYXR1cmVzJztcbmltcG9ydCBnZXRXZWJHTEZlYXR1cmVzIGZyb20gJy4vZ2V0V2ViR0xGZWF0dXJlcyc7XG5cbi8vIEZlYXR1cmVzXG5leHBvcnQgY29uc3QgZ2V0RmVhdHVyZXMgPSAodmVyYm9zZSA9IGZhbHNlKSA9PiB7XG5cdC8vIERlZmF1bHQgZmVhdHVyZXNcblx0Y29uc3QgZmVhdHVyZXMgPSB7XG5cdFx0Ly8gSGFyZHdhcmUgZmVhdHVyZXNcblx0XHRkZXZpY2VQaXhlbFJhdGlvOiBnZXREZXZpY2VQaXhlbFJhdGlvLFxuXHRcdHdvcmtlclBvb2xTaXplOiBnZXRXZWJXb3JrZXJQb29sU2l6ZSxcblxuXHRcdC8vIEJyb3dzZXIgc2V0dGluZ3Ncblx0XHRpc0Nvb2tpZUVuYWJsZWQsXG5cdFx0aXNEb05vdFRyYWNrRW5hYmxlZCxcblxuXHRcdC8vIEJyb3dzZXIgc3VwcG9ydFxuXHRcdGlzR2FtZXBhZFN1cHBvcnRlZCxcblx0XHRpc1JlcXVlc3RJZGxlQ2FsbGJhY2tTdXBwb3J0ZWQsXG5cdFx0aXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkLFxuXHRcdGlzV2ViQXNzZW1ibHlTdXBwb3J0ZWQsXG5cdFx0aXNXZWJBdWRpb1N1cHBvcnRlZCxcblx0XHRpc1dlYkdMMlN1cHBvcnRlZCxcblx0XHRpc1dlYkdMU3VwcG9ydGVkLFxuXHRcdGlzV2ViUlRDU3VwcG9ydGVkLFxuXHRcdGlzV2ViU29ja2V0U3VwcG9ydGVkLFxuXHRcdGlzV2ViVlJTdXBwb3J0ZWQsXG5cdFx0aXNXZWJXb3JrZXJTdXBwb3J0ZWQsXG5cdH1cblxuXHQvLyBXZWJWUiBzcGVjaWZpYyBmZWF0dXJlc1xuXHRpZiAoaXNXZWJWUlN1cHBvcnRlZCkge1xuXHRcdHJldHVybiB7IC4uLmZlYXR1cmVzLCAuLi57XG5cdFx0XHR3ZWJWUkRldmljZVR5cGU6IGdldFdlYlZSRGV2aWNlVHlwZSxcblx0XHR9fTtcblx0fVxuXG5cdC8vIFZlcmJvc2UgZmVhdHVyZXNcblx0aWYgKHZlcmJvc2UpIHtcblx0XHRyZXR1cm4geyAuLi5mZWF0dXJlcywgLi4ue1xuXHRcdFx0Ly8gSGFyZHdhcmUgZmVhdHVyZXNcblx0XHRcdGVuZGlhbm5lc3M6IGdldEVuZGlhbm5lc3MsXG5cblx0XHRcdC8vIEJyb3dzZXIgZmVhdHVyZXNcblx0XHRcdHdlYkdMMkZlYXR1cmVzOiBnZXRXZWJHTDJGZWF0dXJlcyxcblx0XHRcdHdlYkdMRmVhdHVyZXM6IGdldFdlYkdMRmVhdHVyZXMsXG5cdFx0fX07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZlYXR1cmVzO1xuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBdkJBO0FBeUJBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************************!*\
  !*** ./features/getDevicePixelRatio.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn window.devicePixelRatio || 1;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0RGV2aWNlUGl4ZWxSYXRpby5qcz8yMWM4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvZ2V0RGV2aWNlUGl4ZWxSYXRpby5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************!*\
  !*** ./features/getEndianness.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tif (window.ArrayBuffer !== null) {\n\t\tvar buffer = new ArrayBuffer(4);\n\t\tvar intView = new Uint32Array(buffer);\n\t\tvar byteView = new Uint8Array(buffer);\n\t\tintView[0] = 1;\n\n\t\treturn byteView[0] === 1 ? 'little' : 'big';\n\t} else {\n\t\treturn 'unknown';\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0RW5kaWFubmVzcy5qcz82MTYyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGlmICh3aW5kb3cuQXJyYXlCdWZmZXIgIT09IG51bGwpIHtcblx0XHRjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG5cdFx0Y29uc3QgaW50VmlldyA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuXHRcdGNvbnN0IGJ5dGVWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcblx0XHRpbnRWaWV3WzBdID0gMTtcblxuXHRcdHJldHVybiAoYnl0ZVZpZXdbMF0gPT09IDEpID8gJ2xpdHRsZScgOiAnYmlnJztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ3Vua25vd24nO1xuXHR9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9nZXRFbmRpYW5uZXNzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!******************************************!*\
  !*** ./features/getWebWorkerPoolSize.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn navigator.hardwareConcurrency || 0;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0V2ViV29ya2VyUG9vbFNpemUuanM/MzU0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gbmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kgfHwgMDtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2dldFdlYldvcmtlclBvb2xTaXplLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!****************************************!*\
  !*** ./features/getWebVRDeviceType.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isWebVRSupported__ = __webpack_require__(/*! ./isWebVRSupported */ 0);\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tif (__WEBPACK_IMPORTED_MODULE_0__isWebVRSupported__[\"a\" /* default */]) {\n\t\tnavigator.getVRDisplays().then(function (displays) {\n\t\t\tif (displays.length > 0) {\n\t\t\t\tvar displayName = displays[0].displayName;\n\n\t\t\t\tif (/daydream/i.test(displayName)) {\n\t\t\t\t\treturn 'Google Daydream';\n\t\t\t\t} else if (/vive/i.test(displayName)) {\n\t\t\t\t\treturn 'HTC Vive';\n\t\t\t\t} else if (/oculus/i.test(displayName)) {\n\t\t\t\t\treturn 'Oculus Rift';\n\t\t\t\t} else if (/SamsungBrowser.+Mobile VR/i.test(window.navigator.userAgent)) {\n\t\t\t\t\treturn 'Samsung GearVR';\n\t\t\t\t} else {\n\t\t\t\t\treturn 'Unknown';\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t});\n\t} else {\n\t\treturn false;\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvZ2V0V2ViVlJEZXZpY2VUeXBlLmpzPzdjZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzV2ViVlJTdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYlZSU3VwcG9ydGVkJztcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0aWYgKGlzV2ViVlJTdXBwb3J0ZWQpIHtcblx0XHRuYXZpZ2F0b3IuZ2V0VlJEaXNwbGF5cygpXG5cdFx0XHQudGhlbigoZGlzcGxheXMpID0+IHtcblx0XHRcdFx0aWYgKGRpc3BsYXlzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb25zdCBkaXNwbGF5TmFtZSA9IGRpc3BsYXlzWzBdLmRpc3BsYXlOYW1lO1xuXG5cdFx0XHRcdFx0aWYgKC9kYXlkcmVhbS9pLnRlc3QoZGlzcGxheU5hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ0dvb2dsZSBEYXlkcmVhbSc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgvdml2ZS9pLnRlc3QoZGlzcGxheU5hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ0hUQyBWaXZlJztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKC9vY3VsdXMvaS50ZXN0KGRpc3BsYXlOYW1lKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdPY3VsdXMgUmlmdCc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICgvU2Ftc3VuZ0Jyb3dzZXIuK01vYmlsZSBWUi9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ1NhbXN1bmcgR2VhclZSJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdVbmtub3duJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2dldFdlYlZSRGV2aWNlVHlwZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************!*\
  !*** ./features/isCookieEnabled.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.cookieEnabled || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaXNDb29raWVFbmFibGVkLmpzP2I3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhbmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pc0Nvb2tpZUVuYWJsZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*****************************************!*\
  !*** ./features/isDoNotTrackEnabled.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar doNotTrack = navigator.doNotTrack || false;\n\n\tif (!!doNotTrack || doNotTrack === \"unspecified\") {\n\t\treturn false;\n\t} else {\n\t\treturn true;\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzRG9Ob3RUcmFja0VuYWJsZWQuanM/YWY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBkb05vdFRyYWNrID0gbmF2aWdhdG9yLmRvTm90VHJhY2sgfHwgZmFsc2U7XG5cblx0aWYgKCEhZG9Ob3RUcmFjayB8fCBkb05vdFRyYWNrID09PSBcInVuc3BlY2lmaWVkXCIpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzRG9Ob3RUcmFja0VuYWJsZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!****************************************!*\
  !*** ./features/isGamepadSupported.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Gamepad || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzR2FtZXBhZFN1cHBvcnRlZC5qcz85ZTcyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5HYW1lcGFkIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNHYW1lcGFkU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!****************************************************!*\
  !*** ./features/isRequestIdleCallbackSupported.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.requestIdleCallback || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZC5qcz9hOWRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNSZXF1ZXN0SWRsZUNhbGxiYWNrU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**********************************************!*\
  !*** ./features/isServiceWorkerSupported.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.serviceWorker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZC5qcz9kNWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!********************************************!*\
  !*** ./features/isWebAssemblySupported.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebAssembly || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViQXNzZW1ibHlTdXBwb3J0ZWQuanM/YmFkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISF3aW5kb3cuV2ViQXNzZW1ibHkgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pc1dlYkFzc2VtYmx5U3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*****************************************!*\
  !*** ./features/isWebAudioSupported.js ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.AudioContext || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViQXVkaW9TdXBwb3J0ZWQuanM/YTAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISF3aW5kb3cuQXVkaW9Db250ZXh0IHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNXZWJBdWRpb1N1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***************************************!*\
  !*** ./features/isWebGL2Supported.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\t/* eslint-disable no-undef */\n\treturn gl && gl instanceof WebGL2RenderingContext || false;\n\t/* eslint-enable no-undef */\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViR0wyU3VwcG9ydGVkLmpzP2NkMzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cdHJldHVybiAoZ2wgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSB8fCBmYWxzZTtcblx0LyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNXZWJHTDJTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**************************************!*\
  !*** ./features/isWebGLSupported.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\treturn gl && gl instanceof WebGLRenderingContext || false;\n\t/* eslint-enable no-undef */\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViR0xTdXBwb3J0ZWQuanM/MWQxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblx0cmV0dXJuIChnbCAmJiBnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgfHwgZmFsc2U7XG5cdC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzV2ViR0xTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!***************************************!*\
  !*** ./features/isWebRTCSupported.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.RTCPeerConnection && !!window.RTCDataChannelEvent || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViUlRDU3VwcG9ydGVkLmpzP2Y3MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICghIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJiAhIXdpbmRvdy5SVENEYXRhQ2hhbm5lbEV2ZW50KSB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzV2ViUlRDU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!******************************************!*\
  !*** ./features/isWebSocketSupported.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebSocket || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViU29ja2V0U3VwcG9ydGVkLmpzPzk2YTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICghIXdpbmRvdy5XZWJTb2NrZXQpIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNXZWJTb2NrZXRTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!******************************************!*\
  !*** ./features/isWebWorkerSupported.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Worker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2lzV2ViV29ya2VyU3VwcG9ydGVkLmpzPzE2YWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhd2luZG93LldvcmtlciB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2lzV2ViV29ya2VyU3VwcG9ydGVkLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!***************************************!*\
  !*** ./features/getWebGL2Features.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGL2RenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: !!gl.getContextAttributes().antialias,\n\n\t\tredBits: gl.getParameter(gl.RED_BITS),\n\t\tgreenBits: gl.getParameter(gl.GREEN_BITS),\n\t\tblueBits: gl.getParameter(gl.BLUE_BITS),\n\t\talphaBits: gl.getParameter(gl.ALPHA_BITS),\n\t\tdepthBits: gl.getParameter(gl.DEPTH_BITS),\n\t\tstencilBits: gl.getParameter(gl.STENCIL_BITS),\n\n\t\tmaxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),\n\t\tmaxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),\n\t\tmaxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),\n\t\tmaxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),\n\t\tmaxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),\n\t\tmaxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),\n\t\tmaxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),\n\t\tmaxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),\n\t\tmaxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),\n\t\tmaxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),\n\t\taliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),\n\t\taliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),\n\t\tmaxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS),\n\n\t\tvertexShaderHighPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT),\n\t\tvertexShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT),\n\t\tvertexShaderLowPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT),\n\n\t\tfragmentShaderHighPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT),\n\t\tfragmentShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT),\n\t\tfragmentShaderLowPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT),\n\n\t\tmaxVertexUniformComponents: gl.getParameter(gl.MAX_VERTEX_UNIFORM_COMPONENTS),\n\t\tmaxVertexUniformBlocks: gl.getParameter(gl.MAX_VERTEX_UNIFORM_BLOCKS),\n\t\tmaxVertexOutputComponents: gl.getParameter(gl.MAX_VERTEX_OUTPUT_COMPONENTS),\n\t\tmaxVaryingComponents: gl.getParameter(gl.MAX_VARYING_COMPONENTS),\n\t\tmaxFragmentUniformComponents: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_COMPONENTS),\n\t\tmaxFragmentUniformBlocks: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_BLOCKS),\n\t\tmaxFragmentInputComponents: gl.getParameter(gl.MAX_FRAGMENT_INPUT_COMPONENTS),\n\t\tminProgramTexelOffset: gl.getParameter(gl.MIN_PROGRAM_TEXEL_OFFSET),\n\t\tmaxProgramTexelOffset: gl.getParameter(gl.MAX_PROGRAM_TEXEL_OFFSET),\n\t\tmaxDrawBuffers: gl.getParameter(gl.MAX_DRAW_BUFFERS),\n\t\tmaxColorAttachments: gl.getParameter(gl.MAX_COLOR_ATTACHMENTS),\n\t\tmaxSamples: gl.getParameter(gl.MAX_SAMPLES),\n\t\tmax3dTextureSize: gl.getParameter(gl.MAX_3D_TEXTURE_SIZE),\n\t\tmaxArrayTextureLayers: gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS),\n\t\tmaxTextureLodBias: gl.getParameter(gl.MAX_TEXTURE_LOD_BIAS),\n\t\tmaxUniformBufferBindings: gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS),\n\t\tmaxUniformBlockSize: gl.getParameter(gl.MAX_UNIFORM_BLOCK_SIZE),\n\t\tuniformBufferOffsetAlignment: gl.getParameter(gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT),\n\t\tmaxCombinedUniformBlocks: gl.getParameter(gl.MAX_COMBINED_UNIFORM_BLOCKS),\n\t\tmaxCombinedVertexUniformComponents: gl.getParameter(gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS),\n\t\tmaxCombinedFragmentUniformComponents: gl.getParameter(gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS),\n\t\tmaxTransformFeedbackInterleavedComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS),\n\t\tmaxTransformFeedbackSeparateAttribs: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS),\n\t\tmaxTransformFeedbackSeparateComponents: gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS),\n\t\tmaxElementIndex: gl.getParameter(gl.MAX_ELEMENT_INDEX),\n\t\tmaxServerWaitTimeout: gl.getParameter(gl.MAX_SERVER_WAIT_TIMEOUT)\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2dldFdlYkdMMkZlYXR1cmVzLmpzPzI1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cdGlmKCFnbCB8fCAhZ2wgaW5zdGFuY2VvZiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KSByZXR1cm4gZmFsc2U7XG5cdC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cblxuXHRjb25zdCBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZWJ1Z19yZW5kZXJlcl9pbmZvJyk7XG5cblx0Y29uc3QgZmVhdHVyZXMgPSB7XG5cdFx0cmVuZGVyZXI6IGdsLmdldFBhcmFtZXRlcihnbC5SRU5ERVJFUiksXG5cdFx0dmVuZG9yOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuVkVORE9SKSxcblx0XHR2ZXJzaW9uOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuVkVSU0lPTiksXG5cdFx0c2hhZGVyVmVyc2lvbjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlNIQURJTkdfTEFOR1VBR0VfVkVSU0lPTiksXG5cdFx0cmVuZGVyZXJVbm1hc2tlZDogZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyAmJiBnbC5nZXRQYXJhbWV0ZXIoZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mby5VTk1BU0tFRF9SRU5ERVJFUl9XRUJHTCksXG5cdFx0dmVuZG9yVW5tYXNrZWQ6IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gJiYgZ2wuZ2V0UGFyYW1ldGVyKGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8uVU5NQVNLRURfVkVORE9SX1dFQkdMKSxcblxuXHRcdHN1cHBvcnRlZEV4dGVuc2lvbnM6IGdsLmdldFN1cHBvcnRlZEV4dGVuc2lvbnMoKSxcblx0XHRhbnRpYWxpYXM6ICEhZ2wuZ2V0Q29udGV4dEF0dHJpYnV0ZXMoKS5hbnRpYWxpYXMsXG5cblx0XHRyZWRCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuUkVEX0JJVFMpLFxuXHRcdGdyZWVuQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkdSRUVOX0JJVFMpLFxuXHRcdGJsdWVCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQkxVRV9CSVRTKSxcblx0XHRhbHBoYUJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5BTFBIQV9CSVRTKSxcblx0XHRkZXB0aEJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5ERVBUSF9CSVRTKSxcblx0XHRzdGVuY2lsQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLlNURU5DSUxfQklUUyksXG5cblx0XHRtYXhSZW5kZXJCdWZmZXJTaXplOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1JFTkRFUkJVRkZFUl9TSVpFKSxcblx0XHRtYXhDb21iaW5lZFRleHR1cmVJbWFnZVVuaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NPTUJJTkVEX1RFWFRVUkVfSU1BR0VfVU5JVFMpLFxuXHRcdG1heEN1YmVNYXBUZXh0dXJlU2l6ZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DVUJFX01BUF9URVhUVVJFX1NJWkUpLFxuXHRcdG1heEZyYWdtZW50VW5pZm9ybVZlY3RvcnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfRlJBR01FTlRfVU5JRk9STV9WRUNUT1JTKSxcblx0XHRtYXhUZXh0dXJlSW1hZ2VVbml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcblx0XHRtYXhUZXh0dXJlU2l6ZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpLFxuXHRcdG1heFZhcnlpbmdWZWN0b3JzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZBUllJTkdfVkVDVE9SUyksXG5cdFx0bWF4VmVydGV4QXR0cmlidXRlczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfQVRUUklCUyksXG5cdFx0bWF4VmVydGV4VGV4dHVyZUltYWdlVW5pdHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX1RFWFRVUkVfSU1BR0VfVU5JVFMpLFxuXHRcdG1heFZlcnRleFVuaWZvcm1WZWN0b3JzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9VTklGT1JNX1ZFQ1RPUlMpLFxuXHRcdGFsaWFzZWRMaW5lV2lkdGhSYW5nZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLkFMSUFTRURfTElORV9XSURUSF9SQU5HRSksXG5cdFx0YWxpYXNlZFBvaW50U2l6ZVJhbmdlOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUxJQVNFRF9QT0lOVF9TSVpFX1JBTkdFKSxcblx0XHRtYXhWaWV3cG9ydERpbWVuc2lvbnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVklFV1BPUlRfRElNUyksXG5cblx0XHR2ZXJ0ZXhTaGFkZXJIaWdoUHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuSElHSF9GTE9BVCksXG5cdFx0dmVydGV4U2hhZGVyTWVkaXVtUHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuTUVESVVNX0ZMT0FUKSxcblx0XHR2ZXJ0ZXhTaGFkZXJMb3dQcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5MT1dfRkxPQVQpLFxuXG5cdFx0ZnJhZ21lbnRTaGFkZXJIaWdoUHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5ISUdIX0ZMT0FUKSxcblx0XHRmcmFnbWVudFNoYWRlck1lZGl1bVByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuTUVESVVNX0ZMT0FUKSxcblx0XHRmcmFnbWVudFNoYWRlckxvd1ByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuTE9XX0ZMT0FUKSxcblxuXHRcdG1heFZlcnRleFVuaWZvcm1Db21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9VTklGT1JNX0NPTVBPTkVOVFMpLFxuXHRcdG1heFZlcnRleFVuaWZvcm1CbG9ja3M6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX1VOSUZPUk1fQkxPQ0tTKSxcblx0XHRtYXhWZXJ0ZXhPdXRwdXRDb21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9PVVRQVVRfQ09NUE9ORU5UUyksXG5cdFx0bWF4VmFyeWluZ0NvbXBvbmVudHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkFSWUlOR19DT01QT05FTlRTKSxcblx0XHRtYXhGcmFnbWVudFVuaWZvcm1Db21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0ZSQUdNRU5UX1VOSUZPUk1fQ09NUE9ORU5UUyksXG5cdFx0bWF4RnJhZ21lbnRVbmlmb3JtQmxvY2tzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0ZSQUdNRU5UX1VOSUZPUk1fQkxPQ0tTKSxcblx0XHRtYXhGcmFnbWVudElucHV0Q29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9GUkFHTUVOVF9JTlBVVF9DT01QT05FTlRTKSxcblx0XHRtaW5Qcm9ncmFtVGV4ZWxPZmZzZXQ6IGdsLmdldFBhcmFtZXRlcihnbC5NSU5fUFJPR1JBTV9URVhFTF9PRkZTRVQpLFxuXHRcdG1heFByb2dyYW1UZXhlbE9mZnNldDogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9QUk9HUkFNX1RFWEVMX09GRlNFVCksXG5cdFx0bWF4RHJhd0J1ZmZlcnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfRFJBV19CVUZGRVJTKSxcblx0XHRtYXhDb2xvckF0dGFjaG1lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NPTE9SX0FUVEFDSE1FTlRTKSxcblx0XHRtYXhTYW1wbGVzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1NBTVBMRVMpLFxuXHRcdG1heDNkVGV4dHVyZVNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfM0RfVEVYVFVSRV9TSVpFKSxcblx0XHRtYXhBcnJheVRleHR1cmVMYXllcnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQVJSQVlfVEVYVFVSRV9MQVlFUlMpLFxuXHRcdG1heFRleHR1cmVMb2RCaWFzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfTE9EX0JJQVMpLFxuXHRcdG1heFVuaWZvcm1CdWZmZXJCaW5kaW5nczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9VTklGT1JNX0JVRkZFUl9CSU5ESU5HUyksXG5cdFx0bWF4VW5pZm9ybUJsb2NrU2l6ZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9VTklGT1JNX0JMT0NLX1NJWkUpLFxuXHRcdHVuaWZvcm1CdWZmZXJPZmZzZXRBbGlnbm1lbnQ6IGdsLmdldFBhcmFtZXRlcihnbC5VTklGT1JNX0JVRkZFUl9PRkZTRVRfQUxJR05NRU5UKSxcblx0XHRtYXhDb21iaW5lZFVuaWZvcm1CbG9ja3M6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQ09NQklORURfVU5JRk9STV9CTE9DS1MpLFxuXHRcdG1heENvbWJpbmVkVmVydGV4VW5pZm9ybUNvbXBvbmVudHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQ09NQklORURfVkVSVEVYX1VOSUZPUk1fQ09NUE9ORU5UUyksXG5cdFx0bWF4Q29tYmluZWRGcmFnbWVudFVuaWZvcm1Db21wb25lbnRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NPTUJJTkVEX0ZSQUdNRU5UX1VOSUZPUk1fQ09NUE9ORU5UUyksXG5cdFx0bWF4VHJhbnNmb3JtRmVlZGJhY2tJbnRlcmxlYXZlZENvbXBvbmVudHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVFJBTlNGT1JNX0ZFRURCQUNLX0lOVEVSTEVBVkVEX0NPTVBPTkVOVFMpLFxuXHRcdG1heFRyYW5zZm9ybUZlZWRiYWNrU2VwYXJhdGVBdHRyaWJzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RSQU5TRk9STV9GRUVEQkFDS19TRVBBUkFURV9BVFRSSUJTKSxcblx0XHRtYXhUcmFuc2Zvcm1GZWVkYmFja1NlcGFyYXRlQ29tcG9uZW50czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9UUkFOU0ZPUk1fRkVFREJBQ0tfU0VQQVJBVEVfQ09NUE9ORU5UUyksXG5cdFx0bWF4RWxlbWVudEluZGV4OiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0VMRU1FTlRfSU5ERVgpLFxuXHRcdG1heFNlcnZlcldhaXRUaW1lb3V0OiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1NFUlZFUl9XQUlUX1RJTUVPVVQpLFxuXHR9O1xuXG5cdHJldHVybiBmZWF0dXJlcztcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2dldFdlYkdMMkZlYXR1cmVzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpFQTtBQUNBO0FBbUVBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**************************************!*\
  !*** ./features/getWebGLFeatures.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGLRenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tconsole.log(gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT));\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: !!gl.getContextAttributes().antialias,\n\n\t\tredBits: gl.getParameter(gl.RED_BITS),\n\t\tgreenBits: gl.getParameter(gl.GREEN_BITS),\n\t\tblueBits: gl.getParameter(gl.BLUE_BITS),\n\t\talphaBits: gl.getParameter(gl.ALPHA_BITS),\n\t\tdepthBits: gl.getParameter(gl.DEPTH_BITS),\n\t\tstencilBits: gl.getParameter(gl.STENCIL_BITS),\n\n\t\tmaxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),\n\t\tmaxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),\n\t\tmaxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),\n\t\tmaxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),\n\t\tmaxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),\n\t\tmaxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),\n\t\tmaxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),\n\t\tmaxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),\n\t\tmaxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),\n\t\tmaxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),\n\t\taliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),\n\t\taliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),\n\t\tmaxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS),\n\n\t\tvertexShaderHighPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT),\n\t\tvertexShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT),\n\t\tvertexShaderLowPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT),\n\n\t\tfragmentShaderHighPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT),\n\t\tfragmentShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT),\n\t\tfragmentShaderLowPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT)\n\t};\n\n\tconsole.log(features);\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2dldFdlYkdMRmVhdHVyZXMuanM/ZTU5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblx0aWYoIWdsIHx8ICFnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgcmV0dXJuIGZhbHNlO1xuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG5cblx0Y29uc3QgZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbycpO1xuXG5cdGNvbnNvbGUubG9nKGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5MT1dfRkxPQVQpKTtcblxuXHRjb25zdCBmZWF0dXJlcyA9IHtcblx0XHRyZW5kZXJlcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlJFTkRFUkVSKSxcblx0XHR2ZW5kb3I6IGdsLmdldFBhcmFtZXRlcihnbC5WRU5ET1IpLFxuXHRcdHZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5WRVJTSU9OKSxcblx0XHRzaGFkZXJWZXJzaW9uOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OKSxcblx0XHRyZW5kZXJlclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1JFTkRFUkVSX1dFQkdMKSxcblx0XHR2ZW5kb3JVbm1hc2tlZDogZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyAmJiBnbC5nZXRQYXJhbWV0ZXIoZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mby5VTk1BU0tFRF9WRU5ET1JfV0VCR0wpLFxuXG5cdFx0c3VwcG9ydGVkRXh0ZW5zaW9uczogZ2wuZ2V0U3VwcG9ydGVkRXh0ZW5zaW9ucygpLFxuXHRcdGFudGlhbGlhczogISFnbC5nZXRDb250ZXh0QXR0cmlidXRlcygpLmFudGlhbGlhcyxcblxuXHRcdHJlZEJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5SRURfQklUUyksXG5cdFx0Z3JlZW5CaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuR1JFRU5fQklUUyksXG5cdFx0Ymx1ZUJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5CTFVFX0JJVFMpLFxuXHRcdGFscGhhQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkFMUEhBX0JJVFMpLFxuXHRcdGRlcHRoQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkRFUFRIX0JJVFMpLFxuXHRcdHN0ZW5jaWxCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuU1RFTkNJTF9CSVRTKSxcblxuXHRcdG1heFJlbmRlckJ1ZmZlclNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfUkVOREVSQlVGRkVSX1NJWkUpLFxuXHRcdG1heENvbWJpbmVkVGV4dHVyZUltYWdlVW5pdHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQ09NQklORURfVEVYVFVSRV9JTUFHRV9VTklUUyksXG5cdFx0bWF4Q3ViZU1hcFRleHR1cmVTaXplOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0NVQkVfTUFQX1RFWFRVUkVfU0laRSksXG5cdFx0bWF4RnJhZ21lbnRVbmlmb3JtVmVjdG9yczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9GUkFHTUVOVF9VTklGT1JNX1ZFQ1RPUlMpLFxuXHRcdG1heFRleHR1cmVJbWFnZVVuaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfSU1BR0VfVU5JVFMpLFxuXHRcdG1heFRleHR1cmVTaXplOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSksXG5cdFx0bWF4VmFyeWluZ1ZlY3RvcnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkFSWUlOR19WRUNUT1JTKSxcblx0XHRtYXhWZXJ0ZXhBdHRyaWJ1dGVzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9BVFRSSUJTKSxcblx0XHRtYXhWZXJ0ZXhUZXh0dXJlSW1hZ2VVbml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfVEVYVFVSRV9JTUFHRV9VTklUUyksXG5cdFx0bWF4VmVydGV4VW5pZm9ybVZlY3RvcnM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX1VOSUZPUk1fVkVDVE9SUyksXG5cdFx0YWxpYXNlZExpbmVXaWR0aFJhbmdlOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUxJQVNFRF9MSU5FX1dJRFRIX1JBTkdFKSxcblx0XHRhbGlhc2VkUG9pbnRTaXplUmFuZ2U6IGdsLmdldFBhcmFtZXRlcihnbC5BTElBU0VEX1BPSU5UX1NJWkVfUkFOR0UpLFxuXHRcdG1heFZpZXdwb3J0RGltZW5zaW9uczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WSUVXUE9SVF9ESU1TKSxcblxuXHRcdHZlcnRleFNoYWRlckhpZ2hQcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5ISUdIX0ZMT0FUKSxcblx0XHR2ZXJ0ZXhTaGFkZXJNZWRpdW1QcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5WRVJURVhfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLFxuXHRcdHZlcnRleFNoYWRlckxvd1ByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLkxPV19GTE9BVCksXG5cblx0XHRmcmFnbWVudFNoYWRlckhpZ2hQcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLkhJR0hfRkxPQVQpLFxuXHRcdGZyYWdtZW50U2hhZGVyTWVkaXVtUHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5NRURJVU1fRkxPQVQpLFxuXHRcdGZyYWdtZW50U2hhZGVyTG93UHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuRlJBR01FTlRfU0hBREVSLCBnbC5MT1dfRkxPQVQpLFxuXHR9O1xuXG5cdGNvbnNvbGUubG9nKGZlYXR1cmVzKTtcblxuXHRyZXR1cm4gZmVhdHVyZXM7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9nZXRXZWJHTEZlYXR1cmVzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0Q0E7QUFDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

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