"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BenefitPlanTypeEnum = _interopRequireDefault(require("./BenefitPlanTypeEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateBenefit model module.
 * @module model/CreateBenefit
 * @version 1.0
 */
var CreateBenefit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateBenefit</code>.
   * # The Benefit Object ### Description The &#x60;Benefit&#x60; object is used to represent a Benefit for an employee.
   * @alias module:model/CreateBenefit
   */
  function CreateBenefit() {
    _classCallCheck(this, CreateBenefit);

    CreateBenefit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateBenefit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateBenefit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateBenefit} obj Optional instance to populate.
     * @return {module:model/CreateBenefit} The populated <code>CreateBenefit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateBenefit();

        if (data.hasOwnProperty('employee')) {
          obj['employee'] = _ApiClient["default"].convertToType(data['employee'], 'String');
        }

        if (data.hasOwnProperty('provider_name')) {
          obj['provider_name'] = _ApiClient["default"].convertToType(data['provider_name'], 'String');
        }

        if (data.hasOwnProperty('benefit_plan_type')) {
          obj['benefit_plan_type'] = _ApiClient["default"].convertToType(data['benefit_plan_type'], _BenefitPlanTypeEnum["default"]);
        }

        if (data.hasOwnProperty('employee_contribution')) {
          obj['employee_contribution'] = _ApiClient["default"].convertToType(data['employee_contribution'], 'Number');
        }

        if (data.hasOwnProperty('company_contribution')) {
          obj['company_contribution'] = _ApiClient["default"].convertToType(data['company_contribution'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CreateBenefit;
}();
/**
 * The employee on the plan.
 * @member {String} employee
 */


CreateBenefit.prototype['employee'] = undefined;
/**
 * The name of the benefit provider.
 * @member {String} provider_name
 */

CreateBenefit.prototype['provider_name'] = undefined;
/**
 * The type of benefit plan
 * @member {module:model/BenefitPlanTypeEnum} benefit_plan_type
 */

CreateBenefit.prototype['benefit_plan_type'] = undefined;
/**
 * The employee's contribution.
 * @member {Number} employee_contribution
 */

CreateBenefit.prototype['employee_contribution'] = undefined;
/**
 * The company's contribution.
 * @member {Number} company_contribution
 */

CreateBenefit.prototype['company_contribution'] = undefined;
var _default = CreateBenefit;
exports["default"] = _default;