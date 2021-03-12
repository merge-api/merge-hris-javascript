"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedTeamList model module.
 * @module model/PaginatedTeamList
 * @version 1.0
 */
var PaginatedTeamList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedTeamList</code>.
   * @alias module:model/PaginatedTeamList
   */
  function PaginatedTeamList() {
    _classCallCheck(this, PaginatedTeamList);

    PaginatedTeamList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedTeamList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedTeamList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedTeamList} obj Optional instance to populate.
     * @return {module:model/PaginatedTeamList} The populated <code>PaginatedTeamList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedTeamList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_Team["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedTeamList;
}();
/**
 * @member {String} next
 */


PaginatedTeamList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedTeamList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/Team>} results
 */

PaginatedTeamList.prototype['results'] = undefined;
var _default = PaginatedTeamList;
exports["default"] = _default;