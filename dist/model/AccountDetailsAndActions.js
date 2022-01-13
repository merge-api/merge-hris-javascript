"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountDetailsAndActionsIntegration = _interopRequireDefault(require("./AccountDetailsAndActionsIntegration"));

var _AccountDetailsAndActionsStatusEnum = _interopRequireDefault(require("./AccountDetailsAndActionsStatusEnum"));

var _CategoryEnum = _interopRequireDefault(require("./CategoryEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountDetailsAndActions model module.
 * @module model/AccountDetailsAndActions
 * @version 1.0
 */
var AccountDetailsAndActions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountDetailsAndActions</code>.
   * # The LinkedAccount Object ### Description The &#x60;LinkedAccount&#x60; object is used to represent an end user&#39;s link with a specific integration.  ### Usage Example View a list of your organization&#39;s &#x60;LinkedAccount&#x60; objects.
   * @alias module:model/AccountDetailsAndActions
   * @param id {String} 
   * @param status {module:model/AccountDetailsAndActionsStatusEnum} 
   * @param endUserOrganizationName {String} 
   * @param endUserEmailAddress {String} 
   */
  function AccountDetailsAndActions(id, status, endUserOrganizationName, endUserEmailAddress) {
    _classCallCheck(this, AccountDetailsAndActions);

    AccountDetailsAndActions.initialize(this, id, status, endUserOrganizationName, endUserEmailAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountDetailsAndActions, null, [{
    key: "initialize",
    value: function initialize(obj, id, status, endUserOrganizationName, endUserEmailAddress) {
      obj['id'] = id;
      obj['status'] = status;
      obj['end_user_organization_name'] = endUserOrganizationName;
      obj['end_user_email_address'] = endUserEmailAddress;
    }
    /**
     * Constructs a <code>AccountDetailsAndActions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDetailsAndActions} obj Optional instance to populate.
     * @return {module:model/AccountDetailsAndActions} The populated <code>AccountDetailsAndActions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountDetailsAndActions();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], _CategoryEnum["default"]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _AccountDetailsAndActionsStatusEnum["default"]);
        }

        if (data.hasOwnProperty('status_detail')) {
          obj['status_detail'] = _ApiClient["default"].convertToType(data['status_detail'], 'String');
        }

        if (data.hasOwnProperty('end_user_origin_id')) {
          obj['end_user_origin_id'] = _ApiClient["default"].convertToType(data['end_user_origin_id'], 'String');
        }

        if (data.hasOwnProperty('end_user_organization_name')) {
          obj['end_user_organization_name'] = _ApiClient["default"].convertToType(data['end_user_organization_name'], 'String');
        }

        if (data.hasOwnProperty('end_user_email_address')) {
          obj['end_user_email_address'] = _ApiClient["default"].convertToType(data['end_user_email_address'], 'String');
        }

        if (data.hasOwnProperty('integration')) {
          obj['integration'] = _AccountDetailsAndActionsIntegration["default"].constructFromObject(data['integration']);
        }
      }

      return obj;
    }
  }]);

  return AccountDetailsAndActions;
}();
/**
 * @member {String} id
 */


AccountDetailsAndActions.prototype['id'] = undefined;
/**
 * @member {module:model/CategoryEnum} category
 */

AccountDetailsAndActions.prototype['category'] = undefined;
/**
 * @member {module:model/AccountDetailsAndActionsStatusEnum} status
 */

AccountDetailsAndActions.prototype['status'] = undefined;
/**
 * @member {String} status_detail
 */

AccountDetailsAndActions.prototype['status_detail'] = undefined;
/**
 * @member {String} end_user_origin_id
 */

AccountDetailsAndActions.prototype['end_user_origin_id'] = undefined;
/**
 * @member {String} end_user_organization_name
 */

AccountDetailsAndActions.prototype['end_user_organization_name'] = undefined;
/**
 * @member {String} end_user_email_address
 */

AccountDetailsAndActions.prototype['end_user_email_address'] = undefined;
/**
 * @member {module:model/AccountDetailsAndActionsIntegration} integration
 */

AccountDetailsAndActions.prototype['integration'] = undefined;
var _default = AccountDetailsAndActions;
exports["default"] = _default;