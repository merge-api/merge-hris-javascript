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
 * The CreateCompany model module.
 * @module model/CreateCompany
 * @version 1.0
 */
var CreateCompany = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateCompany</code>.
   * # The Company Object ### Description The &#x60;Company&#x60; object is used to represent a Company.
   * @alias module:model/CreateCompany
   */
  function CreateCompany() {
    _classCallCheck(this, CreateCompany);

    CreateCompany.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCompany, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCompany} obj Optional instance to populate.
     * @return {module:model/CreateCompany} The populated <code>CreateCompany</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCompany();

        if (data.hasOwnProperty('legal_name')) {
          obj['legal_name'] = _ApiClient["default"].convertToType(data['legal_name'], 'String');
        }

        if (data.hasOwnProperty('display_name')) {
          obj['display_name'] = _ApiClient["default"].convertToType(data['display_name'], 'String');
        }

        if (data.hasOwnProperty('eins')) {
          obj['eins'] = _ApiClient["default"].convertToType(data['eins'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return CreateCompany;
}();
/**
 * The company's legal name.
 * @member {String} legal_name
 */


CreateCompany.prototype['legal_name'] = undefined;
/**
 * The company's display name.
 * @member {String} display_name
 */

CreateCompany.prototype['display_name'] = undefined;
/**
 * The company's Employer Identification Numbers.
 * @member {Array.<String>} eins
 */

CreateCompany.prototype['eins'] = undefined;
var _default = CreateCompany;
exports["default"] = _default;