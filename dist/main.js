/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/slider-product.js":
/*!**********************************!*\
  !*** ./src/js/slider-product.js ***!
  \**********************************/
/***/ (() => {

var slides = document.getElementsByClassName('slide-item');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index = 0;
prev.addEventListener("click", function () {
  prevSlide();
});
next.addEventListener("click", function () {
  nextSlide();
});
function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}
function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}
function changeSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("open-slide");
    slides[i].classList.add("hid");
  }
  slides[index].classList.add("open-slide");
  slides[index].classList.remove("hid");
}

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

var slider = document.querySelector('.slider');
var isDown = false;
var startX;
var scrollLeft;
slider.addEventListener('mousedown', function (e) {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', function () {
  isDown = false;
});
slider.addEventListener('mouseup', function () {
  isDown = false;
});
slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft;
  var walk = (x - startX) * 3; // untuk kecepatan scroll
  slider.scrollLeft = scrollLeft - walk;
});
console.log("TETSING2");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slider.js */ "./src/js/slider.js");
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_slider_product_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slider-product.js */ "./src/js/slider-product.js");
/* harmony import */ var _js_slider_product_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slider_product_js__WEBPACK_IMPORTED_MODULE_2__);



console.log("TEST");
})();

/******/ })()
;