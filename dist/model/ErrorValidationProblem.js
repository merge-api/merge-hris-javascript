"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ValidationProblemSource = _interopRequireDefault(require("./ValidationProblemSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ErrorValidationProblem model module.
 * @module model/ErrorValidationProblem
 * @version 1.0
 */
var ErrorValidationProblem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorValidationProblem</code>.
   * @alias module:model/ErrorValidationProblem
   * @param title {String} 
   * @param detail {String} 
   * @param problemType {String} 
   */
  function ErrorValidationProblem(title, detail, problemType) {
    _classCallCheck(this, ErrorValidationProblem);

    ErrorValidationProblem.initialize(this, title, detail, problemType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ErrorValidationProblem, null, [{
    key: "initialize",
    value: function initialize(obj, title, detail, problemType) {
      obj['title'] = title;
      obj['detail'] = detail;
      obj['problem_type'] = problemType;
    }
    /**
     * Constructs a <code>ErrorValidationProblem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorValidationProblem} obj Optional instance to populate.
     * @return {module:model/ErrorValidationProblem} The populated <code>ErrorValidationProblem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorValidationProblem();

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ValidationProblemSource["default"].constructFromObject(data['source']);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], 'String');
        }

        if (data.hasOwnProperty('problem_type')) {
          obj['problem_type'] = _ApiClient["default"].convertToType(data['problem_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ErrorValidationProblem;
}();
/**
 * @member {module:model/ValidationProblemSource} source
 */


ErrorValidationProblem.prototype['source'] = undefined;
/**
 * @member {String} title
 */

ErrorValidationProblem.prototype['title'] = undefined;
/**
 * @member {String} detail
 */

ErrorValidationProblem.prototype['detail'] = undefined;
/**
 * @member {String} problem_type
 */

ErrorValidationProblem.prototype['problem_type'] = undefined;
var _default = ErrorValidationProblem;
exports["default"] = _default;