"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CategoriesEnum = _interopRequireDefault(require("./CategoriesEnum"));

var _ModelOperation = _interopRequireDefault(require("./ModelOperation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountDetailsAndActionsIntegration model module.
 * @module model/AccountDetailsAndActionsIntegration
 * @version 1.0
 */
var AccountDetailsAndActionsIntegration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountDetailsAndActionsIntegration</code>.
   * @alias module:model/AccountDetailsAndActionsIntegration
   * @param name {String} 
   * @param categories {Array.<module:model/CategoriesEnum>} 
   * @param color {String} 
   * @param slug {String} 
   * @param passthroughAvailable {Boolean} 
   */
  function AccountDetailsAndActionsIntegration(name, categories, color, slug, passthroughAvailable) {
    _classCallCheck(this, AccountDetailsAndActionsIntegration);

    AccountDetailsAndActionsIntegration.initialize(this, name, categories, color, slug, passthroughAvailable);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountDetailsAndActionsIntegration, null, [{
    key: "initialize",
    value: function initialize(obj, name, categories, color, slug, passthroughAvailable) {
      obj['name'] = name;
      obj['categories'] = categories;
      obj['color'] = color;
      obj['slug'] = slug;
      obj['passthrough_available'] = passthroughAvailable;
    }
    /**
     * Constructs a <code>AccountDetailsAndActionsIntegration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDetailsAndActionsIntegration} obj Optional instance to populate.
     * @return {module:model/AccountDetailsAndActionsIntegration} The populated <code>AccountDetailsAndActionsIntegration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountDetailsAndActionsIntegration();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], [_CategoriesEnum["default"]]);
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = _ApiClient["default"].convertToType(data['image'], 'String');
        }

        if (data.hasOwnProperty('square_image')) {
          obj['square_image'] = _ApiClient["default"].convertToType(data['square_image'], 'String');
        }

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('passthrough_available')) {
          obj['passthrough_available'] = _ApiClient["default"].convertToType(data['passthrough_available'], 'Boolean');
        }

        if (data.hasOwnProperty('available_model_operations')) {
          obj['available_model_operations'] = _ApiClient["default"].convertToType(data['available_model_operations'], [_ModelOperation["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AccountDetailsAndActionsIntegration;
}();
/**
 * @member {String} name
 */


AccountDetailsAndActionsIntegration.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/CategoriesEnum>} categories
 */

AccountDetailsAndActionsIntegration.prototype['categories'] = undefined;
/**
 * @member {String} image
 */

AccountDetailsAndActionsIntegration.prototype['image'] = undefined;
/**
 * @member {String} square_image
 */

AccountDetailsAndActionsIntegration.prototype['square_image'] = undefined;
/**
 * @member {String} color
 */

AccountDetailsAndActionsIntegration.prototype['color'] = undefined;
/**
 * @member {String} slug
 */

AccountDetailsAndActionsIntegration.prototype['slug'] = undefined;
/**
 * @member {Boolean} passthrough_available
 */

AccountDetailsAndActionsIntegration.prototype['passthrough_available'] = undefined;
/**
 * @member {Array.<module:model/ModelOperation>} available_model_operations
 */

AccountDetailsAndActionsIntegration.prototype['available_model_operations'] = undefined;
var _default = AccountDetailsAndActionsIntegration;
exports["default"] = _default;