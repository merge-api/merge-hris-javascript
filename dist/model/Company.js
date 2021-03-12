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
 * The Company model module.
 * @module model/Company
 * @version 1.0
 */
var Company = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Company</code>.
   * # The Company Object ### Description The &#x60;Company&#x60; object is used to represent a Company.  ### Usage Example Fetch from the &#x60;LIST Companies&#x60; endpoint and filter by &#x60;ID&#x60; to show all companies.
   * @alias module:model/Company
   */
  function Company() {
    _classCallCheck(this, Company);

    Company.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Company, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Company} obj Optional instance to populate.
     * @return {module:model/Company} The populated <code>Company</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Company();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('legal_name')) {
          obj['legal_name'] = _ApiClient["default"].convertToType(data['legal_name'], 'String');
        }

        if (data.hasOwnProperty('display_name')) {
          obj['display_name'] = _ApiClient["default"].convertToType(data['display_name'], 'String');
        }

        if (data.hasOwnProperty('eins')) {
          obj['eins'] = _ApiClient["default"].convertToType(data['eins'], ['String']);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Company;
}();
/**
 * @member {String} id
 */


Company.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Company.prototype['remote_id'] = undefined;
/**
 * The company's legal name.
 * @member {String} legal_name
 */

Company.prototype['legal_name'] = undefined;
/**
 * The company's display name.
 * @member {String} display_name
 */

Company.prototype['display_name'] = undefined;
/**
 * The company's Employer Identification Numbers.
 * @member {Array.<String>} eins
 */

Company.prototype['eins'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Company.prototype['remote_data'] = undefined;
var _default = Company;
exports["default"] = _default;