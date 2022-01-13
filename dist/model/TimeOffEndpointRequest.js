"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TimeOffRequest = _interopRequireDefault(require("./TimeOffRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TimeOffEndpointRequest model module.
 * @module model/TimeOffEndpointRequest
 * @version 1.0
 */
var TimeOffEndpointRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeOffEndpointRequest</code>.
   * @alias module:model/TimeOffEndpointRequest
   * @param model {module:model/TimeOffRequest} 
   */
  function TimeOffEndpointRequest(model) {
    _classCallCheck(this, TimeOffEndpointRequest);

    TimeOffEndpointRequest.initialize(this, model);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimeOffEndpointRequest, null, [{
    key: "initialize",
    value: function initialize(obj, model) {
      obj['model'] = model;
    }
    /**
     * Constructs a <code>TimeOffEndpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeOffEndpointRequest} obj Optional instance to populate.
     * @return {module:model/TimeOffEndpointRequest} The populated <code>TimeOffEndpointRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeOffEndpointRequest();

        if (data.hasOwnProperty('model')) {
          obj['model'] = _TimeOffRequest["default"].constructFromObject(data['model']);
        }
      }

      return obj;
    }
  }]);

  return TimeOffEndpointRequest;
}();
/**
 * @member {module:model/TimeOffRequest} model
 */


TimeOffEndpointRequest.prototype['model'] = undefined;
var _default = TimeOffEndpointRequest;
exports["default"] = _default;