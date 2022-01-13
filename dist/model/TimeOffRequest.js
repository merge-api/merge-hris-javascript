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
 * The TimeOffRequest model module.
 * @module model/TimeOffRequest
 * @version 1.0
 */
var TimeOffRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeOffRequest</code>.
   * # The TimeOff Object ### Description The &#x60;TimeOff&#x60; object is used to represent a Time Off Request filed by an employee.  ### Usage Example Fetch from the &#x60;LIST TimeOffs&#x60; endpoint and filter by &#x60;ID&#x60; to show all time off requests.
   * @alias module:model/TimeOffRequest
   */
  function TimeOffRequest() {
    _classCallCheck(this, TimeOffRequest);

    TimeOffRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimeOffRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TimeOffRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeOffRequest} obj Optional instance to populate.
     * @return {module:model/TimeOffRequest} The populated <code>TimeOffRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeOffRequest();

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

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

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], 'Date');
        }

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return TimeOffRequest;
}();
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */


TimeOffRequest.prototype['remote_id'] = undefined;
/**
 * The employee requesting time off.
 * @member {String} employee
 */

TimeOffRequest.prototype['employee'] = undefined;
/**
 * The employee approving the time off request.
 * @member {String} approver
 */

TimeOffRequest.prototype['approver'] = undefined;
/**
 * The status of this time off request.
 * @member {module:model/TimeOffStatusEnum} status
 */

TimeOffRequest.prototype['status'] = undefined;
/**
 * The employee note for this time off request.
 * @member {String} employee_note
 */

TimeOffRequest.prototype['employee_note'] = undefined;
/**
 * The unit of time requested.
 * @member {module:model/UnitsEnum} units
 */

TimeOffRequest.prototype['units'] = undefined;
/**
 * The number of time off units requested.
 * @member {Number} amount
 */

TimeOffRequest.prototype['amount'] = undefined;
/**
 * The type of time off request.
 * @member {module:model/RequestTypeEnum} request_type
 */

TimeOffRequest.prototype['request_type'] = undefined;
/**
 * The day and time of the start of the time requested off.
 * @member {Date} start_time
 */

TimeOffRequest.prototype['start_time'] = undefined;
/**
 * The day and time of the end of the time requested off.
 * @member {Date} end_time
 */

TimeOffRequest.prototype['end_time'] = undefined;
var _default = TimeOffRequest;
exports["default"] = _default;