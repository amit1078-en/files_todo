"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\web dev projects\\Web_development_Projects\\todo\\nextjstodo\\pages\\index.js";
 // import './Styles.css'
// import 'bootstrap/dist/css/bootstrap.css'




const index = () => {
  const {
    0: title,
    1: settitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: desc,
    1: setdesc
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: todoList,
    1: setTodoList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  var t = 0;

  const handledelete = todo => {
    setTodoList(todoList.filter(e => {
      return e !== todo;
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Empty List Cant Be Added");
      return;
    }

    const addtodo = {
      sno: t,
      tit: title,
      dsc: desc
    };
    setTodoList([...todoList, addtodo]);
    t += 1;
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
      children: "Next Js To Do List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        type: "text",
        placeholder: "Enter the List Title",
        id: "list",
        onChange: e => {
          settitle(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        type: "text",
        placeholder: "Enter List Desciption",
        id: "desc",
        onChange: e => {
          setdesc(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        children: "To Do Js List Is"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), todoList.length >= 1 ? todoList.map(todo => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: todo.tit
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: todo.dsc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
              onClick: e => {
                e.preventDefault();
                handledelete(todo);
              },
              children: "Delete"
            }, todo.sno, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 25
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, undefined)
        }, void 0, false);
      }) : "Empty"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFDQUwsZ0JBQUFBLFlBQVksQ0FBQ0MsSUFBRCxDQUFaO0FBQ0gsZUFIRDtBQUFBO0FBQUEsZUFBYUEsSUFBSSxDQUFDTyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSx5QkFESjtBQWFILE9BZEQsQ0FESCxHQWdCRyxPQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQ0QsQ0E5REQ7O0FBK0RBLGlFQUFlaEIsS0FBZjs7Ozs7Ozs7OztBQ25FQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzdG9kby8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHRqc3RvZG8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqc3RvZG8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCAnLi9TdHlsZXMuY3NzJ1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcblxyXG4gIFxyXG4gIGNvbnN0W3RpdGxlLCBzZXR0aXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3RbZGVzYyxzZXRkZXNjXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgdmFyIHQgPSAwO1xyXG5cclxuICAgIGNvbnN0ICBoYW5kbGVkZWxldGU9KHRvZG8pPT57XHJcbiAgICAgICBzZXRUb2RvTGlzdCh0b2RvTGlzdC5maWx0ZXIoKGUpPT57XHJcbiAgICAgICAgICAgcmV0dXJuIGUhPT10b2RvO1xyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGlmKCF0aXRsZSB8fCAhZGVzYylcclxuICAgICAge1xyXG4gICAgICAgICAgYWxlcnQoXCJFbXB0eSBMaXN0IENhbnQgQmUgQWRkZWRcIik7XHJcbiAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFkZHRvZG89e1xyXG4gICAgICAgICAgc25vOnQsXHJcbiAgICAgICAgICB0aXQ6dGl0bGUsXHJcbiAgICAgICAgICBkc2M6ZGVzY1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRvZG9MaXN0KFsuLi50b2RvTGlzdCxhZGR0b2RvXSk7XHJcbiAgICAgIHQrPTE7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPk5leHQgSnMgVG8gRG8gTGlzdDwvaDM+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBMaXN0IFRpdGxlXCIgaWQgPSBcImxpc3RcIiBvbkNoYW5nZT17KGUpPT57c2V0dGl0bGUoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTGlzdCBEZXNjaXB0aW9uXCIgaWQ9XCJkZXNjXCIgb25DaGFuZ2U9eyhlKT0+e3NldGRlc2MoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+VG8gRG8gSnMgTGlzdCBJczwvaDM+XHJcbiAgICAgICAge3RvZG9MaXN0Lmxlbmd0aCA+PTEgP1xyXG4gICAgICAgICAgICB0b2RvTGlzdC5tYXAoKHRvZG8pPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt0b2RvLnRpdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dG9kby5kc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17dG9kby5zbm99IG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZGVsZXRlKHRvZG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBcIkVtcHR5XCJcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiaW5kZXgiLCJ0aXRsZSIsInNldHRpdGxlIiwiZGVzYyIsInNldGRlc2MiLCJ0b2RvTGlzdCIsInNldFRvZG9MaXN0IiwidCIsImhhbmRsZWRlbGV0ZSIsInRvZG8iLCJmaWx0ZXIiLCJlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImFkZHRvZG8iLCJzbm8iLCJ0aXQiLCJkc2MiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=