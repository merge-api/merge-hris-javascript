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
 * The CreateTeam model module.
 * @module model/CreateTeam
 * @version 1.0
 */
var CreateTeam = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTeam</code>.
   * # The Team Object ### Description The &#x60;Team&#x60; object is used to represent a Team within a company. &#x60;Employee&#x60; objects are often grouped this way. Note that in the Merge HRIS API, company subdivisions are all represented with &#x60;Teams&#x60;, rather than &#x60;Teams&#x60; and &#x60;Departments&#x60;.
   * @alias module:model/CreateTeam
   */
  function CreateTeam() {
    _classCallCheck(this, CreateTeam);

    CreateTeam.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTeam, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateTeam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTeam} obj Optional instance to populate.
     * @return {module:model/CreateTeam} The populated <code>CreateTeam</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTeam();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTeam;
}();
/**
 * The team's name.
 * @member {String} name
 */


CreateTeam.prototype['name'] = undefined;
var _default = CreateTeam;
exports["default"] = _default;