"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PayGroup model module.
 * @module model/PayGroup
 * @version 1.0
 */
var PayGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PayGroup</code>.
   * # The PayGroup Object ### Description The &#x60;PayGroup&#x60; object is used to represent Pay Group information that employees belong to. This is often referenced with an Employee object.  ### Usage Example Fetch from the &#x60;LIST PayGroup&#x60; endpoint and filter by &#x60;ID&#x60; to show all pay group information.
   * @alias module:model/PayGroup
   */
  function PayGroup() {
    _classCallCheck(this, PayGroup);

    PayGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PayGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PayGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayGroup} obj Optional instance to populate.
     * @return {module:model/PayGroup} The populated <code>PayGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PayGroup();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('pay_group_name')) {
          obj['pay_group_name'] = _ApiClient["default"].convertToType(data['pay_group_name'], 'String');
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PayGroup;
}();
/**
 * @member {String} id
 */


PayGroup.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

PayGroup.prototype['remote_id'] = undefined;
/**
 * The pay group name.
 * @member {String} pay_group_name
 */

PayGroup.prototype['pay_group_name'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

PayGroup.prototype['remote_data'] = undefined;
var _default = PayGroup;
exports["default"] = _default;