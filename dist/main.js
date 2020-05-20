/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let nav = document.getElementById(\"navbar\");\r\nlet burger = document.getElementById(\"burger\");\r\nlet hasScrolled = false;\r\n\r\nlet checkbox = document.querySelector(\"#menu-burger\");\r\nlet links = document.querySelectorAll(\"a\");\r\n\r\nconst instaButton = document.querySelector(\"#insta-button\");\r\nconst messengerButton = document.querySelector(\"#messenger-button\");\r\nconst sendButton = document.querySelector(\"#send-button\");\r\nconst messagePopup = document.querySelector(\"#message-send-popup\");\r\n\r\ncheckbox.addEventListener(\"change\", function () {\r\n  if (this.checked && hasScrolled == false) {\r\n    nav.classList.add(\"white-ovveride\");\r\n  } else {\r\n    nav.classList.remove(\"white-ovveride\");\r\n  }\r\n});\r\n\r\ninstaButton.addEventListener(\"click\", () => {\r\n  window.open(\"https://www.instagram.com/julia_inska/\");\r\n});\r\n\r\nmessengerButton.addEventListener(\"click\", () => {\r\n  window.open(\"https://www.facebook.com/Julia-Inska-104344307960361/\");\r\n});\r\n\r\nlinks.forEach((link) => {\r\n  link.addEventListener(\"click\", () => jumpLink());\r\n});\r\n\r\nfunction jumpLink() {\r\n  if (nav.classList.contains(\"white-ovveride\")) {\r\n    checkbox.checked = false;\r\n  }\r\n}\r\n\r\nfunction initMap() {\r\n  let bydgoszcz = { lat: 53.031111, lng: 18.008889 };\r\n\r\n  let map = new google.maps.Map(document.getElementById(\"map\"), {\r\n    zoom: 10,\r\n    center: bydgoszcz,\r\n  });\r\n\r\n  let cityCircle = new google.maps.Circle({\r\n    strokeColor: \"#FF0000\",\r\n    strokeOpacity: 0.8,\r\n    strokeWeight: 2,\r\n    fillColor: \"#FF0000\",\r\n    fillOpacity: 0.2,\r\n    map: map,\r\n    center: bydgoszcz,\r\n    radius: 15000,\r\n  });\r\n}\r\nwindow.initMap = initMap;\r\n\r\nsendButton.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  sendData();\r\n});\r\n\r\nmessagePopup.addEventListener(\"click\", () => {\r\n  messagePopup.classList.remove(\"transition\");\r\n});\r\n\r\nfunction sendData() {\r\n  let phoneNumber = document.querySelector(\"#phoneNumber\").value;\r\n  let message = document.querySelector(\"#message\").value;\r\n  let formData = new FormData();\r\n  formData.append(\"phoneNumber\", phoneNumber);\r\n  formData.append(\"message\", message);\r\n\r\n  fetch(\"send.php\", {\r\n    method: \"POST\", // or 'PUT'\r\n    body: formData,\r\n  })\r\n    .then((data) => {\r\n      console.log(\"Success - POST\");\r\n      messagePopup.textContent = \"Wiadomość wysłana\";\r\n      messagePopup.classList.add(\"transition\");\r\n    })\r\n    .catch((error) => {\r\n      console.error(\"Error - POST\");\r\n      console.log(error);\r\n      messagePopup.textContent = \"Błąd wysyłania wiadomości\";\r\n      messagePopup.classList.add(\"transition\");\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });