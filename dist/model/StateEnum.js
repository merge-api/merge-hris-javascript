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
* Enum class StateEnum.
* @enum {}
* @readonly
*/
var StateEnum = /*#__PURE__*/function () {
  function StateEnum() {
    _classCallCheck(this, StateEnum);

    _defineProperty(this, "AL", "AL");

    _defineProperty(this, "AK", "AK");

    _defineProperty(this, "AS", "AS");

    _defineProperty(this, "AZ", "AZ");

    _defineProperty(this, "AR", "AR");

    _defineProperty(this, "AA", "AA");

    _defineProperty(this, "AE", "AE");

    _defineProperty(this, "AP", "AP");

    _defineProperty(this, "CA", "CA");

    _defineProperty(this, "CO", "CO");

    _defineProperty(this, "CT", "CT");

    _defineProperty(this, "DE", "DE");

    _defineProperty(this, "DC", "DC");

    _defineProperty(this, "FL", "FL");

    _defineProperty(this, "GA", "GA");

    _defineProperty(this, "GU", "GU");

    _defineProperty(this, "HI", "HI");

    _defineProperty(this, "ID", "ID");

    _defineProperty(this, "IL", "IL");

    _defineProperty(this, "IN", "IN");

    _defineProperty(this, "IA", "IA");

    _defineProperty(this, "KS", "KS");

    _defineProperty(this, "KY", "KY");

    _defineProperty(this, "LA", "LA");

    _defineProperty(this, "ME", "ME");

    _defineProperty(this, "MD", "MD");

    _defineProperty(this, "MA", "MA");

    _defineProperty(this, "MI", "MI");

    _defineProperty(this, "MN", "MN");

    _defineProperty(this, "MS", "MS");

    _defineProperty(this, "MO", "MO");

    _defineProperty(this, "MT", "MT");

    _defineProperty(this, "NE", "NE");

    _defineProperty(this, "NV", "NV");

    _defineProperty(this, "NH", "NH");

    _defineProperty(this, "NJ", "NJ");

    _defineProperty(this, "NM", "NM");

    _defineProperty(this, "NY", "NY");

    _defineProperty(this, "NC", "NC");

    _defineProperty(this, "ND", "ND");

    _defineProperty(this, "MP", "MP");

    _defineProperty(this, "OH", "OH");

    _defineProperty(this, "OK", "OK");

    _defineProperty(this, "OR", "OR");

    _defineProperty(this, "PA", "PA");

    _defineProperty(this, "PR", "PR");

    _defineProperty(this, "RI", "RI");

    _defineProperty(this, "SC", "SC");

    _defineProperty(this, "SD", "SD");

    _defineProperty(this, "TN", "TN");

    _defineProperty(this, "TX", "TX");

    _defineProperty(this, "UT", "UT");

    _defineProperty(this, "VT", "VT");

    _defineProperty(this, "VI", "VI");

    _defineProperty(this, "VA", "VA");

    _defineProperty(this, "WA", "WA");

    _defineProperty(this, "WV", "WV");

    _defineProperty(this, "WI", "WI");

    _defineProperty(this, "WY", "WY");
  }

  _createClass(StateEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>StateEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StateEnum} The enum <code>StateEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return StateEnum;
}();

exports["default"] = StateEnum;