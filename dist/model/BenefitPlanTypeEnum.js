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
* Enum class BenefitPlanTypeEnum.
* @enum {}
* @readonly
*/
var BenefitPlanTypeEnum = /*#__PURE__*/function () {
  function BenefitPlanTypeEnum() {
    _classCallCheck(this, BenefitPlanTypeEnum);

    _defineProperty(this, "MEDICAL", "MEDICAL");

    _defineProperty(this, "DENTAL", "DENTAL");

    _defineProperty(this, "VISION", "VISION");

    _defineProperty(this, "HSA", "HSA");

    _defineProperty(this, "FSA_MEDICAL", "FSA_MEDICAL");

    _defineProperty(this, "FSA_DEPENDENT_CARE", "FSA_DEPENDENT_CARE");

    _defineProperty(this, "SIMPLE_IRA", "SIMPLE_IRA");

    _defineProperty(this, "_401K", "_401K");

    _defineProperty(this, "ROTH_401K", "ROTH_401K");

    _defineProperty(this, "OTHER_NON_TAXABLE", "OTHER_NON_TAXABLE");

    _defineProperty(this, "COMMUTER_TRANSIT", "COMMUTER_TRANSIT");

    _defineProperty(this, "COMMUTER_PARKING", "COMMUTER_PARKING");

    _defineProperty(this, "_401K_LOAN_PAYMENT", "_401K_LOAN_PAYMENT");

    _defineProperty(this, "SHORT_DISABILITY", "SHORT_DISABILITY");

    _defineProperty(this, "LONG_DISABILITY", "LONG_DISABILITY");

    _defineProperty(this, "LIFE", "LIFE");

    _defineProperty(this, "SEP_IRA", "SEP_IRA");

    _defineProperty(this, "SARSEP", "SARSEP");

    _defineProperty(this, "CUSTOM_TAXABLE", "CUSTOM_TAXABLE");

    _defineProperty(this, "_403B", "_403B");

    _defineProperty(this, "ROTH_403B", "ROTH_403B");

    _defineProperty(this, "STUDENT_LOAN", "STUDENT_LOAN");
  }

  _createClass(BenefitPlanTypeEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>BenefitPlanTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/BenefitPlanTypeEnum} The enum <code>BenefitPlanTypeEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return BenefitPlanTypeEnum;
}();

exports["default"] = BenefitPlanTypeEnum;