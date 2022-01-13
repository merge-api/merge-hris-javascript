"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountTypeEnum = _interopRequireDefault(require("./AccountTypeEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _Employee = _interopRequireDefault(require("./Employee"));

var _Utils = _interopRequireDefault(require("../Utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BankInfo model module.
 * @module model/BankInfo
 * @version 1.0
 */
var BankInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BankInfo</code>.
   * # The BankInfo Object ### Description The &#x60;BankInfo&#x60; object is used to represent the Bank Account information for an Employee. This is often referenced with an Employee object.  ### Usage Example Fetch from the &#x60;LIST BankInfo&#x60; endpoint and filter by &#x60;ID&#x60; to show all bank information.
   * @alias module:model/BankInfo
   */
  function BankInfo() {
    _classCallCheck(this, BankInfo);

    BankInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BankInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BankInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankInfo} obj Optional instance to populate.
     * @return {module:model/BankInfo} The populated <code>BankInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BankInfo();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('employee')) {
          obj['employee'] = (0, _Utils["default"])(data['employee'], _Employee["default"]);
        }

        if (data.hasOwnProperty('account_number')) {
          obj['account_number'] = _ApiClient["default"].convertToType(data['account_number'], 'String');
        }

        if (data.hasOwnProperty('routing_number')) {
          obj['routing_number'] = _ApiClient["default"].convertToType(data['routing_number'], 'String');
        }

        if (data.hasOwnProperty('bank_name')) {
          obj['bank_name'] = _ApiClient["default"].convertToType(data['bank_name'], 'String');
        }

        if (data.hasOwnProperty('account_type')) {
          obj['account_type'] = _ApiClient["default"].convertToType(data['account_type'], _AccountTypeEnum["default"]);
        }

        if (data.hasOwnProperty('remote_created_at')) {
          obj['remote_created_at'] = _ApiClient["default"].convertToType(data['remote_created_at'], 'Date');
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BankInfo;
}();
/**
 * @member {String} id
 */


BankInfo.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

BankInfo.prototype['remote_id'] = undefined;
/**
 * The employee with this bank account.
 * @member {String} employee
 */

BankInfo.prototype['employee'] = undefined;
/**
 * The account number.
 * @member {String} account_number
 */

BankInfo.prototype['account_number'] = undefined;
/**
 * The routing number.
 * @member {String} routing_number
 */

BankInfo.prototype['routing_number'] = undefined;
/**
 * The bank name.
 * @member {String} bank_name
 */

BankInfo.prototype['bank_name'] = undefined;
/**
 * The bank account type
 * @member {module:model/AccountTypeEnum} account_type
 */

BankInfo.prototype['account_type'] = undefined;
/**
 * When the matching bank object was created in the third party system.
 * @member {Date} remote_created_at
 */

BankInfo.prototype['remote_created_at'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

BankInfo.prototype['remote_data'] = undefined;
var _default = BankInfo;
exports["default"] = _default;