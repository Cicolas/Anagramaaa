var dom;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0px;\r\n    background-color: #111111;\r\n}\r\n\r\n#game {\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#title {\r\n    font-family: 'Red Hat Mono', monospace;\r\n    width: 100%;\r\n    border-bottom: solid;\r\n    border-color: #ffffff57;\r\n    border-width: .05em;\r\n    /* background-color: #00000057; */\r\n    text-align: center;\r\n    padding-top: .25em;\r\n    padding-bottom: .25em;\r\n    font-size: 2em;\r\n    /* font-weight: 600; */\r\n    color: #cccccc;\r\n    text-shadow: 0px 0px 5px #ffffff;\r\n    box-shadow: 0px 0px 10px #000000;\r\n    user-select: none;\r\n}\r\n\r\n#gameArea {\r\n    display: flex;\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 12vh;\r\n}\r\n\r\n#chars {\r\n    display: flex;\r\n    margin: 0px auto;\r\n    gap: 1.5vw;\r\n    background-color: rgba(255, 255, 255, 0.11);\r\n    padding: 1vw;\r\n    border-radius: 10px;\r\n}\r\n\r\n#textBox {\r\n    position: relative;\r\n    display: flex;\r\n    margin: 50px auto;\r\n    font-family: 'Red Hat Mono', monospace;\r\n    color: #afafaf;\r\n    font-size: 2rem;\r\n    border-bottom: solid #ffffff3f .05em;\r\n    width: fit-content;\r\n    min-width: 20vw;\r\n    text-align: center;\r\n    margin-bottom: 80px;\r\n    height: 2.5rem;\r\n}\r\n\r\n#textBox>#textWrite {\r\n    min-width: 20vw;\r\n}\r\n\r\n.icon {\r\n    padding-right: 0px;\r\n    padding-top: 12px;\r\n    color: #cccccc3c;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n#box>.container>.close {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 0px;\r\n    color: #afafaf;\r\n    text-shadow: none;\r\n}\r\n\r\n#box>.container>.close:hover {\r\n    color: #fff;\r\n}\r\n\r\n#textBox>.send:hover {\r\n    color: #cccccc;\r\n}\r\n\r\n#textBox>.delete:hover {\r\n    color: #d31212;\r\n}\r\n\r\n#foundWords {\r\n    /* background-color: #0c0c0c; */\r\n    color: #afafaf;\r\n    height: 20vh;\r\n    font-family: 'Red Hat Mono', monospace;\r\n    display: flex;\r\n    align-content: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    row-gap: 5px;\r\n    padding-top: 10px;\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n    column-gap: 50px;\r\n    margin: 20px 15%;\r\n    overflow-x: auto;\r\n}\r\n\r\n#foundWords>* {\r\n    margin: 0px auto;\r\n}\r\n\r\n#box {\r\n    display: flex;\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    backdrop-filter: blur(3px);\r\n    background-color: #00000031;\r\n}\r\n\r\n#box>.container {\r\n    padding: 1em 1.2em;\r\n    position: relative;\r\n    margin: auto;\r\n    width: 25em;\r\n    height: 35em;\r\n    border-radius: 5px;\r\n    background-color: #333;\r\n}\r\n\r\n#box>.container>.title {\r\n    font-size: 2rem;\r\n    text-align: left;\r\n}\r\n\r\n#box>.container>p {\r\n    color: #afafaf;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5rem;\r\n}\r\n\r\n#messageBox {\r\n    font-family: 'Red Hat Mono', monospace;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 10px;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    max-width: 15em;\r\n    padding: .5em 1em;\r\n    border-radius: 10px;\r\n    overflow-wrap: break-word;\r\n    transform: translate(-50%, 0px);\r\n}\r\n\r\n#share {\r\n    transition-duration: 100ms;\r\n    position: absolute;\r\n    bottom: 1.5em;\r\n    width: 30em;\r\n    height: 5em;\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n    line-height: 5em;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-weight: 600;\r\n    color: #111;\r\n    background-color: #ccc;\r\n    border-radius: 10px;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    box-shadow: 3px 3px 10px rgb(14, 14, 14);\r\n}\r\n\r\n#share:hover {\r\n    transition-duration: 100ms;\r\n    background-color: #888;\r\n}\r\n\r\n#desistir {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 3rem;\r\n    font-size: 1rem;\r\n    font-family: 'Red Hat Mono', monospace;\r\n    color: #333;\r\n    cursor: pointer;\r\n    transform: translate(-50%, 0px);\r\n}\r\n\r\n#box>#completeText>.todayWord {\r\n    text-align: center;\r\n    margin: 10px 0px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n#box>#completeText>.words {\r\n    height: 15em;\r\n    overflow-y: auto;\r\n    color: #777;\r\n    font-size: 1.1rem;\r\n    line-height: 1.5rem;\r\n}\r\n\r\n#status {\r\n    display: flex;\r\n    /* width: 100%; */\r\n    margin: 25px 0px;\r\n    padding: 25px 0px;\r\n    background-color: #232323;\r\n    border-radius: 10px;\r\n    box-shadow: 3px 3px 10px rgb(14, 14, 14);\r\n}\r\n\r\n#status>div {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 3em;\r\n    height: 2em;\r\n    margin: auto;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n}\r\n\r\n#status>div>.number {\r\n    color: #cccccc;\r\n    text-align: center;\r\n    font-size: 1.25em;\r\n}\r\n\r\n#status>div>.label {\r\n    bottom: 0px;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #777;\r\n    font-size: .75rem;\r\n}\r\n\r\n#desistir:hover {\r\n    color: #126cd3;\r\n}\r\n\r\n.help {\r\n    position: absolute;\r\n    left: 24px;\r\n    color: #333;\r\n    text-shadow: none;\r\n}\r\n\r\n.help:hover {\r\n    color: #7e7e7e;\r\n}\r\n\r\n.charts:hover {\r\n    color: #7e7e7e;\r\n}\r\n\r\n.charts {\r\n    position: absolute;\r\n    left: 72px;\r\n    color: #333;\r\n    text-shadow: none;\r\n}\r\n\r\n.pTitle {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: #bbbbbb;\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.share.icon {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 20px;\r\n    color: black;\r\n}\r\n\r\n.title {\r\n    font-family: 'Red Hat Mono', monospace;\r\n    text-align: center;\r\n    color: #cccccc;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.counter {\r\n    color: #6e6e6e;\r\n}\r\n\r\n.char {\r\n    transition-duration: 200ms;\r\n    width: 4vw;\r\n    height: 6vw;\r\n    line-height: 6vw;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n    color: #111;\r\n    text-align: center;\r\n    background-color: #bbbbbb;\r\n    /* border: dashed #111111; */\r\n    border: none;\r\n    border-radius: 10px;\r\n    box-shadow: 3px 3px 10px rgb(14, 14, 14);\r\n    cursor: pointer;\r\n}\r\n\r\n.char:hover {\r\n    transition-duration: 200ms;\r\n    background-color: #888;\r\n    /* background-color: #eba611; */\r\n    /* background-color: #15ac10; */\r\n    /* background-color: #d31212; */\r\n}\r\n\r\n.highlight {\r\n    color: #cccccc;\r\n}\r\n\r\ninput {\r\n    color: inherit;\r\n    font: inherit;\r\n    text-align: inherit;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n    height: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: #111;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #555;\r\n    border-radius: 2px;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n#box.hidden {\r\n    display: none;\r\n}\r\n\r\n#creditos {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    right: 10px;\r\n    text-align: right;\r\n    font-size: 1rem;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: #888;\r\n}\r\n\r\n#creditos>a {\r\n    color: #eba611;\r\n    text-decoration: none;\r\n    font-family: inherit;\r\n}", "",{"version":3,"sources":["webpack://./frontend/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    margin: 0px;\r\n    background-color: #111111;\r\n}\r\n\r\n#game {\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#title {\r\n    font-family: 'Red Hat Mono', monospace;\r\n    width: 100%;\r\n    border-bottom: solid;\r\n    border-color: #ffffff57;\r\n    border-width: .05em;\r\n    /* background-color: #00000057; */\r\n    text-align: center;\r\n    padding-top: .25em;\r\n    padding-bottom: .25em;\r\n    font-size: 2em;\r\n    /* font-weight: 600; */\r\n    color: #cccccc;\r\n    text-shadow: 0px 0px 5px #ffffff;\r\n    box-shadow: 0px 0px 10px #000000;\r\n    user-select: none;\r\n}\r\n\r\n#gameArea {\r\n    display: flex;\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 12vh;\r\n}\r\n\r\n#chars {\r\n    display: flex;\r\n    margin: 0px auto;\r\n    gap: 1.5vw;\r\n    background-color: rgba(255, 255, 255, 0.11);\r\n    padding: 1vw;\r\n    border-radius: 10px;\r\n}\r\n\r\n#textBox {\r\n    position: relative;\r\n    display: flex;\r\n    margin: 50px auto;\r\n    font-family: 'Red Hat Mono', monospace;\r\n    color: #afafaf;\r\n    font-size: 2rem;\r\n    border-bottom: solid #ffffff3f .05em;\r\n    width: fit-content;\r\n    min-width: 20vw;\r\n    text-align: center;\r\n    margin-bottom: 80px;\r\n    height: 2.5rem;\r\n}\r\n\r\n#textBox>#textWrite {\r\n    min-width: 20vw;\r\n}\r\n\r\n.icon {\r\n    padding-right: 0px;\r\n    padding-top: 12px;\r\n    color: #cccccc3c;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n#box>.container>.close {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 0px;\r\n    color: #afafaf;\r\n    text-shadow: none;\r\n}\r\n\r\n#box>.container>.close:hover {\r\n    color: #fff;\r\n}\r\n\r\n#textBox>.send:hover {\r\n    color: #cccccc;\r\n}\r\n\r\n#textBox>.delete:hover {\r\n    color: #d31212;\r\n}\r\n\r\n#foundWords {\r\n    /* background-color: #0c0c0c; */\r\n    color: #afafaf;\r\n    height: 20vh;\r\n    font-family: 'Red Hat Mono', monospace;\r\n    display: flex;\r\n    align-content: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    row-gap: 5px;\r\n    padding-top: 10px;\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n    column-gap: 50px;\r\n    margin: 20px 15%;\r\n    overflow-x: auto;\r\n}\r\n\r\n#foundWords>* {\r\n    margin: 0px auto;\r\n}\r\n\r\n#box {\r\n    display: flex;\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    backdrop-filter: blur(3px);\r\n    background-color: #00000031;\r\n}\r\n\r\n#box>.container {\r\n    padding: 1em 1.2em;\r\n    position: relative;\r\n    margin: auto;\r\n    width: 25em;\r\n    height: 35em;\r\n    border-radius: 5px;\r\n    background-color: #333;\r\n}\r\n\r\n#box>.container>.title {\r\n    font-size: 2rem;\r\n    text-align: left;\r\n}\r\n\r\n#box>.container>p {\r\n    color: #afafaf;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5rem;\r\n}\r\n\r\n#messageBox {\r\n    font-family: 'Red Hat Mono', monospace;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 10px;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    max-width: 15em;\r\n    padding: .5em 1em;\r\n    border-radius: 10px;\r\n    overflow-wrap: break-word;\r\n    transform: translate(-50%, 0px);\r\n}\r\n\r\n#share {\r\n    transition-duration: 100ms;\r\n    position: absolute;\r\n    bottom: 1.5em;\r\n    width: 30em;\r\n    height: 5em;\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n    line-height: 5em;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-weight: 600;\r\n    color: #111;\r\n    background-color: #ccc;\r\n    border-radius: 10px;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    box-shadow: 3px 3px 10px rgb(14, 14, 14);\r\n}\r\n\r\n#share:hover {\r\n    transition-duration: 100ms;\r\n    background-color: #888;\r\n}\r\n\r\n#desistir {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 3rem;\r\n    font-size: 1rem;\r\n    font-family: 'Red Hat Mono', monospace;\r\n    color: #333;\r\n    cursor: pointer;\r\n    transform: translate(-50%, 0px);\r\n}\r\n\r\n#box>#completeText>.todayWord {\r\n    text-align: center;\r\n    margin: 10px 0px;\r\n    font-size: 1.5em;\r\n}\r\n\r\n#box>#completeText>.words {\r\n    height: 15em;\r\n    overflow-y: auto;\r\n    color: #777;\r\n    font-size: 1.1rem;\r\n    line-height: 1.5rem;\r\n}\r\n\r\n#status {\r\n    display: flex;\r\n    /* width: 100%; */\r\n    margin: 25px 0px;\r\n    padding: 25px 0px;\r\n    background-color: #232323;\r\n    border-radius: 10px;\r\n    box-shadow: 3px 3px 10px rgb(14, 14, 14);\r\n}\r\n\r\n#status>div {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 3em;\r\n    height: 2em;\r\n    margin: auto;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n}\r\n\r\n#status>div>.number {\r\n    color: #cccccc;\r\n    text-align: center;\r\n    font-size: 1.25em;\r\n}\r\n\r\n#status>div>.label {\r\n    bottom: 0px;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #777;\r\n    font-size: .75rem;\r\n}\r\n\r\n#desistir:hover {\r\n    color: #126cd3;\r\n}\r\n\r\n.help {\r\n    position: absolute;\r\n    left: 24px;\r\n    color: #333;\r\n    text-shadow: none;\r\n}\r\n\r\n.help:hover {\r\n    color: #7e7e7e;\r\n}\r\n\r\n.charts:hover {\r\n    color: #7e7e7e;\r\n}\r\n\r\n.charts {\r\n    position: absolute;\r\n    left: 72px;\r\n    color: #333;\r\n    text-shadow: none;\r\n}\r\n\r\n.pTitle {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: #bbbbbb;\r\n    font-weight: 600;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.share.icon {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 20px;\r\n    color: black;\r\n}\r\n\r\n.title {\r\n    font-family: 'Red Hat Mono', monospace;\r\n    text-align: center;\r\n    color: #cccccc;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.counter {\r\n    color: #6e6e6e;\r\n}\r\n\r\n.char {\r\n    transition-duration: 200ms;\r\n    width: 4vw;\r\n    height: 6vw;\r\n    line-height: 6vw;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-size: 2rem;\r\n    color: #111;\r\n    text-align: center;\r\n    background-color: #bbbbbb;\r\n    /* border: dashed #111111; */\r\n    border: none;\r\n    border-radius: 10px;\r\n    box-shadow: 3px 3px 10px rgb(14, 14, 14);\r\n    cursor: pointer;\r\n}\r\n\r\n.char:hover {\r\n    transition-duration: 200ms;\r\n    background-color: #888;\r\n    /* background-color: #eba611; */\r\n    /* background-color: #15ac10; */\r\n    /* background-color: #d31212; */\r\n}\r\n\r\n.highlight {\r\n    color: #cccccc;\r\n}\r\n\r\ninput {\r\n    color: inherit;\r\n    font: inherit;\r\n    text-align: inherit;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n    height: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: #111;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #555;\r\n    border-radius: 2px;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n#box.hidden {\r\n    display: none;\r\n}\r\n\r\n#creditos {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    right: 10px;\r\n    text-align: right;\r\n    font-size: 1rem;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    color: #888;\r\n}\r\n\r\n#creditos>a {\r\n    color: #eba611;\r\n    text-decoration: none;\r\n    font-family: inherit;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./frontend/style.css":
/*!****************************!*\
  !*** ./frontend/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./frontend/src/game.ts":
/*!******************************!*\
  !*** ./frontend/src/game.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_data": () => (/* binding */ _data),
/* harmony export */   "disableAll": () => (/* binding */ disableAll),
/* harmony export */   "finished": () => (/* binding */ finished)
/* harmony export */ });
/* harmony import */ var _shared_enviroment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/enviroment.js */ "./shared/enviroment.js");
/* harmony import */ var _shared_enviroment_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_enviroment_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./frontend/src/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var chars = document.getElementById("chars");
var textWrite = document.getElementById("textWrite");
var foundWords = document.getElementById("foundWords");
var deleteButton = document.getElementsByClassName("delete")[0];
var sendButton = document.getElementsByClassName("send")[0];
var counter = document.getElementsByClassName("counter")[0];
var finished = false;
var wordChars = [];
var writingWord = "";
var selectedDivs = [];
var possibleChars = [];
var _data = {
    day: "",
    word: "",
    found: [],
    correct: 0,
    all: 0
};
function loadWord() {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (localStorage.getItem("data")) {
                        _data.day = JSON.parse(localStorage.getItem("data")).day;
                    }
                    return [4 /*yield*/, fetch("".concat((_shared_enviroment_js__WEBPACK_IMPORTED_MODULE_0___default().url), "/api/daily_word/"))
                            .then(function (value) {
                            return value.json();
                        })
                            .catch(function () {
                            console.log("error");
                            (0,_index__WEBPACK_IMPORTED_MODULE_1__.showMessageBox)("erro ao se comunicar com o servidor. (err: 1000)", -1, "error");
                        })];
                case 1:
                    res = _a.sent();
                    _data.word = res.word;
                    _data.all = res.quantity;
                    finished = res.day.toString() == _data.day;
                    _data.day = res.day;
                    return [2 /*return*/];
            }
        });
    });
}
function setChars() {
    var _this = this;
    var chs = _data.word.split("");
    chs.forEach(function (element) {
        var div = document.createElement("button");
        div.classList.add("char");
        div.innerText = element;
        div.addEventListener("click", charClick.bind(_this, element, div));
        wordChars.push([element, div]);
        possibleChars.push([element, div]);
        chars.appendChild(div);
    });
    if (finished) {
        disableAll();
        loadFoundWords();
    }
}
function updateChar(c, div) {
    if (!selectedDivs.includes(div)) {
        div.style.backgroundColor = "#555";
        selectedDivs.push(div);
    }
}
function charClick(c, div) {
    if (!selectedDivs.includes(div)) {
        writingWord += c;
        div.style.backgroundColor = "#555";
        selectedDivs.push(div);
        possibleChars.splice(possibleChars.findIndex(function (value) { return value[0] === c; }), 1);
    }
    updateWriting();
}
function addChar(c) {
    if (possibleChars.find(function (value) {
        return value[0].normalize("NFD").replace(/[^a-zA-Zs]/g, "") === c;
    })) {
        var index = possibleChars.findIndex(function (value) {
            return value[0].normalize("NFD").replace(/[^a-zA-Zs]/g, "") === c;
        });
        writingWord += c;
        updateChar(c, possibleChars[index][1]);
        possibleChars.splice(index, 1);
        updateWriting();
    }
}
function updateWriting() {
    textWrite.innerHTML = writingWord;
}
function clearSelectedDivs() {
    selectedDivs.forEach(function (element) {
        element.style.backgroundColor = "";
    });
    selectedDivs.length = 0;
}
function addCorrectWord(word) {
    for (var i = 0; i < word.length; i++) {
        var v = word[i];
        if (!_data.found.includes(v)) {
            _data.found.push(v);
            var div = document.createElement("div");
            div.classList.add("word");
            div.innerHTML = v + "\n";
            foundWords.appendChild(div);
            counter.innerHTML = "".concat(_data.found.length, "/").concat(_data.all);
            _data.correct = _data.found.length;
            correctWordsAlign();
        }
    }
    if (_data.all === _data.found.length) {
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.showMessageBox)("Parabéns você completou o desafio de hoje!!!", 3000, "correct");
        disableAll();
        (0,_index__WEBPACK_IMPORTED_MODULE_1__.complete)(_data);
    }
}
function disableAll() {
    finished = true;
    wordChars.forEach(function (value) {
        value[1].disabled = true;
        value[1].style.backgroundColor = "#333";
        value[1].style.cursor = "default";
    });
}
function loadFoundWords() {
    var a = JSON.parse(localStorage.getItem("data")).found;
    for (var i = 0; i < a.length; i++) {
        addCorrectWord(a);
    }
    correctWordsAlign();
}
function correctWordsAlign() {
    if (foundWords.clientWidth < foundWords.scrollWidth) {
        foundWords.style.alignContent = "flex-start";
    }
    else {
        foundWords.style.alignContent = "center";
    }
}
function reset() {
    for (var i = 0; i < wordChars.length; i++) {
        possibleChars[i] = wordChars[i];
    }
    writingWord = "";
    clearSelectedDivs();
    updateWriting();
}
function sendWord() {
    return __awaiter(this, void 0, void 0, function () {
        var res, value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (writingWord === "")
                        return [2 /*return*/];
                    return [4 /*yield*/, fetch("".concat((_shared_enviroment_js__WEBPACK_IMPORTED_MODULE_0___default().url), "/api/check_word/").concat(writingWord))
                            .then(function (value) {
                            return value.json();
                        })
                            .catch(function () {
                            return (0,_index__WEBPACK_IMPORTED_MODULE_1__.showMessageBox)("erro ao se comunicar com o servidor.(err: 1001)", 5000, "error");
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res];
                case 2:
                    value = _a.sent();
                    if (value.exist)
                        addCorrectWord(value.word);
                    return [2 /*return*/];
            }
        });
    });
}
deleteButton.addEventListener("click", function () {
    reset();
});
sendButton.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        sendWord();
        reset();
        return [2 /*return*/];
    });
}); });
document.addEventListener("keydown", function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (!finished) {
            addChar(e.key.toLowerCase());
            if (e.key === "Enter") {
                sendWord();
                reset();
                e.preventDefault();
            }
        }
        if (e.key === "Backspace") {
            reset();
            e.preventDefault();
        }
        return [2 /*return*/];
    });
}); });
loadWord().then(setChars);


/***/ }),

/***/ "./frontend/src/index.ts":
/*!*******************************!*\
  !*** ./frontend/src/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "complete": () => (/* binding */ complete),
/* harmony export */   "showMessageBox": () => (/* binding */ showMessageBox)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./frontend/src/game.ts");
/* harmony import */ var _shared_enviroment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/enviroment */ "./shared/enviroment.js");
/* harmony import */ var _shared_enviroment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shared_enviroment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _saveManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveManager */ "./frontend/src/saveManager.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var box = document.getElementById("box");
var helpText = document.getElementById("helpText");
var completeText = document.getElementById("completeText");
var shareButton = document.getElementById("share");
var completeButton = document.getElementById("desistir");
var quit = document.getElementsByClassName("close");
var help = document.getElementsByClassName("help")[0];
var charts = document.getElementsByClassName("charts")[0];
var allWords = document.getElementsByClassName("allWords")[0];
var todayWord = document.getElementsByClassName("todayWord")[0];
var status = document.getElementById("status");
var data = _game__WEBPACK_IMPORTED_MODULE_0__._data;
var showingHelp = false;
var showingComplete = false;
function changeBoxState(visible) {
    if (visible) {
        box.classList.remove("hidden");
        return;
    }
    box.classList.add("hidden");
}
function changeHelpState() {
    showingHelp = !showingHelp;
    if (!showingHelp) {
        changeBoxState(false);
        helpText.classList.add("hidden");
        return;
    }
    changeBoxState(true);
    helpText.classList.remove("hidden");
}
function changeCompleteState() {
    showingComplete = !showingComplete;
    if (!showingComplete) {
        changeBoxState(false);
        completeText.classList.add("hidden");
        return;
    }
    changeBoxState(true);
    completeText.classList.remove("hidden");
    if (_game__WEBPACK_IMPORTED_MODULE_0__.finished) {
        updateCompleteState();
    }
    else {
        allWords.innerHTML = "Conclua o desafio de hoje para visualizar as respostas";
    }
    updateStats();
}
function updateStats() {
    todayWord.innerHTML = data.word[0].toUpperCase() + data.word.substring(1);
    var s;
    if (localStorage.getItem("stats")) {
        s = JSON.parse(localStorage.getItem("stats"));
        var n = status.getElementsByClassName("number");
        n[0].innerHTML = s.games.toString();
        n[1].innerHTML = getAverage(s.percent);
        n[2].innerHTML = s.wordsTyped.toString();
    }
}
function getAverage(n1) {
    return (n1 * 100).toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }) + "%";
}
function updateCompleteState() {
    return __awaiter(this, void 0, void 0, function () {
        var res, str, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat((_shared_enviroment__WEBPACK_IMPORTED_MODULE_1___default().url), "/api/get_all_words/"))
                        .then(function (value) {
                        return value.json();
                    })
                        .catch(function () {
                        console.log("error");
                        showMessageBox("erro ao se comunicar com o servidor. (err: 1003)", 3000, "error");
                    })];
                case 1:
                    res = _a.sent();
                    str = "";
                    for (i = 0; i < res.words.length; i++) {
                        if (data.found.includes(res.words[i])) {
                            str += "<span class=\"highlight\"><b>".concat(res.words[i], "</b></span>; ");
                        }
                        else {
                            str += res.words[i] + "; ";
                        }
                    }
                    allWords.innerHTML = str;
                    return [2 /*return*/];
            }
        });
    });
}
function copyToClipboard() {
    var c = "@Anagramna #".concat(data.day, "\nA palavra era: ").concat(data.word, "\n\nencontrado:\n").concat(getFirstFound().join("; ") + (data.found.length > 5 ? "..." : ""), "\n\n").concat(emojiList(), "\n").concat(data.correct, "/").concat(data.all, "\n\njoguem em: anagramna.co");
    navigator.clipboard.writeText(c);
    showMessageBox("copiado para sua área de transferência (CTRL+V)", 2000, "normal");
}
function emojiList() {
    var percent = Math.floor((data.correct / data.all) * 10);
    var str = "";
    for (var i = 0; i < 10; i++) {
        str += percent > i ? "🟢" : "🔴";
    }
    return str;
}
function getFirstFound() {
    var len = Math.min(data.found.length, 5);
    return data.found.slice(0, len);
}
function complete(correct) {
    if (localStorage.getItem("data")) {
        if (data.day == JSON.parse(localStorage.getItem("data")).day) {
            showMessageBox("Você já jogou hoje, volte amanhã para jogar mais!!!", 3000, "normal");
            changeCompleteState();
            return;
        }
    }
    console.log(data);
    data = correct;
    (0,_game__WEBPACK_IMPORTED_MODULE_0__.disableAll)();
    (0,_saveManager__WEBPACK_IMPORTED_MODULE_2__.finish)(data);
    changeCompleteState();
}
function showMessageBox(msg, time, type, callback) {
    var div = document.createElement("div");
    div.innerHTML = msg;
    div.id = "messageBox";
    if (type === "normal") {
        div.style.backgroundColor = "#888";
    }
    if (type === "correct") {
        div.style.backgroundColor = "#15ac10";
        // div.style.color = "#000";
    }
    else if (type === "error") {
        div.style.backgroundColor = "#d31212";
    }
    else if (type === "warn") {
        div.style.backgroundColor = "#eba611";
    }
    document.body.appendChild(div);
    div.animate([
        { opacity: "0%" },
        { opacity: "100%" }
    ], {
        duration: 300
    });
    if (time > 0) {
        setTimeout(function () {
            div.animate([
                { opacity: "100%" },
                { opacity: "0%" }
            ], {
                duration: 300
            });
        }, time - 295);
        setTimeout(function () {
            if (callback)
                callback();
            div.remove();
        }, time);
    }
}
completeButton.addEventListener("click", complete.bind(undefined, _game__WEBPACK_IMPORTED_MODULE_0__._data));
help.addEventListener("click", changeHelpState);
charts.addEventListener("click", changeCompleteState);
shareButton.addEventListener("click", copyToClipboard);
for (var i = 0; i < quit.length; i++) {
    var element = quit[i];
    element.addEventListener("click", function () {
        if (showingHelp) {
            changeHelpState();
        }
        if (showingComplete) {
            changeCompleteState();
        }
    });
}


/***/ }),

/***/ "./frontend/src/saveManager.ts":
/*!*************************************!*\
  !*** ./frontend/src/saveManager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "finish": () => (/* binding */ finish)
/* harmony export */ });
var stats = {
    games: 0,
    wordsTyped: 0,
    allGuesses: 0,
    percent: 0,
};
function finish(data) {
    var s;
    if (localStorage.getItem("stats")) {
        s = JSON.parse(localStorage.getItem("stats"));
        stats.games = s.games;
        stats.wordsTyped = s.wordsTyped;
        stats.percent = s.percent;
        stats.allGuesses = s.allGuesses;
    }
    stats.games++;
    stats.wordsTyped += data.correct;
    stats.allGuesses += data.all;
    stats.percent = average(stats.games, stats.percent, data.correct / data.all);
    localStorage.setItem("stats", JSON.stringify(stats));
    localStorage.setItem("data", JSON.stringify(data));
}
function average(gameNum, oldPercent, percent) {
    console.log(gameNum, oldPercent, percent);
    return ((oldPercent * (gameNum - 1)) + (percent)) / gameNum;
}


/***/ }),

/***/ "./shared/enviroment.js":
/*!******************************!*\
  !*** ./shared/enviroment.js ***!
  \******************************/
/***/ ((module) => {

module.exports = {
    port: 8081,
    url: "http://localhost:8081"
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontend_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend/style.css */ "./frontend/style.css");
/* harmony import */ var _frontend_src_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend/src/index.ts */ "./frontend/src/index.ts");
/* harmony import */ var _frontend_src_game_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend/src/game.ts */ "./frontend/src/game.ts");
/* harmony import */ var _frontend_src_saveManager_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend/src/saveManager.ts */ "./frontend/src/saveManager.ts");




})();

dom = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bundle.js.map