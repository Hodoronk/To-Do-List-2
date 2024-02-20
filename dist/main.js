/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Roboto-Regular.ttf */ \"./src/assets/fonts/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/fonts/Cookie/Cookie-Regular.ttf */ \"./src/assets/fonts/Cookie/Cookie-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* General styles */\n\n*{\n    font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody{\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\nbody{\n    display:flex;\n    flex-direction: column;\n    background-color: rgba(219, 220, 237, 0.465);\n}\ninput:focus {\n    outline: none;\n}\n\n/* Header styles */\nheader{\n    background-color: rgb(40, 40, 41);\n    height: 7rem;\n    color:white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 2;\n}\nheader img {\n    height: 3rem;\n    margin-right: 2rem;\n}\nheader h1{\n    font-family: 'Cookie', sans-serif;\n    font-size: 3rem;\n    color:rgba(255, 255, 255, 0.65);\n}\n\n#title{\n    display:flex;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Button styles */\nbutton {\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n}\n\n.add-btn {\n    display: inline-block;\n    padding:10px;\n    border-radius: 10px;\n    vertical-align: middle;\n}\n.add-btn img{\n    height: 1.5rem;\n    padding: 5px;\n    border-radius: 10px;\n    background-color: rgba(0, 128, 0, 0.341);\n}\n\n.project-btn{\n    padding:10px;\n    font-size: 1rem;\n    border-radius: 5px;\n\n}\n\n.project-btn:hover{\n    background-color: red;\n    background-color: rgba(89, 88, 88, 0.256);\n    \n}\n\n\n#project-list{\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#time-buttons button {\n    border-radius: 5px;\n    padding: 5px;\n    display:flex;\n    justify-content: flex-start;\n}\n#time-buttons button img{\n    height: 1.5rem;\n    width: auto;\n    margin-right: 5px;\n}\n#time-buttons button:hover {\n    background-color: rgba(89, 88, 88, 0.256);\n}\n\n\n#content {\n    flex: 1;\n    display:flex;\n}\n#sidebar{\n    background-color: rgba(187, 167, 167, 0.387);\n    padding: 1rem;\n    width: 250px;\n    transition: transform 0.5s ease;\n}\n#mobile-sidebar-reveal{\n    display:none;\n}\n\n#main-screen {\n\n    width: 100%;\n    display:flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 0;\n\n}\n\n#time-buttons{\n    display:flex;\n    flex-direction: column;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    height: 30%;\n    margin-bottom: 10%;\n}\n\n\n/* Fonts */\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n    font-family: 'Cookie';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n/* Form divs */\n\n#form-div{\n    display: flex;\n    position:absolute;\n    flex-direction: column;\n    width: 250px;\n    padding: 2rem;\n    border-radius: 0 0 15px 15px;\n    background-color: rgb(112, 213, 100);\n    margin-top: -50%;\n    margin-left: 10px;\n    transition: margin-top 0.4s ease-in-out;\n}\n\n#form-div.visible {\n    margin-top: 0%;\n    \n}\n#priority-div{\n    display: flex;\n    width: 100%;\n}\n#priority-div input {\n    border-radius: 20px;\n}\n#form-div input {\n    background-color: rgba(255, 255, 255, 0.618);\n    width: 100%;\n    border-radius: 15px;\n    padding: 3px;\n    border: none;\n    margin-bottom: 1rem;\n    height: 2rem;\n}\n#submit-cancel-div{\n    font-size: 1rem;\n    display:flex;\n    justify-content: space-between;\n    margin-top: 20px;\n}\n\n#form-submit{\n\n    border-radius: 15px;\n}\n\n#submit-cancel-div button {\n    font-size: 1.2rem;\n}\n#main-screen h2{\n    display:flex;\n}\n#taskinput-area{\n    display:flex;\n    flex-direction: column;\n    margin-right: 5%;\n    margin-right :200px;\n    width: 250px;\n}\n\n#add-task{\n    margin-left: 20px;\n    border-radius: 0 0 15px 15px;\n    background-color: rgb(112, 213, 100);\n    font-weight: bolder;\n    font-size: 1rem;\n\n}\n\n#add-task:hover {\n    background-color: rgb(25, 247, 0);\n}\n#task-form-cancel,\n#form-submit{\n    padding: 5px;\n    border-radius:10px;\n    font-weight:bolder;\n    color: white;\n}\n\n#task-form-cancel {\n    background-color: brown;\n}\n#task-form-cancel:hover{\n    background-color: rgba(165, 42, 42, 0.665);\n}\n#form-submit{\n    background-color:  green;\n}\n\n#form-submit:hover{\n    background-color: rgba(0, 128, 0, 0.694);\n}\n\n#dolist-div{\n    width: 15rem;\n    margin: 1.5rem;\n    padding: 0.5rem;\n    border-radius: 10px;\n    height: fit-content;\n\n    gap: 0.5rem;\n\n    background-color: rgba(220, 242, 22, 0.6);\n    word-wrap:break-word;\n\n\n    -webkit-box-shadow: 10px 10px 16px -6px rgba(0,0,0,0.75);\n    -moz-box-shadow: 10px 10px 16px -6px rgba(0,0,0,0.75);\n    box-shadow: 10px 10px 16px -6px rgba(0,0,0,0.75);\n}\n\n#task-display {\n    width: 100%;\n    display:flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    overflow:scroll;\n\n}\n#do-item-button-div{\n\n    display:flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n    align-self: flex-end;\n    height: 40%;\n    gap: 10%;\n}\n\n#do-item-button-div button {\n    height: 100%;\n    width: 35%;\n    border-radius: 20px;\n    padding: 10px;\n}\n\n\n\n#complete-task-button,\n#delete-task-button {\n    color: white;\n    font-weight: bolder\n}\n#complete-task-button {\n    background-color: rgba(0, 128, 0, 0.29);\n}\n#delete-task-button {\n    background-color: rgba(255, 0, 0, 0.39);\n}\n\n\n\n\n\n/* \n  createProj.setAttribute('id', 'create-proj-btn');\n  xButton.setAttribute('id', 'proj-x-button'); */\n\n\n\n#delete-task-button:hover {\n    background-color: rgba(255, 0, 0, 0.587);\n}\n\n#pTitleInput {\n    height: 1.5rem;\n    border-radius: 5px;\n    background-color: rgba(0, 0, 0, 0.267);\n}\n\n#proj-x-button {\n    color: red;\n    font-weight: bolder;\n    padding: 5px;\n    border-radius: 50%;\n}\n#create-proj-btn {\n\n    padding: 3px;\n    border-radius: 5px;\n    background-color: rgba(69, 206, 41, 0.818);\n    font-weight: bolder;\n    color: white;\n}\n#create-proj-btn:hover {\n    background-color: rgba(69, 206, 41, 0.945);\n}\n\n/* Media queries */\n\n\n@media (max-width: 900px) {\n    #add-task,\n    #taskinput-area{\n        all: initial;\n    }\n    #add-task{\n        position:fixed;\n        right: 5%;\n        bottom: 2%;\n        border-radius: 100px 100px 100px 100px ;\n        padding: 2rem;\n        overflow: hidden;\n        background-color: green;\n        font-weight: bolder;\n        color: white;\n        font-family: 'Roboto';\n        cursor: pointer;\n    }\n\n\n    #dolist-div{\n        min-width: 20%;\n        margin: 5px;\n        height: fit-content;\n    }\n\n\n    #form-div{\n        transition: initial;\n        height: initial;\n        width: initial;\n        position:absolute;\n        display: none;\n        left: 2%;\n        right: 3%;\n        top: 15%;\n    }\n    #form-div.visible {\n        display: block;\n    }\n\n    #mobile-sidebar-reveal{\n        display:block;\n\n        justify-self: flex-start;\n        margin-right: 2rem;\n    }\n    #mobile-sidebar-reveal,\n    #mobile-sidebar-reveal img{\n        height: 50px;\n        width: 50px\n    }\n    .display-none{\n        display: none;\n    }\n    .invisible{\n\n        transform: translate(-100%);\n        transition: transform 0.5s ease;\n    \n    }\n\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://dolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nvar defaultOptions = {};\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/_lib/defaultOptions/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n  var number = Number(dirtyNumber);\n  if (isNaN(number)) {\n    return number;\n  }\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameDay)\n/* harmony export */ });\n/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ \"./node_modules/date-fns/esm/startOfDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameDay\n * @category Day Helpers\n * @summary Are the given dates in the same day (and year and month)?\n *\n * @description\n * Are the given dates in the same day (and year and month)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same day (and year and month)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))\n * //=> true\n *\n * @example\n * // Are 4 September and 4 October in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))\n * //=> false\n *\n * @example\n * // Are 4 September, 2014 and 4 September, 2015 in the same day?\n * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))\n * //=> false\n */\nfunction isSameDay(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/isSameDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameMonth\n * @category Month Helpers\n * @summary Are the given dates in the same month (and year)?\n *\n * @description\n * Are the given dates in the same month (and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same month (and year)\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 2 September 2014 and 25 September 2014 in the same month?\n * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))\n * //=> true\n *\n * @example\n * // Are 2 September 2014 and 25 September 2015 in the same month?\n * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))\n * //=> false\n */\nfunction isSameMonth(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/isSameMonth/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the dates are in the same week (and month and year)\n * @throws {TypeError} 2 arguments required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dirtyDateLeft, dirtyDateRight, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft, options);\n  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight, options);\n  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/isSameWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameYear/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isSameYear)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isSameYear\n * @category Year Helpers\n * @summary Are the given dates in the same year?\n *\n * @description\n * Are the given dates in the same year?\n *\n * @param {Date|Number} dateLeft - the first date to check\n * @param {Date|Number} dateRight - the second date to check\n * @returns {Boolean} the dates are in the same year\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Are 2 September 2014 and 25 September 2014 in the same year?\n * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))\n * //=> true\n */\nfunction isSameYear(dirtyDateLeft, dirtyDateRight) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, arguments);\n  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateLeft);\n  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDateRight);\n  return dateLeft.getFullYear() === dateRight.getFullYear();\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/isSameYear/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisMonth/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisMonth/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisMonth)\n/* harmony export */ });\n/* harmony import */ var _isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameMonth/index.js */ \"./node_modules/date-fns/esm/isSameMonth/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isThisMonth\n * @category Month Helpers\n * @summary Is the given date in the same month as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same month as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is in this month\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 25 September 2014, is 15 September 2014 in this month?\n * const result = isThisMonth(new Date(2014, 8, 15))\n * //=> true\n */\nfunction isThisMonth(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameMonth_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Date.now(), dirtyDate);\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/isThisMonth/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisWeek)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ \"./node_modules/date-fns/esm/isSameWeek/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isThisWeek\n * @category Week Helpers\n * @summary Is the given date in the same week as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same week as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @param {Object} [options] - the object with options\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Boolean} the date is in this week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // If today is 25 September 2014, is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21))\n * //=> true\n *\n * @example\n * // If today is 25 September 2014 and week starts with Monday\n * // is 21 September 2014 in this week?\n * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })\n * //=> false\n */\n\nfunction isThisWeek(dirtyDate, options) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now(), options);\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/isThisWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisYear/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisYear/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isThisYear)\n/* harmony export */ });\n/* harmony import */ var _isSameYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameYear/index.js */ \"./node_modules/date-fns/esm/isSameYear/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isThisYear\n * @category Year Helpers\n * @summary Is the given date in the same year as the current date?\n * @pure false\n *\n * @description\n * Is the given date in the same year as the current date?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is in this year\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 25 September 2014, is 2 July 2014 in this year?\n * const result = isThisYear(new Date(2014, 6, 2))\n * //=> true\n */\nfunction isThisYear(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameYear_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/isThisYear/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isToday)\n/* harmony export */ });\n/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ \"./node_modules/date-fns/esm/isSameDay/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isToday\n * @category Day Helpers\n * @summary Is the given date today?\n * @pure false\n *\n * @description\n * Is the given date today?\n *\n * > ⚠️ Please note that this function is not present in the FP submodule as\n * > it uses `Date.now()` internally hence impure and can't be safely curried.\n *\n * @param {Date|Number} date - the date to check\n * @returns {Boolean} the date is today\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // If today is 6 October 2014, is 6 October 14:00:00 today?\n * const result = isToday(new Date(2014, 9, 6, 14, 0))\n * //=> true\n */\nfunction isToday(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate, Date.now());\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/isToday/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name startOfDay\n * @category Day Helpers\n * @summary Return the start of a day for the given date.\n *\n * @description\n * Return the start of a day for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @returns {Date} the start of a day\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // The start of a day for 2 September 2014 11:55:00:\n * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 00:00:00\n */\nfunction startOfDay(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyDate);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/startOfDay/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ \"./node_modules/date-fns/esm/_lib/defaultOptions/index.js\");\n\n\n\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}\n * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)\n * @returns {Date} the start of a week\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek(dirtyDate, options) {\n  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();\n  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);\n\n  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN\n  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {\n    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');\n  }\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dirtyDate);\n  var day = date.getDay();\n  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n  date.setDate(date.getDate() - diff);\n  date.setHours(0, 0, 0, 0);\n  return date;\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/startOfWeek/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(argument) === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments\");\n      // eslint-disable-next-line no-console\n      console.warn(new Error().stack);\n    }\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://dolist/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/assets/archive.svg":
/*!********************************!*\
  !*** ./src/assets/archive.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/archive.svg\");\n\n//# sourceURL=webpack://dolist/./src/assets/archive.svg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttons: () => (/* binding */ buttons),\n/* harmony export */   formDiv: () => (/* binding */ formDiv),\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   mainDivs: () => (/* binding */ mainDivs)\n/* harmony export */ });\nconst buttons = {\n    addTask: document.querySelector('#add-task'),\n    addProj: document.querySelector('#add-project'),\n    today: document.querySelector('#today'),\n    week: document.querySelector('#week'),\n    month: document.querySelector('#month'),\n    year: document.querySelector('#year'),\n    allTime: document.querySelector('#all-time'),\n}\n\nconst mainDivs = {\n    mainScreen: document.querySelector('#main-screen'),\n    taskDisplay: document.querySelector('#task-display'),\n    taskInputArea: document.querySelector('#taskinput-area'),\n    sidebar: document.querySelector('#sidebar')\n}\n\n\nconst images = {\n    checkMark: (() => {\n        const img = document.createElement('img');\n        img.src = 'src/assets/Check.svg'\n        return img;\n    })(),\n\n    xMark: (() => {\n        const img = document.createElement('img');\n        img.src = 'src/assets/XMark.svg';\n        return img;\n    })(),\n};\n\nconst formDiv = document.querySelector('#form-div');\n\n//# sourceURL=webpack://dolist/./src/dom.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm),\n/* harmony export */   selectedP: () => (/* binding */ selectedP)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _keeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keeper */ \"./src/keeper.js\");\n\n\n\n\nconst selectedP = _keeper__WEBPACK_IMPORTED_MODULE_2__.defaultProj;\nlet priority;\n\nconst createTaskForm = () => {\n  const formField = document.createElement('div');\n  formField.setAttribute('id', 'form-div');\n  \n  const formHeader = document.createElement('h3')\n  formHeader.textContent = 'Enter a new task'\n\n  const taskTitle = document.createElement('input');\n  taskTitle.setAttribute('type', 'text');\n  taskTitle.setAttribute('placeholder', 'Task Name');\n  taskTitle.setAttribute('class', 'input-element');\n\n  const taskDescr = document.createElement('input');\n  taskDescr.setAttribute('type', 'text');\n  taskDescr.setAttribute('placeholder', 'Task Description');\n  taskDescr.setAttribute('class', 'input-element');\n  taskDescr.setAttribute('required', '')\n\n  const taskDue = document.createElement('input');\n  taskDue.setAttribute('type', 'date');\n  taskDue.setAttribute('class', 'input-element');\n\n  const priorityP = document.createElement('p');\n  priorityP.textContent = 'Priority: ';\n\n  const taskPrio1 = document.createElement('input');\n  taskPrio1.setAttribute('type', 'checkbox');\n  taskPrio1.setAttribute('class', 'priority-checkbox');\n  taskPrio1.setAttribute('id', 'tp1');\n  taskPrio1.addEventListener('click', () => {\n    priorityHandler(taskPrio1, taskPrio2, taskPrio3);\n    \n    if (taskPrio1.checked === true) {\n      return priority = 'High Priority';\n    }\n  });\n\n  const taskPrio2 = document.createElement('input');\n  taskPrio2.setAttribute('type', 'checkbox');\n  taskPrio2.setAttribute('class', 'priority-checkbox');\n  taskPrio2.setAttribute('id', 'tp2');\n  taskPrio2.addEventListener('click', () => {\n    priorityHandler(taskPrio1, taskPrio2, taskPrio3);\n    if (taskPrio2.checked === true) {\n      return priority = 'Medium Priority';\n    }\n  });\n\n  const taskPrio3 = document.createElement('input');\n  taskPrio3.setAttribute('type', 'checkbox');\n  taskPrio3.setAttribute('class', 'priority-checkbox');\n  taskPrio3.setAttribute('id', 'tp3');\n  taskPrio3.addEventListener('click', () => {\n    priorityHandler(taskPrio1, taskPrio2, taskPrio3);\n    if (taskPrio3.checked === true) {\n      return priority = 'Low Priority';\n    }\n  });\n\n  const priorityDiv = document.createElement('div');\n  priorityDiv.setAttribute('id', 'priority-div');\n  priorityDiv.appendChild(taskPrio1);\n  priorityDiv.appendChild(taskPrio2);\n  priorityDiv.appendChild(taskPrio3);\n\n  const selectProjectP = document.createElement('p');\n  selectProjectP.textContent = 'Select Project: ';\n  const projectSelection = document.createElement('div');\n  _keeper__WEBPACK_IMPORTED_MODULE_2__.mainKeeper.loopTaskCreation(projectSelection);\n\n  const submitTask = document.createElement('button');\n  submitTask.setAttribute('id', 'form-submit')\n  submitTask.type = 'submit';\n  submitTask.textContent = 'Submit';\n\n  \n  submitTask.addEventListener('click', () => {\n    formField.classList.toggle('visible');\n    setTimeout(() => {\n      createTask(taskTitle.value, taskDescr.value, taskDue.value, priority, selectedP);\n      erase(_dom__WEBPACK_IMPORTED_MODULE_0__.mainDivs.taskInputArea, formField, taskTitle, taskDescr, taskDue, taskPrio1, taskPrio2, taskPrio3);\n      _dom__WEBPACK_IMPORTED_MODULE_0__.mainDivs.taskDisplay.innerHTML='';\n      _keeper__WEBPACK_IMPORTED_MODULE_2__.mainKeeper.loopThroughAll();\n    }, 100); \n\n  });\n\n  const cancelTask = document.createElement('button');\n  cancelTask.setAttribute('id', 'task-form-cancel')\n  cancelTask.textContent=\"Cancel\";\n\n  cancelTask.addEventListener('click', () => {\n    formField.classList.toggle('visible');\n    setTimeout(() => {\n      erase(_dom__WEBPACK_IMPORTED_MODULE_0__.mainDivs.taskInputArea, formField, taskTitle, taskDescr, taskDue, taskPrio1, taskPrio2, taskPrio3);\n    },500)\n  });\n  \n  const submitCancelDiv = document.createElement('div');\n  submitCancelDiv.id = 'submit-cancel-div'; \n  submitCancelDiv.appendChild(submitTask);\n  submitCancelDiv.appendChild(cancelTask);\n  \n  formField.appendChild(formHeader);\n  formField.appendChild(taskTitle);\n  formField.appendChild(taskDescr);\n  formField.appendChild(taskDue);\n  formField.appendChild(priorityP);\n  formField.appendChild(priorityDiv);\n  formField.appendChild(selectProjectP);\n  formField.appendChild(projectSelection);\n  formField.appendChild(submitCancelDiv);\n  \n  _dom__WEBPACK_IMPORTED_MODULE_0__.mainDivs.taskInputArea.appendChild(formField);\n  setTimeout(() => {\n    formField.classList.toggle('visible');\n  }, 0); \n\n};\n\nconst createTask = (title, description, due, priority, selected) => {\n  const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, due, priority, selected);\n  _keeper__WEBPACK_IMPORTED_MODULE_2__.mainKeeper.takeTask(newTask, selected);\n\n};\n\nconst erase = (parent, field, title, descr, due, prio1, prio2, prio3) => {\n  parent.removeChild(field);\n  title.value = '';\n  descr.value = '';\n  due.value = '';\n  prio1.checked = false;\n  prio2.checked = false;\n  prio3.checked = false;\n};\n\nconst createProject = () => {\n  const projDiv = document.querySelector('#project-div');\n  const pTitleInput = document.createElement('input');\n  const xButton = document.createElement('button');\n  const createProj = document.createElement('button');\n  pTitleInput.value = '';\n  createProj.textContent = 'Create';\n  xButton.textContent = 'X';\n  createProj.setAttribute('id', 'create-proj-btn');\n  xButton.setAttribute('id', 'proj-x-button');\n  \n  pTitleInput.setAttribute('id', 'pTitleInput');\n  pTitleInput.type = 'text';\n  pTitleInput.setAttribute('placeholder', 'Project Name');\n  projDiv.appendChild(pTitleInput);\n  projDiv.appendChild(xButton);\n  projDiv.appendChild(createProj);\n  projDiv.removeChild(_dom__WEBPACK_IMPORTED_MODULE_0__.buttons.addProj);\n\n  xButton.addEventListener('click', () => {\n    projDiv.removeChild(pTitleInput);\n    projDiv.removeChild(xButton);\n    projDiv.removeChild(createProj);\n    projDiv.appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.buttons.addProj);\n  });\n\n  createProj.addEventListener('click', () => {\n    if (pTitleInput.value === '') {\n      alert('Project name can\\'t be blank');\n      return;\n    }\n    const newProj = new _keeper__WEBPACK_IMPORTED_MODULE_2__.Project(pTitleInput.value);\n    _keeper__WEBPACK_IMPORTED_MODULE_2__.mainKeeper.takeProject(newProj);\n    _keeper__WEBPACK_IMPORTED_MODULE_2__.mainKeeper.loopThroughProjects();\n\n    projDiv.removeChild(pTitleInput);\n    projDiv.removeChild(createProj);\n    projDiv.removeChild(xButton);\n    projDiv.appendChild(_dom__WEBPACK_IMPORTED_MODULE_0__.buttons.addProj);\n    return newProj;\n  });\n};\n\nconst priorityHandler = (high, med, low) => {\n  high.checked = false;\n  med.checked = false;\n  low.checked = false;\n  event.target.checked = true;\n  return event.target.innerText;\n};\n\n\nconst sidebarButton = document.querySelector('#mobile-sidebar-reveal');\nsidebarButton.addEventListener('click', () => {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.mainDivs.sidebar.classList.toggle('invisible');\n    setTimeout(() => {\n      _dom__WEBPACK_IMPORTED_MODULE_0__.mainDivs.sidebar.classList.toggle('display-none')\n    }, 200)\n})\n\n//# sourceURL=webpack://dolist/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _keeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keeper */ \"./src/keeper.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n\n\n\n\n\n\n_keeper__WEBPACK_IMPORTED_MODULE_3__.mainKeeper.loopThroughProjects()\n_dom__WEBPACK_IMPORTED_MODULE_1__.buttons.addTask.addEventListener('click', () => {\n    ;(0,_functions__WEBPACK_IMPORTED_MODULE_2__.createTaskForm)();\n});\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_1__.buttons.addProj.addEventListener('click', _functions__WEBPACK_IMPORTED_MODULE_2__.createProject);\n_dom__WEBPACK_IMPORTED_MODULE_1__.buttons.allTime.addEventListener('click', _today__WEBPACK_IMPORTED_MODULE_4__.allTimeHandler);\n_dom__WEBPACK_IMPORTED_MODULE_1__.buttons.today.addEventListener ( 'click', _today__WEBPACK_IMPORTED_MODULE_4__.todayHandler);\n_dom__WEBPACK_IMPORTED_MODULE_1__.buttons.week.addEventListener ( 'click', _today__WEBPACK_IMPORTED_MODULE_4__.weekHandler);\n_dom__WEBPACK_IMPORTED_MODULE_1__.buttons.month.addEventListener ( 'click' , _today__WEBPACK_IMPORTED_MODULE_4__.monthHandler);\n_dom__WEBPACK_IMPORTED_MODULE_1__.buttons.year.addEventListener ( 'click' , _today__WEBPACK_IMPORTED_MODULE_4__.yearHandler);\n\n\n\n//# sourceURL=webpack://dolist/./src/index.js?");

/***/ }),

/***/ "./src/keeper.js":
/*!***********************!*\
  !*** ./src/keeper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   defaultProj: () => (/* binding */ defaultProj),\n/* harmony export */   mainKeeper: () => (/* binding */ mainKeeper)\n/* harmony export */ });\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\n\n\n\n\nclass Keeper{\n    constructor(){\n        this.taskArray = [];\n        this.projectsArray = [defaultProj] ;\n\n    }\n    takeTask(task, project){\n        this.taskArray.push(task) ;\n        project.pushToArray(task) ;\n    }\n    takeProject(project){\n        this.projectsArray.push (project) ;\n    }\n\n    loopThroughProjects() {\n\n\n        const pList = document.getElementById('project-list');\n        pList.innerHTML = '' ;\n\n        this.projectsArray.forEach((project, index) => {\n            const projectButton = document.createElement('button');  \n            projectButton.classList = 'project-btn';\n            projectButton.textContent = project.name;\n            const theProject = project;\n            pList.appendChild(projectButton) ;\n            projectButton.addEventListener('click', () => {\n                _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.innerHTML = '' ;\n                project.pTaskArray.forEach((task, index) => {\n                    (0,_today__WEBPACK_IMPORTED_MODULE_0__.taskDisplayer)(task, theProject, index) ;\n                })\n            })\n        })\n    }\n\n\n    loopThroughAll() {\n        const pList = document.getElementById('project-list');\n        pList.innerHTML = '';\n    \n        this.projectsArray.forEach((project, index) => {\n            const projectButton = document.createElement('button');  \n            projectButton.classList = 'project-btn';\n            projectButton.textContent = project.name;\n            const theProject = project;\n            pList.appendChild(projectButton);\n    \n            // Event listener to display tasks of the clicked project\n            projectButton.addEventListener('click', () => {\n                _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.innerHTML = '';\n                project.pTaskArray.forEach((task, index) => {\n                    (0,_today__WEBPACK_IMPORTED_MODULE_0__.taskDisplayer)(task, theProject, index);\n                });\n            });\n    \n            // Display tasks of the current project\n            project.pTaskArray.forEach((task, index) => {\n                (0,_today__WEBPACK_IMPORTED_MODULE_0__.taskDisplayer)(task, theProject, index);\n            });\n        });\n    }\n    \n\n    loopTaskCreation(div){\n\n        this.projectsArray.forEach((project, index) => {\n            const projectButton = document.createElement('button');\n            projectButton.classList.add('project-button')\n            const projectIndex = index;\n            projectButton.textContent = project.name ;\n            div.appendChild(projectButton) ;\n            \n            projectButton.addEventListener('click', () => {\n                _functions__WEBPACK_IMPORTED_MODULE_2__.selectedP = this.projectsArray[projectIndex];\n                return _functions__WEBPACK_IMPORTED_MODULE_2__.selectedP;\n            })\n        })\n\n    }\n}\n\n\nclass Project{\n    constructor(name){\n        this.name = name;\n        this.pTaskArray = [] ;\n    }\n    pushToArray(task){\n        this.pTaskArray.push(task) ;\n    }\n\n}\n\n\n\n\nconst defaultProj = new Project('No project') ;\nconst mainKeeper = new Keeper;\n\n\n\n\n\n//# sourceURL=webpack://dolist/./src/keeper.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(title, description, dueDate, priority, project){\n        this.title = title;\n        this.description = description ;\n        this.dueDate = dueDate ;\n        this.priority = priority ;\n        this.project = project ;\n    }\n\n    getProject(){\n        return this.project.value;\n    }\n    getDue(){\n        return this.dueDate;\n    }\n    \n}\n\n//# sourceURL=webpack://dolist/./src/task.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allTimeHandler: () => (/* binding */ allTimeHandler),\n/* harmony export */   monthHandler: () => (/* binding */ monthHandler),\n/* harmony export */   taskDisplayer: () => (/* binding */ taskDisplayer),\n/* harmony export */   todayHandler: () => (/* binding */ todayHandler),\n/* harmony export */   weekHandler: () => (/* binding */ weekHandler),\n/* harmony export */   yearHandler: () => (/* binding */ yearHandler)\n/* harmony export */ });\n/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isToday */ \"./node_modules/date-fns/esm/isToday/index.js\");\n/* harmony import */ var date_fns_isThisMonth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/isThisMonth */ \"./node_modules/date-fns/esm/isThisMonth/index.js\");\n/* harmony import */ var date_fns_isThisYear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/isThisYear */ \"./node_modules/date-fns/esm/isThisYear/index.js\");\n/* harmony import */ var _keeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keeper */ \"./src/keeper.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isThisWeek */ \"./node_modules/date-fns/esm/isThisWeek/index.js\");\n/* harmony import */ var _assets_archive_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/archive.svg */ \"./src/assets/archive.svg\");\n\n\n\n\n\n\n \n\n\nconst todayHandler = () => {\n  _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.innerHTML = '';\n  _keeper__WEBPACK_IMPORTED_MODULE_0__.mainKeeper.projectsArray.forEach((project, index) => {\n    const today = new Date();\n    project.pTaskArray.forEach((task, index) => {\n      const taskIndex = index;\n      const theDate = new Date(task.getDue());\n      if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(theDate)) {\n        taskDisplayer(task, project, taskIndex);\n      }\n    });\n  });\n};\n\nconst weekHandler = () => {\n  _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.innerHTML = '';\n  _keeper__WEBPACK_IMPORTED_MODULE_0__.mainKeeper.projectsArray.forEach((project, index) => {\n    project.pTaskArray.forEach((task, index) => {\n      const taskIndex = index;\n      const theDate = new Date(task.getDue());\n\n      if ((0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(theDate)) {\n        taskDisplayer(task, project, taskIndex);\n      }\n    });\n  });\n};\n\nconst monthHandler = () => {\n  _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.innerHTML = '';\n  _keeper__WEBPACK_IMPORTED_MODULE_0__.mainKeeper.projectsArray.forEach((project, index) => {\n    project.pTaskArray.forEach((task, index) => {\n      const taskIndex = index;\n      const theDate = new Date(task.getDue());\n      if ((0,date_fns_isThisMonth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theDate)) {\n        taskDisplayer(task, project, taskIndex);\n      }\n    });\n  });\n};\n\nconst yearHandler = () => {\n  _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.innerHTML = '';\n  _keeper__WEBPACK_IMPORTED_MODULE_0__.mainKeeper.projectsArray.forEach((project, index) => {\n    project.pTaskArray.forEach((task, index) => {\n      const taskIndex = index;\n      const theDate = new Date(task.getDue());\n\n      if ((0,date_fns_isThisYear__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(theDate)) {\n        taskDisplayer(task, project, taskIndex);\n      }\n    });\n  });\n};\n\nconst allTimeHandler = () => {\n  _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.innerHTML = '';\n  _keeper__WEBPACK_IMPORTED_MODULE_0__.mainKeeper.projectsArray.forEach((project, index) => {\n    project.pTaskArray.forEach((task, index) => {\n      const taskIndex = index;\n\n      taskDisplayer(task, project, taskIndex);\n    });\n  });\n};\n\nconst taskDisplayer = (task, project, index) => {\n  const doDiv = document.createElement('div');\n  doDiv.setAttribute('id', 'dolist-div');\n\n  const doTitle = document.createElement('h4');\n  doTitle.textContent = task.title;\n\n  const doDesc = document.createElement('p');\n  doDesc.textContent = task.description;\n\n  const doDue = document.createElement('p');\n  doDue.textContent = task.getDue();\n\n  const doPriority = document.createElement('p');\n  doPriority.textContent = task.priority;\n\n  const doProject = document.createElement('p');\n  doProject.textContent =  project.name;\n\n  const deleteTask = document.createElement('button');\n  deleteTask.textContent = 'Delete Task';\n  deleteTask.setAttribute('id', 'delete-task-button');\n\n  const completeTask = document.createElement('button');\n  completeTask.setAttribute('id', 'complete-task-button')\n  completeTask.textContent = \"Complete Task\"\n\n\n  \n  const buttDiv = document.createElement('div');\n  buttDiv.setAttribute('id', 'do-item-button-div')\n  buttDiv.appendChild(deleteTask);\n  buttDiv.appendChild(completeTask);\n  deleteTask.addEventListener('click', () => {\n    doDiv.innerHTML = '';\n    _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.removeChild(doDiv);\n    project.pTaskArray.splice(index, 1);\n  });\n  completeTask.addEventListener('click', () => {\n    doDiv.innerHTML = '';\n    _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.removeChild(doDiv);\n    project.pTaskArray.splice(index, 1);\n  });\n\n  doDiv.appendChild(doTitle);\n  doDiv.appendChild(doDesc);\n  doDiv.appendChild(doDue);\n  doDiv.appendChild(doPriority);\n  doDiv.appendChild(doProject);\n  doDiv.appendChild(buttDiv);\n  _dom__WEBPACK_IMPORTED_MODULE_1__.mainDivs.taskDisplay.appendChild(doDiv);\n};\n\n\n//# sourceURL=webpack://dolist/./src/today.js?");

/***/ }),

/***/ "./src/assets/fonts/Cookie/Cookie-Regular.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/Cookie/Cookie-Regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"063fc3ec8398f168926a.ttf\";\n\n//# sourceURL=webpack://dolist/./src/assets/fonts/Cookie/Cookie-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc2b5060f7accec5cf74.ttf\";\n\n//# sourceURL=webpack://dolist/./src/assets/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://dolist/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;