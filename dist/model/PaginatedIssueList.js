"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Issue = _interopRequireDefault(require("./Issue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedIssueList model module.
 * @module model/PaginatedIssueList
 * @version 1.0
 */
var PaginatedIssueList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedIssueList</code>.
   * @alias module:model/PaginatedIssueList
   */
  function PaginatedIssueList() {
    _classCallCheck(this, PaginatedIssueList);

    PaginatedIssueList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedIssueList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedIssueList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedIssueList} obj Optional instance to populate.
     * @return {module:model/PaginatedIssueList} The populated <code>PaginatedIssueList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedIssueList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_Issue["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedIssueList;
}();
/**
 * @member {String} next
 */


PaginatedIssueList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedIssueList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/Issue>} results
 */

PaginatedIssueList.prototype['results'] = undefined;
var _default = PaginatedIssueList;
exports["default"] = _default;