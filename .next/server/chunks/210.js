"use strict";
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_ThemeSwitch)
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/DarkTheme.js




const DarkTheme = () => {
  return /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
    id: "3891035591",
    children: [":root{--background-color:rgb(14,14,14);--link-color:rgb(234,207,3);--text-color:rgb(230,230,230);}"]
  });
};

/* harmony default export */ const components_DarkTheme = (DarkTheme);
;// CONCATENATED MODULE: ./components/ThemeSwitch.js







function loadDarkMode() {
  if (typeof localStorage === "undefined") return false;
  const value = sessionStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
}

const ThemeSwitch = () => {
  const {
    0: darkMode,
    1: setDarkMode
  } = (0,external_react_.useState)(loadDarkMode);
  const text = darkMode ? "Light Mode" : "Dark Mode";

  const handleClick = () => {
    sessionStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: handleClick,
      suppressHydrationWarning: true,
      className: "jsx-3486825094",
      children: text
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3486825094",
      children: ["button.jsx-3486825094{background:none;border:none;color:inherit;cursor:pointer;font-size:larger;}"]
    }), darkMode && /*#__PURE__*/jsx_runtime_.jsx(components_DarkTheme, {})]
  });
};

/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

/***/ })

};
;