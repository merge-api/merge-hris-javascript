"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmploymentTypeEnum = _interopRequireDefault(require("./EmploymentTypeEnum"));

var _FlsaStatusEnum = _interopRequireDefault(require("./FlsaStatusEnum"));

var _PayCurrencyEnum = _interopRequireDefault(require("./PayCurrencyEnum"));

var _PayFrequencyEnum = _interopRequireDefault(require("./PayFrequencyEnum"));

var _PayPeriodEnum = _interopRequireDefault(require("./PayPeriodEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Employment model module.
 * @module model/Employment
 * @version 1.0
 */
var Employment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Employment</code>.
   * # The Employment Object ### Description The &#x60;Employment&#x60; object is used to represent an employment position at a company. These are associated with the employee filling the role.  ### Usage Example Fetch from the &#x60;LIST Employments&#x60; endpoint and filter by &#x60;ID&#x60; to show all employees.
   * @alias module:model/Employment
   */
  function Employment() {
    _classCallCheck(this, Employment);

    Employment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Employment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Employment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Employment} obj Optional instance to populate.
     * @return {module:model/Employment} The populated <code>Employment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Employment();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('job_title')) {
          obj['job_title'] = _ApiClient["default"].convertToType(data['job_title'], 'String');
        }

        if (data.hasOwnProperty('pay_rate')) {
          obj['pay_rate'] = _ApiClient["default"].convertToType(data['pay_rate'], 'Number');
        }

        if (data.hasOwnProperty('pay_period')) {
          obj['pay_period'] = _ApiClient["default"].convertToType(data['pay_period'], _PayPeriodEnum["default"]);
        }

        if (data.hasOwnProperty('pay_frequency')) {
          obj['pay_frequency'] = _ApiClient["default"].convertToType(data['pay_frequency'], _PayFrequencyEnum["default"]);
        }

        if (data.hasOwnProperty('pay_currency')) {
          obj['pay_currency'] = _ApiClient["default"].convertToType(data['pay_currency'], _PayCurrencyEnum["default"]);
        }

        if (data.hasOwnProperty('flsa_status')) {
          obj['flsa_status'] = _ApiClient["default"].convertToType(data['flsa_status'], _FlsaStatusEnum["default"]);
        }

        if (data.hasOwnProperty('effective_date')) {
          obj['effective_date'] = _ApiClient["default"].convertToType(data['effective_date'], 'Date');
        }

        if (data.hasOwnProperty('employment_type')) {
          obj['employment_type'] = _ApiClient["default"].convertToType(data['employment_type'], _EmploymentTypeEnum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Employment;
}();
/**
 * @member {String} id
 */


Employment.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Employment.prototype['remote_id'] = undefined;
/**
 * The position's title.
 * @member {String} job_title
 */

Employment.prototype['job_title'] = undefined;
/**
 * The position's pay rate in dollars.
 * @member {Number} pay_rate
 */

Employment.prototype['pay_rate'] = undefined;
/**
 * The time period this pay rate encompasses.
 * @member {module:model/PayPeriodEnum} pay_period
 */

Employment.prototype['pay_period'] = undefined;
/**
 * The position's pay frequency.
 * @member {module:model/PayFrequencyEnum} pay_frequency
 */

Employment.prototype['pay_frequency'] = undefined;
/**
 * The position's currency code.
 * @member {module:model/PayCurrencyEnum} pay_currency
 */

Employment.prototype['pay_currency'] = undefined;
/**
 * The position's FLSA status.
 * @member {module:model/FlsaStatusEnum} flsa_status
 */

Employment.prototype['flsa_status'] = undefined;
/**
 * The position's effective date.
 * @member {Date} effective_date
 */

Employment.prototype['effective_date'] = undefined;
/**
 * The position's type of employment.
 * @member {module:model/EmploymentTypeEnum} employment_type
 */

Employment.prototype['employment_type'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Employment.prototype['remote_data'] = undefined;
var _default = Employment;
exports["default"] = _default;