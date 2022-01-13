"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PolicyTypeEnum = _interopRequireDefault(require("./PolicyTypeEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TimeOffBalance model module.
 * @module model/TimeOffBalance
 * @version 1.0
 */
var TimeOffBalance = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeOffBalance</code>.
   * # The TimeOffBalance Object ### Description The &#x60;TimeOffBalance&#x60; object is used to represent a Time Off Balance for an employee.  ### Usage Example Fetch from the &#x60;LIST TimeOffBalances&#x60; endpoint and filter by &#x60;ID&#x60; to show all time off balances.
   * @alias module:model/TimeOffBalance
   */
  function TimeOffBalance() {
    _classCallCheck(this, TimeOffBalance);

    TimeOffBalance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimeOffBalance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TimeOffBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeOffBalance} obj Optional instance to populate.
     * @return {module:model/TimeOffBalance} The populated <code>TimeOffBalance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeOffBalance();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('employee')) {
          obj['employee'] = _ApiClient["default"].convertToType(data['employee'], 'String');
        }

        if (data.hasOwnProperty('balance')) {
          obj['balance'] = _ApiClient["default"].convertToType(data['balance'], 'Number');
        }

        if (data.hasOwnProperty('used')) {
          obj['used'] = _ApiClient["default"].convertToType(data['used'], 'Number');
        }

        if (data.hasOwnProperty('policy_type')) {
          obj['policy_type'] = _ApiClient["default"].convertToType(data['policy_type'], _PolicyTypeEnum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TimeOffBalance;
}();
/**
 * @member {String} id
 */


TimeOffBalance.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

TimeOffBalance.prototype['remote_id'] = undefined;
/**
 * The employee the balance belongs to.
 * @member {String} employee
 */

TimeOffBalance.prototype['employee'] = undefined;
/**
 * The current PTO balance in terms of hours.
 * @member {Number} balance
 */

TimeOffBalance.prototype['balance'] = undefined;
/**
 * The amount of PTO used in terms of hours.
 * @member {Number} used
 */

TimeOffBalance.prototype['used'] = undefined;
/**
 * The policy type of this time off balance.
 * @member {module:model/PolicyTypeEnum} policy_type
 */

TimeOffBalance.prototype['policy_type'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

TimeOffBalance.prototype['remote_data'] = undefined;
var _default = TimeOffBalance;
exports["default"] = _default;