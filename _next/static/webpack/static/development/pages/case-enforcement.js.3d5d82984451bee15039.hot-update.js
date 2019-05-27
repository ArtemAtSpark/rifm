webpackHotUpdate("static/development/pages/case-enforcement.js",{

/***/ "./pages/case-enforcement/index.js":
/*!*****************************************!*\
  !*** ./pages/case-enforcement/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rifm */ "./src/index.js");

var _jsxFileName = "/Users/bogdancadkin/host/rifm/pages/case-enforcement/index.js";

/* @flow */




var Example = function Example()
/*:React.Node*/
{
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      lowercase = _React$useState2[0],
      setLowercase = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      uppercase = _React$useState4[0],
      setUppercase = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      capitalized = _React$useState6[0],
      setCapitalized = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](''),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      latinLetters = _React$useState8[0],
      setLatinLetters = _React$useState8[1];

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Lower case"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rifm__WEBPACK_IMPORTED_MODULE_3__["Rifm"], {
    accept: /./g,
    format: function format(v) {
      return v.toLowerCase();
    },
    value: lowercase,
    onChange: setLowercase,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, renderInput)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Upper case"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rifm__WEBPACK_IMPORTED_MODULE_3__["Rifm"], {
    accept: /./g,
    format: function format(v) {
      return v.toUpperCase();
    },
    value: uppercase,
    onChange: setUppercase,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, renderInput)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Capital first letter"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rifm__WEBPACK_IMPORTED_MODULE_3__["Rifm"], {
    accept: /./g,
    format: function format(v) {
      return v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase();
    },
    value: capitalized,
    onChange: setCapitalized,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, renderInput)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Allow latin letters only"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rifm__WEBPACK_IMPORTED_MODULE_3__["Rifm"], {
    accept: /[a-zA-Z]/g,
    format: function format(v) {
      return (v.match(/[a-zA-Z]/g) || []).join('');
    },
    value: latinLetters,
    onChange: setLatinLetters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, renderInput)));
};

var renderInput = function renderInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
    style: {
      width: '100%',
      height: 32,
      fontSize: 'inherit',
      boxSizing: 'border-box'
    },
    value: value,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  });
};

var Grid = function Grid(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      display: 'grid',
      padding: 16,
      gap: 24,
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, children);
};

if (typeof document !== 'undefined') {
  var root = document.getElementById('root');

  if (root) {
    react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Example, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }), root);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Example);

/***/ })

})
//# sourceMappingURL=case-enforcement.js.3d5d82984451bee15039.hot-update.js.map