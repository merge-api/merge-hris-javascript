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
 * The Team model module.
 * @module model/Team
 * @version 1.0
 */
var Team = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Team</code>.
   * # The Team Object ### Description The &#x60;Team&#x60; object is used to represent a Team within a company. &#x60;Employee&#x60; objects are often grouped this way. Note that in the Merge HRIS API, company subdivisions are all represented with &#x60;Teams&#x60;, rather than &#x60;Teams&#x60; and &#x60;Departments&#x60;.  ### Usage Example If you&#39;re building a way to filter by &#x60;Team&#x60;, you&#39;d hit the &#x60;GET Teams&#x60; endpoint to fetch the &#x60;Teams&#x60;, and then use the &#x60;ID&#x60; of the team your user selects to filter the &#x60;GET Employees&#x60; endpoint.
   * @alias module:model/Team
   */
  function Team() {
    _classCallCheck(this, Team);

    Team.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Team, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Team} obj Optional instance to populate.
     * @return {module:model/Team} The populated <code>Team</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Team();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Team;
}();
/**
 * @member {String} id
 */


Team.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Team.prototype['remote_id'] = undefined;
/**
 * The team's name.
 * @member {String} name
 */

Team.prototype['name'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Team.prototype['remote_data'] = undefined;
var _default = Team;
exports["default"] = _default;