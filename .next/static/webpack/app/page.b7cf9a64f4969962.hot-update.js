"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/MagicButton.tsx":
/*!************************************!*\
  !*** ./components/MagicButton.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n *  UI: border magic from tailwind css btns\n *  Link: https://ui.aceternity.com/components/tailwindcss-buttons\n *\n *  change border radius to rounded-lg\n *  add margin of md:mt-10\n *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50\n */ const MagicButton = (param)=>{\n    let { title, icon, position, handleClick, otherClasses } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"relative inline-flex h-12 w-full md:w-50 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none\",\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]\"\n            }, void 0, false, {\n                fileName: \"/home/gogo/Desktop/Portfolio-site/components/MagicButton.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg\\n             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 \".concat(otherClasses),\n                children: [\n                    position === \"left\" && icon,\n                    title,\n                    position === \"right\" && icon\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gogo/Desktop/Portfolio-site/components/MagicButton.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/gogo/Desktop/Portfolio-site/components/MagicButton.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MagicButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MagicButton);\nvar _c;\n$RefreshReg$(_c, \"MagicButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTWFnaWNCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRTFCOzs7Ozs7O0NBT0MsR0FDRCxNQUFNQyxjQUFjO1FBQUMsRUFDbkJDLEtBQUssRUFDTEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsWUFBWSxFQU9iO0lBQ0MscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsU0FBU0o7OzBCQUVULDhEQUFDSztnQkFBS0YsV0FBVTs7Ozs7OzBCQUdoQiw4REFBQ0U7Z0JBQ0NGLFdBQVcsMEtBQ2tGLE9BQWJGOztvQkFFL0VGLGFBQWEsVUFBVUQ7b0JBQ3ZCRDtvQkFDQUUsYUFBYSxXQUFXRDs7Ozs7Ozs7Ozs7OztBQUlqQztLQS9CTUY7QUFpQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWdpY0J1dHRvbi50c3g/MDhmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogIFVJOiBib3JkZXIgbWFnaWMgZnJvbSB0YWlsd2luZCBjc3MgYnRuc1xuICogIExpbms6IGh0dHBzOi8vdWkuYWNldGVybml0eS5jb20vY29tcG9uZW50cy90YWlsd2luZGNzcy1idXR0b25zXG4gKlxuICogIGNoYW5nZSBib3JkZXIgcmFkaXVzIHRvIHJvdW5kZWQtbGdcbiAqICBhZGQgbWFyZ2luIG9mIG1kOm10LTEwXG4gKiAgcmVtb3ZlIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXNsYXRlLTQwMCBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LXNsYXRlLTUwXG4gKi9cbmNvbnN0IE1hZ2ljQnV0dG9uID0gKHtcbiAgdGl0bGUsXG4gIGljb24sXG4gIHBvc2l0aW9uLFxuICBoYW5kbGVDbGljayxcbiAgb3RoZXJDbGFzc2VzLFxufToge1xuICB0aXRsZTogc3RyaW5nO1xuICBpY29uOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHBvc2l0aW9uOiBzdHJpbmc7XG4gIGhhbmRsZUNsaWNrPzogKCkgPT4gdm9pZDtcbiAgb3RoZXJDbGFzc2VzPzogc3RyaW5nO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IGgtMTIgdy1mdWxsIG1kOnctNTAgbWQ6bXQtMTAgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgcC1bMXB4XSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtWy0xMDAwJV0gYW5pbWF0ZS1bc3Bpbl8yc19saW5lYXJfaW5maW5pdGVdIGJnLVtjb25pYy1ncmFkaWVudChmcm9tXzkwZGVnX2F0XzUwJV81MCUsI0UyQ0JGRl8wJSwjMzkzQkIyXzUwJSwjRTJDQkZGXzEwMCUpXVwiIC8+XG5cbiAgICAgIHsvKiByZW1vdmUgcHgtMyBweS0xLCBhZGQgcHgtNSBnYXAtMiAqL31cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1mbGV4IGgtZnVsbCB3LWZ1bGwgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGdcbiAgICAgICAgICAgICBiZy1zbGF0ZS05NTAgcHgtNyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmFja2Ryb3AtYmx1ci0zeGwgZ2FwLTIgJHtvdGhlckNsYXNzZXN9YH1cbiAgICAgID5cbiAgICAgICAge3Bvc2l0aW9uID09PSBcImxlZnRcIiAmJiBpY29ufVxuICAgICAgICB7dGl0bGV9XG4gICAgICAgIHtwb3NpdGlvbiA9PT0gXCJyaWdodFwiICYmIGljb259XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWdpY0J1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1hZ2ljQnV0dG9uIiwidGl0bGUiLCJpY29uIiwicG9zaXRpb24iLCJoYW5kbGVDbGljayIsIm90aGVyQ2xhc3NlcyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MagicButton.tsx\n"));

/***/ })

});