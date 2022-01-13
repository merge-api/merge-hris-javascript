"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _RunStateEnum = _interopRequireDefault(require("./RunStateEnum"));

var _RunTypeEnum = _interopRequireDefault(require("./RunTypeEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayrollRun model module.
 * @module model/PayrollRun
 * @version 1.0
 */
var PayrollRun = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayrollRun</code>.
   * # The PayrollRun Object ### Description The &#x60;PayrollRun&#x60; object is used to represent a payroll run.  ### Usage Example Fetch from the &#x60;LIST PayrollRuns&#x60; endpoint and filter by &#x60;ID&#x60; to show all payroll runs.
   * @alias module:model/PayrollRun
   */
  function PayrollRun() {
    _classCallCheck(this, PayrollRun);

    PayrollRun.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayrollRun, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayrollRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayrollRun} obj Optional instance to populate.
     * @return {module:model/PayrollRun} The populated <code>PayrollRun</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayrollRun();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('run_state')) {
          obj['run_state'] = _ApiClient["default"].convertToType(data['run_state'], _RunStateEnum["default"]);
        }

        if (data.hasOwnProperty('run_type')) {
          obj['run_type'] = _ApiClient["default"].convertToType(data['run_type'], _RunTypeEnum["default"]);
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

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PayrollRun;
}();
/**
 * @member {String} id
 */


PayrollRun.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

PayrollRun.prototype['remote_id'] = undefined;
/**
 * The state of the payroll run
 * @member {module:model/RunStateEnum} run_state
 */

PayrollRun.prototype['run_state'] = undefined;
/**
 * The type of the payroll run
 * @member {module:model/RunTypeEnum} run_type
 */

PayrollRun.prototype['run_type'] = undefined;
/**
 * The day and time the payroll run started.
 * @member {Date} start_date
 */

PayrollRun.prototype['start_date'] = undefined;
/**
 * The day and time the payroll run ended.
 * @member {Date} end_date
 */

PayrollRun.prototype['end_date'] = undefined;
/**
 * The day and time the payroll run was checked.
 * @member {Date} check_date
 */

PayrollRun.prototype['check_date'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

PayrollRun.prototype['remote_data'] = undefined;
var _default = PayrollRun;
exports["default"] = _default;