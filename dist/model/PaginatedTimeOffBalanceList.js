"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TimeOffBalance = _interopRequireDefault(require("./TimeOffBalance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedTimeOffBalanceList model module.
 * @module model/PaginatedTimeOffBalanceList
 * @version 1.0
 */
var PaginatedTimeOffBalanceList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedTimeOffBalanceList</code>.
   * @alias module:model/PaginatedTimeOffBalanceList
   */
  function PaginatedTimeOffBalanceList() {
    _classCallCheck(this, PaginatedTimeOffBalanceList);

    PaginatedTimeOffBalanceList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedTimeOffBalanceList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedTimeOffBalanceList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedTimeOffBalanceList} obj Optional instance to populate.
     * @return {module:model/PaginatedTimeOffBalanceList} The populated <code>PaginatedTimeOffBalanceList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedTimeOffBalanceList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_TimeOffBalance["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedTimeOffBalanceList;
}();
/**
 * @member {String} next
 */


PaginatedTimeOffBalanceList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedTimeOffBalanceList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/TimeOffBalance>} results
 */

PaginatedTimeOffBalanceList.prototype['results'] = undefined;
var _default = PaginatedTimeOffBalanceList;
exports["default"] = _default;