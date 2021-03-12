"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Deduction = _interopRequireDefault(require("./Deduction"));

var _Earning = _interopRequireDefault(require("./Earning"));

var _Tax = _interopRequireDefault(require("./Tax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateEmployeePayrollRun model module.
 * @module model/CreateEmployeePayrollRun
 * @version 1.0
 */
var CreateEmployeePayrollRun = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateEmployeePayrollRun</code>.
   * # The EmployeePayrollRun Object ### Description The &#x60;EmployeePayrollRun&#x60; object is used to represent a payroll run for a specific employee.
   * @alias module:model/CreateEmployeePayrollRun
   */
  function CreateEmployeePayrollRun() {
    _classCallCheck(this, CreateEmployeePayrollRun);

    CreateEmployeePayrollRun.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateEmployeePayrollRun, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateEmployeePayrollRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEmployeePayrollRun} obj Optional instance to populate.
     * @return {module:model/CreateEmployeePayrollRun} The populated <code>CreateEmployeePayrollRun</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateEmployeePayrollRun();

        if (data.hasOwnProperty('employee')) {
          obj['employee'] = _ApiClient["default"].convertToType(data['employee'], 'String');
        }

        if (data.hasOwnProperty('payroll_run')) {
          obj['payroll_run'] = _ApiClient["default"].convertToType(data['payroll_run'], 'String');
        }

        if (data.hasOwnProperty('gross_pay')) {
          obj['gross_pay'] = _ApiClient["default"].convertToType(data['gross_pay'], 'Number');
        }

        if (data.hasOwnProperty('net_pay')) {
          obj['net_pay'] = _ApiClient["default"].convertToType(data['net_pay'], 'Number');
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }

        if (data.hasOwnProperty('check_date')) {
          obj['check_date'] = _ApiClient["default"].convertToType(data['check_date'], 'Date');
        }

        if (data.hasOwnProperty('earnings')) {
          obj['earnings'] = _ApiClient["default"].convertToType(data['earnings'], [_Earning["default"]]);
        }

        if (data.hasOwnProperty('deductions')) {
          obj['deductions'] = _ApiClient["default"].convertToType(data['deductions'], [_Deduction["default"]]);
        }

        if (data.hasOwnProperty('taxes')) {
          obj['taxes'] = _ApiClient["default"].convertToType(data['taxes'], [_Tax["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CreateEmployeePayrollRun;
}();
/**
 * The employee who's payroll is being run.
 * @member {String} employee
 */


CreateEmployeePayrollRun.prototype['employee'] = undefined;
/**
 * The payroll being run.
 * @member {String} payroll_run
 */

CreateEmployeePayrollRun.prototype['payroll_run'] = undefined;
/**
 * The gross pay from the run.
 * @member {Number} gross_pay
 */

CreateEmployeePayrollRun.prototype['gross_pay'] = undefined;
/**
 * The net pay from the run.
 * @member {Number} net_pay
 */

CreateEmployeePayrollRun.prototype['net_pay'] = undefined;
/**
 * The day and time the payroll run started.
 * @member {Date} start_date
 */

CreateEmployeePayrollRun.prototype['start_date'] = undefined;
/**
 * The day and time the payroll run ended.
 * @member {Date} end_date
 */

CreateEmployeePayrollRun.prototype['end_date'] = undefined;
/**
 * The day and time the payroll run was checked.
 * @member {Date} check_date
 */

CreateEmployeePayrollRun.prototype['check_date'] = undefined;
/**
 * @member {Array.<module:model/Earning>} earnings
 */

CreateEmployeePayrollRun.prototype['earnings'] = undefined;
/**
 * @member {Array.<module:model/Deduction>} deductions
 */

CreateEmployeePayrollRun.prototype['deductions'] = undefined;
/**
 * @member {Array.<module:model/Tax>} taxes
 */

CreateEmployeePayrollRun.prototype['taxes'] = undefined;
var _default = CreateEmployeePayrollRun;
exports["default"] = _default;