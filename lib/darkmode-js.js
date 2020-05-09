(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("darkmode-js", [], factory);
	else if(typeof exports === 'object')
		exports["darkmode-js"] = factory();
	else
		root["darkmode-js"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/darkmode.js":
/*!*************************!*\
  !*** ./src/darkmode.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IS_BROWSER = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IS_BROWSER = typeof window !== 'undefined';
exports.IS_BROWSER = IS_BROWSER;

var Darkmode =
/*#__PURE__*/
function () {
  function Darkmode(options) {
    _classCallCheck(this, Darkmode);

    if (!IS_BROWSER) {
      return;
    }

    var defaultOptions = {
      bottom: '32px',
      right: '32px',
      left: 'unset',
      time: '0.3s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      label: '',
      saveInCookies: true,
      autoMatchOsTheme: true
    };
    options = Object.assign({}, defaultOptions, options);
    var css = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        transition: all ".concat(options.time, " ease;\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n      \n      .darkmode-background {\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n    ");
    var layer = document.createElement('div');
    var background = document.createElement('div');
    layer.classList.add('darkmode-layer');
    background.classList.add('darkmode-background');
    var darkmodeActivated = window.localStorage.getItem('darkmode') === 'true';
    var preferedThemeOs = options.autoMatchOsTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var darkmodeNeverActivatedByAction = window.localStorage.getItem('darkmode') === null;

    if (darkmodeActivated === true && options.saveInCookies || darkmodeNeverActivatedByAction && preferedThemeOs) {
      layer.classList.add('darkmode-layer--expanded', 'darkmode-layer--simple', 'darkmode-layer--no-transition');
      document.body.classList.add('darkmode--activated');
    }

    document.body.insertBefore(layer, document.body.firstChild);
    document.body.insertBefore(background, document.body.firstChild);
    this.addStyle(css);
    this.layer = layer;
    this.saveInCookies = options.saveInCookies;
    this.time = options.time;
  }

  _createClass(Darkmode, [{
    key: "addStyle",
    value: function addStyle(css) {
      var linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(css));
      document.head.appendChild(linkElement);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!IS_BROWSER) {
        return;
      }

      var layer = this.layer;
      var isDarkmode = this.isActivated();
      layer.classList.toggle('darkmode-layer--simple');
      document.body.classList.toggle('darkmode--activated');
      window.localStorage.setItem('darkmode', !isDarkmode);
    }
  }, {
    key: "isActivated",
    value: function isActivated() {
      if (!IS_BROWSER) {
        return null;
      }

      return document.body.classList.contains('darkmode--activated');
    }
  }]);

  return Darkmode;
}();

exports.default = Darkmode;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _darkmode = _interopRequireWildcard(__webpack_require__(/*! ./darkmode */ "./src/darkmode.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = _darkmode.default;
/* eslint-disable */

exports.default = _default;

if (_darkmode.IS_BROWSER) {
  (function (window) {
    window.Darkmode = _darkmode.default;
  })(window);
}
/* eslint-enable */


module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXJrbW9kZS1qcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZGFya21vZGUtanMvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiSVNfQlJPV1NFUiIsIndpbmRvdyIsIkRhcmttb2RlIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiYm90dG9tIiwicmlnaHQiLCJsZWZ0IiwidGltZSIsIm1peENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibGFiZWwiLCJzYXZlSW5Db29raWVzIiwiYXV0b01hdGNoT3NUaGVtZSIsIk9iamVjdCIsImFzc2lnbiIsImNzcyIsImxheWVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYmFja2dyb3VuZCIsImNsYXNzTGlzdCIsImFkZCIsImRhcmttb2RlQWN0aXZhdGVkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInByZWZlcmVkVGhlbWVPcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZGFya21vZGVOZXZlckFjdGl2YXRlZEJ5QWN0aW9uIiwiYm9keSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJhZGRTdHlsZSIsImxpbmtFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwiaXNEYXJrbW9kZSIsImlzQWN0aXZhdGVkIiwidG9nZ2xlIiwic2V0SXRlbSIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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aUI7QUFDaEJBLFVBQU0sQ0FBQ0MsUUFBUDtBQUNELEdBRkQsRUFFR0QsTUFGSDtBQUdEO0FBQ0QiLCJmaWxlIjoiZGFya21vZGUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRhcmttb2RlLWpzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhcmttb2RlLWpzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRhcmttb2RlLWpzXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhcmttb2RlIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBpZiAoIUlTX0JST1dTRVIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgICBib3R0b206ICczMnB4JyxcclxuICAgICAgcmlnaHQ6ICczMnB4JyxcclxuICAgICAgbGVmdDogJ3Vuc2V0JyxcclxuICAgICAgdGltZTogJzAuM3MnLFxyXG4gICAgICBtaXhDb2xvcjogJyNmZmYnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICBzYXZlSW5Db29raWVzOiB0cnVlLFxyXG4gICAgICBhdXRvTWF0Y2hPc1RoZW1lOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgY3NzID0gYFxyXG4gICAgICAuZGFya21vZGUtbGF5ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgJHtvcHRpb25zLnRpbWV9IGVhc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kYXJrbW9kZS1sYXllci0tc2ltcGxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGFya21vZGUtbGF5ZXItLWV4cGFuZGVkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhcmttb2RlLWxheWVyLS1uby10cmFuc2l0aW9uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGFya21vZGUtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIHotaW5kZXg6IC0xMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZywgLmRhcmttb2RlLWlnbm9yZSB7XHJcbiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWxheWVyJyk7XHJcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICBjb25zdCBkYXJrbW9kZUFjdGl2YXRlZCA9XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gJ3RydWUnO1xyXG4gICAgY29uc3QgcHJlZmVyZWRUaGVtZU9zID1cclxuICAgICAgb3B0aW9ucy5hdXRvTWF0Y2hPc1RoZW1lICYmXHJcbiAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcclxuICAgIGNvbnN0IGRhcmttb2RlTmV2ZXJBY3RpdmF0ZWRCeUFjdGlvbiA9XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya21vZGUnKSA9PT0gbnVsbDtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChkYXJrbW9kZUFjdGl2YXRlZCA9PT0gdHJ1ZSAmJiBvcHRpb25zLnNhdmVJbkNvb2tpZXMpIHx8XHJcbiAgICAgIChkYXJrbW9kZU5ldmVyQWN0aXZhdGVkQnlBY3Rpb24gJiYgcHJlZmVyZWRUaGVtZU9zKVxyXG4gICAgKSB7XHJcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5hZGQoXHJcbiAgICAgICAgJ2Rhcmttb2RlLWxheWVyLS1leHBhbmRlZCcsXHJcbiAgICAgICAgJ2Rhcmttb2RlLWxheWVyLS1zaW1wbGUnLFxyXG4gICAgICAgICdkYXJrbW9kZS1sYXllci0tbm8tdHJhbnNpdGlvbidcclxuICAgICAgKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrbW9kZS0tYWN0aXZhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUobGF5ZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShiYWNrZ3JvdW5kLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIHRoaXMuYWRkU3R5bGUoY3NzKTtcclxuXHJcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICB0aGlzLnNhdmVJbkNvb2tpZXMgPSBvcHRpb25zLnNhdmVJbkNvb2tpZXM7XHJcbiAgICB0aGlzLnRpbWUgPSBvcHRpb25zLnRpbWU7XHJcbiAgfVxyXG5cclxuICBhZGRTdHlsZShjc3MpIHtcclxuICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG5cclxuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcclxuICAgIGxpbmtFbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xyXG4gICAgbGlua0VsZW1lbnQuc2V0QXR0cmlidXRlKFxyXG4gICAgICAnaHJlZicsXHJcbiAgICAgICdkYXRhOnRleHQvY3NzO2NoYXJzZXQ9VVRGLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudChjc3MpXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICBpZiAoIUlTX0JST1dTRVIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGF5ZXIgPSB0aGlzLmxheWVyO1xyXG4gICAgY29uc3QgaXNEYXJrbW9kZSA9IHRoaXMuaXNBY3RpdmF0ZWQoKTtcclxuXHJcbiAgICBsYXllci5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrbW9kZS1sYXllci0tc2ltcGxlJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2Rhcmttb2RlLS1hY3RpdmF0ZWQnKTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya21vZGUnLCAhaXNEYXJrbW9kZSk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2YXRlZCgpIHtcclxuICAgIGlmICghSVNfQlJPV1NFUikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFya21vZGUtLWFjdGl2YXRlZCcpO1xyXG4gIH1cclxufSIsImltcG9ydCBEYXJrbW9kZSwgeyBJU19CUk9XU0VSIH0gZnJvbSAnLi9kYXJrbW9kZSc7XHJcbmV4cG9ydCBkZWZhdWx0IERhcmttb2RlO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgKi9cclxuaWYgKElTX0JST1dTRVIpIHtcclxuICAoZnVuY3Rpb24od2luZG93KSB7XHJcbiAgICB3aW5kb3cuRGFya21vZGUgPSBEYXJrbW9kZTtcclxuICB9KSh3aW5kb3cpO1xyXG59XHJcbi8qIGVzbGludC1lbmFibGUgKi9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==