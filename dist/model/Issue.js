"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueStatusEnum = _interopRequireDefault(require("./IssueStatusEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Issue model module.
 * @module model/Issue
 * @version 1.0
 */
var Issue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Issue</code>.
   * @alias module:model/Issue
   * @param errorDescription {String} 
   */
  function Issue(errorDescription) {
    _classCallCheck(this, Issue);

    Issue.initialize(this, errorDescription);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Issue, null, [{
    key: "initialize",
    value: function initialize(obj, errorDescription) {
      obj['error_description'] = errorDescription;
    }
    /**
     * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Issue} obj Optional instance to populate.
     * @return {module:model/Issue} The populated <code>Issue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Issue();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _IssueStatusEnum["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('error_description')) {
          obj['error_description'] = _ApiClient["default"].convertToType(data['error_description'], 'String');
        }

        if (data.hasOwnProperty('end_user')) {
          obj['end_user'] = _ApiClient["default"].convertToType(data['end_user'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('first_incident_time')) {
          obj['first_incident_time'] = _ApiClient["default"].convertToType(data['first_incident_time'], 'Date');
        }

        if (data.hasOwnProperty('last_incident_time')) {
          obj['last_incident_time'] = _ApiClient["default"].convertToType(data['last_incident_time'], 'Date');
        }

        if (data.hasOwnProperty('is_muted')) {
          obj['is_muted'] = _ApiClient["default"].convertToType(data['is_muted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Issue;
}();
/**
 * @member {String} id
 */


Issue.prototype['id'] = undefined;
/**
 * @member {module:model/IssueStatusEnum} status
 */

Issue.prototype['status'] = undefined;
/**
 * @member {String} error_description
 */

Issue.prototype['error_description'] = undefined;
/**
 * @member {Object.<String, Object>} end_user
 */

Issue.prototype['end_user'] = undefined;
/**
 * @member {Date} first_incident_time
 */

Issue.prototype['first_incident_time'] = undefined;
/**
 * @member {Date} last_incident_time
 */

Issue.prototype['last_incident_time'] = undefined;
/**
 * @member {Boolean} is_muted
 */

Issue.prototype['is_muted'] = undefined;
var _default = Issue;
exports["default"] = _default;