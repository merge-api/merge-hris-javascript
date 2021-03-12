"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class RunTypeEnum.
* @enum {}
* @readonly
*/
var RunTypeEnum = /*#__PURE__*/function () {
  function RunTypeEnum() {
    _classCallCheck(this, RunTypeEnum);

    _defineProperty(this, "INIT", "INIT");

    _defineProperty(this, "REGULAR", "REGULAR");

    _defineProperty(this, "OFF_CYCLE", "OFF_CYCLE");

    _defineProperty(this, "CORRECTION", "CORRECTION");

    _defineProperty(this, "TERMINATION", "TERMINATION");

    _defineProperty(this, "RECONCILIATION", "RECONCILIATION");

    _defineProperty(this, "NEW_HIRE", "NEW_HIRE");

    _defineProperty(this, "POP", "POP");

    _defineProperty(this, "TRANSITION", "TRANSITION");

    _defineProperty(this, "CORRECTION_DISPLAY", "CORRECTION_DISPLAY");

    _defineProperty(this, "EXCESS_HOURS", "EXCESS_HOURS");

    _defineProperty(this, "SIGN_ON_BONUS", "SIGN_ON_BONUS");

    _defineProperty(this, "S_CORP", "S_CORP");

    _defineProperty(this, "FRINGE_BENEFITS", "FRINGE_BENEFITS");

    _defineProperty(this, "CONTRACTOR_LATE_PAYMENTS", "CONTRACTOR_LATE_PAYMENTS");
  }

  _createClass(RunTypeEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>RunTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RunTypeEnum} The enum <code>RunTypeEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return RunTypeEnum;
}();

exports["default"] = RunTypeEnum;