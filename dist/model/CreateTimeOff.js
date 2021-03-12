"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestTypeEnum = _interopRequireDefault(require("./RequestTypeEnum"));

var _TimeOffStatusEnum = _interopRequireDefault(require("./TimeOffStatusEnum"));

var _UnitsEnum = _interopRequireDefault(require("./UnitsEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateTimeOff model module.
 * @module model/CreateTimeOff
 * @version 1.0
 */
var CreateTimeOff = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTimeOff</code>.
   * # The TimeOff Object ### Description The &#x60;TimeOff&#x60; object is used to represent a Time Off Request filed by an employee.
   * @alias module:model/CreateTimeOff
   */
  function CreateTimeOff() {
    _classCallCheck(this, CreateTimeOff);

    CreateTimeOff.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTimeOff, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTimeOff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTimeOff} obj Optional instance to populate.
     * @return {module:model/CreateTimeOff} The populated <code>CreateTimeOff</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTimeOff();

        if (data.hasOwnProperty('employee')) {
          obj['employee'] = _ApiClient["default"].convertToType(data['employee'], 'String');
        }

        if (data.hasOwnProperty('approver')) {
          obj['approver'] = _ApiClient["default"].convertToType(data['approver'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _TimeOffStatusEnum["default"]);
        }

        if (data.hasOwnProperty('employee_note')) {
          obj['employee_note'] = _ApiClient["default"].convertToType(data['employee_note'], 'String');
        }

        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], _UnitsEnum["default"]);
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('request_type')) {
          obj['request_type'] = _ApiClient["default"].convertToType(data['request_type'], _RequestTypeEnum["default"]);
        }

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
        }

        if (data.hasOwnProperty('end_date')) {
          obj['end_date'] = _ApiClient["default"].convertToType(data['end_date'], 'Date');
        }

        if (data.hasOwnProperty('leave_type_id')) {
          obj['leave_type_id'] = _ApiClient["default"].convertToType(data['leave_type_id'], 'String');
        }

        if (data.hasOwnProperty('time_off_policy_id')) {
          obj['time_off_policy_id'] = _ApiClient["default"].convertToType(data['time_off_policy_id'], 'String');
        }

        if (data.hasOwnProperty('part_of_day')) {
          obj['part_of_day'] = _ApiClient["default"].convertToType(data['part_of_day'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTimeOff;
}();
/**
 * The employee requesting time off.
 * @member {String} employee
 */


CreateTimeOff.prototype['employee'] = undefined;
/**
 * The employee approving the time off request.
 * @member {String} approver
 */

CreateTimeOff.prototype['approver'] = undefined;
/**
 * The status of this time off request.
 * @member {module:model/TimeOffStatusEnum} status
 */

CreateTimeOff.prototype['status'] = undefined;
/**
 * The status of this time off request.
 * @member {String} employee_note
 */

CreateTimeOff.prototype['employee_note'] = undefined;
/**
 * The unit of time requested.
 * @member {module:model/UnitsEnum} units
 */

CreateTimeOff.prototype['units'] = undefined;
/**
 * The number of time off units requested.
 * @member {Number} amount
 */

CreateTimeOff.prototype['amount'] = undefined;
/**
 * The type of time off request.
 * @member {module:model/RequestTypeEnum} request_type
 */

CreateTimeOff.prototype['request_type'] = undefined;
/**
 * @member {Date} start_date
 */

CreateTimeOff.prototype['start_date'] = undefined;
/**
 * @member {Date} end_date
 */

CreateTimeOff.prototype['end_date'] = undefined;
/**
 * @member {String} leave_type_id
 */

CreateTimeOff.prototype['leave_type_id'] = undefined;
/**
 * @member {String} time_off_policy_id
 */

CreateTimeOff.prototype['time_off_policy_id'] = undefined;
/**
 * @member {String} part_of_day
 */

CreateTimeOff.prototype['part_of_day'] = undefined;
var _default = CreateTimeOff;
exports["default"] = _default;