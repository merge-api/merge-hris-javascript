"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TimeOff = _interopRequireDefault(require("./TimeOff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PaginatedTimeOffList model module.
 * @module model/PaginatedTimeOffList
 * @version 1.0
 */
var PaginatedTimeOffList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaginatedTimeOffList</code>.
   * @alias module:model/PaginatedTimeOffList
   */
  function PaginatedTimeOffList() {
    _classCallCheck(this, PaginatedTimeOffList);

    PaginatedTimeOffList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PaginatedTimeOffList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PaginatedTimeOffList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedTimeOffList} obj Optional instance to populate.
     * @return {module:model/PaginatedTimeOffList} The populated <code>PaginatedTimeOffList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaginatedTimeOffList();

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_TimeOff["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PaginatedTimeOffList;
}();
/**
 * @member {String} next
 */


PaginatedTimeOffList.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

PaginatedTimeOffList.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/TimeOff>} results
 */

PaginatedTimeOffList.prototype['results'] = undefined;
var _default = PaginatedTimeOffList;
exports["default"] = _default;