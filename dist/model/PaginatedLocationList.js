"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Location = _interopRequireDefault(require("./Location"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedLocationList model module.
 * @module model/PaginatedLocationList
 * @version 1.0
 */
var PaginatedLocationList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedLocationList</code>.
   * @alias module:model/PaginatedLocationList
   */
  function PaginatedLocationList() {
    _classCallCheck(this, PaginatedLocationList);

    PaginatedLocationList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedLocationList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedLocationList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedLocationList} obj Optional instance to populate.
     * @return {module:model/PaginatedLocationList} The populated <code>PaginatedLocationList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedLocationList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_Location["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedLocationList;
}();
/**
 * @member {String} next
 */


PaginatedLocationList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedLocationList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/Location>} results
 */

PaginatedLocationList.prototype['results'] = undefined;
var _default = PaginatedLocationList;
exports["default"] = _default;