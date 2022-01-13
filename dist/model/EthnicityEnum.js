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
* Enum class EthnicityEnum.
* @enum {}
* @readonly
*/
var EthnicityEnum = /*#__PURE__*/function () {
  function EthnicityEnum() {
    _classCallCheck(this, EthnicityEnum);

    _defineProperty(this, "AMERICAN_INDIAN_OR_ALASKA_NATIVE", "AMERICAN_INDIAN_OR_ALASKA_NATIVE");

    _defineProperty(this, "ASIAN_OR_INDIAN_SUBCONTINENT", "ASIAN_OR_INDIAN_SUBCONTINENT");

    _defineProperty(this, "BLACK_OR_AFRICAN_AMERICAN", "BLACK_OR_AFRICAN_AMERICAN");

    _defineProperty(this, "HISPANIC_OR_LATINO", "HISPANIC_OR_LATINO");

    _defineProperty(this, "NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER", "NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER");

    _defineProperty(this, "TWO_OR_MORE_RACES", "TWO_OR_MORE_RACES");

    _defineProperty(this, "WHITE", "WHITE");

    _defineProperty(this, "PREFER_NOT_TO_DISCLOSE", "PREFER_NOT_TO_DISCLOSE");
  }

  _createClass(EthnicityEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>EthnicityEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EthnicityEnum} The enum <code>EthnicityEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return EthnicityEnum;
}();

exports["default"] = EthnicityEnum;