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

/**
 * The Tax model module.
 * @module model/Tax
 * @version 1.0
 */
var Tax = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Tax</code>.
   * # The Tax Object ### Description The &#x60;Tax&#x60; object is used to represent a tax for a given employee&#39;s payroll run. One run could include several taxes.  ### Usage Example Fetch from the &#x60;LIST Taxes&#x60; endpoint and filter by &#x60;ID&#x60; to show all taxes.
   * @alias module:model/Tax
   */
  function Tax() {
    _classCallCheck(this, Tax);

    Tax.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Tax, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Tax</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tax} obj Optional instance to populate.
     * @return {module:model/Tax} The populated <code>Tax</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tax();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('employee_payroll_run')) {
          obj['employee_payroll_run'] = _ApiClient["default"].convertToType(data['employee_payroll_run'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('employer_tax')) {
          obj['employer_tax'] = _ApiClient["default"].convertToType(data['employer_tax'], 'Boolean');
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [{
            'String': Object
          }]);
        }
      }

      return obj;
    }
  }]);

  return Tax;
}();
/**
 * @member {String} id
 */


Tax.prototype['id'] = undefined;
/**
 * The tax's employee payroll run.
 * @member {String} employee_payroll_run
 */

Tax.prototype['employee_payroll_run'] = undefined;
/**
 * The tax's name.
 * @member {String} name
 */

Tax.prototype['name'] = undefined;
/**
 * The tax amount.
 * @member {Number} amount
 */

Tax.prototype['amount'] = undefined;
/**
 * Whether or not the employer is responsible for paying the tax.
 * @member {Boolean} employer_tax
 */

Tax.prototype['employer_tax'] = undefined;
/**
 * @member {Array.<Object.<String, Object>>} remote_data
 */

Tax.prototype['remote_data'] = undefined;
var _default = Tax;
exports["default"] = _default;