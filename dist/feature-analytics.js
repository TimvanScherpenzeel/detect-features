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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"initialize\"] = initialize;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analytics__ = __webpack_require__(/*! ./analytics */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__ = __webpack_require__(/*! ./utilities/isValidUACode */ 6);\n// Analytics\n\n\n\n\nfunction initialize(trackingId) {\n\tif (trackingId === undefined || !Object(__WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__[\"a\" /* default */])(trackingId)) {\n\t\tconsole.error('Please provide a valid UA code (UA-xxxx-yy)');\n\t\treturn;\n\t};\n\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].initialize(trackingId);\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].register();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmFseXRpY3NcbmltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuaW1wb3J0IGlzVmFsaWRVQUNvZGUgZnJvbSAnLi91dGlsaXRpZXMvaXNWYWxpZFVBQ29kZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKHRyYWNraW5nSWQpIHtcblx0aWYgKHRyYWNraW5nSWQgPT09IHVuZGVmaW5lZCB8fCAhaXNWYWxpZFVBQ29kZSh0cmFja2luZ0lkKSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgVUEgY29kZSAoVUEteHh4eC15eSknKTtcblx0XHRyZXR1cm47XG5cdH07XG5cblx0YW5hbHl0aWNzLmluaXRpYWxpemUodHJhY2tpbmdJZCk7XG5cdGFuYWx5dGljcy5yZWdpc3RlcigpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./analytics/index.js ***!
  \****************************/
/*! exports provided: analytics */
/*! exports used: analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return analytics; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_record__ = __webpack_require__(/*! ../utilities/record */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features__ = __webpack_require__(/*! ../features */ 3);\n// Analytics\n\n\n// Features\n\n\nvar analytics = {\n\tinitialize: function initialize(trackingId) {\n\t\t// Inject Google Analytics\n\t\t(function (i, s, o, g, r, a, m) {\n\t\t\ti['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {\n\t\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t\t}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);\n\t\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'GA_FEATURE_ANALYTICS');\n\t\twindow.GA_FEATURE_ANALYTICS('create', '' + trackingId, 'auto');\n\t\twindow.GA_FEATURE_ANALYTICS('send', 'pageview');\n\t},\n\n\tregister: function register() {\n\t\twindow.FEATURE_ANALYTICS = __WEBPACK_IMPORTED_MODULE_1__features__;\n\n\t\t// WebGL support detection\n\t\tif (__WEBPACK_IMPORTED_MODULE_1__features__[\"isWebGLSupported\"]) {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\thitType: 'event',\n\t\t\t\teventCategory: 'Features',\n\t\t\t\teventAction: 'WebGL Detect',\n\t\t\t\teventLabel: 'WebGL is supported',\n\t\t\t\tnonInteraction: true\n\t\t\t});\n\t\t} else {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\thitType: 'event',\n\t\t\t\teventCategory: 'Features',\n\t\t\t\teventAction: 'WebGL Detect',\n\t\t\t\teventLabel: 'WebGL is not supported',\n\t\t\t\tnonInteraction: true\n\t\t\t});\n\t\t}\n\n\t\t// WebGL2 support detection\n\t\tif (__WEBPACK_IMPORTED_MODULE_1__features__[\"isWebGL2Supported\"]) {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\thitType: 'event',\n\t\t\t\teventCategory: 'Features',\n\t\t\t\teventAction: 'WebGL2 Detect',\n\t\t\t\teventLabel: 'WebGL2 is supported',\n\t\t\t\tnonInteraction: true\n\t\t\t});\n\t\t} else {\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\thitType: 'event',\n\t\t\t\teventCategory: 'Features',\n\t\t\t\teventAction: 'WebGL2 Detect',\n\t\t\t\teventLabel: 'WebGL2 is not supported',\n\t\t\t\tnonInteraction: true\n\t\t\t});\n\t\t}\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYW5hbHl0aWNzL2luZGV4LmpzPzRiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5hbHl0aWNzXG5pbXBvcnQgeyByZWNvcmQgfSBmcm9tICcuLi91dGlsaXRpZXMvcmVjb3JkJztcblxuLy8gRmVhdHVyZXNcbmltcG9ydCAqIGFzIGZlYXR1cmVzIGZyb20gJy4uL2ZlYXR1cmVzJztcblxuZXhwb3J0IGNvbnN0IGFuYWx5dGljcyA9IHtcblx0aW5pdGlhbGl6ZTogKHRyYWNraW5nSWQpID0+IHtcblx0XHQvLyBJbmplY3QgR29vZ2xlIEFuYWx5dGljc1xuXHRcdChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcblx0XHQoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcblx0XHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG5cdFx0fSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdHQV9GRUFUVVJFX0FOQUxZVElDUycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnY3JlYXRlJywgYCR7dHJhY2tpbmdJZH1gLCAnYXV0bycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsICdwYWdldmlldycpO1xuXHR9LFxuXG5cdHJlZ2lzdGVyOiAoKSA9PiB7XG5cdFx0d2luZG93LkZFQVRVUkVfQU5BTFlUSUNTID0gZmVhdHVyZXM7XG5cblx0XHQvLyBXZWJHTCBzdXBwb3J0IGRldGVjdGlvblxuXHRcdGlmIChmZWF0dXJlcy5pc1dlYkdMU3VwcG9ydGVkKSB7XG5cdFx0XHRyZWNvcmQoe1xuXHRcdFx0XHRoaXRUeXBlOiAnZXZlbnQnLFxuXHRcdFx0XHRldmVudENhdGVnb3J5OiAnRmVhdHVyZXMnLFxuXHRcdFx0XHRldmVudEFjdGlvbjogJ1dlYkdMIERldGVjdCcsXG5cdFx0XHRcdGV2ZW50TGFiZWw6ICdXZWJHTCBpcyBzdXBwb3J0ZWQnLFxuXHRcdFx0XHRub25JbnRlcmFjdGlvbjogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWNvcmQoe1xuXHRcdFx0XHRoaXRUeXBlOiAnZXZlbnQnLFxuXHRcdFx0XHRldmVudENhdGVnb3J5OiAnRmVhdHVyZXMnLFxuXHRcdFx0XHRldmVudEFjdGlvbjogJ1dlYkdMIERldGVjdCcsXG5cdFx0XHRcdGV2ZW50TGFiZWw6ICdXZWJHTCBpcyBub3Qgc3VwcG9ydGVkJyxcblx0XHRcdFx0bm9uSW50ZXJhY3Rpb246IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBXZWJHTDIgc3VwcG9ydCBkZXRlY3Rpb25cblx0XHRpZiAoZmVhdHVyZXMuaXNXZWJHTDJTdXBwb3J0ZWQpIHtcblx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdGhpdFR5cGU6ICdldmVudCcsXG5cdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6ICdGZWF0dXJlcycsXG5cdFx0XHRcdGV2ZW50QWN0aW9uOiAnV2ViR0wyIERldGVjdCcsXG5cdFx0XHRcdGV2ZW50TGFiZWw6ICdXZWJHTDIgaXMgc3VwcG9ydGVkJyxcblx0XHRcdFx0bm9uSW50ZXJhY3Rpb246IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVjb3JkKHtcblx0XHRcdFx0aGl0VHlwZTogJ2V2ZW50Jyxcblx0XHRcdFx0ZXZlbnRDYXRlZ29yeTogJ0ZlYXR1cmVzJyxcblx0XHRcdFx0ZXZlbnRBY3Rpb246ICdXZWJHTDIgRGV0ZWN0Jyxcblx0XHRcdFx0ZXZlbnRMYWJlbDogJ1dlYkdMMiBpcyBub3Qgc3VwcG9ydGVkJyxcblx0XHRcdFx0bm9uSW50ZXJhY3Rpb246IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYW5hbHl0aWNzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBbkRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./utilities/record.js ***!
  \*****************************/
/*! exports provided: record */
/*! exports used: record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return record; });\nvar record = function record(obj) {\n\tif (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {\n\t\tvar callback = function callback() {\n\t\t\twindow.GA_FEATURE_ANALYTICS('send', obj);\n\t\t};\n\n\t\tif ('requestIdleCallback' in window) {\n\t\t\twindow.requestIdleCallback(callback);\n\t\t} else {\n\t\t\tcallback();\n\t\t}\n\t} else {\n\t\tconsole.log('Your checking code might not be valid.');\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbGl0aWVzL3JlY29yZC5qcz8wNDMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNvcmQgPSAob2JqKSA9PiB7XG5cdGlmICh3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luZG93LkdBX0ZFQVRVUkVfQU5BTFlUSUNTID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG5cdFx0XHR3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MoJ3NlbmQnLCBvYmopO1xuXHRcdH07XG5cblx0XHRpZiAoJ3JlcXVlc3RJZGxlQ2FsbGJhY2snIGluIHdpbmRvdykge1xuXHRcdFx0d2luZG93LnJlcXVlc3RJZGxlQ2FsbGJhY2soY2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZygnWW91ciBjaGVja2luZyBjb2RlIG1pZ2h0IG5vdCBiZSB2YWxpZC4nKTtcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3V0aWxpdGllcy9yZWNvcmQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./features/index.js ***!
  \***************************/
/*! exports provided: isWebGLSupported, isWebGL2Supported */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isWebGL2Supported__ = __webpack_require__(/*! ./isWebGL2Supported */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isWebGLSupported__ = __webpack_require__(/*! ./isWebGLSupported */ 5);\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \"isWebGLSupported\", function() { return __WEBPACK_IMPORTED_MODULE_1__isWebGLSupported__[\"a\"]; });\n/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, \"isWebGL2Supported\", function() { return __WEBPACK_IMPORTED_MODULE_0__isWebGL2Supported__[\"a\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaW5kZXguanM/NzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNXZWJHTDJTdXBwb3J0ZWQgZnJvbSAnLi9pc1dlYkdMMlN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJHTFN1cHBvcnRlZCBmcm9tICcuL2lzV2ViR0xTdXBwb3J0ZWQnO1xuXG5leHBvcnQge1xuXHRpc1dlYkdMU3VwcG9ydGVkLFxuXHRpc1dlYkdMMlN1cHBvcnRlZCxcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***************************************!*\
  !*** ./features/isWebGL2Supported.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\treturn gl && gl instanceof WebGL2RenderingContext;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaXNXZWJHTDJTdXBwb3J0ZWQuanM/Y2QzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wyJyk7XG5cdHJldHVybiAoZ2wgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTDJSZW5kZXJpbmdDb250ZXh0KTtcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9pc1dlYkdMMlN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./features/isWebGLSupported.js ***!
  \**************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\treturn gl && gl instanceof WebGLRenderingContext;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaXNXZWJHTFN1cHBvcnRlZC5qcz8xZDE5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKTtcblx0cmV0dXJuIChnbCAmJiBnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCk7XG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaXNXZWJHTFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************!*\
  !*** ./utilities/isValidUACode.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = isValidUACode;\n/**\n * Regular Expression snippets to validate Google Analytics tracking code\n * see http://code.google.com/apis/analytics/docs/concepts/gaConceptsAccounts.html#webProperty\n *\n * @author  Faisalman <movedpixel@gmail.com>\n * @license http://www.opensource.org/licenses/mit-license.php\n * @link    http://gist.github.com/faisalman\n * @param   str     string to be validated\n * @return  Boolean \n */\n\nfunction isValidUACode(str) {\n  return (/^ua-\\d{4,9}-\\d{1,4}$/i.test(str.toString())\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbGl0aWVzL2lzVmFsaWRVQUNvZGUuanM/M2JkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlZ3VsYXIgRXhwcmVzc2lvbiBzbmlwcGV0cyB0byB2YWxpZGF0ZSBHb29nbGUgQW5hbHl0aWNzIHRyYWNraW5nIGNvZGVcbiAqIHNlZSBodHRwOi8vY29kZS5nb29nbGUuY29tL2FwaXMvYW5hbHl0aWNzL2RvY3MvY29uY2VwdHMvZ2FDb25jZXB0c0FjY291bnRzLmh0bWwjd2ViUHJvcGVydHlcbiAqXG4gKiBAYXV0aG9yICBGYWlzYWxtYW4gPG1vdmVkcGl4ZWxAZ21haWwuY29tPlxuICogQGxpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqIEBsaW5rICAgIGh0dHA6Ly9naXN0LmdpdGh1Yi5jb20vZmFpc2FsbWFuXG4gKiBAcGFyYW0gICBzdHIgICAgIHN0cmluZyB0byBiZSB2YWxpZGF0ZWRcbiAqIEByZXR1cm4gIEJvb2xlYW4gXG4gKi8gXG4gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkVUFDb2RlKHN0cil7XG4gICAgcmV0dXJuICgvXnVhLVxcZHs0LDl9LVxcZHsxLDR9JC9pKS50ZXN0KHN0ci50b1N0cmluZygpKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);
});