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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    background: linear-gradient(90deg, rgba(2, 0, 36, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-blend-mode: darken, overlay;\n    background-attachment: fixed;\n    background-size: cover;\n    background-color: rgba(0, 0, 0, 0.1);\n    background-position: center;\n    width: 100%;\n    height: 100vh;\n    font-family: \"Cabin\", sans-serif;\n    transition: background-color 0.4s ease;\n}\n\nbutton {\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\ntextarea {\n    resize: none;\n}\n\n/* styling todo cards */\n\n.todo-card {\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 1.5rem 0;\n    margin: 1rem auto;\n    width: 900px;\n    max-height: 100px;\n    color: white;\n    border: none;\n    outline: none;\n    backdrop-filter: blur(10px);\n    border-radius: 30px;\n    background-color: rgba(0, 0, 0, 0.4);\n    opacity: 0;\n    transform-origin: top;\n    transform: scaleY(0);\n    transition: all 0.4s ease;\n    animation: card-creation 0.5s ease forwards;\n}\n\n.todo-card:hover {\n    backdrop-filter: blur(10px) brightness(0.2);\n}\n\n@keyframes card-creation {\n    from {\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    to {\n        transform: scaleY(1);\n        opacity: 1;\n    }\n}\n\n.todo-card.done {\n    text-decoration: line-through;\n    text-decoration-color: greenyellow;\n    text-decoration-thickness: 4px;\n}\n\n.todo-title-date-cont {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 40%;\n}\n\n.todo-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: white;\n    margin-bottom: 0.2rem;\n}\n\n.todo-date,\n.todo-project,\n.todo-description {\n    font-size: 1rem;\n    font-weight: 100;\n}\n\n.todo-description {\n    display: none;\n    transform: scaleY(0);\n    transition: transform 1s ease;\n}\n\n.todo-description.show {\n    display: block;\n    visibility: visible;\n    transform: scaleY(1);\n}\n\n@keyframes desc-appear {\n    from {\n        display: none;\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    to {\n        display: block;\n        opacity: 1;\n        transform: scaleY(1);\n    }\n}\n\n@keyframes desc-disappear {\n    from {\n        display: block;\n        transform: scaleY(1);\n    }\n    to {\n        display: none;\n        transform: scaleY(0);\n    }\n}\n\n.todo-show-more {\n    padding: 0;\n    margin: 0;\n    background: none;\n    outline: none;\n    border: none;\n    position: relative;\n    font-size: 2rem;\n    color: white;\n    padding: 1rem;\n}\n\n.todo-show-more::before {\n    position: absolute;\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    border: 3px solid white;\n    border-bottom: none;\n    border-left: none;\n    rotate: -135deg;\n    transition: 0.4s ease;\n}\n\n.todo-show-more.open::before {\n    transform: rotate(-90deg);\n}\n\n.markDoneBtn {\n    position: relative;\n    border: 3px solid white;\n    background-color: transparent;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.markDoneBtn::before {\n    position: absolute;\n    content: \"\";\n    width: 15px;\n    height: 5px;\n    top: 50%;\n    left: 50%;\n    padding: 0;\n    margin: 0;\n    border: 4px solid greenyellow;\n    border-top: none;\n    border-right: none;\n    transform-origin: center;\n    translate: -50% -50%;\n    rotate: -45deg;\n    opacity: 0;\n}\n\n.markDoneBtn.done::before {\n    animation: checkbox 0.5s ease both;\n}\n\n@keyframes checkbox {\n    from {\n        transform: scaleX(0);\n        opacity: 0;\n    }\n    50% {\n        border-bottom-width: 0;\n    }\n    to {\n        transform: scaleX(1);\n        border-bottom-width: 4px;\n        opacity: 1;\n    }\n}\n\n.markDoneBtn.done {\n    border-color: greenyellow;\n}\n\n/* styling sdiebar */\n\n.sidebar {\n    z-index: 5;\n    display: grid;\n    grid-template-rows: 100px 4fr 8fr;\n    justify-items: center;\n    height: 100vh;\n    width: 350px;\n    overflow: hidden;\n    text-align: center;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(5px);\n    transition: 0.5s ease;\n}\n\n.sidebar.closed {\n    margin-left: -350px;\n}\n\n.projects-section-container {\n    width: 100%;\n    overflow-y: auto;\n}\n\n.projects-section-container::-webkit-scrollbar {\n    width: 4px;\n    background-color: transparent;\n    border-radius: 40px;\n}\n.projects-section-container::-webkit-scrollbar-thumb {\n    border-radius: 40px;\n    background-color: gray;\n}\n\n.projects-section-container::-webkit-scrollbar-thumb:hover {\n    background-color: white;\n}\n\n.projects-container > *:last-child {\n    margin-bottom: 20px;\n}\n\n.main-section-container,\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.sidebar-btn {\n    background-color: transparent;\n    color: white;\n    border: none;\n    background-color: none;\n    width: 200px;\n    border-radius: 30px;\n    padding: 0.8rem 2rem;\n    transition: 0.4s ease;\n}\n\n.sidebar-btn:not(.active):not(.show-projects-btn):hover {\n    background-color: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-btn.active {\n    background-color: rgba(255, 255, 255, 0.4);\n}\n\n.toggle-sidebar-btn.absolute {\n    position: fixed;\n}\n.toggle-sidebar-btn {\n    justify-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    background: none;\n    border: none;\n}\n\n.toggle-sidebar-btn > div {\n    width: 2rem;\n    height: 1px;\n    margin: 5px;\n    background-color: white;\n}\n\n.main-section-container *,\n.projects-section-container * {\n    font-size: 1.4rem;\n}\n.show-projects-btn {\n    position: sticky;\n    z-index: 8;\n    top: 0;\n    left: 0;\n    color: white;\n    background-color: black;\n    outline: none;\n    border: none;\n    width: 100%;\n    padding: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.show-projects-btn::before {\n    position: absolute;\n    content: \"\";\n    width: 0.5rem;\n    height: 0.5rem;\n    border: 3px solid white;\n    border-left: none;\n    border-bottom: none;\n    top: 50%;\n    transform: translate(-200%, -50%) rotate(45deg);\n    transition: 0.4s ease;\n}\n\n.show-projects-btn.open::before {\n    transform: translate(-200%, -50%) rotate(135deg);\n}\n\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.add-project-circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    font-size: 1.2rem;\n    color: black;\n    background-color: white;\n    border: none;\n    border-radius: 50%;\n}\n\n.project-cont {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    color: white;\n    border-radius: 30px;\n    transition: 0.4s ease;\n}\n.project-cont:hover {\n    background-color: var(--bg-hover) !important;\n}\n.project-cont.active {\n    background-color: var(--bg-active) !important;\n}\n\n.project-circle {\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n}\n\n/* styling our pages */\n.page-container {\n    width: 100%;\n    height: 100%;\n    padding: 4rem;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    scroll-behavior: smooth;\n}\n\n.page-container::-webkit-scrollbar {\n    width: 4px;\n    background-color: transparent;\n    border-radius: 40px;\n}\n.page-container::-webkit-scrollbar-thumb {\n    border-radius: 40px;\n    background-color: gray;\n}\n\n.page-container::-webkit-scrollbar-thumb:hover {\n    background-color: white;\n}\n\n.page-container .toggle-sidebar-btn {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n}\n.page-title {\n    margin: 2rem 0;\n    border-radius: 30px;\n    font-size: 3rem;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 900;\n    color: white;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.info-text {\n    font-size: 1.5rem;\n    color: white;\n}\n\n.add-todo-btn {\n    position: fixed;\n    content: \"+\";\n    color: black;\n    font-size: 2rem;\n    bottom: 6%;\n    right: 8%;\n    width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0 0 0 0;\n    transition: 0.4s ease;\n    z-index: 15;\n    box-shadow: 0 0 50px 0 black;\n}\n\n.add-todo-btn:hover {\n    box-shadow: 0 0 50px -5px white;\n    transition: 0.4s ease;\n}\n\n/* styling add todo container */\n\n.add-todo-form {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 30px;\n    animation-name: add-todo-appear;\n    animation-duration: 0.4s;\n    animation-timing-function: ease;\n    animation-fill-mode: forwards;\n    z-index: 140;\n}\n\n@keyframes add-todo-appear {\n    from {\n        transform: translate(0, 70vw);\n    }\n    to {\n        transform: translate(0, 0);\n    }\n}\n\n@keyframes add-todo-disappear {\n    to {\n        transform: translate(0, 70vw);\n    }\n    from {\n        transform: translate(0, 0);\n    }\n}\n\n.add-todo-form > div {\n    width: 500px;\n    display: flex;\n\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 2em;\n}\n\n.add-todo-form label {\n    font-size: 1.2rem;\n}\n\n.add-todo-form .form-title {\n    font-size: 2rem;\n    font-weight: 800;\n}\n\n.add-todo-form input,\n.add-todo-form select,\n.add-todo-form textarea,\n.add-todo-form button {\n    border: none;\n    outline: none;\n    padding: 1rem 1.5rem;\n    border-radius: 15px;\n    width: 300px;\n    background-color: rgb(224, 224, 224);\n}\n\n.add-todo-desc {\n    padding: 4rem;\n}\n\n#add-todo-submit {\n    margin-top: 25px;\n    cursor: pointer;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: white;\n    background-color: rgb(47, 10, 114);\n    transition: 0.4s ease;\n}\n\n#add-todo-submit:hover {\n    background-color: rgb(88, 23, 209);\n}\n#close-add-todo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0;\n    width: 2rem;\n    margin: 0 1rem;\n    padding: 1rem;\n    font-size: 1.3rem;\n    height: 2rem;\n    color: red;\n    font-weight: 1000;\n    background-color: transparent;\n}\n\n#overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0);\n    transition: 0.8s ease;\n    z-index: -5;\n}\n\n#overlay.active {\n    z-index: 88;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n/* styling the home page */\n.home-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 4rem;\n    gap: 20px;\n    border-radius: 30px;\n    user-select: none;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(10px);\n    border: 1px solid;\n    transition: 0.4s ease;\n    animation: card-creation 0.5s ease forwards;\n}\n.home-card:hover {\n    background-color: var(--hover-color);\n}\n\n.home-card-txt {\n    font-size: 2rem;\n    font-weight: 400;\n    color: white;\n}\n\n.home-card-num {\n    font-size: 2.5rem;\n    font-weight: 900;\n}\n\n.home-greeting {\n    color: white;\n}\n.home-cards-container {\n    width: 100%;\n    padding: 4rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 40px;\n    justify-content: center;\n    justify-items: center;\n    justify-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap\");\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    background: linear-gradient(90deg, rgba(2, 0, 36, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), url(\"../assets/bg.jpg\");\n    background-blend-mode: darken, overlay;\n    background-attachment: fixed;\n    background-size: cover;\n    background-color: rgba(0, 0, 0, 0.1);\n    background-position: center;\n    width: 100%;\n    height: 100vh;\n    font-family: \"Cabin\", sans-serif;\n    transition: background-color 0.4s ease;\n}\n\nbutton {\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\ntextarea {\n    resize: none;\n}\n\n/* styling todo cards */\n\n.todo-card {\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    padding: 1.5rem 0;\n    margin: 1rem auto;\n    width: 900px;\n    max-height: 100px;\n    color: white;\n    border: none;\n    outline: none;\n    backdrop-filter: blur(10px);\n    border-radius: 30px;\n    background-color: rgba(0, 0, 0, 0.4);\n    opacity: 0;\n    transform-origin: top;\n    transform: scaleY(0);\n    transition: all 0.4s ease;\n    animation: card-creation 0.5s ease forwards;\n}\n\n.todo-card:hover {\n    backdrop-filter: blur(10px) brightness(0.2);\n}\n\n@keyframes card-creation {\n    from {\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    to {\n        transform: scaleY(1);\n        opacity: 1;\n    }\n}\n\n.todo-card.done {\n    text-decoration: line-through;\n    text-decoration-color: greenyellow;\n    text-decoration-thickness: 4px;\n}\n\n.todo-title-date-cont {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    width: 40%;\n}\n\n.todo-title {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: white;\n    margin-bottom: 0.2rem;\n}\n\n.todo-date,\n.todo-project,\n.todo-description {\n    font-size: 1rem;\n    font-weight: 100;\n}\n\n.todo-description {\n    display: none;\n    transform: scaleY(0);\n    transition: transform 1s ease;\n}\n\n.todo-description.show {\n    display: block;\n    visibility: visible;\n    transform: scaleY(1);\n}\n\n@keyframes desc-appear {\n    from {\n        display: none;\n        opacity: 0;\n        transform: scaleY(0);\n    }\n    to {\n        display: block;\n        opacity: 1;\n        transform: scaleY(1);\n    }\n}\n\n@keyframes desc-disappear {\n    from {\n        display: block;\n        transform: scaleY(1);\n    }\n    to {\n        display: none;\n        transform: scaleY(0);\n    }\n}\n\n.todo-show-more {\n    padding: 0;\n    margin: 0;\n    background: none;\n    outline: none;\n    border: none;\n    position: relative;\n    font-size: 2rem;\n    color: white;\n    padding: 1rem;\n}\n\n.todo-show-more::before {\n    position: absolute;\n    content: \"\";\n    width: 10px;\n    height: 10px;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    border: 3px solid white;\n    border-bottom: none;\n    border-left: none;\n    rotate: -135deg;\n    transition: 0.4s ease;\n}\n\n.todo-show-more.open::before {\n    transform: rotate(-90deg);\n}\n\n.markDoneBtn {\n    position: relative;\n    border: 3px solid white;\n    background-color: transparent;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.markDoneBtn::before {\n    position: absolute;\n    content: \"\";\n    width: 15px;\n    height: 5px;\n    top: 50%;\n    left: 50%;\n    padding: 0;\n    margin: 0;\n    border: 4px solid greenyellow;\n    border-top: none;\n    border-right: none;\n    transform-origin: center;\n    translate: -50% -50%;\n    rotate: -45deg;\n    opacity: 0;\n}\n\n.markDoneBtn.done::before {\n    animation: checkbox 0.5s ease both;\n}\n\n@keyframes checkbox {\n    from {\n        transform: scaleX(0);\n        opacity: 0;\n    }\n    50% {\n        border-bottom-width: 0;\n    }\n    to {\n        transform: scaleX(1);\n        border-bottom-width: 4px;\n        opacity: 1;\n    }\n}\n\n.markDoneBtn.done {\n    border-color: greenyellow;\n}\n\n/* styling sdiebar */\n\n.sidebar {\n    z-index: 5;\n    display: grid;\n    grid-template-rows: 100px 4fr 8fr;\n    justify-items: center;\n    height: 100vh;\n    width: 350px;\n    overflow: hidden;\n    text-align: center;\n    color: white;\n    background-color: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(5px);\n    transition: 0.5s ease;\n}\n\n.sidebar.closed {\n    margin-left: -350px;\n}\n\n.projects-section-container {\n    width: 100%;\n    overflow-y: auto;\n}\n\n.projects-section-container::-webkit-scrollbar {\n    width: 4px;\n    background-color: transparent;\n    border-radius: 40px;\n}\n.projects-section-container::-webkit-scrollbar-thumb {\n    border-radius: 40px;\n    background-color: gray;\n}\n\n.projects-section-container::-webkit-scrollbar-thumb:hover {\n    background-color: white;\n}\n\n.projects-container > *:last-child {\n    margin-bottom: 20px;\n}\n\n.main-section-container,\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.sidebar-btn {\n    background-color: transparent;\n    color: white;\n    border: none;\n    background-color: none;\n    width: 200px;\n    border-radius: 30px;\n    padding: 0.8rem 2rem;\n    transition: 0.4s ease;\n}\n\n.sidebar-btn:not(.active):not(.show-projects-btn):hover {\n    background-color: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-btn.active {\n    background-color: rgba(255, 255, 255, 0.4);\n}\n\n.toggle-sidebar-btn.absolute {\n    position: fixed;\n}\n.toggle-sidebar-btn {\n    justify-self: start;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    background: none;\n    border: none;\n}\n\n.toggle-sidebar-btn > div {\n    width: 2rem;\n    height: 1px;\n    margin: 5px;\n    background-color: white;\n}\n\n.main-section-container *,\n.projects-section-container * {\n    font-size: 1.4rem;\n}\n.show-projects-btn {\n    position: sticky;\n    z-index: 8;\n    top: 0;\n    left: 0;\n    color: white;\n    background-color: black;\n    outline: none;\n    border: none;\n    width: 100%;\n    padding: 1.5rem;\n    margin-bottom: 20px;\n}\n\n.show-projects-btn::before {\n    position: absolute;\n    content: \"\";\n    width: 0.5rem;\n    height: 0.5rem;\n    border: 3px solid white;\n    border-left: none;\n    border-bottom: none;\n    top: 50%;\n    transform: translate(-200%, -50%) rotate(45deg);\n    transition: 0.4s ease;\n}\n\n.show-projects-btn.open::before {\n    transform: translate(-200%, -50%) rotate(135deg);\n}\n\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.add-project-circle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1.5rem;\n    height: 1.5rem;\n    font-size: 1.2rem;\n    color: black;\n    background-color: white;\n    border: none;\n    border-radius: 50%;\n}\n\n.project-cont {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    color: white;\n    border-radius: 30px;\n    transition: 0.4s ease;\n}\n.project-cont:hover {\n    background-color: var(--bg-hover) !important;\n}\n.project-cont.active {\n    background-color: var(--bg-active) !important;\n}\n\n.project-circle {\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n}\n\n/* styling our pages */\n.page-container {\n    width: 100%;\n    height: 100%;\n    padding: 4rem;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    scroll-behavior: smooth;\n}\n\n.page-container::-webkit-scrollbar {\n    width: 4px;\n    background-color: transparent;\n    border-radius: 40px;\n}\n.page-container::-webkit-scrollbar-thumb {\n    border-radius: 40px;\n    background-color: gray;\n}\n\n.page-container::-webkit-scrollbar-thumb:hover {\n    background-color: white;\n}\n\n.page-container .toggle-sidebar-btn {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n}\n.page-title {\n    margin: 2rem 0;\n    border-radius: 30px;\n    font-size: 3rem;\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 900;\n    color: white;\n}\n\n.todo-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.info-text {\n    font-size: 1.5rem;\n    color: white;\n}\n\n.add-todo-btn {\n    position: fixed;\n    content: \"+\";\n    color: black;\n    font-size: 2rem;\n    bottom: 6%;\n    right: 8%;\n    width: 3.5rem;\n    height: 3.5rem;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: 0 0 0 0;\n    transition: 0.4s ease;\n    z-index: 15;\n    box-shadow: 0 0 50px 0 black;\n}\n\n.add-todo-btn:hover {\n    box-shadow: 0 0 50px -5px white;\n    transition: 0.4s ease;\n}\n\n/* styling add todo container */\n\n.add-todo-form {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    translate: -50% -50%;\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 30px;\n    animation-name: add-todo-appear;\n    animation-duration: 0.4s;\n    animation-timing-function: ease;\n    animation-fill-mode: forwards;\n    z-index: 140;\n}\n\n@keyframes add-todo-appear {\n    from {\n        transform: translate(0, 70vw);\n    }\n    to {\n        transform: translate(0, 0);\n    }\n}\n\n@keyframes add-todo-disappear {\n    to {\n        transform: translate(0, 70vw);\n    }\n    from {\n        transform: translate(0, 0);\n    }\n}\n\n.add-todo-form > div {\n    width: 500px;\n    display: flex;\n\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 2em;\n}\n\n.add-todo-form label {\n    font-size: 1.2rem;\n}\n\n.add-todo-form .form-title {\n    font-size: 2rem;\n    font-weight: 800;\n}\n\n.add-todo-form input,\n.add-todo-form select,\n.add-todo-form textarea,\n.add-todo-form button {\n    border: none;\n    outline: none;\n    padding: 1rem 1.5rem;\n    border-radius: 15px;\n    width: 300px;\n    background-color: rgb(224, 224, 224);\n}\n\n.add-todo-desc {\n    padding: 4rem;\n}\n\n#add-todo-submit {\n    margin-top: 25px;\n    cursor: pointer;\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: white;\n    background-color: rgb(47, 10, 114);\n    transition: 0.4s ease;\n}\n\n#add-todo-submit:hover {\n    background-color: rgb(88, 23, 209);\n}\n#close-add-todo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0;\n    width: 2rem;\n    margin: 0 1rem;\n    padding: 1rem;\n    font-size: 1.3rem;\n    height: 2rem;\n    color: red;\n    font-weight: 1000;\n    background-color: transparent;\n}\n\n#overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0);\n    transition: 0.8s ease;\n    z-index: -5;\n}\n\n#overlay.active {\n    z-index: 88;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n/* styling the home page */\n.home-card {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 4rem;\n    gap: 20px;\n    border-radius: 30px;\n    user-select: none;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(10px);\n    border: 1px solid;\n    transition: 0.4s ease;\n    animation: card-creation 0.5s ease forwards;\n}\n.home-card:hover {\n    background-color: var(--hover-color);\n}\n\n.home-card-txt {\n    font-size: 2rem;\n    font-weight: 400;\n    color: white;\n}\n\n.home-card-num {\n    font-size: 2.5rem;\n    font-weight: 900;\n}\n\n.home-greeting {\n    color: white;\n}\n.home-cards-container {\n    width: 100%;\n    padding: 4rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 40px;\n    justify-content: center;\n    justify-items: center;\n    justify-items: center;\n}\n"],"sourceRoot":""}]);
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

    form.classList.add("add-todo-form");
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
    const toggleSidebarBtn = document.createElement("button");
    const mainSectionContainer = document.createElement("div");
    const homeBtn = document.createElement("button");
    const todayBtn = document.createElement("button");
    const weekBtn = document.createElement("button");
    const projectsSectionContainer = document.createElement("div");
    const showProjectsBtn = document.createElement("button");
    const projectsContainer = document.createElement("div");

    sidebarContainer.classList.add("sidebar");
    toggleSidebarBtn.classList.add("toggle-sidebar-btn");
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

    toggleSidebarBtn.appendChild(document.createElement("div"));
    toggleSidebarBtn.appendChild(document.createElement("div"));
    toggleSidebarBtn.appendChild(document.createElement("div"));

    todayBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        todayBtn.classList.add("active");
        document.querySelector(".page-container").remove();
        document.body.appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.renderPage)("Today"));
    };

    weekBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        weekBtn.classList.add("active");
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.querySelector(".page-container").remove();
        document.body.appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.renderPage)("Week"));
    };

    homeBtn.onclick = () => {
        document.querySelectorAll(".sidebar-btn").forEach((b) => b.classList.remove("active"));
        homeBtn.classList.add("active");
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        document.querySelector(".page-container").remove();
        document.body.appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.renderHome)());
    };

    toggleSidebarBtn.onclick = () => {
        toggleSidebar();
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
                    document.body.appendChild((0,_controllers_Dom__WEBPACK_IMPORTED_MODULE_1__.renderPage)(projectObj.name));
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

    sidebarContainer.appendChild(toggleSidebarBtn);
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
    openSidebarBtn.classList.add("toggle-sidebar-btn", "absolute");
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

document.body.appendChild((0,_modules_controllers_Dom__WEBPACK_IMPORTED_MODULE_5__.openSidebarBtn)());
document.body.appendChild((0,_modules_components_sidebar__WEBPACK_IMPORTED_MODULE_6__["default"])());
document.body.appendChild((0,_modules_controllers_Dom__WEBPACK_IMPORTED_MODULE_5__.renderHome)());
document.body.appendChild((0,_modules_controllers_Dom__WEBPACK_IMPORTED_MODULE_5__.addTodoBtn)());
document.body.appendChild((0,_modules_components_overlay__WEBPACK_IMPORTED_MODULE_7__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFFBQVEsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8s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LHNCQUFzQixnRUFBTztBQUM3QixxQkFBcUIsZ0VBQU87QUFDNUIsK0VBQTZCO0FBQzdCLCtFQUE2QjtBQUM3QiwrRUFBNkIsS0FBSyxnRUFBTztBQUN6QywrRUFBNkIsS0FBSyxnRUFBTztBQUN6QywrRUFBNkIsS0FBSyxnRUFBTztBQUN6QywrRUFBNkIsS0FBSyxnRUFBTztBQUN6QywrRUFBNkIsS0FBSyxnRUFBTztBQUN6QywrRUFBNkIsS0FBSyxnRUFBTztBQUN6Qyx5RUFBdUIsS0FBSyw2REFBSSw0QkFBNEIsK0VBQTZCO0FBQ3pGLHlFQUF1QjtBQUN2QixRQUFRLDZEQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7QUFDaEMseUVBQXVCLEtBQUssNkRBQUk7O0FBRWhDLDBCQUEwQix3RUFBYztBQUN4QywwQkFBMEIsdUVBQU87QUFDakMsMEJBQTBCLG9FQUFVO0FBQ3BDLDBCQUEwQixvRUFBVTtBQUNwQywwQkFBMEIsdUVBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZVdlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NsYXNzZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jbGFzc2VzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hZGRUb2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaG9tZUNhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy9vdmVybGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29tcG9uZW50cy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL0RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWJpbjp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwgMCwgMzYsIDAuNykgMCUsIHJnYmEoMCwgMCwgMCwgMC43KSAxMDAlKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW4sIG92ZXJsYXk7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDYWJpblxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cyBlYXNlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi8qIHN0eWxpbmcgdG9kbyBjYXJkcyAqL1xcblxcbi50b2RvLWNhcmQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcXG4gICAgYW5pbWF0aW9uOiBjYXJkLWNyZWF0aW9uIDAuNXMgZWFzZSBmb3J3YXJkcztcXG59XFxuXFxuLnRvZG8tY2FyZDpob3ZlciB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KSBicmlnaHRuZXNzKDAuMik7XFxufVxcblxcbkBrZXlmcmFtZXMgY2FyZC1jcmVhdGlvbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG4udG9kby1jYXJkLmRvbmUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBncmVlbnllbGxvdztcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogNHB4O1xcbn1cXG5cXG4udG9kby10aXRsZS1kYXRlLWNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4udG9kby1kYXRlLFxcbi50b2RvLXByb2plY3QsXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRlc2MtYXBwZWFyIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZGVzYy1kaXNhcHBlYXIge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB9XFxufVxcblxcbi50b2RvLXNob3ctbW9yZSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4udG9kby1zaG93LW1vcmU6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIHJvdGF0ZTogLTEzNWRlZztcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4udG9kby1zaG93LW1vcmUub3Blbjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG59XFxuXFxuLm1hcmtEb25lQnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1hcmtEb25lQnRuOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW55ZWxsb3c7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2xhdGU6IC01MCUgLTUwJTtcXG4gICAgcm90YXRlOiAtNDVkZWc7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5tYXJrRG9uZUJ0bi5kb25lOjpiZWZvcmUge1xcbiAgICBhbmltYXRpb246IGNoZWNrYm94IDAuNXMgZWFzZSBib3RoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNoZWNrYm94IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5tYXJrRG9uZUJ0bi5kb25lIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLyogc3R5bGluZyBzZGllYmFyICovXFxuXFxuLnNpZGViYXIge1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDRmciA4ZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcbn1cXG5cXG4uc2lkZWJhci5jbG9zZWQge1xcbiAgICBtYXJnaW4tbGVmdDogLTM1MHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnByb2plY3RzLXNlY3Rpb24tY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyID4gKjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1jb250YWluZXIsXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAwLjhyZW0gMnJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4uc2lkZWJhci1idG46bm90KC5hY3RpdmUpOm5vdCguc2hvdy1wcm9qZWN0cy1idG4pOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4uc2lkZWJhci1idG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbn1cXG5cXG4udG9nZ2xlLXNpZGViYXItYnRuLmFic29sdXRlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4udG9nZ2xlLXNpZGViYXItYnRuIHtcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udG9nZ2xlLXNpZGViYXItYnRuID4gZGl2IHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYWluLXNlY3Rpb24tY29udGFpbmVyICosXFxuLnByb2plY3RzLXNlY3Rpb24tY29udGFpbmVyICoge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuLnNob3ctcHJvamVjdHMtYnRuIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgei1pbmRleDogODtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zaG93LXByb2plY3RzLWJ0bjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgaGVpZ2h0OiAwLjVyZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMDAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbi5zaG93LXByb2plY3RzLWJ0bi5vcGVuOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAwJSwgLTUwJSkgcm90YXRlKDEzNWRlZyk7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWNpcmNsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucHJvamVjdC1jb250IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuLnByb2plY3QtY29udDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWhvdmVyKSAhaW1wb3J0YW50O1xcbn1cXG4ucHJvamVjdC1jb250LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFjdGl2ZSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnByb2plY3QtY2lyY2xlIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBzdHlsaW5nIG91ciBwYWdlcyAqL1xcbi5wYWdlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbn1cXG4ucGFnZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIgLnRvZ2dsZS1zaWRlYmFyLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAwO1xcbn1cXG4ucGFnZS10aXRsZSB7XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluZm8tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hZGQtdG9kby1idG4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGNvbnRlbnQ6IFxcXCIrXFxcIjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJvdHRvbTogNiU7XFxuICAgIHJpZ2h0OiA4JTtcXG4gICAgd2lkdGg6IDMuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gICAgei1pbmRleDogMTU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IDAgYmxhY2s7XFxufVxcblxcbi5hZGQtdG9kby1idG46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCAtNXB4IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbi8qIHN0eWxpbmcgYWRkIHRvZG8gY29udGFpbmVyICovXFxuXFxuLmFkZC10b2RvLWZvcm0ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFkZC10b2RvLWFwcGVhcjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgei1pbmRleDogMTQwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFkZC10b2RvLWFwcGVhciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNzB2dyk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhZGQtdG9kby1kaXNhcHBlYXIge1xcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MHZ3KTtcXG4gICAgfVxcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICB9XFxufVxcblxcbi5hZGQtdG9kby1mb3JtID4gZGl2IHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMmVtO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSAuZm9ybS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0gaW5wdXQsXFxuLmFkZC10b2RvLWZvcm0gc2VsZWN0LFxcbi5hZGQtdG9kby1mb3JtIHRleHRhcmVhLFxcbi5hZGQtdG9kby1mb3JtIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAyMjQpO1xcbn1cXG5cXG4uYWRkLXRvZG8tZGVzYyB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxufVxcblxcbiNhZGQtdG9kby1zdWJtaXQge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMTAsIDExNCk7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuI2FkZC10b2RvLXN1Ym1pdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgMjMsIDIwOSk7XFxufVxcbiNjbG9zZS1hZGQtdG9kbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbjogMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIHRyYW5zaXRpb246IDAuOHMgZWFzZTtcXG4gICAgei1pbmRleDogLTU7XFxufVxcblxcbiNvdmVybGF5LmFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDg4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbi8qIHN0eWxpbmcgdGhlIGhvbWUgcGFnZSAqL1xcbi5ob21lLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG4gICAgYW5pbWF0aW9uOiBjYXJkLWNyZWF0aW9uIDAuNXMgZWFzZSBmb3J3YXJkcztcXG59XFxuLmhvbWUtY2FyZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmhvbWUtY2FyZC10eHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhvbWUtY2FyZC1udW0ge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmhvbWUtZ3JlZXRpbmcge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5ob21lLWNhcmRzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNc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QTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztJQUNULHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhYmluOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsIDAsIDM2LCAwLjcpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNykgMTAwJSksIHVybChcXFwiLi4vYXNzZXRzL2JnLmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbiwgb3ZlcmxheTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNhYmluXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLyogc3R5bGluZyB0b2RvIGNhcmRzICovXFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXG4gICAgd2lkdGg6IDkwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xcbiAgICBhbmltYXRpb246IGNhcmQtY3JlYXRpb24gMC41cyBlYXNlIGZvcndhcmRzO1xcbn1cXG5cXG4udG9kby1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIGJyaWdodG5lc3MoMC4yKTtcXG59XFxuXFxuQGtleWZyYW1lcyBjYXJkLWNyZWF0aW9uIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi50b2RvLWNhcmQuZG9uZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGdyZWVueWVsbG93O1xcbiAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiA0cHg7XFxufVxcblxcbi50b2RvLXRpdGxlLWRhdGUtY29udCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi50b2RvLWRhdGUsXFxuLnRvZG8tcHJvamVjdCxcXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uLnNob3cge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxufVxcblxcbkBrZXlmcmFtZXMgZGVzYy1hcHBlYXIge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBkZXNjLWRpc2FwcGVhciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICAgIH1cXG59XFxuXFxuLnRvZG8tc2hvdy1tb3JlIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi50b2RvLXNob3ctbW9yZTo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNsYXRlOiAtNTAlIC01MCU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgcm90YXRlOiAtMTM1ZGVnO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbi50b2RvLXNob3ctbW9yZS5vcGVuOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG5cXG4ubWFya0RvbmVCdG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWFya0RvbmVCdG46OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbnllbGxvdztcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIHRyYW5zbGF0ZTogLTUwJSAtNTAlO1xcbiAgICByb3RhdGU6IC00NWRlZztcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1hcmtEb25lQnRuLmRvbmU6OmJlZm9yZSB7XFxuICAgIGFuaW1hdGlvbjogY2hlY2tib3ggMC41cyBlYXNlIGJvdGg7XFxufVxcblxcbkBrZXlmcmFtZXMgY2hlY2tib3gge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLm1hcmtEb25lQnRuLmRvbmUge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4vKiBzdHlsaW5nIHNkaWViYXIgKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggNGZyIDhmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxufVxcblxcbi5zaWRlYmFyLmNsb3NlZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMzUwcHg7XFxufVxcblxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcbi5wcm9qZWN0cy1zZWN0aW9uLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIgPiAqOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uLWNvbnRhaW5lcixcXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGViYXItYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDAuOHJlbSAycmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XFxufVxcblxcbi5zaWRlYmFyLWJ0bjpub3QoLmFjdGl2ZSk6bm90KC5zaG93LXByb2plY3RzLWJ0bik6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxufVxcblxcbi5zaWRlYmFyLWJ0bi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxufVxcblxcbi50b2dnbGUtc2lkZWJhci1idG4uYWJzb2x1dGUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi50b2dnbGUtc2lkZWJhci1idG4ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi50b2dnbGUtc2lkZWJhci1idG4gPiBkaXYge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4tc2VjdGlvbi1jb250YWluZXIgKixcXG4ucHJvamVjdHMtc2VjdGlvbi1jb250YWluZXIgKiB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG4uc2hvdy1wcm9qZWN0cy1idG4ge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB6LWluZGV4OiA4O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNob3ctcHJvamVjdHMtYnRuOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMC41cmVtO1xcbiAgICBoZWlnaHQ6IDAuNXJlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwMCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuLnNob3ctcHJvamVjdHMtYnRuLm9wZW46OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMDAlLCAtNTAlKSByb3RhdGUoMTM1ZGVnKTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtY2lyY2xlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcm9qZWN0LWNvbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG4ucHJvamVjdC1jb250OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctaG92ZXIpICFpbXBvcnRhbnQ7XFxufVxcbi5wcm9qZWN0LWNvbnQuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWN0aXZlKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHJvamVjdC1jaXJjbGUge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIHN0eWxpbmcgb3VyIHBhZ2VzICovXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxufVxcbi5wYWdlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wYWdlLWNvbnRhaW5lciAudG9nZ2xlLXNpZGViYXItYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDA7XFxufVxcbi5wYWdlLXRpdGxlIHtcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5mby10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgY29udGVudDogXFxcIitcXFwiO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm90dG9tOiA2JTtcXG4gICAgcmlnaHQ6IDglO1xcbiAgICB3aWR0aDogMy41cmVtO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbiAgICB6LWluZGV4OiAxNTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDUwcHggMCBibGFjaztcXG59XFxuXFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1MHB4IC01cHggd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcXG59XFxuXFxuLyogc3R5bGluZyBhZGQgdG9kbyBjb250YWluZXIgKi9cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNsYXRlOiAtNTAlIC01MCU7XFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBhbmltYXRpb24tbmFtZTogYWRkLXRvZG8tYXBwZWFyO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICB6LWluZGV4OiAxNDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYWRkLXRvZG8tYXBwZWFyIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA3MHZ3KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFkZC10b2RvLWRpc2FwcGVhciB7XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDcwdncpO1xcbiAgICB9XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuLmFkZC10b2RvLWZvcm0gPiBkaXYge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAyZW07XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIGxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIC5mb3JtLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSBpbnB1dCxcXG4uYWRkLXRvZG8tZm9ybSBzZWxlY3QsXFxuLmFkZC10b2RvLWZvcm0gdGV4dGFyZWEsXFxuLmFkZC10b2RvLWZvcm0gYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDIyNCk7XFxufVxcblxcbi5hZGQtdG9kby1kZXNjIHtcXG4gICAgcGFkZGluZzogNHJlbTtcXG59XFxuXFxuI2FkZC10b2RvLXN1Ym1pdCB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAxMCwgMTE0KTtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbn1cXG5cXG4jYWRkLXRvZG8tc3VibWl0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCAyMywgMjA5KTtcXG59XFxuI2Nsb3NlLWFkZC10b2RvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgdHJhbnNpdGlvbjogMC44cyBlYXNlO1xcbiAgICB6LWluZGV4OiAtNTtcXG59XFxuXFxuI292ZXJsYXkuYWN0aXZlIHtcXG4gICAgei1pbmRleDogODg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLyogc3R5bGluZyB0aGUgaG9tZSBwYWdlICovXFxuLmhvbWUtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xcbiAgICBhbmltYXRpb246IGNhcmQtY3JlYXRpb24gMC41cyBlYXNlIGZvcndhcmRzO1xcbn1cXG4uaG9tZS1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uaG9tZS1jYXJkLXR4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG9tZS1jYXJkLW51bSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uaG9tZS1ncmVldGluZyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhvbWUtY2FyZHMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIHNldE5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cblxuICAgIHNldENvbG9yKG5ld0NvbG9yKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXdDb2xvcjtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgICBzdGF0aWMgY3B0ID0gMDtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGRhdGUpIHtcbiAgICAgICAgdGhpcy5pZCA9ICsrVG9kby5jcHQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRUaXRsZShuZXdUaXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldFByb2plY3QobmV3UHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgIH1cblxuICAgIHNldERhdGUobmV3RGF0ZSkge1xuICAgICAgICB0aGlzLmRhdGUgPSBuZXdEYXRlO1xuICAgIH1cblxuICAgIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBtYXJrRG9uZSgpIHtcbiAgICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBtYXJrVW5kb25lKCkge1xuICAgICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBnZXRQcm9qZWN0LCBnZXRQcm9qZWN0cyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGFkZFRvZG8gYXMgYWRkVG9kb0JhY2tlbmQgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyXCI7XG5pbXBvcnQgeyB0b2dnbGVCbGFja092ZXJsYXkgfSBmcm9tIFwiLi9vdmVybGF5XCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi4vY2xhc3Nlcy9Ub2RvXCI7XG5cbmNvbnN0IGNsb3NlQWRkVG9kbyA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLWZvcm1cIikuc3R5bGUuYW5pbWF0aW9uTmFtZSA9IFwiYWRkLXRvZG8tZGlzYXBwZWFyXCI7XG4gICAgdG9nZ2xlQmxhY2tPdmVybGF5KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tZm9ybVwiKT8ucmVtb3ZlKCk7XG4gICAgfSwgOTAwKTtcbn07XG5cbmNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgZGVzY1R4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgY29uc3QgZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBwcm9qZWN0c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsb3NlT3ZlcmxheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBlbXB0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZW1wdHlPcHRpb24udGV4dENvbnRlbnQgPSBcIlBsZWFzZSBzZWxlY3QgYSBwcm9qZWN0XCI7XG4gICAgZW1wdHlPcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3RzU2VsZWN0LmFwcGVuZENoaWxkKGVtcHR5T3B0aW9uKTtcblxuICAgIGdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBpbmRleDtcbiAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1jb250YWluZXJcIik/LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBwcm9qZWN0Lm5hbWUpIHByb2plY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBwcm9qZWN0c1NlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyBUYXNrXCI7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgY2xvc2VPdmVybGF5QnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJlbnRlciB0b2RvIHRpdGxlIGhlcmVcIjtcblxuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGRlc2NUeHRBcmVhLnJvd3MgPSA0O1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgYWRkVG9kb0J0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBjbG9zZU92ZXJsYXlCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG5cbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1mb3JtXCIpO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS10aXRsZVwiKTtcbiAgICBkZXNjVHh0QXJlYS5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvZG8tZGVzY1wiKTtcbiAgICBhZGRUb2RvQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXRvZG8tc3VibWl0XCIpO1xuICAgIGNsb3NlT3ZlcmxheUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNsb3NlLWFkZC10b2RvXCIpO1xuICAgIGluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImluZm8tY29udGFpbmVyXCIpO1xuXG4gICAgY2xvc2VPdmVybGF5QnRuLm9uY2xpY2sgPSBjbG9zZUFkZFRvZG87XG5cbiAgICBmb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICBjb25zdCBkZXNjID0gZGVzY1R4dEFyZWEudmFsdWUudHJpbSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNTZWxlY3QudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICh0aXRsZSAmJiBkZXNjICYmIHByb2plY3QgJiYgZGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjLCBnZXRQcm9qZWN0KHByb2plY3QpLCBuZXcgRGF0ZShkYXRlKSk7XG4gICAgICAgICAgICBhZGRUb2RvQmFja2VuZChuZXdUb2RvKTtcbiAgICAgICAgICAgIGNsb3NlQWRkVG9kbygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGQuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGQyLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZDIuYXBwZW5kQ2hpbGQoZGVzY1R4dEFyZWEpO1xuXG4gICAgZDMuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICBkMy5hcHBlbmRDaGlsZChwcm9qZWN0c1NlbGVjdCk7XG5cbiAgICBkNC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGQ0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGQyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGQzKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGQ0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGFkZFRvZG9CdG4pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VPdmVybGF5QnRuKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuICAgIHJldHVybiBmb3JtO1xufTtcblxuYWRkVG9kbygpO1xuXG5leHBvcnQgZGVmYXVsdCBhZGRUb2RvO1xuIiwiY29uc3QgY2FyZCA9ICh0eHQsIG51bSwgY29sb3IpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjYXJkVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgY2FyZE51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jYXJkXCIpO1xuICAgIGNhcmRUeHQuY2xhc3NMaXN0LmFkZChcImhvbWUtY2FyZC10eHRcIik7XG4gICAgY2FyZE51bS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jYXJkLW51bVwiKTtcbiAgICBjYXJkLnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3I7XG4gICAgY2FyZE51bS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXG4gICAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taG92ZXItY29sb3JcIiwgY29sb3IgKyBcIjFGXCIpO1xuXG4gICAgY2FyZFR4dC50ZXh0Q29udGVudCA9IHR4dDtcbiAgICBjYXJkTnVtLnRleHRDb250ZW50ID0gbnVtO1xuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVHh0KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmROdW0pO1xuICAgIHJldHVybiBjYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FyZDtcbiIsImNvbnN0IG92ZXJsYXkgPSAoKSA9PiB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm92ZXJsYXlcIik7XG4gICAgb3ZlcmxheS5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1mb3JtXCIpIHx8IGUua2V5ID09PSBcIkVzY2FwZVwiID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1hZGQtdG9kb1wiKS5jbGljaygpIDogXCJcIjtcbiAgICB9O1xuICAgIHJldHVybiBvdmVybGF5O1xufTtcblxuY29uc3QgdG9nZ2xlQmxhY2tPdmVybGF5ID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbmV4cG9ydCB7IG92ZXJsYXksIHRvZ2dsZUJsYWNrT3ZlcmxheSB9O1xuZXhwb3J0IGRlZmF1bHQgb3ZlcmxheTtcbiIsImNvbnN0IHByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0Q2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgcHJvamVjdENvbnQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udFwiKTtcbiAgICBwcm9qZWN0Q2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNpcmNsZVwiKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuXG4gICAgcHJvamVjdENvbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcm9qZWN0LmNvbG9yO1xuICAgIHByb2plY3RDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5jb2xvcjtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgIHByb2plY3RDb250LmFwcGVuZENoaWxkKHByb2plY3RDaXJjbGUpO1xuICAgIHByb2plY3RDb250LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgIHByb2plY3RDb250LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZy1ob3ZlclwiLCBwcm9qZWN0LmNvbG9yICsgXCIyRlwiKTtcbiAgICBwcm9qZWN0Q29udC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmctYWN0aXZlXCIsIHByb2plY3QuY29sb3IgKyBcIjhGXCIpO1xuXG4gICAgcmV0dXJuIHByb2plY3RDb250O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsImltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgcmVuZGVyUGFnZSwgcmVuZGVySG9tZSB9IGZyb20gXCIuLi9jb250cm9sbGVycy9Eb21cIjtcbmltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRQcm9qZWN0Q2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1jaXJjbGVcIik7XG4gICAgYWRkUHJvamVjdENpcmNsZS50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENpcmNsZSk7XG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdHh0LnRleHRDb250ZW50ID0gXCJBZGQgbmV3XCI7XG5cbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RDaXJjbGUpO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQodHh0KTtcbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRcIiwgXCJzaWRlYmFyLWJ0blwiLCBcImFkZC1uZXctcHJvamVjdC1idG5cIik7XG4gICAgcmV0dXJuIGFkZFByb2plY3Q7XG59O1xuXG5jb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZWRcIik7XG5cbmNvbnN0IHNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdG9nZ2xlU2lkZWJhckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbWFpblNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0c1NlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNob3dQcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2lkZWJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbiAgICB0b2dnbGVTaWRlYmFyQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtc2lkZWJhci1idG5cIik7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tc2VjdGlvbi1jb250YWluZXJcIik7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1idG5cIik7XG4gICAgdG9kYXlCdG4uY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnRuXCIpO1xuICAgIHdlZWtCdG4uY2xhc3NMaXN0LmFkZChcInNpZGViYXItYnRuXCIpO1xuXG4gICAgaG9tZUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWUtYnRuXCIpO1xuICAgIHRvZGF5QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXktYnRuXCIpO1xuICAgIHdlZWtCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWVrLWJ0blwiKTtcbiAgICBwcm9qZWN0c1NlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXNlY3Rpb24tY29udGFpbmVyXCIpO1xuICAgIHNob3dQcm9qZWN0c0J0bi5jbGFzc0xpc3QuYWRkKFwic2hvdy1wcm9qZWN0cy1idG5cIiwgXCJzaWRlYmFyLWJ0blwiKTtcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIHRvZGF5QnRuLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIHdlZWtCdG4udGV4dENvbnRlbnQgPSBcIldlZWtcIjtcbiAgICBzaG93UHJvamVjdHNCdG4udGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgICB0b2dnbGVTaWRlYmFyQnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICAgIHRvZ2dsZVNpZGViYXJCdG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gICAgdG9nZ2xlU2lkZWJhckJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblxuICAgIHRvZGF5QnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1idG5cIikuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4xKVwiO1xuICAgICAgICB0b2RheUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclBhZ2UoXCJUb2RheVwiKSk7XG4gICAgfTtcblxuICAgIHdlZWtCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWJ0blwiKS5mb3JFYWNoKChiKSA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICB3ZWVrQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJQYWdlKFwiV2Vla1wiKSk7XG4gICAgfTtcblxuICAgIGhvbWVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWJ0blwiKS5mb3JFYWNoKChiKSA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJIb21lKCkpO1xuICAgIH07XG5cbiAgICB0b2dnbGVTaWRlYmFyQnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZVNpZGViYXIoKTtcbiAgICB9O1xuXG4gICAgc2hvd1Byb2plY3RzQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShwcm9qZWN0Q29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKChjKSA9PiBjLnJlbW92ZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0T2JqLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0QnRuID0gcHJvamVjdChwcm9qZWN0T2JqKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJ0blwiLCBcImJ0blwiLCBcInByb2plY3QtYnRuXCIpO1xuICAgICAgICAgICAgICAgIHByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RPYmoubmFtZSA9PT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKT8uZ2V0QXR0cmlidXRlKFwiaWRcIikpIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItYnRuXCIpLmZvckVhY2goKGIpID0+IGIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByb2plY3RPYmouY29sb3IgKyBcIjRGXCI7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyUGFnZShwcm9qZWN0T2JqLm5hbWUpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bigpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBtYWluU2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICBtYWluU2VjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG4gICAgbWFpblNlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQod2Vla0J0bik7XG5cbiAgICBwcm9qZWN0c1NlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd1Byb2plY3RzQnRuKTtcbiAgICBwcm9qZWN0c1NlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuXG4gICAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVTaWRlYmFyQnRuKTtcbiAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uQ29udGFpbmVyKTtcbiAgICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzU2VjdGlvbkNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gc2lkZWJhckNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXI7XG5leHBvcnQgeyB0b2dnbGVTaWRlYmFyIH07XG4iLCJjb25zdCB0b2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGRvbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHRpdGxlTmRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHNob3dNb3JlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY2FyZFwiKTtcbiAgICB0b2RvQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdG9kby5pZCk7XG4gICAgZG9uZUJ0bi5jbGFzc0xpc3QuYWRkKFwibWFya0RvbmVCdG5cIik7XG4gICAgdGl0bGVOZGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZS1kYXRlLWNvbnRcIik7XG4gICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgIHRvZG9EZXNjLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgIHRvZG9Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb2plY3RcIik7XG4gICAgdG9kb0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICBzaG93TW9yZUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kby1zaG93LW1vcmVcIik7XG5cbiAgICB0b2RvUHJvamVjdC5zdHlsZS5jb2xvciA9IHRvZG8ucHJvamVjdC5jb2xvcjtcbiAgICB0b2RvRGF0ZS5zdHlsZS5jb2xvciA9IHRvZG8ucHJvamVjdC5jb2xvcjtcblxuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgdG9kb0Rlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIHRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gdG9kby5wcm9qZWN0Lm5hbWU7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSB0b2RvLmRhdGUudG9VVENTdHJpbmcoKS5zcGxpdChcIiBcIikuc2xpY2UoMCwgNCk7XG5cbiAgICB0b2RvQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZ1wiLCB0b2RvLnByb2plY3QuY29sb3IpO1xuXG4gICAgdG9kb0NvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIm1hcmtEb25lQnRuXCIpKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZG9uZVwiKSkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJkb25lXCIpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRvbmVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvQ2FyZCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSB0aGlzLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdO1xuICAgICAgICAgICAgY29uc3QgZG9uZUJ0biA9IHRoaXMuY2hpbGRyZW5bM107XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbi5zdHlsZS5hbmltYXRpb24gPSBcImRlc2MtYXBwZWFyIC40cyBlYXNlIGJvdGhcIjtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgICAgICAgICAgdG9kb0NhcmQuc3R5bGUubWF4SGVpZ2h0ID0gdG9kb0NhcmQuY2xpZW50SGVpZ2h0ICsgdG9kb0NhcmQuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMl0uY2xpZW50SGVpZ2h0ICsgNDAgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBkb25lQnRuLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uc3R5bGUuYW5pbWF0aW9uID0gXCJkZXNjLWRpc2FwcGVhciAuMnMgZWFzZSBib3RoXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICBkb25lQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIHRvZG9DYXJkLnN0eWxlLm1heEhlaWdodCA9IHRvZG9DYXJkLmNsaWVudEhlaWdodCAtIHRvZG9DYXJkLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzJdLmNsaWVudEhlaWdodCAtIDIwICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aXRsZU5kYXRlLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgdGl0bGVOZGF0ZS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG4gICAgdGl0bGVOZGF0ZS5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XG5cbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmVCdG4pO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVOZGF0ZSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUHJvamVjdCk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaG93TW9yZUJ0bik7XG5cbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG87XG4iLCJpbXBvcnQgeyBnZXRUb2RheVRvZG9zLCBnZXRXZWVrVG9kb3MsIGdldFRvZG9zQnlQcm9qZWN0IH0gZnJvbSBcIi4vdG9kb3NDb250cm9sbGVyXCI7XG5pbXBvcnQgdG9kbyBmcm9tIFwiLi4vY29tcG9uZW50cy90b2RvXCI7XG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi4vY29tcG9uZW50cy9hZGRUb2RvXCI7XG5pbXBvcnQgeyB0b2dnbGVCbGFja092ZXJsYXkgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9vdmVybGF5XCI7XG5pbXBvcnQgeyB0b2dnbGVTaWRlYmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IGhvbWVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWVDYXJkXCI7XG5cbmNvbnN0IGFkZFRvZG9CdG4gPSAoKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvLWJ0blwiLCBcImJ0blwiKTtcbiAgICBidG4ub25jbGljayA9ICgpID0+IGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWRkVG9kbygpKSAmJiB0b2dnbGVCbGFja092ZXJsYXkoKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICByZXR1cm4gYnRuO1xufTtcblxuY29uc3Qgb3BlblNpZGViYXJCdG4gPSAoKSA9PiB7XG4gICAgY29uc3Qgb3BlblNpZGViYXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG9wZW5TaWRlYmFyQnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtc2lkZWJhci1idG5cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgICBvcGVuU2lkZWJhckJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICBvcGVuU2lkZWJhckJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICBvcGVuU2lkZWJhckJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgICBvcGVuU2lkZWJhckJ0bi5vbmNsaWNrID0gKCkgPT4gdG9nZ2xlU2lkZWJhcigpO1xuICAgIHJldHVybiBvcGVuU2lkZWJhckJ0bjtcbn07XG5cbmNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVySG9tZUNhcmRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2Rvc0NyZWF0ZWQgPSBob21lQ2FyZChcIlRhc2tzIENyZWF0ZWRcIiwgMCwgXCIjN0IwMERCXCIpO1xuICAgICAgICBjb25zdCB0b2Rvc0NvbXBsZXRlZCA9IGhvbWVDYXJkKFwiVGFza3MgQ29tcGxldGVkXCIsIDAsIFwiIzgxRkY0NlwiKTtcbiAgICAgICAgY29uc3QgdG9kb3NOb3RDb21wbGV0ZWQgPSBob21lQ2FyZChcIlRhc2tzIG5vbiBjb21wbGV0ZWRcIiwgMCwgXCIjREIwMDAwXCIpO1xuICAgICAgICBjb25zdCBjb21wbGV0aW9uUGVyY2VudGFnZSA9IGhvbWVDYXJkKFwiQ29tcGxldGlvbiByYXRlXCIsIFwiMCVcIiwgXCIjMEZDNUZGXCIpO1xuICAgICAgICByZXR1cm4gW3RvZG9zQ3JlYXRlZCwgdG9kb3NDb21wbGV0ZWQsIHRvZG9zTm90Q29tcGxldGVkLCBjb21wbGV0aW9uUGVyY2VudGFnZV07XG4gICAgfTtcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgaG9tZUNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBhZ2UtY29udGFpbmVyXCIsIFwiaG9tZVwiKTtcbiAgICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZChcInBhZ2UtdGl0bGVcIik7XG4gICAgZ3JlZXRpbmcuY2xhc3NMaXN0LmFkZChcImhvbWUtZ3JlZXRpbmdcIik7XG4gICAgaG9tZUNhcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNhcmRzLWNvbnRhaW5lclwiKTtcblxuICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGdyZWV0aW5nLnRleHRDb250ZW50ID0gXCJXZWxjb21lIGJlYXV0aWZ1bCBIdW1hblwiO1xuICAgIHJlbmRlckhvbWVDYXJkcygpLmZvckVhY2goKGhvbWVDYXJkKSA9PiBob21lQ2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNhcmQpKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmVldGluZyk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQ2FyZHNDb250YWluZXIpO1xuICAgIHJldHVybiBwYWdlQ29udGFpbmVyO1xufTtcblxuY29uc3QgcmVuZGVyUGFnZSA9IChwYWdlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBhZ2UtY29udGFpbmVyXCIpO1xuICAgIHBhZ2VUaXRsZS5jbGFzc0xpc3QuYWRkKFwicGFnZS10aXRsZVwiKTtcbiAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0XCIpO1xuXG4gICAgcGFnZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwYWdlTmFtZSk7XG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gcGFnZU5hbWU7XG5cbiAgICBsZXQgdG9kb3NUb0Rpc3BsYXkgPSBudWxsO1xuICAgIGlmIChwYWdlTmFtZSA9PT0gXCJUb2RheVwiKSB0b2Rvc1RvRGlzcGxheSA9IGdldFRvZGF5VG9kb3MoKTtcbiAgICBlbHNlIGlmIChwYWdlTmFtZSA9PT0gXCJXZWVrXCIpIHRvZG9zVG9EaXNwbGF5ID0gZ2V0V2Vla1RvZG9zKCk7XG4gICAgZWxzZSB0b2Rvc1RvRGlzcGxheSA9IGdldFRvZG9zQnlQcm9qZWN0KHBhZ2VOYW1lKTtcblxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRpdGxlKTtcblxuICAgIGlmICghdG9kb3NUb0Rpc3BsYXkpIHtcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdC5jbGFzc0xpc3QuYWRkKFwiaW5mby10ZXh0XCIpO1xuICAgICAgICB0LmlubmVyVGV4dCA9IFwiTm8gdG9kb3MgRm91bmQgaW4gXCIgKyBwYWdlTmFtZTtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb3NUb0Rpc3BsYXkuZm9yRWFjaCgodG9kb09iaiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VG9kbyA9IHRvZG8odG9kb09iaik7XG4gICAgICAgICAgICBuZXdUb2RvLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gYCR7aSAvIDEwfXNgO1xuICAgICAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobmV3VG9kbyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuICAgIHJldHVybiBwYWdlQ29udGFpbmVyO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyUGFnZSwgcmVuZGVySG9tZSwgYWRkVG9kb0J0biwgb3BlblNpZGViYXJCdG4gfTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9jbGFzc2VzL1Byb2plY3RcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJkZWZhdWx0XCIsIFwiI0ZGRkZGRlwiKV07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdFRvQWRkKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLnNvbWUoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdFRvQWRkLm5hbWUpKSByZXR1cm4gZmFsc2U7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0VG9BZGQpO1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuY29uc3QgZ2V0UHJvamVjdCA9IChpbmRleCkgPT4gKGluZGV4ID49IHByb2plY3RzLmxlbmd0aCA/IGZhbHNlIDogcHJvamVjdHNbaW5kZXhdKTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIGRlbGV0ZSBwcm9qZWN0c1tpbmRleF07XG59O1xuXG5jb25zdCBnZXREZWZhdWx0ID0gKCkgPT4gcHJvamVjdHNbMF07XG5cbmV4cG9ydCB7IGFkZFByb2plY3QsIGdldFByb2plY3QsIGdldFByb2plY3RzLCBnZXREZWZhdWx0LCByZW1vdmVQcm9qZWN0IH07XG4iLCJpbXBvcnQgaXNUaGlzV2VlayBmcm9tIFwiZGF0ZS1mbnMvaXNUaGlzV2Vla1wiO1xuXG5sZXQgdG9kb3MgPSB7fTtcbmxldCBjb3VudCA9IDA7XG5cbmNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zW3RvZG8ucHJvamVjdC5uYW1lXSA/IHRvZG9zW3RvZG8ucHJvamVjdC5uYW1lXS5wdXNoKHRvZG8pIDogKHRvZG9zW3RvZG8ucHJvamVjdC5uYW1lXSA9IFt0b2RvXSk7XG4gICAgY291bnQrKztcbn07XG5cbmNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG5cbmNvbnN0IGdldFRvZGF5VG9kb3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModG9kb3MpXG4gICAgICAgIC5mbGF0KClcbiAgICAgICAgLmZpbHRlcigocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIG5vdy5nZXRGdWxsWWVhcigpID09PSBwcm9qZWN0LmRhdGUuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICAgIG5vdy5nZXRNb250aCgpID09PSBwcm9qZWN0LmRhdGUuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICAgIG5vdy5nZXREYXkoKSA9PT0gcHJvamVjdC5kYXRlLmdldERheSgpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbn07XG5cbmNvbnN0IGdldFdlZWtUb2RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0b2RvcylcbiAgICAgICAgLmZsYXQoKVxuICAgICAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXNUaGlzV2Vlayhwcm9qZWN0LmRhdGUpO1xuICAgICAgICB9KTtcbn07XG5cbmNvbnN0IGdldENvdW50ID0gKCkgPT4gY291bnQ7XG5cbmNvbnN0IGdldFRvZG9zQnlQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9zW3Byb2plY3ROYW1lXSB8fCBudWxsO1xufTtcblxuY29uc3QgcmVtb3ZlUHJvamVjdFRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgICBjb3VudCAtPSB0b2Rvc1twcm9qZWN0Lm5hbWVdLmxlbmd0aDtcbiAgICBkZWxldGUgdG9kb3NbcHJvamVjdC5uYW1lXTtcbn07XG5cbmV4cG9ydCB7IGFkZFRvZG8sIGdldFRvZG9zLCBnZXRUb2Rvc0J5UHJvamVjdCwgZ2V0VG9kYXlUb2RvcywgZ2V0V2Vla1RvZG9zLCByZW1vdmVQcm9qZWN0VG9kb3MsIGdldENvdW50IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9tb2R1bGVzL2NsYXNzZXMvVG9kb1wiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9jbGFzc2VzL1Byb2plY3RcIjtcbmltcG9ydCAqIGFzIHByb2plY3RzQ29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlclwiO1xuaW1wb3J0ICogYXMgdG9kb3NDb250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyXCI7XG5pbXBvcnQgeyByZW5kZXJQYWdlLCBhZGRUb2RvQnRuLCBvcGVuU2lkZWJhckJ0biwgcmVuZGVySG9tZSB9IGZyb20gXCIuL21vZHVsZXMvY29udHJvbGxlcnMvRG9tXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9tb2R1bGVzL2NvbXBvbmVudHMvc2lkZWJhclwiO1xuaW1wb3J0IG92ZXJsYXkgZnJvbSBcIi4vbW9kdWxlcy9jb21wb25lbnRzL292ZXJsYXlcIjtcblxubGV0IHdvcmtQcm9qZWN0ID0gbmV3IFByb2plY3QoXCJ3b3JrXCIsIFwiI0RFMjFGQVwiKTtcbmxldCB1bmlQcm9lamN0ID0gbmV3IFByb2plY3QoXCJ1bmlcIiwgXCIjQUZGNDY0XCIpO1xucHJvamVjdHNDb250cm9sbGVyLmFkZFByb2plY3Qod29ya1Byb2plY3QpO1xucHJvamVjdHNDb250cm9sbGVyLmFkZFByb2plY3QodW5pUHJvZWpjdCk7XG5wcm9qZWN0c0NvbnRyb2xsZXIuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIndlYlwiLCBcIiMxMWZmZGRcIikpO1xucHJvamVjdHNDb250cm9sbGVyLmFkZFByb2plY3QobmV3IFByb2plY3QoXCJkZXZcIiwgXCIjQ0NCNDFCXCIpKTtcbnByb2plY3RzQ29udHJvbGxlci5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiYWNjb3VudFwiLCBcIiNBQUNDQkJcIikpO1xucHJvamVjdHNDb250cm9sbGVyLmFkZFByb2plY3QobmV3IFByb2plY3QoXCJneW1cIiwgXCIjRkY0NEJCXCIpKTtcbnByb2plY3RzQ29udHJvbGxlci5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiY3JlYXRpdmVcIiwgXCIjNjY0NEJCXCIpKTtcbnByb2plY3RzQ29udHJvbGxlci5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiZmZzXCIsIFwiIzIzMDZCQlwiKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldha2UgdXAgYXQgMDc6MDAgQU1cIiwgXCJcIiwgcHJvamVjdHNDb250cm9sbGVyLmdldERlZmF1bHQoKSwgbmV3IERhdGUoKSkpO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8oXG4gICAgbmV3IFRvZG8oXG4gICAgICAgIFwiRmluaXNoIFVuaSBXb3JrIGdpdmVuXCIsXG4gICAgICAgIFwidGhlIGxhc3QgZHVlIGRhdGUgaXMgaW4gdGhlIGVueHQgdHVlc2RheSBzbyBtYWtlIHN1cmUgeW91IGZpbmlzaCBpdCB2ZXJ5IGZhc3QgYWxzbyB0aGUgbmV4dCBleGFtIHdpbGwgYmUgbmV4dCB3ZWVrXCIsXG4gICAgICAgIHVuaVByb2VqY3QsXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICApXG4pO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8obmV3IFRvZG8oXCJCZWF0IENhcmxvcy5cIiwgXCJDYXJsb3MgaXMgYSBmbGlwcGluZyBwaWVjZSBvZiBzaGl0XCIsIHVuaVByb2VqY3QsIG5ldyBEYXRlKCkpKTtcbnRvZG9zQ29udHJvbGxlci5hZGRUb2RvKG5ldyBUb2RvKFwiV29yayBpbnNpZGUgd29yayBwcm9qZWN0XCIsIFwiXCIsIHdvcmtQcm9qZWN0LCBuZXcgRGF0ZSgpKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldvcmsgaW5zaWRlIHdvcmsgcHJvamVjdFwiLCBcIlwiLCB3b3JrUHJvamVjdCwgbmV3IERhdGUoKSkpO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8obmV3IFRvZG8oXCJXb3JrIGluc2lkZSB3b3JrIHByb2plY3RcIiwgXCJcIiwgd29ya1Byb2plY3QsIG5ldyBEYXRlKCkpKTtcbnRvZG9zQ29udHJvbGxlci5hZGRUb2RvKG5ldyBUb2RvKFwiV29yayBpbnNpZGUgd29yayBwcm9qZWN0XCIsIFwiXCIsIHdvcmtQcm9qZWN0LCBuZXcgRGF0ZSgpKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldvcmsgaW5zaWRlIHdvcmsgcHJvamVjdFwiLCBcIlwiLCB3b3JrUHJvamVjdCwgbmV3IERhdGUoKSkpO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8obmV3IFRvZG8oXCJXb3JrIGluc2lkZSB3b3JrIHByb2plY3RcIiwgXCJcIiwgd29ya1Byb2plY3QsIG5ldyBEYXRlKCkpKTtcbnRvZG9zQ29udHJvbGxlci5hZGRUb2RvKG5ldyBUb2RvKFwiV29yayBpbnNpZGUgd29yayBwcm9qZWN0XCIsIFwiXCIsIHdvcmtQcm9qZWN0LCBuZXcgRGF0ZSgpKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldvcmsgaW5zaWRlIHdvcmsgcHJvamVjdFwiLCBcIlwiLCB3b3JrUHJvamVjdCwgbmV3IERhdGUoKSkpO1xudG9kb3NDb250cm9sbGVyLmFkZFRvZG8obmV3IFRvZG8oXCJXb3JrIGluc2lkZSB3b3JrIHByb2plY3RcIiwgXCJcIiwgd29ya1Byb2plY3QsIG5ldyBEYXRlKCkpKTtcbnRvZG9zQ29udHJvbGxlci5hZGRUb2RvKG5ldyBUb2RvKFwiV29yayBpbnNpZGUgd29yayBwcm9qZWN0XCIsIFwiXCIsIHdvcmtQcm9qZWN0LCBuZXcgRGF0ZSgpKSk7XG50b2Rvc0NvbnRyb2xsZXIuYWRkVG9kbyhuZXcgVG9kbyhcIldvcmsgaW5zaWRlIHdvcmsgcHJvamVjdFwiLCBcIlwiLCB3b3JrUHJvamVjdCwgbmV3IERhdGUoKSkpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG9wZW5TaWRlYmFyQnRuKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJIb21lKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGRUb2RvQnRuKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9