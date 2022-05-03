"use strict";
exports.id = 25;
exports.ids = [25];
exports.modules = {

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xl": () => (/* binding */ getPost),
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "HY": () => (/* binding */ getPostFile)
/* harmony export */ });
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(820);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




async function getPost(slug) {
  const source = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readFile)(`./content/posts/${slug}.md`, "utf-8");
  const {
    data: {
      date,
      title
    },
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2__(source);
  const body = (0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(content);
  return {
    title,
    date,
    body
  };
}
async function getPosts() {
  const pages = await getPostFile();
  const posts = [];

  for (const page of pages) {
    const post = await getPost(page);
    posts.push(_objectSpread({
      page
    }, post));
  }

  return posts;
}
async function getPostFile() {
  const suffix = ".md";
  const files = await (0,fs_promises__WEBPACK_IMPORTED_MODULE_0__.readdir)("./content/posts");
  return files.filter(file => file.endsWith(suffix)).map(file => file.slice(0, -suffix.length));
}

/***/ })

};
;