"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeEnum = _interopRequireDefault(require("./TypeEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Earning model module.
 * @module model/Earning
 * @version 1.0
 */
var Earning = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Earning</code>.
   * # The Earning Object ### Description The &#x60;Earning&#x60; object is used to represent an earning for a given employee&#39;s payroll run. One run could include several earnings.  ### Usage Example Fetch from the &#x60;LIST Earnings&#x60; endpoint and filter by &#x60;ID&#x60; to show all earnings.
   * @alias module:model/Earning
   */
  function Earning() {
    _classCallCheck(this, Earning);

    Earning.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Earning, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Earning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Earning} obj Optional instance to populate.
     * @return {module:model/Earning} The populated <code>Earning</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Earning();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('employee_payroll_run')) {
          obj['employee_payroll_run'] = _ApiClient["default"].convertToType(data['employee_payroll_run'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], _TypeEnum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [{
            'String': Object
          }]);
        }
      }

      return obj;
    }
  }]);

  return Earning;
}();
/**
 * @member {String} id
 */


Earning.prototype['id'] = undefined;
/**
 * The earning's employee payroll run.
 * @member {String} employee_payroll_run
 */

Earning.prototype['employee_payroll_run'] = undefined;
/**
 * The amount earned.
 * @member {Number} amount
 */

Earning.prototype['amount'] = undefined;
/**
 * The type of earning.
 * @member {module:model/TypeEnum} type
 */

Earning.prototype['type'] = undefined;
/**
 * @member {Array.<Object.<String, Object>>} remote_data
 */

Earning.prototype['remote_data'] = undefined;
var _default = Earning;
exports["default"] = _default;