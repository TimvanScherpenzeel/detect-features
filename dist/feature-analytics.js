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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return analytics; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_record__ = __webpack_require__(/*! ../utilities/record */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features__ = __webpack_require__(/*! ../features */ 4);\n// Analytics\n\n\n// Features\n\n\nvar analytics = {\n\tinitialize: function initialize(trackingId) {\n\t\t// Inject Google Analytics\n\n\t\t/* eslint-disable */\n\t\t(function (i, s, o, g, r, a, m) {\n\t\t\ti['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {\n\t\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t\t}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);\n\t\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'GA_FEATURE_ANALYTICS');\n\t\twindow.GA_FEATURE_ANALYTICS('create', '' + trackingId, 'auto');\n\t\twindow.GA_FEATURE_ANALYTICS('send', 'pageview');\n\t\t/* eslint-enable */\n\t},\n\n\tregister: function register() {\n\t\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t\tvar features = Object(__WEBPACK_IMPORTED_MODULE_1__features__[\"a\" /* getFeatures */])(verbose);\n\n\t\tconsole.log(features);\n\n\t\t// Object.keys(features).forEach((feature) => {\n\t\t// \tconsole.log(feature, features[feature]);\n\t\t// });\n\n\t\t// isGamepadSupported,\n\t\t// isRequestIdleCallbackSupported,\n\t\t// isServiceWorkerSupported,\n\t\t// isWebAssemblySupported,\n\t\t// isWebAudioSupported,\n\t\t// isWebGL2Supported,\n\t\t// isWebGLSupported,\n\t\t// isWebRTCSupported,\n\t\t// isWebSocketSupported,\n\t\t// isWebVRSupported,\n\t\t// isWebWorkerSupported,\n\n\n\t\t// Object.keys(features).\n\n\n\t\t// if (features.isWebGL2Supported) {\n\t\t// \trecord({\n\t\t// \t\teventAction: 'WebGL2 support',\n\t\t// \t\teventLabel: 'WebGL2 is supported',\n\t\t// \t});\n\t\t// } else {\n\t\t// \trecord({\n\t\t// \t\teventAction: 'WebGL2 support',\n\t\t// \t\teventLabel: 'WebGL2 is not supported',\n\t\t// \t});\n\t\t// }\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYW5hbHl0aWNzL2luZGV4LmpzPzRiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5hbHl0aWNzXG5pbXBvcnQgeyByZWNvcmQgfSBmcm9tICcuLi91dGlsaXRpZXMvcmVjb3JkJztcblxuLy8gRmVhdHVyZXNcbmltcG9ydCB7IGdldEZlYXR1cmVzIH0gZnJvbSAnLi4vZmVhdHVyZXMnO1xuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0ge1xuXHRpbml0aWFsaXplOiAodHJhY2tpbmdJZCkgPT4ge1xuXHRcdC8vIEluamVjdCBHb29nbGUgQW5hbHl0aWNzXG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXHRcdChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcblx0XHQoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcblx0XHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG5cdFx0fSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdHQV9GRUFUVVJFX0FOQUxZVElDUycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnY3JlYXRlJywgYCR7dHJhY2tpbmdJZH1gLCAnYXV0bycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgKi9cblx0fSxcblxuXHRyZWdpc3RlcjogKHZlcmJvc2UgPSBmYWxzZSkgPT4ge1xuXHRcdGNvbnN0IGZlYXR1cmVzID0gZ2V0RmVhdHVyZXModmVyYm9zZSk7XG5cblx0XHRjb25zb2xlLmxvZyhmZWF0dXJlcyk7XG5cblx0XHQvLyBPYmplY3Qua2V5cyhmZWF0dXJlcykuZm9yRWFjaCgoZmVhdHVyZSkgPT4ge1xuXHRcdC8vIFx0Y29uc29sZS5sb2coZmVhdHVyZSwgZmVhdHVyZXNbZmVhdHVyZV0pO1xuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gaXNHYW1lcGFkU3VwcG9ydGVkLFxuXHRcdC8vIGlzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZCxcblx0XHQvLyBpc1NlcnZpY2VXb3JrZXJTdXBwb3J0ZWQsXG5cdFx0Ly8gaXNXZWJBc3NlbWJseVN1cHBvcnRlZCxcblx0XHQvLyBpc1dlYkF1ZGlvU3VwcG9ydGVkLFxuXHRcdC8vIGlzV2ViR0wyU3VwcG9ydGVkLFxuXHRcdC8vIGlzV2ViR0xTdXBwb3J0ZWQsXG5cdFx0Ly8gaXNXZWJSVENTdXBwb3J0ZWQsXG5cdFx0Ly8gaXNXZWJTb2NrZXRTdXBwb3J0ZWQsXG5cdFx0Ly8gaXNXZWJWUlN1cHBvcnRlZCxcblx0XHQvLyBpc1dlYldvcmtlclN1cHBvcnRlZCxcblxuXG5cdFx0Ly8gT2JqZWN0LmtleXMoZmVhdHVyZXMpLlxuXG5cblx0XHQvLyBpZiAoZmVhdHVyZXMuaXNXZWJHTDJTdXBwb3J0ZWQpIHtcblx0XHQvLyBcdHJlY29yZCh7XG5cdFx0Ly8gXHRcdGV2ZW50QWN0aW9uOiAnV2ViR0wyIHN1cHBvcnQnLFxuXHRcdC8vIFx0XHRldmVudExhYmVsOiAnV2ViR0wyIGlzIHN1cHBvcnRlZCcsXG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0cmVjb3JkKHtcblx0XHQvLyBcdFx0ZXZlbnRBY3Rpb246ICdXZWJHTDIgc3VwcG9ydCcsXG5cdFx0Ly8gXHRcdGV2ZW50TGFiZWw6ICdXZWJHTDIgaXMgbm90IHN1cHBvcnRlZCcsXG5cdFx0Ly8gXHR9KTtcblx0XHQvLyB9XG5cdH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hbmFseXRpY3MvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************!*\
  !*** ./utilities/record.js ***!
  \*****************************/
/*! exports provided: record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export record */\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar record = function record() {\n\tvar obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\tvar defaultEventObject = {\n\t\thitType: 'event',\n\t\teventCategory: 'Features',\n\t\teventAction: '',\n\t\teventLabel: '',\n\t\tnonInteraction: true\n\t};\n\n\tif (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {\n\t\tvar callback = function callback() {\n\t\t\twindow.GA_FEATURE_ANALYTICS('send', _extends({}, defaultEventObject, obj));\n\t\t};\n\n\t\tif ('requestIdleCallback' in window) {\n\t\t\twindow.requestIdleCallback(callback);\n\t\t} else {\n\t\t\tcallback();\n\t\t}\n\t} else {\n\t\tconsole.error('Please provide a valid UA code (UA-xxxx-yy)');\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbGl0aWVzL3JlY29yZC5qcz8wNDMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNvcmQgPSAob2JqID0ge30pID0+IHtcblx0Y29uc3QgZGVmYXVsdEV2ZW50T2JqZWN0ID0ge1xuXHRcdGhpdFR5cGU6ICdldmVudCcsXG5cdFx0ZXZlbnRDYXRlZ29yeTogJ0ZlYXR1cmVzJyxcblx0XHRldmVudEFjdGlvbjogJycsXG5cdFx0ZXZlbnRMYWJlbDogJycsXG5cdFx0bm9uSW50ZXJhY3Rpb246IHRydWUsXG5cdH07XG5cblx0aWYgKHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsIHsgLi4uZGVmYXVsdEV2ZW50T2JqZWN0LCAuLi5vYmogfSk7XG5cdFx0fTtcblxuXHRcdGlmICgncmVxdWVzdElkbGVDYWxsYmFjaycgaW4gd2luZG93KSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayhjYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgVUEgY29kZSAoVUEteHh4eC15eSknKTtcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdXRpbGl0aWVzL3JlY29yZC5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************!*\
  !*** ./features/index.js ***!
  \***************************/
/*! exports provided: getFeatures */
/*! exports used: getFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getFeatures; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getDevicePixelRatio__ = __webpack_require__(/*! ./getDevicePixelRatio */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getEndianness__ = __webpack_require__(/*! ./getEndianness */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWebWorkerPoolSize__ = __webpack_require__(/*! ./getWebWorkerPoolSize */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getWebVRDeviceType__ = __webpack_require__(/*! ./getWebVRDeviceType */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isCookieEnabled__ = __webpack_require__(/*! ./isCookieEnabled */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isDoNotTrackEnabled__ = __webpack_require__(/*! ./isDoNotTrackEnabled */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isGamepadSupported__ = __webpack_require__(/*! ./isGamepadSupported */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isRequestIdleCallbackSupported__ = __webpack_require__(/*! ./isRequestIdleCallbackSupported */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isServiceWorkerSupported__ = __webpack_require__(/*! ./isServiceWorkerSupported */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isWebAssemblySupported__ = __webpack_require__(/*! ./isWebAssemblySupported */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isWebAudioSupported__ = __webpack_require__(/*! ./isWebAudioSupported */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isWebGL2Supported__ = __webpack_require__(/*! ./isWebGL2Supported */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isWebGLSupported__ = __webpack_require__(/*! ./isWebGLSupported */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__isWebRTCSupported__ = __webpack_require__(/*! ./isWebRTCSupported */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isWebSocketSupported__ = __webpack_require__(/*! ./isWebSocketSupported */ 19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isWebVRSupported__ = __webpack_require__(/*! ./isWebVRSupported */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__isWebWorkerSupported__ = __webpack_require__(/*! ./isWebWorkerSupported */ 20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__getWebGL2Features__ = __webpack_require__(/*! ./getWebGL2Features */ 21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__getWebGLFeatures__ = __webpack_require__(/*! ./getWebGLFeatures */ 22);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n// Hardware features\n\n\n\n\n\n// Browser settings\n\n\n\n// Browser features\n\n\n\n\n\n\n\n\n\n\n\n\n// Browser features\n\n\n\n// Features\nvar getFeatures = function getFeatures() {\n\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t// Default features\n\tvar features = {\n\t\t// Hardware features\n\t\thardwareFeatures: {\n\t\t\tdevicePixelRatio: __WEBPACK_IMPORTED_MODULE_0__getDevicePixelRatio__[\"a\" /* default */],\n\t\t\tworkerPoolSize: __WEBPACK_IMPORTED_MODULE_2__getWebWorkerPoolSize__[\"a\" /* default */]\n\t\t},\n\n\t\t// Browser settings\n\t\tbrowserSettings: {\n\t\t\tisCookieEnabled: __WEBPACK_IMPORTED_MODULE_4__isCookieEnabled__[\"a\" /* default */],\n\t\t\tisDoNotTrackEnabled: __WEBPACK_IMPORTED_MODULE_5__isDoNotTrackEnabled__[\"a\" /* default */]\n\t\t},\n\n\t\t// Browser features\n\t\tbrowserFeatures: {\n\t\t\tisGamepadSupported: __WEBPACK_IMPORTED_MODULE_6__isGamepadSupported__[\"a\" /* default */],\n\t\t\tisRequestIdleCallbackSupported: __WEBPACK_IMPORTED_MODULE_7__isRequestIdleCallbackSupported__[\"a\" /* default */],\n\t\t\tisServiceWorkerSupported: __WEBPACK_IMPORTED_MODULE_8__isServiceWorkerSupported__[\"a\" /* default */],\n\t\t\tisWebAssemblySupported: __WEBPACK_IMPORTED_MODULE_9__isWebAssemblySupported__[\"a\" /* default */],\n\t\t\tisWebAudioSupported: __WEBPACK_IMPORTED_MODULE_10__isWebAudioSupported__[\"a\" /* default */],\n\t\t\tisWebGL2Supported: __WEBPACK_IMPORTED_MODULE_11__isWebGL2Supported__[\"a\" /* default */],\n\t\t\tisWebGLSupported: __WEBPACK_IMPORTED_MODULE_12__isWebGLSupported__[\"a\" /* default */],\n\t\t\tisWebRTCSupported: __WEBPACK_IMPORTED_MODULE_13__isWebRTCSupported__[\"a\" /* default */],\n\t\t\tisWebSocketSupported: __WEBPACK_IMPORTED_MODULE_14__isWebSocketSupported__[\"a\" /* default */],\n\t\t\tisWebVRSupported: __WEBPACK_IMPORTED_MODULE_15__isWebVRSupported__[\"a\" /* default */],\n\t\t\tisWebWorkerSupported: __WEBPACK_IMPORTED_MODULE_16__isWebWorkerSupported__[\"a\" /* default */]\n\t\t}\n\n\t\t// WebVR features\n\t};if (__WEBPACK_IMPORTED_MODULE_15__isWebVRSupported__[\"a\" /* default */]) {\n\t\treturn _extends({}, features.hardwareFeatures, {\n\t\t\t// Hardware features\n\t\t\twebVRDeviceType: __WEBPACK_IMPORTED_MODULE_3__getWebVRDeviceType__[\"a\" /* default */]\n\t\t});\n\t}\n\n\t// Verbose features\n\tif (verbose) {\n\t\tfeatures.hardwareFeatures = _extends({}, features.hardwareFeatures, {\n\t\t\t// Hardware features\n\t\t\tendianness: __WEBPACK_IMPORTED_MODULE_1__getEndianness__[\"a\" /* default */]\n\t\t});\n\n\t\tfeatures.browserFeatures = _extends({}, features.browserFeatures, {\n\t\t\t// Browser features\n\t\t\twebGL2Features: __WEBPACK_IMPORTED_MODULE_17__getWebGL2Features__[\"a\" /* default */],\n\t\t\twebGLFeatures: __WEBPACK_IMPORTED_MODULE_18__getWebGLFeatures__[\"a\" /* default */]\n\t\t});\n\t}\n\n\treturn features;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaW5kZXguanM/NzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIYXJkd2FyZSBmZWF0dXJlc1xuaW1wb3J0IGdldERldmljZVBpeGVsUmF0aW8gZnJvbSAnLi9nZXREZXZpY2VQaXhlbFJhdGlvJztcbmltcG9ydCBnZXRFbmRpYW5uZXNzIGZyb20gJy4vZ2V0RW5kaWFubmVzcyc7XG5pbXBvcnQgZ2V0V2ViV29ya2VyUG9vbFNpemUgZnJvbSAnLi9nZXRXZWJXb3JrZXJQb29sU2l6ZSc7XG5pbXBvcnQgZ2V0V2ViVlJEZXZpY2VUeXBlIGZyb20gJy4vZ2V0V2ViVlJEZXZpY2VUeXBlJztcblxuLy8gQnJvd3NlciBzZXR0aW5nc1xuaW1wb3J0IGlzQ29va2llRW5hYmxlZCBmcm9tICcuL2lzQ29va2llRW5hYmxlZCc7XG5pbXBvcnQgaXNEb05vdFRyYWNrRW5hYmxlZCBmcm9tICcuL2lzRG9Ob3RUcmFja0VuYWJsZWQnO1xuXG4vLyBCcm93c2VyIGZlYXR1cmVzXG5pbXBvcnQgaXNHYW1lcGFkU3VwcG9ydGVkIGZyb20gJy4vaXNHYW1lcGFkU3VwcG9ydGVkJztcbmltcG9ydCBpc1JlcXVlc3RJZGxlQ2FsbGJhY2tTdXBwb3J0ZWQgZnJvbSAnLi9pc1JlcXVlc3RJZGxlQ2FsbGJhY2tTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzU2VydmljZVdvcmtlclN1cHBvcnRlZCBmcm9tICcuL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJBc3NlbWJseVN1cHBvcnRlZCBmcm9tICcuL2lzV2ViQXNzZW1ibHlTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViQXVkaW9TdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYkF1ZGlvU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkdMMlN1cHBvcnRlZCBmcm9tICcuL2lzV2ViR0wyU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkdMU3VwcG9ydGVkIGZyb20gJy4vaXNXZWJHTFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJSVENTdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYlJUQ1N1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJTb2NrZXRTdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYlNvY2tldFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJWUlN1cHBvcnRlZCBmcm9tICcuL2lzV2ViVlJTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViV29ya2VyU3VwcG9ydGVkIGZyb20gJy4vaXNXZWJXb3JrZXJTdXBwb3J0ZWQnO1xuXG4vLyBCcm93c2VyIGZlYXR1cmVzXG5pbXBvcnQgZ2V0V2ViR0wyRmVhdHVyZXMgZnJvbSAnLi9nZXRXZWJHTDJGZWF0dXJlcyc7XG5pbXBvcnQgZ2V0V2ViR0xGZWF0dXJlcyBmcm9tICcuL2dldFdlYkdMRmVhdHVyZXMnO1xuXG4vLyBGZWF0dXJlc1xuZXhwb3J0IGNvbnN0IGdldEZlYXR1cmVzID0gKHZlcmJvc2UgPSBmYWxzZSkgPT4ge1xuXHQvLyBEZWZhdWx0IGZlYXR1cmVzXG5cdGNvbnN0IGZlYXR1cmVzID0ge1xuXHRcdC8vIEhhcmR3YXJlIGZlYXR1cmVzXG5cdFx0aGFyZHdhcmVGZWF0dXJlczoge1xuXHRcdFx0ZGV2aWNlUGl4ZWxSYXRpbzogZ2V0RGV2aWNlUGl4ZWxSYXRpbyxcblx0XHRcdHdvcmtlclBvb2xTaXplOiBnZXRXZWJXb3JrZXJQb29sU2l6ZSxcblx0XHR9LFxuXG5cdFx0Ly8gQnJvd3NlciBzZXR0aW5nc1xuXHRcdGJyb3dzZXJTZXR0aW5nczoge1xuXHRcdFx0aXNDb29raWVFbmFibGVkLFxuXHRcdFx0aXNEb05vdFRyYWNrRW5hYmxlZCxcblx0XHR9LFxuXG5cdFx0Ly8gQnJvd3NlciBmZWF0dXJlc1xuXHRcdGJyb3dzZXJGZWF0dXJlczoge1xuXHRcdFx0aXNHYW1lcGFkU3VwcG9ydGVkLFxuXHRcdFx0aXNSZXF1ZXN0SWRsZUNhbGxiYWNrU3VwcG9ydGVkLFxuXHRcdFx0aXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkLFxuXHRcdFx0aXNXZWJBc3NlbWJseVN1cHBvcnRlZCxcblx0XHRcdGlzV2ViQXVkaW9TdXBwb3J0ZWQsXG5cdFx0XHRpc1dlYkdMMlN1cHBvcnRlZCxcblx0XHRcdGlzV2ViR0xTdXBwb3J0ZWQsXG5cdFx0XHRpc1dlYlJUQ1N1cHBvcnRlZCxcblx0XHRcdGlzV2ViU29ja2V0U3VwcG9ydGVkLFxuXHRcdFx0aXNXZWJWUlN1cHBvcnRlZCxcblx0XHRcdGlzV2ViV29ya2VyU3VwcG9ydGVkLFxuXHRcdH0sXG5cdH1cblxuXHQvLyBXZWJWUiBmZWF0dXJlc1xuXHRpZiAoaXNXZWJWUlN1cHBvcnRlZCkge1xuXHRcdHJldHVybiB7IC4uLmZlYXR1cmVzLmhhcmR3YXJlRmVhdHVyZXMsIC4uLntcblx0XHRcdC8vIEhhcmR3YXJlIGZlYXR1cmVzXG5cdFx0XHR3ZWJWUkRldmljZVR5cGU6IGdldFdlYlZSRGV2aWNlVHlwZSxcblx0XHR9fTtcblx0fVxuXG5cdC8vIFZlcmJvc2UgZmVhdHVyZXNcblx0aWYgKHZlcmJvc2UpIHtcblx0XHRmZWF0dXJlcy5oYXJkd2FyZUZlYXR1cmVzID0geyAuLi5mZWF0dXJlcy5oYXJkd2FyZUZlYXR1cmVzLCAuLi57XG5cdFx0XHQvLyBIYXJkd2FyZSBmZWF0dXJlc1xuXHRcdFx0ZW5kaWFubmVzczogZ2V0RW5kaWFubmVzcyxcblx0XHR9fTtcblxuXHRcdGZlYXR1cmVzLmJyb3dzZXJGZWF0dXJlcyA9IHsgLi4uZmVhdHVyZXMuYnJvd3NlckZlYXR1cmVzLCAuLi57XG5cdFx0XHQvLyBCcm93c2VyIGZlYXR1cmVzXG5cdFx0XHR3ZWJHTDJGZWF0dXJlczogZ2V0V2ViR0wyRmVhdHVyZXMsXG5cdFx0XHR3ZWJHTEZlYXR1cmVzOiBnZXRXZWJHTEZlYXR1cmVzLFxuXHRcdH19O1xuXHR9XG5cdFxuXHRyZXR1cm4gZmVhdHVyZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWNBO0FBN0JBO0FBK0JBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

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
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGLRenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\n\t\tsupportedExtensions: gl.getSupportedExtensions(),\n\t\tantialias: !!gl.getContextAttributes().antialias,\n\n\t\tredBits: gl.getParameter(gl.RED_BITS),\n\t\tgreenBits: gl.getParameter(gl.GREEN_BITS),\n\t\tblueBits: gl.getParameter(gl.BLUE_BITS),\n\t\talphaBits: gl.getParameter(gl.ALPHA_BITS),\n\t\tdepthBits: gl.getParameter(gl.DEPTH_BITS),\n\t\tstencilBits: gl.getParameter(gl.STENCIL_BITS),\n\n\t\tmaxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),\n\t\tmaxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),\n\t\tmaxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),\n\t\tmaxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),\n\t\tmaxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),\n\t\tmaxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),\n\t\tmaxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),\n\t\tmaxVertexAttributes: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),\n\t\tmaxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),\n\t\tmaxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),\n\t\taliasedLineWidthRange: gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE),\n\t\taliasedPointSizeRange: gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE),\n\t\tmaxViewportDimensions: gl.getParameter(gl.MAX_VIEWPORT_DIMS),\n\n\t\tvertexShaderHighPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT),\n\t\tvertexShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT),\n\t\tvertexShaderLowPrecision: gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT),\n\n\t\tfragmentShaderHighPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT),\n\t\tfragmentShaderMediumPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT),\n\t\tfragmentShaderLowPrecision: gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT)\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2dldFdlYkdMRmVhdHVyZXMuanM/ZTU5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblx0aWYoIWdsIHx8ICFnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCkgcmV0dXJuIGZhbHNlO1xuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG5cblx0Y29uc3QgZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbycpO1xuXG5cdGNvbnN0IGZlYXR1cmVzID0ge1xuXHRcdHJlbmRlcmVyOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuUkVOREVSRVIpLFxuXHRcdHZlbmRvcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFTkRPUiksXG5cdFx0dmVyc2lvbjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLFxuXHRcdHNoYWRlclZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5TSEFESU5HX0xBTkdVQUdFX1ZFUlNJT04pLFxuXHRcdHJlbmRlcmVyVW5tYXNrZWQ6IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gJiYgZ2wuZ2V0UGFyYW1ldGVyKGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8uVU5NQVNLRURfUkVOREVSRVJfV0VCR0wpLFxuXHRcdHZlbmRvclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1ZFTkRPUl9XRUJHTCksXG5cblx0XHRzdXBwb3J0ZWRFeHRlbnNpb25zOiBnbC5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zKCksXG5cdFx0YW50aWFsaWFzOiAhIWdsLmdldENvbnRleHRBdHRyaWJ1dGVzKCkuYW50aWFsaWFzLFxuXG5cdFx0cmVkQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLlJFRF9CSVRTKSxcblx0XHRncmVlbkJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5HUkVFTl9CSVRTKSxcblx0XHRibHVlQml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLkJMVUVfQklUUyksXG5cdFx0YWxwaGFCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUxQSEFfQklUUyksXG5cdFx0ZGVwdGhCaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuREVQVEhfQklUUyksXG5cdFx0c3RlbmNpbEJpdHM6IGdsLmdldFBhcmFtZXRlcihnbC5TVEVOQ0lMX0JJVFMpLFxuXG5cdFx0bWF4UmVuZGVyQnVmZmVyU2l6ZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9SRU5ERVJCVUZGRVJfU0laRSksXG5cdFx0bWF4Q29tYmluZWRUZXh0dXJlSW1hZ2VVbml0czogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9DT01CSU5FRF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcblx0XHRtYXhDdWJlTWFwVGV4dHVyZVNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfQ1VCRV9NQVBfVEVYVFVSRV9TSVpFKSxcblx0XHRtYXhGcmFnbWVudFVuaWZvcm1WZWN0b3JzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX0ZSQUdNRU5UX1VOSUZPUk1fVkVDVE9SUyksXG5cdFx0bWF4VGV4dHVyZUltYWdlVW5pdHM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9JTUFHRV9VTklUUyksXG5cdFx0bWF4VGV4dHVyZVNpemU6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKSxcblx0XHRtYXhWYXJ5aW5nVmVjdG9yczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WQVJZSU5HX1ZFQ1RPUlMpLFxuXHRcdG1heFZlcnRleEF0dHJpYnV0ZXM6IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVkVSVEVYX0FUVFJJQlMpLFxuXHRcdG1heFZlcnRleFRleHR1cmVJbWFnZVVuaXRzOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9URVhUVVJFX0lNQUdFX1VOSVRTKSxcblx0XHRtYXhWZXJ0ZXhVbmlmb3JtVmVjdG9yczogZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfVU5JRk9STV9WRUNUT1JTKSxcblx0XHRhbGlhc2VkTGluZVdpZHRoUmFuZ2U6IGdsLmdldFBhcmFtZXRlcihnbC5BTElBU0VEX0xJTkVfV0lEVEhfUkFOR0UpLFxuXHRcdGFsaWFzZWRQb2ludFNpemVSYW5nZTogZ2wuZ2V0UGFyYW1ldGVyKGdsLkFMSUFTRURfUE9JTlRfU0laRV9SQU5HRSksXG5cdFx0bWF4Vmlld3BvcnREaW1lbnNpb25zOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZJRVdQT1JUX0RJTVMpLFxuXG5cdFx0dmVydGV4U2hhZGVySGlnaFByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLkhJR0hfRkxPQVQpLFxuXHRcdHZlcnRleFNoYWRlck1lZGl1bVByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLlZFUlRFWF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCksXG5cdFx0dmVydGV4U2hhZGVyTG93UHJlY2lzaW9uOiBnbC5nZXRTaGFkZXJQcmVjaXNpb25Gb3JtYXQoZ2wuVkVSVEVYX1NIQURFUiwgZ2wuTE9XX0ZMT0FUKSxcblxuXHRcdGZyYWdtZW50U2hhZGVySGlnaFByZWNpc2lvbjogZ2wuZ2V0U2hhZGVyUHJlY2lzaW9uRm9ybWF0KGdsLkZSQUdNRU5UX1NIQURFUiwgZ2wuSElHSF9GTE9BVCksXG5cdFx0ZnJhZ21lbnRTaGFkZXJNZWRpdW1QcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLk1FRElVTV9GTE9BVCksXG5cdFx0ZnJhZ21lbnRTaGFkZXJMb3dQcmVjaXNpb246IGdsLmdldFNoYWRlclByZWNpc2lvbkZvcm1hdChnbC5GUkFHTUVOVF9TSEFERVIsIGdsLkxPV19GTE9BVCksXG5cdH07XG5cblx0cmV0dXJuIGZlYXR1cmVzO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvZ2V0V2ViR0xGZWF0dXJlcy5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0Q0E7QUFDQTtBQXdDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

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