/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.jpg */ "./src/assets/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: linear-gradient(90deg, rgba(2, 0, 36, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-blend-mode: darken, overlay;\n    background-attachment: fixed;\n    background-size: cover;\n    background-color: rgba(0, 0, 0, 0.1);\n    background-position: center;\n    width: 100%;\n    height: 100vh;\n    font-family: \"Cabin\", sans-serif;\n    transition: background-color 0.4s ease;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\nbutton {\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\ntextarea {\n    resize: none;\n}\n\n.content {\n    display: flex;\n    height: 100%;\n    overflow: hidden;\n}\n\n/* styling todo cards */\n\n.todo-card {\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 1.5rem 0;\n    margin: 1rem auto;\n    width: 900px;\n    max-height: 100px;\n    color: white;\n    border: none;\n    outline: none;\n    backdrop-filter: blur(10px);\n    border-radius: 30px;\n    background-color: rgba(0, 0, 0, 0.4);\n    opacity: 0;\n    transform-origin: top;\n    transform: scaleY(0);\n    transition: all 0.4s ease;\n    animation: card-creation 0.5s ease forwards;\n}\n\n.todo-card:hover {\n    backdrop-filter: blur(10px) brightness(0.2);\n}\n\n@keyframes card-creation {\n    from {\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    to {\n        transform: scaleY(1);\n        opacity: 1;\n    }\n}\n\n.todo-card.done {\n    text-decoration: line-through;\n    text-decoration-color: greenyellow;\n    text-decoration-thickness: 4px;\n}\n\n.todo-title-date-cont {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 40%;\n}\n\n.todo-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: white;\n    margin-bottom: 0.2rem;\n}\n\n.todo-date,\n.todo-project,\n.todo-description {\n    font-size: 1rem;\n    font-weight: 100;\n}\n\n.todo-description {\n    display: none;\n    transform: scaleY(0);\n    transition: transform 1s ease;\n}\n\n.todo-description.show {\n    display: block;\n    visibility: visible;\n    transform: scaleY(1);\n}\n\n@keyframes desc-appear {\n    from {\n        display: none;\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    to {\n        display: block;\n        opacity: 1;\n        transform: scaleY(1);\n    }\n}\n\n@keyframes desc-disappear {\n    from {\n        display: block;\n        transform: scaleY(1);\n    }\n    to {\n        display: none;\n        transform: scaleY(0);\n    }\n}\n\n.todo-show-more {\n    padding: 0;\n    margin: 0;\n    background: none;\n    outline: none;\n    border: none;\n    position: relative;\n    font-size: 2rem;\n    color: white;\n    padding: 1rem;\n}\n\n.todo-show-more::before {\n    position: absolute;\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    border: 3px solid white;\n    border-bottom: none;\n    border-left: none;\n    rotate: -135deg;\n    transition: 0.4s ease;\n}\n\n.todo-show-more.open::before {\n    transform: rotate(-90deg);\n}\n\n.markDoneBtn {\n    position: relative;\n    border: 3px solid white;\n    background-color: transparent;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.markDoneBtn::before {\n    position: absolute;\n    content: \"\";\n    width: 15px;\n    height: 5px;\n    top: 50%;\n    left: 50%;\n    padding: 0;\n    margin: 0;\n    border: 4px solid greenyellow;\n    border-top: none;\n    border-right: none;\n    transform-origin: center;\n    translate: -50% -50%;\n    rotate: -45deg;\n    opacity: 0;\n}\n\n.markDoneBtn.done::before {\n    animation: checkbox 0.5s ease both;\n}\n\n@keyframes checkbox {\n    from {\n        transform: scaleX(0);\n        opacity: 0;\n    }\n    50% {\n        border-bottom-width: 0;\n    }\n    to {\n        transform: scaleX(1);\n        border-bottom-width: 4px;\n        opacity: 1;\n    }\n}\n\n.markDoneBtn.done {\n    border-color: greenyellow;\n}\n\n/* styling sdiebar */\n.sidebar {\n    /* position: fixed; */\n    z-index: 1;\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n    justify-items: center;\n    height: 100vh;\n    width: 350px;\n    overflow: hidden;\n    text-align: center;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.6);\n    backdrop-filter: blur(5px);\n    transition: 0.5s ease;\n}\n\n.sidebar.closed {\n    margin-left: -350px;\n}\n\n.projects-section-container {\n    width: 100%;\n    overflow-y: scroll;\n}\n\n.projects-section-container::-webkit-scrollbar {\n    width: 4px;\n    background-color: transparent;\n    border-radius: 40px;\n}\n.projects-section-container::-webkit-scrollbar-thumb {\n    border-radius: 40px;\n    background-color: gray;\n}\n\n.projects-section-container::-webkit-scrollbar-thumb:hover {\n    background-color: white;\n}\n\n.projects-container > *:last-child {\n    margin-bottom: 20px;\n}\n\n.main-section-container,\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.sidebar-btn {\n    background-color: transparent;\n    color: white;\n    border: none;\n    background-color: none;\n    width: 200px;\n    border-radius: 30px;\n    padding: 0.8rem 2rem;\n    transition: 0.4s ease;\n}\n\n.sidebar-btn:not(.active):not(.show-projects-btn):hover {\n    background-color: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-btn.active {\n    background-color: rgba(255, 255, 255, 0.4);\n}\n\n.toggle-sidebar-btn.absolute {\n    position: fixed;\n}\n.toggle-sidebar-btn {\n    justify-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    background: none;\n    border: none;\n}\n\n.toggle-sidebar-btn > div {\n    width: 2rem;\n    height: 1px;\n    margin: 5px;\n    background-color: white;\n}\n\n.main-section-container *,\n.projects-section-container * {\n    font-size: 1.4rem;\n}\n.show-projects-btn {\n    position: sticky;\n    z-index: 8;\n    top: 0;\n    left: 0;\n    color: white;\n    background-color: black;\n    outline: none;\n    border: none;\n    width: 100%;\n    padding: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.show-projects-btn::before {\n    position: absolute;\n    content: \"\";\n    width: 0.5rem;\n    height: 0.5rem;\n    border: 3px solid white;\n    border-left: none;\n    border-bottom: none;\n    top: 50%;\n    transform: translate(-200%, -50%) rotate(45deg);\n    transition: 0.4s ease;\n}\n\n.show-projects-btn.open::before {\n    transform: translate(-200%, -50%) rotate(135deg);\n}\n\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.add-project-circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    font-size: 1.2rem;\n    color: black;\n    background-color: white;\n    border: none;\n    border-radius: 50%;\n}\n\n.project-cont {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    color: white;\n    border-radius: 30px;\n    transition: 0.4s ease;\n}\n.project-cont:hover {\n    background-color: var(--bg-hover) !important;\n}\n.project-cont.active {\n    background-color: var(--bg-active) !important;\n}\n\n.project-circle {\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n}\n\n/* styling our pages */\n.page-container {\n    width: 100%;\n    height: 100%;\n    padding: 4rem;\n    overflow: hidden;\n    overflow-y: auto;\n    scroll-behavior: smooth;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    scroll-behavior: smooth;\n}\n\n.page-container::-webkit-scrollbar {\n    width: 4px;\n    background-color: transparent;\n    border-radius: 40px;\n}\n.page-container::-webkit-scrollbar-thumb {\n    border-radius: 40px;\n    background-color: gray;\n}\n\n.page-container::-webkit-scrollbar-thumb:hover {\n    background-color: white;\n}\n\n.page-container .toggle-sidebar-btn {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n}\n.page-title {\n    margin: 2rem 0;\n    border-radius: 30px;\n    font-size: 3rem;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 900;\n    color: white;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.info-text {\n    font-size: 1.5rem;\n    color: white;\n}\n\n.add-todo-btn {\n    position: fixed;\n    content: \"+\";\n    color: black;\n    font-size: 2rem;\n    bottom: 6%;\n    right: 8%;\n    width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0 0 0 0;\n    transition: 0.4s ease;\n    z-index: 15;\n    box-shadow: 0 0 50px 0 black;\n}\n\n.add-todo-btn:hover {\n    box-shadow: 0 0 50px -5px white;\n    transition: 0.4s ease;\n}\n\n/* styling add todo container */\n.fixed-center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n}\n\n.add-todo-form {\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 30px;\n    animation-name: add-todo-appear;\n    animation-duration: 0.4s;\n    animation-timing-function: ease;\n    animation-fill-mode: forwards;\n    z-index: 140;\n}\n\n@keyframes add-todo-appear {\n    from {\n        transform: translate(0, 70vw);\n    }\n    to {\n        transform: translate(0, 0);\n    }\n}\n\n@keyframes add-todo-disappear {\n    to {\n        transform: translate(0, 70vw);\n    }\n    from {\n        transform: translate(0, 0);\n    }\n}\n\n.add-todo-form > div {\n    width: 500px;\n    display: flex;\n\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 2em;\n}\n\n.add-todo-form label {\n    font-size: 1.2rem;\n}\n\n.add-todo-form .form-title {\n    font-size: 2rem;\n    font-weight: 800;\n}\n\n.add-todo-form input,\n.add-todo-form select,\n.add-todo-form textarea,\n.add-todo-form button {\n    border: none;\n    outline: none;\n    padding: 1rem 1.5rem;\n    border-radius: 15px;\n    width: 300px;\n    background-color: rgb(224, 224, 224);\n}\n\n.add-todo-desc {\n    padding: 4rem;\n}\n\n#add-todo-submit {\n    margin-top: 25px;\n    cursor: pointer;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: white;\n    background-color: rgb(47, 10, 114);\n    transition: 0.4s ease;\n}\n\n#add-todo-submit:hover {\n    background-color: rgb(88, 23, 209);\n}\n#close-add-todo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0;\n    width: 2rem;\n    margin: 0 1rem;\n    padding: 1rem;\n    font-size: 1.3rem;\n    height: 2rem;\n    color: red;\n    font-weight: 1000;\n    background-color: transparent;\n}\n\n#overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0);\n    transition: 0.8s ease;\n    z-index: -5;\n}\n\n#overlay.active {\n    z-index: 88;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n/* styling the home page */\n.home-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 4rem;\n    gap: 20px;\n    border-radius: 30px;\n    user-select: none;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(10px);\n    border: 1px solid;\n    transition: 0.4s ease;\n    animation: card-creation 0.5s ease forwards;\n}\n.home-card:hover {\n    background-color: var(--hover-color);\n}\n\n.home-card-txt {\n    font-size: 2rem;\n    font-weight: 400;\n    color: white;\n}\n\n.home-card-num {\n    font-size: 2.5rem;\n    font-weight: 900;\n}\n\n.home-greeting {\n    color: white;\n}\n.home-cards-container {\n    width: 100%;\n    padding: 4rem;\n    margin: 2rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 40px;\n    justify-content: center;\n    justify-items: center;\n    justify-items: center;\n}\n\n.add-project-form {\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 4rem;\n    background-color: rgb(240, 240, 240);\n}\n.project-name-input {\n    padding: 0.5rem 2rem;\n    outline: none;\n    border: none;\n    border-radius: 30px;\n    transition: 0.4s ease;\n    background-color: gray;\n}\n\n.project-color-input {\n    cursor: pointer;\n    width: 40px;\n    height: 40px;\n    outline: none;\n    border: none;\n    /* border-radius: 30px; */\n    clip-path: circle(40% at 50% 50%);\n}\n\n.project-name-input:focus {\n    box-shadow: 0 0 45px -2px rgb(88, 146, 0);\n}\n\n.project-name-input.invalid {\n    box-shadow: 0 0 45px -2px red;\n}\n\n/* styling the header */\n.header {\n    position: sticky;\n    top: 0;\n    z-index: 12;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 1rem;\n    overflow: hidden;\n    background-color: rgb(0, 0, 0, 0.7);\n    backdrop-filter: blur(15px);\n    border-bottom: 1px solid rgb(199, 79, 255);\n}\n\n.logo-cont {\n    user-select: none;\n    margin-right: auto;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    gap: 15px;\n    padding: 1rem 2rem;\n    transition: 0.4s ease;\n}\n.logo-cont:hover {\n    filter: drop-shadow(0 0 35px rgb(199, 79, 255));\n}\n\n.logo-text {\n    font-size: 2.5rem;\n    font-weight: 1000;\n    color: rgb(140, 0, 255);\n}\n\n#logo {\n    width: 45px;\n    height: auto;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap\");\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: linear-gradient(90deg, rgba(2, 0, 36, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(\"../assets/bg.jpg\");\n    background-blend-mode: darken, overlay;\n    background-attachment: fixed;\n    background-size: cover;\n    background-color: rgba(0, 0, 0, 0.1);\n    background-position: center;\n    width: 100%;\n    height: 100vh;\n    font-family: \"Cabin\", sans-serif;\n    transition: background-color 0.4s ease;\n    overflow-x: hidden;\n    overflow-y: hidden;\n}\n\nbutton {\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\ntextarea {\n    resize: none;\n}\n\n.content {\n    display: flex;\n    height: 100%;\n    overflow: hidden;\n}\n\n/* styling todo cards */\n\n.todo-card {\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 1.5rem 0;\n    margin: 1rem auto;\n    width: 900px;\n    max-height: 100px;\n    color: white;\n    border: none;\n    outline: none;\n    backdrop-filter: blur(10px);\n    border-radius: 30px;\n    background-color: rgba(0, 0, 0, 0.4);\n    opacity: 0;\n    transform-origin: top;\n    transform: scaleY(0);\n    transition: all 0.4s ease;\n    animation: card-creation 0.5s ease forwards;\n}\n\n.todo-card:hover {\n    backdrop-filter: blur(10px) brightness(0.2);\n}\n\n@keyframes card-creation {\n    from {\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    to {\n        transform: scaleY(1);\n        opacity: 1;\n    }\n}\n\n.todo-card.done {\n    text-decoration: line-through;\n    text-decoration-color: greenyellow;\n    text-decoration-thickness: 4px;\n}\n\n.todo-title-date-cont {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 40%;\n}\n\n.todo-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: white;\n    margin-bottom: 0.2rem;\n}\n\n.todo-date,\n.todo-project,\n.todo-description {\n    font-size: 1rem;\n    font-weight: 100;\n}\n\n.todo-description {\n    display: none;\n    transform: scaleY(0);\n    transition: transform 1s ease;\n}\n\n.todo-description.show {\n    display: block;\n    visibility: visible;\n    transform: scaleY(1);\n}\n\n@keyframes desc-appear {\n    from {\n        display: none;\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    to {\n        display: block;\n        opacity: 1;\n        transform: scaleY(1);\n    }\n}\n\n@keyframes desc-disappear {\n    from {\n        display: block;\n        transform: scaleY(1);\n    }\n    to {\n        display: none;\n        transform: scaleY(0);\n    }\n}\n\n.todo-show-more {\n    padding: 0;\n    margin: 0;\n    background: none;\n    outline: none;\n    border: none;\n    position: relative;\n    font-size: 2rem;\n    color: white;\n    padding: 1rem;\n}\n\n.todo-show-more::before {\n    position: absolute;\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    border: 3px solid white;\n    border-bottom: none;\n    border-left: none;\n    rotate: -135deg;\n    transition: 0.4s ease;\n}\n\n.todo-show-more.open::before {\n    transform: rotate(-90deg);\n}\n\n.markDoneBtn {\n    position: relative;\n    border: 3px solid white;\n    background-color: transparent;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.markDoneBtn::before {\n    position: absolute;\n    content: \"\";\n    width: 15px;\n    height: 5px;\n    top: 50%;\n    left: 50%;\n    padding: 0;\n    margin: 0;\n    border: 4px solid greenyellow;\n    border-top: none;\n    border-right: none;\n    transform-origin: center;\n    translate: -50% -50%;\n    rotate: -45deg;\n    opacity: 0;\n}\n\n.markDoneBtn.done::before {\n    animation: checkbox 0.5s ease both;\n}\n\n@keyframes checkbox {\n    from {\n        transform: scaleX(0);\n        opacity: 0;\n    }\n    50% {\n        border-bottom-width: 0;\n    }\n    to {\n        transform: scaleX(1);\n        border-bottom-width: 4px;\n        opacity: 1;\n    }\n}\n\n.markDoneBtn.done {\n    border-color: greenyellow;\n}\n\n/* styling sdiebar */\n.sidebar {\n    /* position: fixed; */\n    z-index: 1;\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n    justify-items: center;\n    height: 100vh;\n    width: 350px;\n    overflow: hidden;\n    text-align: center;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.6);\n    backdrop-filter: blur(5px);\n    transition: 0.5s ease;\n}\n\n.sidebar.closed {\n    margin-left: -350px;\n}\n\n.projects-section-container {\n    width: 100%;\n    overflow-y: scroll;\n}\n\n.projects-section-container::-webkit-scrollbar {\n    width: 4px;\n    background-color: transparent;\n    border-radius: 40px;\n}\n.projects-section-container::-webkit-scrollbar-thumb {\n    border-radius: 40px;\n    background-color: gray;\n}\n\n.projects-section-container::-webkit-scrollbar-thumb:hover {\n    background-color: white;\n}\n\n.projects-container > *:last-child {\n    margin-bottom: 20px;\n}\n\n.main-section-container,\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.sidebar-btn {\n    background-color: transparent;\n    color: white;\n    border: none;\n    background-color: none;\n    width: 200px;\n    border-radius: 30px;\n    padding: 0.8rem 2rem;\n    transition: 0.4s ease;\n}\n\n.sidebar-btn:not(.active):not(.show-projects-btn):hover {\n    background-color: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-btn.active {\n    background-color: rgba(255, 255, 255, 0.4);\n}\n\n.toggle-sidebar-btn.absolute {\n    position: fixed;\n}\n.toggle-sidebar-btn {\n    justify-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    background: none;\n    border: none;\n}\n\n.toggle-sidebar-btn > div {\n    width: 2rem;\n    height: 1px;\n    margin: 5px;\n    background-color: white;\n}\n\n.main-section-container *,\n.projects-section-container * {\n    font-size: 1.4rem;\n}\n.show-projects-btn {\n    position: sticky;\n    z-index: 8;\n    top: 0;\n    left: 0;\n    color: white;\n    background-color: black;\n    outline: none;\n    border: none;\n    width: 100%;\n    padding: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.show-projects-btn::before {\n    position: absolute;\n    content: \"\";\n    width: 0.5rem;\n    height: 0.5rem;\n    border: 3px solid white;\n    border-left: none;\n    border-bottom: none;\n    top: 50%;\n    transform: translate(-200%, -50%) rotate(45deg);\n    transition: 0.4s ease;\n}\n\n.show-projects-btn.open::before {\n    transform: translate(-200%, -50%) rotate(135deg);\n}\n\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.add-project-circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    font-size: 1.2rem;\n    color: black;\n    background-color: white;\n    border: none;\n    border-radius: 50%;\n}\n\n.project-cont {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    color: white;\n    border-radius: 30px;\n    transition: 0.4s ease;\n}\n.project-cont:hover {\n    background-color: var(--bg-hover) !important;\n}\n.project-cont.active {\n    background-color: var(--bg-active) !important;\n}\n\n.project-circle {\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n}\n\n/* styling our pages */\n.page-container {\n    width: 100%;\n    height: 100%;\n    padding: 4rem;\n    overflow: hidden;\n    overflow-y: auto;\n    scroll-behavior: smooth;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    scroll-behavior: smooth;\n}\n\n.page-container::-webkit-scrollbar {\n    width: 4px;\n    background-color: transparent;\n    border-radius: 40px;\n}\n.page-container::-webkit-scrollbar-thumb {\n    border-radius: 40px;\n    background-color: gray;\n}\n\n.page-container::-webkit-scrollbar-thumb:hover {\n    background-color: white;\n}\n\n.page-container .toggle-sidebar-btn {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n}\n.page-title {\n    margin: 2rem 0;\n    border-radius: 30px;\n    font-size: 3rem;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 900;\n    color: white;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.info-text {\n    font-size: 1.5rem;\n    color: white;\n}\n\n.add-todo-btn {\n    position: fixed;\n    content: \"+\";\n    color: black;\n    font-size: 2rem;\n    bottom: 6%;\n    right: 8%;\n    width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0 0 0 0;\n    transition: 0.4s ease;\n    z-index: 15;\n    box-shadow: 0 0 50px 0 black;\n}\n\n.add-todo-btn:hover {\n    box-shadow: 0 0 50px -5px white;\n    transition: 0.4s ease;\n}\n\n/* styling add todo container */\n.fixed-center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n}\n\n.add-todo-form {\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 30px;\n    animation-name: add-todo-appear;\n    animation-duration: 0.4s;\n    animation-timing-function: ease;\n    animation-fill-mode: forwards;\n    z-index: 140;\n}\n\n@keyframes add-todo-appear {\n    from {\n        transform: translate(0, 70vw);\n    }\n    to {\n        transform: translate(0, 0);\n    }\n}\n\n@keyframes add-todo-disappear {\n    to {\n        transform: translate(0, 70vw);\n    }\n    from {\n        transform: translate(0, 0);\n    }\n}\n\n.add-todo-form > div {\n    width: 500px;\n    display: flex;\n\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 2em;\n}\n\n.add-todo-form label {\n    font-size: 1.2rem;\n}\n\n.add-todo-form .form-title {\n    font-size: 2rem;\n    font-weight: 800;\n}\n\n.add-todo-form input,\n.add-todo-form select,\n.add-todo-form textarea,\n.add-todo-form button {\n    border: none;\n    outline: none;\n    padding: 1rem 1.5rem;\n    border-radius: 15px;\n    width: 300px;\n    background-color: rgb(224, 224, 224);\n}\n\n.add-todo-desc {\n    padding: 4rem;\n}\n\n#add-todo-submit {\n    margin-top: 25px;\n    cursor: pointer;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: white;\n    background-color: rgb(47, 10, 114);\n    transition: 0.4s ease;\n}\n\n#add-todo-submit:hover {\n    background-color: rgb(88, 23, 209);\n}\n#close-add-todo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0;\n    width: 2rem;\n    margin: 0 1rem;\n    padding: 1rem;\n    font-size: 1.3rem;\n    height: 2rem;\n    color: red;\n    font-weight: 1000;\n    background-color: transparent;\n}\n\n#overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0);\n    transition: 0.8s ease;\n    z-index: -5;\n}\n\n#overlay.active {\n    z-index: 88;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n/* styling the home page */\n.home-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 4rem;\n    gap: 20px;\n    border-radius: 30px;\n    user-select: none;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(10px);\n    border: 1px solid;\n    transition: 0.4s ease;\n    animation: card-creation 0.5s ease forwards;\n}\n.home-card:hover {\n    background-color: var(--hover-color);\n}\n\n.home-card-txt {\n    font-size: 2rem;\n    font-weight: 400;\n    color: white;\n}\n\n.home-card-num {\n    font-size: 2.5rem;\n    font-weight: 900;\n}\n\n.home-greeting {\n    color: white;\n}\n.home-cards-container {\n    width: 100%;\n    padding: 4rem;\n    margin: 2rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 40px;\n    justify-content: center;\n    justify-items: center;\n    justify-items: center;\n}\n\n.add-project-form {\n    border-radius: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: 4rem;\n    background-color: rgb(240, 240, 240);\n}\n.project-name-input {\n    padding: 0.5rem 2rem;\n    outline: none;\n    border: none;\n    border-radius: 30px;\n    transition: 0.4s ease;\n    background-color: gray;\n}\n\n.project-color-input {\n    cursor: pointer;\n    width: 40px;\n    height: 40px;\n    outline: none;\n    border: none;\n    /* border-radius: 30px; */\n    clip-path: circle(40% at 50% 50%);\n}\n\n.project-name-input:focus {\n    box-shadow: 0 0 45px -2px rgb(88, 146, 0);\n}\n\n.project-name-input.invalid {\n    box-shadow: 0 0 45px -2px red;\n}\n\n/* styling the header */\n.header {\n    position: sticky;\n    top: 0;\n    z-index: 12;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    padding: 1rem;\n    overflow: hidden;\n    background-color: rgb(0, 0, 0, 0.7);\n    backdrop-filter: blur(15px);\n    border-bottom: 1px solid rgb(199, 79, 255);\n}\n\n.logo-cont {\n    user-select: none;\n    margin-right: auto;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    gap: 15px;\n    padding: 1rem 2rem;\n    transition: 0.4s ease;\n}\n.logo-cont:hover {\n    filter: drop-shadow(0 0 35px rgb(199, 79, 255));\n}\n\n.logo-text {\n    font-size: 2.5rem;\n    font-weight: 1000;\n    color: rgb(140, 0, 255);\n}\n\n#logo {\n    width: 45px;\n    height: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/modules/classes/Project.js":
/*!****************************************!*\
  !*** ./src/modules/classes/Project.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    setName(newName) {
        this.name = newName;
    }

    setColor(newColor) {
        this.color = newColor;
    }
}


/***/ }),

/***/ "./src/modules/classes/Todo.js":
/*!*************************************!*\
  !*** ./src/modules/classes/Todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    static cpt = 0;
    constructor(title, description, project, date) {
        this.id = ++Todo.cpt;
        this.title = title;
        this.description = description;
        this.project = project;
        this.date = date;
        this.done = false;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setProject(newProject) {
        this.project = newProject;
    }

    setDate(newDate) {
        this.date = newDate;
    }

    setPriority(newPriority) {
        this.priority = newPriority;
    }

    markDone() {
        this.done = true;
    }

    markUndone() {
        this.done = false;
    }
}


/***/ }),

/***/ "./src/modules/components/addTodo.js":
/*!*******************************************!*\
  !*** ./src/modules/components/addTodo.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/projectsController */ "./src/modules/controllers/projectsController.js");
/* harmony import */ var _controllers_todosController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/todosController */ "./src/modules/controllers/todosController.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay */ "./src/modules/components/overlay.js");
/* harmony import */ var _classes_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/Todo */ "./src/modules/classes/Todo.js");





const closeAddTodo = () => {
    document.querySelector(".add-todo-form").style.animationName = "add-todo-disappear";
    (0,_overlay__WEBPACK_IMPORTED_MODULE_2__.toggleBlackOverlay)();
    setTimeout(() => {
        document.querySelector(".add-todo-form")?.remove();
    }, 900);
};

const addTodo = () => {
    const form = document.createElement("form");
    const formTitle = document.createElement("p");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const d = document.createElement("div");
    const descLabel = document.createElement("label");
    const descTxtArea = document.createElement("textarea");
    const d2 = document.createElement("div");
    const projectLabel = document.createElement("label");
    const projectsSelect = document.createElement("select");
    const d3 = document.createElement("div");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const d4 = document.createElement("div");
    const addTodoBtn = document.createElement("button");
    const closeOverlayBtn = document.createElement("button");
    const infoContainer = document.createElement("div");

    const emptyOption = document.createElement("option");
    emptyOption.textContent = "Please select a project";
    emptyOption.value = "";
    projectsSelect.appendChild(emptyOption);

    (0,_controllers_projectsController__WEBPACK_IMPORTED_MODULE_0__.getProjects)().forEach((project, index) => {
        const projectOption = document.createElement("option");
        projectOption.value = index;
        projectOption.textContent = project.name;
        if (document.querySelector(".page-container")?.getAttribute("id") === project.name) projectOption.selected = true;
        projectsSelect.appendChild(projectOption);
    });

    formTitle.textContent = "Add new Task";
    titleLabel.textContent = "Title";
    descLabel.textContent = "Description";
    projectLabel.textContent = "Project";
    dateLabel.textContent = "Date";
    addTodoBtn.textContent = "Submit";
    closeOverlayBtn.textContent = "X";

    titleInput.placeholder = "enter todo title here";

    titleInput.type = "text";
    descTxtArea.rows = 4;
    dateInput.type = "date";
    addTodoBtn.type = "submit";
    closeOverlayBtn.type = "button";

    form.classList.add("add-todo-form", "fixed-center");
    formTitle.classList.add("form-title");
    descTxtArea.classList.add("add-todo-desc");
    addTodoBtn.setAttribute("id", "add-todo-submit");
    closeOverlayBtn.setAttribute("id", "close-add-todo");
    infoContainer.classList.add("info-container");

    closeOverlayBtn.onclick = closeAddTodo;

    form.onsubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const title = titleInput.value.trim();
        const desc = descTxtArea.value.trim();
        const project = projectsSelect.value;
        const date = dateInput.value;
        if (title && desc && project && date) {
            const newTodo = new _classes_Todo__WEBPACK_IMPORTED_MODULE_3__["default"](title, desc, (0,_controllers_projectsController__WEBPACK_IMPORTED_MODULE_0__.getProject)(project), new Date(date));
            (0,_controllers_todosController__WEBPACK_IMPORTED_MODULE_1__.addTodo)(newTodo);
            closeAddTodo();
        }
    };

    d.appendChild(titleLabel);
    d.appendChild(titleInput);

    d2.appendChild(descLabel);
    d2.appendChild(descTxtArea);

    d3.appendChild(projectLabel);
    d3.appendChild(projectsSelect);

    d4.appendChild(dateLabel);
    d4.appendChild(dateInput);

    form.appendChild(formTitle);
    form.appendChild(d);
    form.appendChild(d2);
    form.appendChild(d3);
    form.appendChild(d4);
    form.appendChild(addTodoBtn);
    form.appendChild(closeOverlayBtn);
    form.appendChild(infoContainer);
    return form;
};

addTodo();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodo);


/***/ }),

/***/ "./src/modules/components/header.js":
/*!******************************************!*\
  !*** ./src/modules/components/header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _controllers_Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/Dom */ "./src/modules/controllers/Dom.js");



const header = () => {
    const header = document.createElement("div");
    const logoCont = document.createElement("div");
    const logoTxt = document.createElement("p");
    const logoImg = new Image();

    header.classList.add("header");
    logoImg.setAttribute("id", "logo");
    logoTxt.classList.add("logo-text");
    logoCont.classList.add("logo-cont");

    logoTxt.textContent = "Galactic Todos";
    logoImg.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;

    logoCont.appendChild(logoImg);
    logoCont.appendChild(logoTxt);

    header.appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.openSidebarBtn)());
    header.appendChild(logoCont);

    return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/modules/components/homeCard.js":
/*!********************************************!*\
  !*** ./src/modules/components/homeCard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const card = (txt, num, color) => {
    const card = document.createElement("div");
    const cardTxt = document.createElement("p");
    const cardNum = document.createElement("p");

    card.classList.add("home-card");
    cardTxt.classList.add("home-card-txt");
    cardNum.classList.add("home-card-num");
    card.style.borderColor = color;
    cardNum.style.color = color;

    card.style.setProperty("--hover-color", color + "1F");

    cardTxt.textContent = txt;
    cardNum.textContent = num;

    card.appendChild(cardTxt);
    card.appendChild(cardNum);
    return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);


/***/ }),

/***/ "./src/modules/components/overlay.js":
/*!*******************************************!*\
  !*** ./src/modules/components/overlay.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "overlay": () => (/* binding */ overlay),
/* harmony export */   "toggleBlackOverlay": () => (/* binding */ toggleBlackOverlay)
/* harmony export */ });
const overlay = () => {
    const overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    overlay.onclick = (e) => {
        document.querySelector(".add-todo-form") || e.key === "Escape" ? document.querySelector("#close-add-todo").click() : "";
    };
    return overlay;
};

const toggleBlackOverlay = () => document.querySelector("#overlay").classList.toggle("active");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overlay);


/***/ }),

/***/ "./src/modules/components/project.js":
/*!*******************************************!*\
  !*** ./src/modules/components/project.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const project = (project) => {
    const projectCont = document.createElement("button");
    const projectCircle = document.createElement("div");
    const projectName = document.createElement("p");

    projectCont.classList.add("project-cont");
    projectCircle.classList.add("project-circle");
    projectName.classList.add("project-name");

    projectCont.style.borderColor = project.color;
    projectCircle.style.backgroundColor = project.color;
    projectName.textContent = project.name;

    projectCont.appendChild(projectCircle);
    projectCont.appendChild(projectName);

    projectCont.style.setProperty("--bg-hover", project.color + "2F");
    projectCont.style.setProperty("--bg-active", project.color + "8F");

    return projectCont;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "./src/modules/components/sidebar.js":
/*!*******************************************!*\
  !*** ./src/modules/components/sidebar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "toggleSidebar": () => (/* binding */ toggleSidebar)
/* harmony export */ });
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/projectsController */ "./src/modules/controllers/projectsController.js");
/* harmony import */ var _controllers_Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/Dom */ "./src/modules/controllers/Dom.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/components/project.js");




const addProjectBtn = () => {
    const addProject = document.createElement("button");
    const addProjectCircle = document.createElement("div");
    addProjectCircle.classList.add("add-project-circle");
    addProjectCircle.textContent = "+";
    addProject.appendChild(addProjectCircle);
    const txt = document.createElement("p");
    txt.textContent = "Add new";

    addProject.appendChild(addProjectCircle);
    addProject.appendChild(txt);
    addProject.classList.add("project-cont", "sidebar-btn", "add-new-project-btn");
    return addProject;
};

const toggleSidebar = () => document.querySelector(".sidebar").classList.toggle("closed");

const sidebar = () => {
    const sidebarContainer = document.createElement("div");
    const mainSectionContainer = document.createElement("div");
    const homeBtn = document.createElement("button");
    const todayBtn = document.createElement("button");
    const weekBtn = document.createElement("button");
    const projectsSectionContainer = document.createElement("div");
    const showProjectsBtn = document.createElement("button");
    const projectsContainer = document.createElement("div");

    sidebarContainer.classList.add("sidebar");
    mainSectionContainer.classList.add("main-section-container");
    homeBtn.classList.add("sidebar-btn");
    todayBtn.classList.add("sidebar-btn");
    weekBtn.classList.add("sidebar-btn");

    homeBtn.setAttribute("id", "home-btn");
    todayBtn.setAttribute("id", "today-btn");
    weekBtn.setAttribute("id", "week-btn");
    projectsSectionContainer.classList.add("projects-section-container");
    showProjectsBtn.classList.add("show-projects-btn", "sidebar-btn");
    projectsContainer.classList.add("projects-container");

    homeBtn.textContent = "Home";
    todayBtn.textContent = "Today";
    weekBtn.textContent = "Week";
    showProjectsBtn.textContent = "Projects";

    todayBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        todayBtn.classList.add("active");
        document.querySelector(".page-container").remove();
        document.querySelector(".content").appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.renderPage)("Today"));
    };

    weekBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        weekBtn.classList.add("active");
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.querySelector(".page-container").remove();
        document.querySelector(".content").appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.renderPage)("Week"));
    };

    homeBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        homeBtn.classList.add("active");
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.querySelector(".page-container").remove();
        document.querySelector(".content").appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.renderHome)());
    };

    showProjectsBtn.onclick = (e) => {
        const projectContainer = e.target.parentElement.children[1];
        if (e.target.classList.contains("open")) {
            e.target.classList.remove("open");
            Array.from(projectContainer.children).forEach((c) => c.remove());
        } else {
            e.target.classList.add("open");
            (0,_controllers_projectsController__WEBPACK_IMPORTED_MODULE_0__.getProjects)().forEach((projectObj, index) => {
                let projectBtn = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])(projectObj);
                projectBtn.classList.add("sidebar-btn", "btn", "project-btn");
                projectBtn.setAttribute("data-index", index);
                if (projectObj.name === document.querySelector(".page-container")?.getAttribute("id")) projectBtn.classList.add("active");
                projectBtn.onclick = (e) => {
                    document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
                    e.currentTarget.classList.add("active");
                    document.body.style.backgroundColor = projectObj.color + "4F";
                    document.querySelector(".page-container").remove();
                    document.querySelector(".content").appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.renderPage)(projectObj.name));
                };
                projectContainer.appendChild(projectBtn);
            });
            projectContainer.appendChild(addProjectBtn());
        }
    };

    mainSectionContainer.appendChild(homeBtn);
    mainSectionContainer.appendChild(todayBtn);
    mainSectionContainer.appendChild(weekBtn);

    projectsSectionContainer.appendChild(showProjectsBtn);
    projectsSectionContainer.appendChild(projectsContainer);

    sidebarContainer.appendChild(mainSectionContainer);
    sidebarContainer.appendChild(projectsSectionContainer);

    return sidebarContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);



/***/ }),

/***/ "./src/modules/components/todo.js":
/*!****************************************!*\
  !*** ./src/modules/components/todo.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todo = (todo) => {
    const todoContainer = document.createElement("li");
    const doneBtn = document.createElement("button");
    const titleNdate = document.createElement("div");
    const todoTitle = document.createElement("p");
    const todoDesc = document.createElement("p");
    const todoProject = document.createElement("p");
    const todoDate = document.createElement("p");
    const showMoreBtn = document.createElement("div");

    todoContainer.classList.add("todo-card");
    todoContainer.setAttribute("data-id", todo.id);
    doneBtn.classList.add("markDoneBtn");
    titleNdate.classList.add("todo-title-date-cont");
    todoTitle.classList.add("todo-title");
    todoDesc.classList.add("todo-description");
    todoProject.classList.add("todo-project");
    todoDate.classList.add("todo-date");
    showMoreBtn.classList.add("todo-show-more");

    todoProject.style.color = todo.project.color;
    todoDate.style.color = todo.project.color;

    todoTitle.textContent = todo.title;
    todoDesc.textContent = todo.description;
    todoProject.textContent = todo.project.name;
    todoDate.textContent = todo.date.toUTCString().split(" ").slice(0, 4);

    todoContainer.style.setProperty("--bg", todo.project.color);

    todoContainer.onclick = function (e) {
        if (e.target.className.includes("markDoneBtn")) {
            if (e.target.classList.contains("done")) {
                e.target.classList.remove("done");
                e.target.parentElement.classList.remove("done");
            } else {
                e.target.classList.add("done");
                e.target.parentElement.classList.add("done");
            }
        } else {
            const todoCard = this;
            const todoDescription = this.children[1].children[2];
            const doneBtn = this.children[3];
            if (!this.classList.contains("open")) {
                todoDescription.style.animation = "desc-appear .4s ease both";
                todoDescription.classList.add("show");
                todoCard.style.maxHeight = todoCard.clientHeight + todoCard.children[1].children[2].clientHeight + 40 + "px";
                this.classList.add("open");
                doneBtn.classList.add("open");
            } else {
                todoDescription.style.animation = "desc-disappear .2s ease both";
                this.classList.remove("open");
                doneBtn.classList.remove("open");
                todoCard.style.maxHeight = todoCard.clientHeight - todoCard.children[1].children[2].clientHeight - 20 + "px";
                setTimeout(() => {
                    todoDescription.classList.remove("show");
                }, 200);
            }
        }
    };

    titleNdate.appendChild(todoTitle);
    titleNdate.appendChild(todoDate);
    titleNdate.appendChild(todoDesc);

    todoContainer.appendChild(doneBtn);
    todoContainer.appendChild(titleNdate);
    todoContainer.appendChild(todoProject);
    todoContainer.appendChild(showMoreBtn);

    return todoContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ }),

/***/ "./src/modules/controllers/Dom.js":
/*!****************************************!*\
  !*** ./src/modules/controllers/Dom.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoBtn": () => (/* binding */ addTodoBtn),
/* harmony export */   "openSidebarBtn": () => (/* binding */ openSidebarBtn),
/* harmony export */   "renderHome": () => (/* binding */ renderHome),
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _todosController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todosController */ "./src/modules/controllers/todosController.js");
/* harmony import */ var _components_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/todo */ "./src/modules/components/todo.js");
/* harmony import */ var _components_addTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/addTodo */ "./src/modules/components/addTodo.js");
/* harmony import */ var _components_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/overlay */ "./src/modules/components/overlay.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sidebar */ "./src/modules/components/sidebar.js");
/* harmony import */ var _components_homeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/homeCard */ "./src/modules/components/homeCard.js");







const addTodoBtn = () => {
    const btn = document.createElement("button");
    btn.classList.add("add-todo-btn", "btn");
    btn.onclick = () => document.body.appendChild((0,_components_addTodo__WEBPACK_IMPORTED_MODULE_2__["default"])()) && (0,_components_overlay__WEBPACK_IMPORTED_MODULE_3__.toggleBlackOverlay)();
    btn.textContent = "+";
    return btn;
};

const openSidebarBtn = () => {
    const openSidebarBtn = document.createElement("button");
    openSidebarBtn.classList.add("toggle-sidebar-btn");
    openSidebarBtn.appendChild(document.createElement("div"));
    openSidebarBtn.appendChild(document.createElement("div"));
    openSidebarBtn.appendChild(document.createElement("div"));
    openSidebarBtn.onclick = () => (0,_components_sidebar__WEBPACK_IMPORTED_MODULE_4__.toggleSidebar)();
    return openSidebarBtn;
};

const renderHome = () => {
    const renderHomeCards = () => {
        const todosCreated = (0,_components_homeCard__WEBPACK_IMPORTED_MODULE_5__["default"])("Tasks Created", 0, "#7B00DB");
        const todosCompleted = (0,_components_homeCard__WEBPACK_IMPORTED_MODULE_5__["default"])("Tasks Completed", 0, "#81FF46");
        const todosNotCompleted = (0,_components_homeCard__WEBPACK_IMPORTED_MODULE_5__["default"])("Tasks non completed", 0, "#DB0000");
        const completionPercentage = (0,_components_homeCard__WEBPACK_IMPORTED_MODULE_5__["default"])("Completion rate", "0%", "#0FC5FF");
        return [todosCreated, todosCompleted, todosNotCompleted, completionPercentage];
    };
    const pageContainer = document.createElement("div");
    const homeTitle = document.createElement("h1");
    const greeting = document.createElement("h2");
    const homeCardsContainer = document.createElement("div");

    pageContainer.classList.add("page-container", "home");
    homeTitle.classList.add("page-title");
    greeting.classList.add("home-greeting");
    homeCardsContainer.classList.add("home-cards-container");

    homeTitle.textContent = "Home";
    greeting.textContent = "Welcome beautiful Human";
    renderHomeCards().forEach((homeCard) => homeCardsContainer.appendChild(homeCard));
    pageContainer.appendChild(homeTitle);
    pageContainer.appendChild(greeting);
    pageContainer.appendChild(homeCardsContainer);
    return pageContainer;
};

const renderPage = (pageName) => {
    const pageContainer = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const todoList = document.createElement("ul");

    pageContainer.classList.add("page-container");
    pageTitle.classList.add("page-title");
    todoList.classList.add("todo-list");

    pageContainer.setAttribute("id", pageName);
    pageTitle.textContent = pageName;

    let todosToDisplay = null;
    if (pageName === "Today") todosToDisplay = (0,_todosController__WEBPACK_IMPORTED_MODULE_0__.getTodayTodos)();
    else if (pageName === "Week") todosToDisplay = (0,_todosController__WEBPACK_IMPORTED_MODULE_0__.getWeekTodos)();
    else todosToDisplay = (0,_todosController__WEBPACK_IMPORTED_MODULE_0__.getTodosByProject)(pageName);

    pageContainer.appendChild(pageTitle);

    if (!todosToDisplay) {
        let t = document.createElement("p");
        t.classList.add("info-text");
        t.innerText = "No todos Found in " + pageName;
        todoList.appendChild(t);
    } else {
        todosToDisplay.forEach((todoObj, i) => {
            const newTodo = (0,_components_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(todoObj);
            newTodo.style.animationDelay = `${i / 10}s`;
            todoList.appendChild(newTodo);
        });
    }

    pageContainer.appendChild(todoList);
    return pageContainer;
};




/***/ }),

/***/ "./src/modules/controllers/projectsController.js":
/*!*******************************************************!*\
  !*** ./src/modules/controllers/projectsController.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "getDefault": () => (/* binding */ getDefault),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Project */ "./src/modules/classes/Project.js");


const projects = [new _classes_Project__WEBPACK_IMPORTED_MODULE_0__["default"]("default", "#FFFFFF")];

const addProject = (projectToAdd) => {
    if (projects.some((project) => project.name === projectToAdd.name)) return false;
    projects.push(projectToAdd);
    return true;
};

const getProjects = () => projects;

const getProject = (index) => (index >= projects.length ? false : projects[index]);

const removeProject = (index) => {
    delete projects[index];
};

const getDefault = () => projects[0];




/***/ }),

/***/ "./src/modules/controllers/todosController.js":
/*!****************************************************!*\
  !*** ./src/modules/controllers/todosController.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "getCount": () => (/* binding */ getCount),
/* harmony export */   "getTodayTodos": () => (/* binding */ getTodayTodos),
/* harmony export */   "getTodos": () => (/* binding */ getTodos),
/* harmony export */   "getTodosByProject": () => (/* binding */ getTodosByProject),
/* harmony export */   "getWeekTodos": () => (/* binding */ getWeekTodos),
/* harmony export */   "removeProjectTodos": () => (/* binding */ removeProjectTodos)
/* harmony export */ });
/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/isThisWeek */ "./node_modules/date-fns/esm/isThisWeek/index.js");


let todos = {};
let count = 0;

const addTodo = (todo) => {
    todos[todo.project.name] ? todos[todo.project.name].push(todo) : (todos[todo.project.name] = [todo]);
    count++;
};

const getTodos = () => todos;

const getTodayTodos = () => {
    return Object.values(todos)
        .flat()
        .filter((project) => {
            let now = new Date();
            return (
                now.getFullYear() === project.date.getFullYear() &&
                now.getMonth() === project.date.getMonth() &&
                now.getDay() === project.date.getDay()
            );
        });
};

const getWeekTodos = () => {
    return Object.values(todos)
        .flat()
        .filter((project) => {
            return (0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_0__["default"])(project.date);
        });
};

const getCount = () => count;

const getTodosByProject = (projectName) => {
    return todos[projectName] || null;
};

const removeProjectTodos = (project) => {
    count -= todos[project.name].length;
    delete todos[project.name];
};




/***/ }),

/***/ "./src/assets/bg.jpg":
/*!***************************!*\
  !*** ./src/assets/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bc290a3663f721eb0cb.jpg";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1075c6c7ab8f1090808.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/classes/Todo */ "./src/modules/classes/Todo.js");
/* harmony import */ var _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes/Project */ "./src/modules/classes/Project.js");
/* harmony import */ var _modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controllers/projectsController */ "./src/modules/controllers/projectsController.js");
/* harmony import */ var _modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/controllers/todosController */ "./src/modules/controllers/todosController.js");
/* harmony import */ var _modules_controllers_Dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/controllers/Dom */ "./src/modules/controllers/Dom.js");
/* harmony import */ var _modules_components_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/components/sidebar */ "./src/modules/components/sidebar.js");
/* harmony import */ var _modules_components_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/components/overlay */ "./src/modules/components/overlay.js");
/* harmony import */ var _modules_components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/components/header */ "./src/modules/components/header.js");










let workProject = new _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("work", "#DE21FA");
let uniProejct = new _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("uni", "#AFF464");
_modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.addProject(workProject);
_modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.addProject(uniProejct);
_modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.addProject(new _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("web", "#11ffdd"));
_modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.addProject(new _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("dev", "#CCB41B"));
_modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.addProject(new _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("account", "#AACCBB"));
_modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.addProject(new _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("gym", "#FF44BB"));
_modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.addProject(new _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("creative", "#6644BB"));
_modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.addProject(new _modules_classes_Project__WEBPACK_IMPORTED_MODULE_2__["default"]("ffs", "#2306BB"));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Wake up at 07:00 AM", "", _modules_controllers_projectsController__WEBPACK_IMPORTED_MODULE_3__.getDefault(), new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(
    new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"](
        "Finish Uni Work given",
        "the last due date is in the enxt tuesday so make sure you finish it very fast also the next exam will be next week",
        uniProejct,
        new Date()
    )
);
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Beat Carlos.", "Carlos is a flipping piece of shit", uniProejct, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));
_modules_controllers_todosController__WEBPACK_IMPORTED_MODULE_4__.addTodo(new _modules_classes_Todo__WEBPACK_IMPORTED_MODULE_1__["default"]("Work inside work project", "", workProject, new Date()));

document.body.appendChild((0,_modules_components_overlay__WEBPACK_IMPORTED_MODULE_7__["default"])());
document.body.appendChild((0,_modules_components_header__WEBPACK_IMPORTED_MODULE_8__["default"])());
const content = document.createElement("div");
content.classList.add("content");
content.appendChild((0,_modules_components_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"])());
content.appendChild((0,_modules_controllers_Dom__WEBPACK_IMPORTED_MODULE_5__.renderHome)());
document.body.appendChild(content);
document.body.appendChild((0,_modules_controllers_Dom__WEBPACK_IMPORTED_MODULE_5__.addTodoBtn)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUs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Z0VBQU87QUFDekMseUVBQXVCLEtBQUssNkRBQUksNEJBQTRCLCtFQUE2QjtBQUN6Rix5RUFBdUI7QUFDdkIsUUFBUSw2REFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJO0FBQ2hDLHlFQUF1QixLQUFLLDZEQUFJOztBQUVoQywwQkFBMEIsdUVBQU87QUFDakMsMEJBQTBCLHNFQUFNO0FBQ2hDO0FBQ0E7QUFDQSxvQkFBb0IsdUVBQU87QUFDM0Isb0JBQW9CLG9FQUFVO0FBQzlCO0FBQ0EsMEJBQTBCLG9FQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jbGFzc2VzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xhc3Nlcy9Ub2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvYWRkVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2hvbWVDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9Eb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL3RvZG9zQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FiaW46d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsIDAsIDM2LCAwLjcpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNykgMTAwJSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuLCBvdmVybGF5O1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ2FiaW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHMgZWFzZTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIHN0eWxpbmcgdG9kbyBjYXJkcyAqL1xcblxcbi50b2RvLWNhcmQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG4gICAgYW5pbWF0aW9uOiBjYXJkLWNyZWF0aW9uIDAuNXMgZWFzZSBmb3J3YXJkcztcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBicmlnaHRuZXNzKDAuMik7XFxufVxcblxcbkBrZXlmcmFtZXMgY2FyZC1jcmVhdGlvbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4udG9kby1jYXJkLmRvbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBncmVlbnllbGxvdztcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4O1xcbn1cXG5cXG4udG9kby10aXRsZS1kYXRlLWNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4udG9kby1kYXRlLFxcbi50b2RvLXByb2plY3QsXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRlc2MtYXBwZWFyIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGVzYy1kaXNhcHBlYXIge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB9XFxufVxcblxcbi50b2RvLXNob3ctbW9yZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9kby1zaG93LW1vcmU6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIHJvdGF0ZTogLTEzNWRlZztcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4udG9kby1zaG93LW1vcmUub3Blbjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG59XFxuXFxuLm1hcmtEb25lQnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1hcmtEb25lQnRuOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW55ZWxsb3c7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcXG4gICAgcm90YXRlOiAtNDVkZWc7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tYXJrRG9uZUJ0bi5kb25lOjpiZWZvcmUge1xcbiAgICBhbmltYXRpb246IGNoZWNrYm94IDAuNXMgZWFzZSBib3RoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoZWNrYm94IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5tYXJrRG9uZUJ0bi5kb25lIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLyogc3R5bGluZyBzZGllYmFyICovXFxuLnNpZGViYXIge1xcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxufVxcblxcbi5zaWRlYmFyLmNsb3NlZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMzUwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuLnByb2plY3RzLXNlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciA+ICo6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tYWluLXNlY3Rpb24tY29udGFpbmVyLFxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMC44cmVtIDJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuLnNpZGViYXItYnRuOm5vdCguYWN0aXZlKTpub3QoLnNob3ctcHJvamVjdHMtYnRuKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG59XFxuXFxuLnNpZGViYXItYnRuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG59XFxuXFxuLnRvZ2dsZS1zaWRlYmFyLWJ0bi5hYnNvbHV0ZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLnRvZ2dsZS1zaWRlYmFyLWJ0biB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1zaWRlYmFyLWJ0biA+IGRpdiB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLWNvbnRhaW5lciAqLFxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lciAqIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbi5zaG93LXByb2plY3RzLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHotaW5kZXg6IDg7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2hvdy1wcm9qZWN0cy1idG46OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwLjVyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4uc2hvdy1wcm9qZWN0cy1idG4ub3Blbjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwMCUsIC01MCUpIHJvdGF0ZSgxMzVkZWcpO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdC1jaXJjbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByb2plY3QtY29udCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcbi5wcm9qZWN0LWNvbnQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ob3ZlcikgIWltcG9ydGFudDtcXG59XFxuLnByb2plY3QtY29udC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hY3RpdmUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wcm9qZWN0LWNpcmNsZSB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogc3R5bGluZyBvdXIgcGFnZXMgKi9cXG4ucGFnZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuLnBhZ2UtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIC50b2dnbGUtc2lkZWJhci1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMDtcXG59XFxuLnBhZ2UtdGl0bGUge1xcbiAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBjb250ZW50OiBcXFwiK1xcXCI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3R0b206IDYlO1xcbiAgICByaWdodDogOCU7XFxuICAgIHdpZHRoOiAzLjVyZW07XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxuICAgIHotaW5kZXg6IDE1O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCAwIGJsYWNrO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggLTVweCB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4vKiBzdHlsaW5nIGFkZCB0b2RvIGNvbnRhaW5lciAqL1xcbi5maXhlZC1jZW50ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBhbmltYXRpb24tbmFtZTogYWRkLXRvZG8tYXBwZWFyO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICB6LWluZGV4OiAxNDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYWRkLXRvZG8tYXBwZWFyIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MHZ3KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFkZC10b2RvLWRpc2FwcGVhciB7XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcwdncpO1xcbiAgICB9XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuLmFkZC10b2RvLWZvcm0gPiBkaXYge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAyZW07XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIC5mb3JtLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSBpbnB1dCxcXG4uYWRkLXRvZG8tZm9ybSBzZWxlY3QsXFxuLmFkZC10b2RvLWZvcm0gdGV4dGFyZWEsXFxuLmFkZC10b2RvLWZvcm0gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNCk7XFxufVxcblxcbi5hZGQtdG9kby1kZXNjIHtcXG4gICAgcGFkZGluZzogNHJlbTtcXG59XFxuXFxuI2FkZC10b2RvLXN1Ym1pdCB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAxMCwgMTE0KTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4jYWRkLXRvZG8tc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAyMywgMjA5KTtcXG59XFxuI2Nsb3NlLWFkZC10b2RvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgdHJhbnNpdGlvbjogMC44cyBlYXNlO1xcbiAgICB6LWluZGV4OiAtNTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZlIHtcXG4gICAgei1pbmRleDogODg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLyogc3R5bGluZyB0aGUgaG9tZSBwYWdlICovXFxuLmhvbWUtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbiAgICBhbmltYXRpb246IGNhcmQtY3JlYXRpb24gMC41cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4uaG9tZS1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uaG9tZS1jYXJkLXR4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZS1jYXJkLW51bSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uaG9tZS1ncmVldGluZyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhvbWUtY2FyZHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdhcDogNDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcm9qZWN0LWNvbG9yLWlucHV0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDMwcHg7ICovXFxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDQwJSBhdCA1MCUgNTAlKTtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dDpmb2N1cyB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0NXB4IC0ycHggcmdiKDg4LCAxNDYsIDApO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWlucHV0LmludmFsaWQge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDVweCAtMnB4IHJlZDtcXG59XFxuXFxuLyogc3R5bGluZyB0aGUgaGVhZGVyICovXFxuLmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNyk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTksIDc5LCAyNTUpO1xcbn1cXG5cXG4ubG9nby1jb250IHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG4ubG9nby1jb250OmhvdmVyIHtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMzVweCByZ2IoMTk5LCA3OSwgMjU1KSk7XFxufVxcblxcbi5sb2dvLXRleHQge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XFxuICAgIGNvbG9yOiByZ2IoMTQwLCAwLCAyNTUpO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7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QjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhYmluOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsIDAsIDM2LCAwLjcpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNykgMTAwJSksIHVybChcXFwiLi4vYXNzZXRzL2JnLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbiwgb3ZlcmxheTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNhYmluXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiBzdHlsaW5nIHRvZG8gY2FyZHMgKi9cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMS41cmVtIDA7XFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XFxuICAgIGFuaW1hdGlvbjogY2FyZC1jcmVhdGlvbiAwLjVzIGVhc2UgZm9yd2FyZHM7XFxufVxcblxcbi50b2RvLWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcygwLjIpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNhcmQtY3JlYXRpb24ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLnRvZG8tY2FyZC5kb25lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtZGF0ZS1jb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiA0MCU7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG59XFxuXFxuLnRvZG8tZGF0ZSxcXG4udG9kby1wcm9qZWN0LFxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG59XFxuXFxuQGtleWZyYW1lcyBkZXNjLWFwcGVhciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRlc2MtZGlzYXBwZWFyIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgfVxcbn1cXG5cXG4udG9kby1zaG93LW1vcmUge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnRvZG8tc2hvdy1tb3JlOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICByb3RhdGU6IC0xMzVkZWc7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuLnRvZG8tc2hvdy1tb3JlLm9wZW46OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxufVxcblxcbi5tYXJrRG9uZUJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tYXJrRG9uZUJ0bjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGdyZWVueWVsbG93O1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNsYXRlOiAtNTAlIC01MCU7XFxuICAgIHJvdGF0ZTogLTQ1ZGVnO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubWFya0RvbmVCdG4uZG9uZTo6YmVmb3JlIHtcXG4gICAgYW5pbWF0aW9uOiBjaGVja2JveCAwLjVzIGVhc2UgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyBjaGVja2JveCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4ubWFya0RvbmVCdG4uZG9uZSB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbi8qIHN0eWxpbmcgc2RpZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcbn1cXG5cXG4uc2lkZWJhci5jbG9zZWQge1xcbiAgICBtYXJnaW4tbGVmdDogLTM1MHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgPiAqOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGViYXItYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbSAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbi5zaWRlYmFyLWJ0bjpub3QoLmFjdGl2ZSk6bm90KC5zaG93LXByb2plY3RzLWJ0bik6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5zaWRlYmFyLWJ0bi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcblxcbi50b2dnbGUtc2lkZWJhci1idG4uYWJzb2x1dGUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi50b2dnbGUtc2lkZWJhci1idG4ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2dnbGUtc2lkZWJhci1idG4gPiBkaXYge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1jb250YWluZXIgKixcXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXIgKiB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG4uc2hvdy1wcm9qZWN0cy1idG4ge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB6LWluZGV4OiA4O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNob3ctcHJvamVjdHMtYnRuOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwMCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuLnNob3ctcHJvamVjdHMtYnRuLm9wZW46OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMDAlLCAtNTAlKSByb3RhdGUoMTM1ZGVnKTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtY2lyY2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG4ucHJvamVjdC1jb250OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctaG92ZXIpICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9qZWN0LWNvbnQuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdC1jaXJjbGUge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIHN0eWxpbmcgb3VyIHBhZ2VzICovXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcbi5wYWdlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciAudG9nZ2xlLXNpZGViYXItYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcbi5wYWdlLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5mby10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgY29udGVudDogXFxcIitcXFwiO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm90dG9tOiA2JTtcXG4gICAgcmlnaHQ6IDglO1xcbiAgICB3aWR0aDogMy41cmVtO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbiAgICB6LWluZGV4OiAxNTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMCBibGFjaztcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IC01cHggd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuLyogc3R5bGluZyBhZGQgdG9kbyBjb250YWluZXIgKi9cXG4uZml4ZWQtY2VudGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFkZC10b2RvLWFwcGVhcjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgei1pbmRleDogMTQwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFkZC10b2RvLWFwcGVhciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNzB2dyk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhZGQtdG9kby1kaXNhcHBlYXIge1xcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MHZ3KTtcXG4gICAgfVxcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICB9XFxufVxcblxcbi5hZGQtdG9kby1mb3JtID4gZGl2IHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMmVtO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSAuZm9ybS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0gaW5wdXQsXFxuLmFkZC10b2RvLWZvcm0gc2VsZWN0LFxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbi5hZGQtdG9kby1mb3JtIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbn1cXG5cXG4uYWRkLXRvZG8tZGVzYyB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxufVxcblxcbiNhZGQtdG9kby1zdWJtaXQge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMTAsIDExNCk7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuI2FkZC10b2RvLXN1Ym1pdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMjMsIDIwOSk7XFxufVxcbiNjbG9zZS1hZGQtdG9kbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIHRyYW5zaXRpb246IDAuOHMgZWFzZTtcXG4gICAgei1pbmRleDogLTU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDg4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi8qIHN0eWxpbmcgdGhlIGhvbWUgcGFnZSAqL1xcbi5ob21lLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gICAgYW5pbWF0aW9uOiBjYXJkLWNyZWF0aW9uIDAuNXMgZWFzZSBmb3J3YXJkcztcXG59XFxuLmhvbWUtY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmhvbWUtY2FyZC10eHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvbWUtY2FyZC1udW0ge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmhvbWUtZ3JlZXRpbmcge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5ob21lLWNhcmRzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG4ucHJvamVjdC1uYW1lLWlucHV0IHtcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJvamVjdC1jb2xvci1pbnB1dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAzMHB4OyAqL1xcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg0MCUgYXQgNTAlIDUwJSk7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtaW5wdXQ6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNDVweCAtMnB4IHJnYig4OCwgMTQ2LCAwKTtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dC5pbnZhbGlkIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDQ1cHggLTJweCByZWQ7XFxufVxcblxcbi8qIHN0eWxpbmcgdGhlIGhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDEyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjcpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk5LCA3OSwgMjU1KTtcXG59XFxuXFxuLmxvZ28tY29udCB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuLmxvZ28tY29udDpob3ZlciB7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDM1cHggcmdiKDE5OSwgNzksIDI1NSkpO1xcbn1cXG5cXG4ubG9nby10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBjb2xvcjogcmdiKDE0MCwgMCwgMjU1KTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb2xvcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgc2V0Q29sb3IobmV3Q29sb3IpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IG5ld0NvbG9yO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xuICAgIHN0YXRpYyBjcHQgPSAwO1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgZGF0ZSkge1xuICAgICAgICB0aGlzLmlkID0gKytUb2RvLmNwdDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdChuZXdQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0RGF0ZShuZXdEYXRlKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIG1hcmtEb25lKCkge1xuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgIH1cblxuICAgIG1hcmtVbmRvbmUoKSB7XG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldFByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgYWRkVG9kbyBhcyBhZGRUb2RvQmFja2VuZCB9IGZyb20gXCIuLi9jb250cm9sbGVycy90b2Rvc0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHRvZ2dsZUJsYWNrT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuLi9jbGFzc2VzL1RvZG9cIjtcblxuY29uc3QgY2xvc2VBZGRUb2RvID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tZm9ybVwiKS5zdHlsZS5hbmltYXRpb25OYW1lID0gXCJhZGQtdG9kby1kaXNhcHBlYXJcIjtcbiAgICB0b2dnbGVCbGFja092ZXJsYXkoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1mb3JtXCIpPy5yZW1vdmUoKTtcbiAgICB9LCA5MDApO1xufTtcblxuY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkZXNjVHh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBjb25zdCBkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHByb2plY3RzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2xvc2VPdmVybGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGVtcHR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBlbXB0eU9wdGlvbi50ZXh0Q29udGVudCA9IFwiUGxlYXNlIHNlbGVjdCBhIHByb2plY3RcIjtcbiAgICBlbXB0eU9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgcHJvamVjdHNTZWxlY3QuYXBwZW5kQ2hpbGQoZW1wdHlPcHRpb24pO1xuXG4gICAgZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKT8uZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IHByb2plY3QubmFtZSkgcHJvamVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHByb2plY3RzU2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH0pO1xuXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IFRhc2tcIjtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZVwiO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBhZGRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBjbG9zZU92ZXJsYXlCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcImVudGVyIHRvZG8gdGl0bGUgaGVyZVwiO1xuXG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZGVzY1R4dEFyZWEucm93cyA9IDQ7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBhZGRUb2RvQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGNsb3NlT3ZlcmxheUJ0bi50eXBlID0gXCJidXR0b25cIjtcblxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWZvcm1cIiwgXCJmaXhlZC1jZW50ZXJcIik7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlXCIpO1xuICAgIGRlc2NUeHRBcmVhLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1kZXNjXCIpO1xuICAgIGFkZFRvZG9CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtdG9kby1zdWJtaXRcIik7XG4gICAgY2xvc2VPdmVybGF5QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xvc2UtYWRkLXRvZG9cIik7XG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250YWluZXJcIik7XG5cbiAgICBjbG9zZU92ZXJsYXlCdG4ub25jbGljayA9IGNsb3NlQWRkVG9kbztcblxuICAgIGZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkZXNjVHh0QXJlYS52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1NlbGVjdC52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKHRpdGxlICYmIGRlc2MgJiYgcHJvamVjdCAmJiBkYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2MsIGdldFByb2plY3QocHJvamVjdCksIG5ldyBEYXRlKGRhdGUpKTtcbiAgICAgICAgICAgIGFkZFRvZG9CYWNrZW5kKG5ld1RvZG8pO1xuICAgICAgICAgICAgY2xvc2VBZGRUb2RvKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBkLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgZDIuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBkMi5hcHBlbmRDaGlsZChkZXNjVHh0QXJlYSk7XG5cbiAgICBkMy5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGQzLmFwcGVuZENoaWxkKHByb2plY3RzU2VsZWN0KTtcblxuICAgIGQ0LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZDQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZDIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZDMpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZDQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkVG9kb0J0bik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZU92ZXJsYXlCdG4pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG5hZGRUb2RvKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFRvZG87XG4iLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2xvZ28ucG5nXCI7XG5pbXBvcnQgeyBvcGVuU2lkZWJhckJ0biB9IGZyb20gXCIuLi9jb250cm9sbGVycy9Eb21cIjtcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9nb0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxvZ29UeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBsb2dvSW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nb1wiKTtcbiAgICBsb2dvVHh0LmNsYXNzTGlzdC5hZGQoXCJsb2dvLXRleHRcIik7XG4gICAgbG9nb0NvbnQuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udFwiKTtcblxuICAgIGxvZ29UeHQudGV4dENvbnRlbnQgPSBcIkdhbGFjdGljIFRvZG9zXCI7XG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xuXG4gICAgbG9nb0NvbnQuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgbG9nb0NvbnQuYXBwZW5kQ2hpbGQobG9nb1R4dCk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQob3BlblNpZGViYXJCdG4oKSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29Db250KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iLCJjb25zdCBjYXJkID0gKHR4dCwgbnVtLCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNhcmRUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBjYXJkTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJob21lLWNhcmRcIik7XG4gICAgY2FyZFR4dC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jYXJkLXR4dFwiKTtcbiAgICBjYXJkTnVtLmNsYXNzTGlzdC5hZGQoXCJob21lLWNhcmQtbnVtXCIpO1xuICAgIGNhcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcbiAgICBjYXJkTnVtLnN0eWxlLmNvbG9yID0gY29sb3I7XG5cbiAgICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1ob3Zlci1jb2xvclwiLCBjb2xvciArIFwiMUZcIik7XG5cbiAgICBjYXJkVHh0LnRleHRDb250ZW50ID0gdHh0O1xuICAgIGNhcmROdW0udGV4dENvbnRlbnQgPSBudW07XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUeHQpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZE51bSk7XG4gICAgcmV0dXJuIGNhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkO1xuIiwiY29uc3Qgb3ZlcmxheSA9ICgpID0+IHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib3ZlcmxheVwiKTtcbiAgICBvdmVybGF5Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLWZvcm1cIikgfHwgZS5rZXkgPT09IFwiRXNjYXBlXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWFkZC10b2RvXCIpLmNsaWNrKCkgOiBcIlwiO1xuICAgIH07XG4gICAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG5jb25zdCB0b2dnbGVCbGFja092ZXJsYXkgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIikuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcblxuZXhwb3J0IHsgb3ZlcmxheSwgdG9nZ2xlQmxhY2tPdmVybGF5IH07XG5leHBvcnQgZGVmYXVsdCBvdmVybGF5O1xuIiwiY29uc3QgcHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb2plY3RDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBwcm9qZWN0Q29udC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250XCIpO1xuICAgIHByb2plY3RDaXJjbGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2lyY2xlXCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG5cbiAgICBwcm9qZWN0Q29udC5zdHlsZS5ib3JkZXJDb2xvciA9IHByb2plY3QuY29sb3I7XG4gICAgcHJvamVjdENpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9qZWN0LmNvbG9yO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgcHJvamVjdENvbnQuYXBwZW5kQ2hpbGQocHJvamVjdENpcmNsZSk7XG4gICAgcHJvamVjdENvbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgcHJvamVjdENvbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnLWhvdmVyXCIsIHByb2plY3QuY29sb3IgKyBcIjJGXCIpO1xuICAgIHByb2plY3RDb250LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZy1hY3RpdmVcIiwgcHJvamVjdC5jb2xvciArIFwiOEZcIik7XG5cbiAgICByZXR1cm4gcHJvamVjdENvbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xuIiwiaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyXCI7XG5pbXBvcnQgeyByZW5kZXJQYWdlLCByZW5kZXJIb21lIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL0RvbVwiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFByb2plY3RDaXJjbGUuY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWNpcmNsZVwiKTtcbiAgICBhZGRQcm9qZWN0Q2lyY2xlLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q2lyY2xlKTtcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0eHQudGV4dENvbnRlbnQgPSBcIkFkZCBuZXdcIjtcblxuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENpcmNsZSk7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZCh0eHQpO1xuICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udFwiLCBcInNpZGViYXItYnRuXCIsIFwiYWRkLW5ldy1wcm9qZWN0LWJ0blwiKTtcbiAgICByZXR1cm4gYWRkUHJvamVjdDtcbn07XG5cbmNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlZFwiKTtcblxuY29uc3Qgc2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtYWluU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb2plY3RzU2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2hvd1Byb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzaWRlYmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuICAgIG1haW5TZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLXNlY3Rpb24tY29udGFpbmVyXCIpO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnRuXCIpO1xuICAgIHRvZGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJ0blwiKTtcbiAgICB3ZWVrQnRuLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJ0blwiKTtcblxuICAgIGhvbWVCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lLWJ0blwiKTtcbiAgICB0b2RheUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZGF5LWJ0blwiKTtcbiAgICB3ZWVrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2Vlay1idG5cIik7XG4gICAgcHJvamVjdHNTZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lclwiKTtcbiAgICBzaG93UHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZChcInNob3ctcHJvamVjdHMtYnRuXCIsIFwic2lkZWJhci1idG5cIik7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWNvbnRhaW5lclwiKTtcblxuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICB0b2RheUJ0bi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICB3ZWVrQnRuLnRleHRDb250ZW50ID0gXCJXZWVrXCI7XG4gICAgc2hvd1Byb2plY3RzQnRuLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgdG9kYXlCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWJ0blwiKS5mb3JFYWNoKChiKSA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjEpXCI7XG4gICAgICAgIHRvZGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5hcHBlbmRDaGlsZChyZW5kZXJQYWdlKFwiVG9kYXlcIikpO1xuICAgIH07XG5cbiAgICB3ZWVrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1idG5cIikuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgd2Vla0J0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjEpXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5hcHBlbmRDaGlsZChyZW5kZXJQYWdlKFwiV2Vla1wiKSk7XG4gICAgfTtcblxuICAgIGhvbWVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWJ0blwiKS5mb3JFYWNoKChiKSA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpLmFwcGVuZENoaWxkKHJlbmRlckhvbWUoKSk7XG4gICAgfTtcblxuICAgIHNob3dQcm9qZWN0c0J0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJvcGVuXCIpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgIEFycmF5LmZyb20ocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbikuZm9yRWFjaCgoYykgPT4gYy5yZW1vdmUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgIGdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdE9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdEJ0biA9IHByb2plY3QocHJvamVjdE9iaik7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1idG5cIiwgXCJidG5cIiwgXCJwcm9qZWN0LWJ0blwiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0T2JqLm5hbWUgPT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1jb250YWluZXJcIik/LmdldEF0dHJpYnV0ZShcImlkXCIpKSBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWJ0blwiKS5mb3JFYWNoKChiKSA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcm9qZWN0T2JqLmNvbG9yICsgXCI0RlwiO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuYXBwZW5kQ2hpbGQocmVuZGVyUGFnZShwcm9qZWN0T2JqLm5hbWUpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bigpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtYWluU2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICBtYWluU2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQod2Vla0J0bik7XG5cbiAgICBwcm9qZWN0c1NlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd1Byb2plY3RzQnRuKTtcbiAgICBwcm9qZWN0c1NlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4gICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluU2VjdGlvbkNvbnRhaW5lcik7XG4gICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c1NlY3Rpb25Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIHNpZGViYXJDb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xuZXhwb3J0IHsgdG9nZ2xlU2lkZWJhciB9O1xuIiwiY29uc3QgdG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBkb25lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0aXRsZU5kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzaG93TW9yZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmRcIik7XG4gICAgdG9kb0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRvZG8uaWQpO1xuICAgIGRvbmVCdG4uY2xhc3NMaXN0LmFkZChcIm1hcmtEb25lQnRuXCIpO1xuICAgIHRpdGxlTmRhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGUtZGF0ZS1jb250XCIpO1xuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICB0b2RvRGVzYy5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICB0b2RvUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9qZWN0XCIpO1xuICAgIHRvZG9EYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgc2hvd01vcmVCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tc2hvdy1tb3JlXCIpO1xuXG4gICAgdG9kb1Byb2plY3Quc3R5bGUuY29sb3IgPSB0b2RvLnByb2plY3QuY29sb3I7XG4gICAgdG9kb0RhdGUuc3R5bGUuY29sb3IgPSB0b2RvLnByb2plY3QuY29sb3I7XG5cbiAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRvZG9EZXNjLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICB0b2RvUHJvamVjdC50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdC5uYW1lO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gdG9kby5kYXRlLnRvVVRDU3RyaW5nKCkuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIDQpO1xuXG4gICAgdG9kb0NvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmdcIiwgdG9kby5wcm9qZWN0LmNvbG9yKTtcblxuICAgIHRvZG9Db250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUuaW5jbHVkZXMoXCJtYXJrRG9uZUJ0blwiKSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRvbmVcIikpIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb25lXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdG9kb0NhcmQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gdGhpcy5jaGlsZHJlblsxXS5jaGlsZHJlblsyXTtcbiAgICAgICAgICAgIGNvbnN0IGRvbmVCdG4gPSB0aGlzLmNoaWxkcmVuWzNdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uc3R5bGUuYW5pbWF0aW9uID0gXCJkZXNjLWFwcGVhciAuNHMgZWFzZSBib3RoXCI7XG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgICAgICAgIHRvZG9DYXJkLnN0eWxlLm1heEhlaWdodCA9IHRvZG9DYXJkLmNsaWVudEhlaWdodCArIHRvZG9DYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLmNsaWVudEhlaWdodCArIDQwICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgZG9uZUJ0bi5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnN0eWxlLmFuaW1hdGlvbiA9IFwiZGVzYy1kaXNhcHBlYXIgLjJzIGVhc2UgYm90aFwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgZG9uZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICB0b2RvQ2FyZC5zdHlsZS5tYXhIZWlnaHQgPSB0b2RvQ2FyZC5jbGllbnRIZWlnaHQgLSB0b2RvQ2FyZC5jaGlsZHJlblsxXS5jaGlsZHJlblsyXS5jbGllbnRIZWlnaHQgLSAyMCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGl0bGVOZGF0ZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgIHRpdGxlTmRhdGUuYXBwZW5kQ2hpbGQodG9kb0RhdGUpO1xuICAgIHRpdGxlTmRhdGUuYXBwZW5kQ2hpbGQodG9kb0Rlc2MpO1xuXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lQnRuKTtcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTmRhdGUpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1Byb2plY3QpO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd01vcmVCdG4pO1xuXG4gICAgcmV0dXJuIHRvZG9Db250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvO1xuIiwiaW1wb3J0IHsgZ2V0VG9kYXlUb2RvcywgZ2V0V2Vla1RvZG9zLCBnZXRUb2Rvc0J5UHJvamVjdCB9IGZyb20gXCIuL3RvZG9zQ29udHJvbGxlclwiO1xuaW1wb3J0IHRvZG8gZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9kb1wiO1xuaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWRkVG9kb1wiO1xuaW1wb3J0IHsgdG9nZ2xlQmxhY2tPdmVybGF5IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvb3ZlcmxheVwiO1xuaW1wb3J0IHsgdG9nZ2xlU2lkZWJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCBob21lQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lQ2FyZFwiO1xuXG5jb25zdCBhZGRUb2RvQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1idG5cIiwgXCJidG5cIik7XG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRvZG8oKSkgJiYgdG9nZ2xlQmxhY2tPdmVybGF5KCk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgcmV0dXJuIGJ0bjtcbn07XG5cbmNvbnN0IG9wZW5TaWRlYmFyQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IG9wZW5TaWRlYmFyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBvcGVuU2lkZWJhckJ0bi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLXNpZGViYXItYnRuXCIpO1xuICAgIG9wZW5TaWRlYmFyQnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICAgIG9wZW5TaWRlYmFyQnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICAgIG9wZW5TaWRlYmFyQnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICAgIG9wZW5TaWRlYmFyQnRuLm9uY2xpY2sgPSAoKSA9PiB0b2dnbGVTaWRlYmFyKCk7XG4gICAgcmV0dXJuIG9wZW5TaWRlYmFyQnRuO1xufTtcblxuY29uc3QgcmVuZGVySG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCByZW5kZXJIb21lQ2FyZHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9zQ3JlYXRlZCA9IGhvbWVDYXJkKFwiVGFza3MgQ3JlYXRlZFwiLCAwLCBcIiM3QjAwREJcIik7XG4gICAgICAgIGNvbnN0IHRvZG9zQ29tcGxldGVkID0gaG9tZUNhcmQoXCJUYXNrcyBDb21wbGV0ZWRcIiwgMCwgXCIjODFGRjQ2XCIpO1xuICAgICAgICBjb25zdCB0b2Rvc05vdENvbXBsZXRlZCA9IGhvbWVDYXJkKFwiVGFza3Mgbm9uIGNvbXBsZXRlZFwiLCAwLCBcIiNEQjAwMDBcIik7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25QZXJjZW50YWdlID0gaG9tZUNhcmQoXCJDb21wbGV0aW9uIHJhdGVcIiwgXCIwJVwiLCBcIiMwRkM1RkZcIik7XG4gICAgICAgIHJldHVybiBbdG9kb3NDcmVhdGVkLCB0b2Rvc0NvbXBsZXRlZCwgdG9kb3NOb3RDb21wbGV0ZWQsIGNvbXBsZXRpb25QZXJjZW50YWdlXTtcbiAgICB9O1xuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBncmVldGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBob21lQ2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGFnZS1jb250YWluZXJcIiwgXCJob21lXCIpO1xuICAgIGhvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGFnZS10aXRsZVwiKTtcbiAgICBncmVldGluZy5jbGFzc0xpc3QuYWRkKFwiaG9tZS1ncmVldGluZ1wiKTtcbiAgICBob21lQ2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY2FyZHMtY29udGFpbmVyXCIpO1xuXG4gICAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgYmVhdXRpZnVsIEh1bWFuXCI7XG4gICAgcmVuZGVySG9tZUNhcmRzKCkuZm9yRWFjaCgoaG9tZUNhcmQpID0+IGhvbWVDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQ2FyZCkpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyZWV0aW5nKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDYXJkc0NvbnRhaW5lcik7XG4gICAgcmV0dXJuIHBhZ2VDb250YWluZXI7XG59O1xuXG5jb25zdCByZW5kZXJQYWdlID0gKHBhZ2VOYW1lKSA9PiB7XG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGFnZS1jb250YWluZXJcIik7XG4gICAgcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwYWdlLXRpdGxlXCIpO1xuICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3RcIik7XG5cbiAgICBwYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIHBhZ2VOYW1lKTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBwYWdlTmFtZTtcblxuICAgIGxldCB0b2Rvc1RvRGlzcGxheSA9IG51bGw7XG4gICAgaWYgKHBhZ2VOYW1lID09PSBcIlRvZGF5XCIpIHRvZG9zVG9EaXNwbGF5ID0gZ2V0VG9kYXlUb2RvcygpO1xuICAgIGVsc2UgaWYgKHBhZ2VOYW1lID09PSBcIldlZWtcIikgdG9kb3NUb0Rpc3BsYXkgPSBnZXRXZWVrVG9kb3MoKTtcbiAgICBlbHNlIHRvZG9zVG9EaXNwbGF5ID0gZ2V0VG9kb3NCeVByb2plY3QocGFnZU5hbWUpO1xuXG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuXG4gICAgaWYgKCF0b2Rvc1RvRGlzcGxheSkge1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0LmNsYXNzTGlzdC5hZGQoXCJpbmZvLXRleHRcIik7XG4gICAgICAgIHQuaW5uZXJUZXh0ID0gXCJObyB0b2RvcyBGb3VuZCBpbiBcIiArIHBhZ2VOYW1lO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2Rvc1RvRGlzcGxheS5mb3JFYWNoKCh0b2RvT2JqLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvID0gdG9kbyh0b2RvT2JqKTtcbiAgICAgICAgICAgIG5ld1RvZG8uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtpIC8gMTB9c2A7XG4gICAgICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG4gICAgcmV0dXJuIHBhZ2VDb250YWluZXI7XG59O1xuXG5leHBvcnQgeyByZW5kZXJQYWdlLCByZW5kZXJIb21lLCBhZGRUb2RvQnRuLCBvcGVuU2lkZWJhckJ0biB9O1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL2NsYXNzZXMvUHJvamVjdFwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtuZXcgUHJvamVjdChcImRlZmF1bHRcIiwgXCIjRkZGRkZGXCIpXTtcblxuY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0VG9BZGQpID0+IHtcbiAgICBpZiAocHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0VG9BZGQubmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3RUb0FkZCk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG5jb25zdCBnZXRQcm9qZWN0ID0gKGluZGV4KSA9PiAoaW5kZXggPj0gcHJvamVjdHMubGVuZ3RoID8gZmFsc2UgOiBwcm9qZWN0c1tpbmRleF0pO1xuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgZGVsZXRlIHByb2plY3RzW2luZGV4XTtcbn07XG5cbmNvbnN0IGdldERlZmF1bHQgPSAoKSA9PiBwcm9qZWN0c1swXTtcblxuZXhwb3J0IHsgYWRkUHJvamVjdCwgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldERlZmF1bHQsIHJlbW92ZVByb2plY3QgfTtcbiIsImltcG9ydCBpc1RoaXNXZWVrIGZyb20gXCJkYXRlLWZucy9pc1RoaXNXZWVrXCI7XG5cbmxldCB0b2RvcyA9IHt9O1xubGV0IGNvdW50ID0gMDtcblxuY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3NbdG9kby5wcm9qZWN0Lm5hbWVdID8gdG9kb3NbdG9kby5wcm9qZWN0Lm5hbWVdLnB1c2godG9kbykgOiAodG9kb3NbdG9kby5wcm9qZWN0Lm5hbWVdID0gW3RvZG9dKTtcbiAgICBjb3VudCsrO1xufTtcblxuY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcblxuY29uc3QgZ2V0VG9kYXlUb2RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0b2RvcylcbiAgICAgICAgLmZsYXQoKVxuICAgICAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgbm93LmdldEZ1bGxZZWFyKCkgPT09IHByb2plY3QuZGF0ZS5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgICAgbm93LmdldE1vbnRoKCkgPT09IHByb2plY3QuZGF0ZS5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgICAgbm93LmdldERheSgpID09PSBwcm9qZWN0LmRhdGUuZ2V0RGF5KClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xufTtcblxuY29uc3QgZ2V0V2Vla1RvZG9zID0gKCkgPT4ge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRvZG9zKVxuICAgICAgICAuZmxhdCgpXG4gICAgICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpc1RoaXNXZWVrKHByb2plY3QuZGF0ZSk7XG4gICAgICAgIH0pO1xufTtcblxuY29uc3QgZ2V0Q291bnQgPSAoKSA9PiBjb3VudDtcblxuY29uc3QgZ2V0VG9kb3NCeVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gdG9kb3NbcHJvamVjdE5hbWVdIHx8IG51bGw7XG59O1xuXG5jb25zdCByZW1vdmVQcm9qZWN0VG9kb3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvdW50IC09IHRvZG9zW3Byb2plY3QubmFtZV0ubGVuZ3RoO1xuICAgIGRlbGV0ZSB0b2Rvc1twcm9qZWN0Lm5hbWVdO1xufTtcblxuZXhwb3J0IHsgYWRkVG9kbywgZ2V0VG9kb3MsIGdldFRvZG9zQnlQcm9qZWN0LCBnZXRUb2RheVRvZG9zLCBnZXRXZWVrVG9kb3MsIHJlbW92ZVByb2plY3RUb2RvcywgZ2V0Q291bnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCBUb2RvIGZyb20gXCIuL21vZHVsZXMvY2xhc3Nlcy9Ub2RvXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL2NsYXNzZXMvUHJvamVjdFwiO1xuaW1wb3J0ICogYXMgcHJvamVjdHNDb250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyXCI7XG5pbXBvcnQgKiBhcyB0b2Rvc0NvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVycy90b2Rvc0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHJlbmRlclBhZ2UsIGFkZFRvZG9CdG4sIHJlbmRlckhvbWUgfSBmcm9tIFwiLi9tb2R1bGVzL2NvbnRyb2xsZXJzL0RvbVwiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL3NpZGViYXJcIjtcbmltcG9ydCBvdmVybGF5IGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9vdmVybGF5XCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL21vZHVsZXMvY29tcG9uZW50cy9oZWFkZXJcIjtcblxubGV0IHdvcmtQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJ3b3JrXCIsIFwiI0RFMjFGQVwiKTtcbmxldCB1bmlQcm9lamN0ID0gbmV3IFByb2plY3QoXCJ1bmlcIiwgXCIjQUZGNDY0XCIpO1xucHJvamVjdHNDb250cm9sbGVyLmFkZFByb2plY3Qod29ya1Byb2plY3QpO1xucHJvamVjdHNDb250cm9sbGVyLmFkZFByb2plY3QodW5pUHJvZWpjdCk7XG5wcm9qZWN0c0NvbnRyb2xsZXIuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIndlYlwiLCBcIiMxMWZmZGRcIikpO1xucHJvamVjdHNDb250cm9sbGVyLmFkZFByb2plY3QobmV3IFByb2plY3QoXCJkZXZcIiwgXCIjQ0NCNDFCXCIpKTtcbnByb2plY3RzQ29udHJvbGxlci5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiYWNjb3VudFwiLCBcIiNBQUNDQkJcIikpO1xucHJvamVjdHNDb250cm9sbGVyLmFkZFByb2plY3QobmV3IFByb2plY3QoXCJneW1cIiwgXCIjRkY0NEJCXCIpKTtcbnByb2plY3RzQ29udHJvbGxlci5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiY3JlYXRpdmVcIiwgXCIjNjY0NEJCXCIpKTtcbnByb2plY3RzQ29udHJvbGxlci5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiZmZzXCIsIFwiIzIzMDZCQlwiKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldha2UgdXAgYXQgMDc6MDAgQU1cIiwgXCJcIiwgcHJvamVjdHNDb250cm9sbGVyLmdldERlZmF1bHQoKSwgbmV3IERhdGUoKSkpO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8oXG4gICAgbmV3IFRvZG8oXG4gICAgICAgIFwiRmluaXNoIFVuaSBXb3JrIGdpdmVuXCIsXG4gICAgICAgIFwidGhlIGxhc3QgZHVlIGRhdGUgaXMgaW4gdGhlIGVueHQgdHVlc2RheSBzbyBtYWtlIHN1cmUgeW91IGZpbmlzaCBpdCB2ZXJ5IGZhc3QgYWxzbyB0aGUgbmV4dCBleGFtIHdpbGwgYmUgbmV4dCB3ZWVrXCIsXG4gICAgICAgIHVuaVByb2VqY3QsXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICApXG4pO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8obmV3IFRvZG8oXCJCZWF0IENhcmxvcy5cIiwgXCJDYXJsb3MgaXMgYSBmbGlwcGluZyBwaWVjZSBvZiBzaGl0XCIsIHVuaVByb2VqY3QsIG5ldyBEYXRlKCkpKTtcbnRvZG9zQ29udHJvbGxlci5hZGRUb2RvKG5ldyBUb2RvKFwiV29yayBpbnNpZGUgd29yayBwcm9qZWN0XCIsIFwiXCIsIHdvcmtQcm9qZWN0LCBuZXcgRGF0ZSgpKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldvcmsgaW5zaWRlIHdvcmsgcHJvamVjdFwiLCBcIlwiLCB3b3JrUHJvamVjdCwgbmV3IERhdGUoKSkpO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8obmV3IFRvZG8oXCJXb3JrIGluc2lkZSB3b3JrIHByb2plY3RcIiwgXCJcIiwgd29ya1Byb2plY3QsIG5ldyBEYXRlKCkpKTtcbnRvZG9zQ29udHJvbGxlci5hZGRUb2RvKG5ldyBUb2RvKFwiV29yayBpbnNpZGUgd29yayBwcm9qZWN0XCIsIFwiXCIsIHdvcmtQcm9qZWN0LCBuZXcgRGF0ZSgpKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldvcmsgaW5zaWRlIHdvcmsgcHJvamVjdFwiLCBcIlwiLCB3b3JrUHJvamVjdCwgbmV3IERhdGUoKSkpO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8obmV3IFRvZG8oXCJXb3JrIGluc2lkZSB3b3JrIHByb2plY3RcIiwgXCJcIiwgd29ya1Byb2plY3QsIG5ldyBEYXRlKCkpKTtcbnRvZG9zQ29udHJvbGxlci5hZGRUb2RvKG5ldyBUb2RvKFwiV29yayBpbnNpZGUgd29yayBwcm9qZWN0XCIsIFwiXCIsIHdvcmtQcm9qZWN0LCBuZXcgRGF0ZSgpKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldvcmsgaW5zaWRlIHdvcmsgcHJvamVjdFwiLCBcIlwiLCB3b3JrUHJvamVjdCwgbmV3IERhdGUoKSkpO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8obmV3IFRvZG8oXCJXb3JrIGluc2lkZSB3b3JrIHByb2plY3RcIiwgXCJcIiwgd29ya1Byb2plY3QsIG5ldyBEYXRlKCkpKTtcbnRvZG9zQ29udHJvbGxlci5hZGRUb2RvKG5ldyBUb2RvKFwiV29yayBpbnNpZGUgd29yayBwcm9qZWN0XCIsIFwiXCIsIHdvcmtQcm9qZWN0LCBuZXcgRGF0ZSgpKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldvcmsgaW5zaWRlIHdvcmsgcHJvamVjdFwiLCBcIlwiLCB3b3JrUHJvamVjdCwgbmV3IERhdGUoKSkpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcigpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVySG9tZSgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRvZG9CdG4oKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=