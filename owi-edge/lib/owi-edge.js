(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["owiEdge"] = factory();
	else
		root["owiEdge"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _usb = _interopRequireDefault(__webpack_require__(1));

var _constants = __webpack_require__(2);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CLEAR = _constants.MASKS.CLEAR;
/**
 * @class OwiEdge
 *
 * A UBS driver for the OWI Robotic Arm Edge. Assumes a USB connection
 * using the USB interface for Robotic Arm Edge.
 * Allows simultaneous body part movements.
 * All move commands make the robot parts move continuously in that
 * direction until a stop command is invoked. For example, calling
 * `moveBaseClockWise()` will move the robot base clockwise until
 * either `stopBase()` or `stopAll()` is called.
 */

var OwiEdge =
/*#__PURE__*/
function () {
  function OwiEdge() {
    _classCallCheck(this, OwiEdge);

    this.arm = _usb.default.findByIds(_constants.VENDOR_ID, _constants.PRODUCT_ID); // make sure the arm is connected before using

    if (!this.arm) {
      throw new Error('Unable to connect to your robot arm! Check power and connection.');
    } // initialize the arm to do nothing


    this.command = Buffer.from([CLEAR, CLEAR, CLEAR]); // open the connection to send commands

    this.arm.open();
  }

  _createClass(OwiEdge, [{
    key: "turnLedOn",
    value: function turnLedOn() {
      this.command[2] = (0, _utils.set)(this.command[2], _constants.MASKS.LED_ON);
      this.send();
    }
  }, {
    key: "turnLedOff",
    value: function turnLedOff() {
      this.command[2] = (0, _utils.clear)(this.command[2], _constants.MASKS.LED_OFF);
      this.send();
    }
  }, {
    key: "stopHand",
    value: function stopHand() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_HAND);
      this.send();
    }
  }, {
    key: "openHand",
    value: function openHand() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_HAND);
      this.command[0] = (0, _utils.set)(this.command[0], _constants.MASKS.OPEN_HAND);
      this.send();
    }
  }, {
    key: "closeHand",
    value: function closeHand() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_HAND);
      this.command[0] = (0, _utils.set)(this.command[0], _constants.MASKS.CLOSE_HAND);
      this.send();
    }
  }, {
    key: "stopWrist",
    value: function stopWrist() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_WRIST);
      this.send();
    }
  }, {
    key: "moveWristUp",
    value: function moveWristUp() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_WRIST);
      this.command[0] = (0, _utils.set)(this.command[0], _constants.MASKS.WRIST_UP);
      this.send();
    }
  }, {
    key: "moveWristDown",
    value: function moveWristDown() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_WRIST);
      this.command[0] = (0, _utils.set)(this.command[0], _constants.MASKS.WRIST_DOWN);
      this.send();
    }
  }, {
    key: "stopElbow",
    value: function stopElbow() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_ELBOW);
      this.send();
    }
  }, {
    key: "moveElbowUp",
    value: function moveElbowUp() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_ELBOW);
      this.command[0] = (0, _utils.set)(this.command[0], _constants.MASKS.ELBOW_UP);
      this.send();
    }
  }, {
    key: "moveElbowDown",
    value: function moveElbowDown() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_ELBOW);
      this.command[0] = (0, _utils.set)(this.command[0], _constants.MASKS.ELBOW_DOWN);
      this.send();
    }
  }, {
    key: "stopShoulder",
    value: function stopShoulder() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_SHOULDER);
      this.send();
    }
  }, {
    key: "moveShoulderUp",
    value: function moveShoulderUp() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_SHOULDER);
      this.command[0] = (0, _utils.set)(this.command[0], _constants.MASKS.SHOULDER_UP);
      this.send();
    }
  }, {
    key: "moveShoulderDown",
    value: function moveShoulderDown() {
      this.command[0] = (0, _utils.clear)(this.command[0], _constants.MASKS.STOP_SHOULDER);
      this.command[0] = (0, _utils.set)(this.command[0], _constants.MASKS.SHOULDER_DOWN);
      this.send();
    }
  }, {
    key: "stopBase",
    value: function stopBase() {
      this.command[1] = (0, _utils.clear)(this.command[1], _constants.MASKS.STOP_BASE);
      this.send();
    }
  }, {
    key: "moveBaseClockwise",
    value: function moveBaseClockwise() {
      this.command[1] = (0, _utils.clear)(this.command[1], _constants.MASKS.STOP_BASE);
      this.command[1] = (0, _utils.set)(this.command[1], _constants.MASKS.BASE_CLOCKWISE);
      this.send();
    }
  }, {
    key: "moveBaseCounterClockwise",
    value: function moveBaseCounterClockwise() {
      this.command[1] = (0, _utils.clear)(this.command[1], _constants.MASKS.STOP_BASE);
      this.command[1] = (0, _utils.set)(this.command[1], _constants.MASKS.BASE_COUNTER_CLOCKWISE);
      this.send();
    }
  }, {
    key: "stopAll",
    value: function stopAll() {
      this.command = Buffer.from([CLEAR, CLEAR, CLEAR]);
      this.send();
    }
  }, {
    key: "send",
    value: function send() {
      this.arm.controlTransfer(_constants.BM_REQUEST_TYPE, _constants.B_REQUEST, _constants.W_VALUE, _constants.IN_LENGTH, this.command, OwiEdge.error);
    }
  }], [{
    key: "error",
    value: function error(_error, data) {
      if (_error) {
        console.error('command error:', _error, data); // eslint-disable-line

        throw _error;
      }
    }
  }]);

  return OwiEdge;
}();

var _default = OwiEdge;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("usb");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MASKS = exports.CLEAR = exports.IN_LENGTH = exports.W_VALUE = exports.B_REQUEST = exports.BM_REQUEST_TYPE = exports.PRODUCT_ID = exports.VENDOR_ID = void 0;
var VENDOR_ID = '0x1267';
exports.VENDOR_ID = VENDOR_ID;
var PRODUCT_ID = 0;
exports.PRODUCT_ID = PRODUCT_ID;
var BM_REQUEST_TYPE = 0x40;
exports.BM_REQUEST_TYPE = BM_REQUEST_TYPE;
var B_REQUEST = 6;
exports.B_REQUEST = B_REQUEST;
var W_VALUE = 0x100;
exports.W_VALUE = W_VALUE;
var IN_LENGTH = 0;
exports.IN_LENGTH = IN_LENGTH;
var CLEAR = 0x00; // all the 'stops/off' are the complement of the 'on' values
// so that we can logical & them together to create 0 for that segment of bits

exports.CLEAR = CLEAR;
var MASKS = {
  STOP_HAND: 0x03,
  // 0000 0011
  OPEN_HAND: 0x02,
  // 0000 0010
  CLOSE_HAND: 0x01,
  // 0000 0001
  STOP_WRIST: 0x0C,
  // 0000 1100
  WRIST_UP: 0x04,
  // 0000 0100
  WRIST_DOWN: 0x08,
  // 0000 1000
  STOP_ELBOW: 0x30,
  // 0011 0000
  ELBOW_UP: 0x10,
  // 0001 0000
  ELBOW_DOWN: 0x20,
  // 0010 0000
  STOP_SHOULDER: 0xC0,
  // 1100 0000
  SHOULDER_UP: 0x80,
  // 0100 0000
  SHOULDER_DOWN: 0x40,
  // 1000 0000
  STOP_BASE: 0x03,
  // 0000 0011
  BASE_CLOCKWISE: 0x01,
  // 0000 0001
  BASE_COUNTER_CLOCKWISE: 0x02,
  // 0000 0010
  LED_ON: 0x01,
  // 0000 0001
  LED_OFF: 0x01,
  // 0000 0001
  CLEAR: 0x00
};
exports.MASKS = MASKS;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = clear;
exports.set = set;

function clear(bits, mask) {
  return bits &= ~mask; // eslint-disable-line
}

function set(bits, mask) {
  return bits |= mask; // eslint-disable-line
}

/***/ })
/******/ ]);
});