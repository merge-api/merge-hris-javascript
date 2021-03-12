"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmploymentStatusEnum = _interopRequireDefault(require("./EmploymentStatusEnum"));

var _EthnicityEnum = _interopRequireDefault(require("./EthnicityEnum"));

var _GenderEnum = _interopRequireDefault(require("./GenderEnum"));

var _MaritalStatusEnum = _interopRequireDefault(require("./MaritalStatusEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateEmployee model module.
 * @module model/CreateEmployee
 * @version 1.0
 */
var CreateEmployee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateEmployee</code>.
   * # The Employee Object ### Description The &#x60;Employee&#x60; object is used to represent an Employee for a company.
   * @alias module:model/CreateEmployee
   */
  function CreateEmployee() {
    _classCallCheck(this, CreateEmployee);

    CreateEmployee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateEmployee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateEmployee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEmployee} obj Optional instance to populate.
     * @return {module:model/CreateEmployee} The populated <code>CreateEmployee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateEmployee();

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('display_full_name')) {
          obj['display_full_name'] = _ApiClient["default"].convertToType(data['display_full_name'], 'String');
        }

        if (data.hasOwnProperty('work_email')) {
          obj['work_email'] = _ApiClient["default"].convertToType(data['work_email'], 'String');
        }

        if (data.hasOwnProperty('personal_email')) {
          obj['personal_email'] = _ApiClient["default"].convertToType(data['personal_email'], 'String');
        }

        if (data.hasOwnProperty('mobile_phone_number')) {
          obj['mobile_phone_number'] = _ApiClient["default"].convertToType(data['mobile_phone_number'], 'String');
        }

        if (data.hasOwnProperty('employments')) {
          obj['employments'] = _ApiClient["default"].convertToType(data['employments'], ['String']);
        }

        if (data.hasOwnProperty('home_location')) {
          obj['home_location'] = _ApiClient["default"].convertToType(data['home_location'], 'String');
        }

        if (data.hasOwnProperty('work_location')) {
          obj['work_location'] = _ApiClient["default"].convertToType(data['work_location'], 'String');
        }

        if (data.hasOwnProperty('manager')) {
          obj['manager'] = _ApiClient["default"].convertToType(data['manager'], 'String');
        }

        if (data.hasOwnProperty('team')) {
          obj['team'] = _ApiClient["default"].convertToType(data['team'], 'String');
        }

        if (data.hasOwnProperty('ssn')) {
          obj['ssn'] = _ApiClient["default"].convertToType(data['ssn'], 'String');
        }

        if (data.hasOwnProperty('gender')) {
          obj['gender'] = _ApiClient["default"].convertToType(data['gender'], _GenderEnum["default"]);
        }

        if (data.hasOwnProperty('ethnicity')) {
          obj['ethnicity'] = _ApiClient["default"].convertToType(data['ethnicity'], _EthnicityEnum["default"]);
        }

        if (data.hasOwnProperty('marital_status')) {
          obj['marital_status'] = _ApiClient["default"].convertToType(data['marital_status'], _MaritalStatusEnum["default"]);
        }

        if (data.hasOwnProperty('date_of_birth')) {
          obj['date_of_birth'] = _ApiClient["default"].convertToType(data['date_of_birth'], 'Date');
        }

        if (data.hasOwnProperty('hire_date')) {
          obj['hire_date'] = _ApiClient["default"].convertToType(data['hire_date'], 'Date');
        }

        if (data.hasOwnProperty('employment_status')) {
          obj['employment_status'] = _ApiClient["default"].convertToType(data['employment_status'], _EmploymentStatusEnum["default"]);
        }

        if (data.hasOwnProperty('termination_date')) {
          obj['termination_date'] = _ApiClient["default"].convertToType(data['termination_date'], 'Date');
        }

        if (data.hasOwnProperty('avatar')) {
          obj['avatar'] = _ApiClient["default"].convertToType(data['avatar'], 'String');
        }

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateEmployee;
}();
/**
 * The ID of the Employee's company.
 * @member {String} company
 */


CreateEmployee.prototype['company'] = undefined;
/**
 * The employee's first name.
 * @member {String} first_name
 */

CreateEmployee.prototype['first_name'] = undefined;
/**
 * The employee's last name.
 * @member {String} last_name
 */

CreateEmployee.prototype['last_name'] = undefined;
/**
 * The employee's full name, to use for display purposes.
 * @member {String} display_full_name
 */

CreateEmployee.prototype['display_full_name'] = undefined;
/**
 * The employee's work email.
 * @member {String} work_email
 */

CreateEmployee.prototype['work_email'] = undefined;
/**
 * The employee's personal email.
 * @member {String} personal_email
 */

CreateEmployee.prototype['personal_email'] = undefined;
/**
 * The employee's mobile phone number.
 * @member {String} mobile_phone_number
 */

CreateEmployee.prototype['mobile_phone_number'] = undefined;
/**
 * @member {Array.<String>} employments
 */

CreateEmployee.prototype['employments'] = undefined;
/**
 * The employee's home address.
 * @member {String} home_location
 */

CreateEmployee.prototype['home_location'] = undefined;
/**
 * The employee's work address.
 * @member {String} work_location
 */

CreateEmployee.prototype['work_location'] = undefined;
/**
 * The employeee ID of the employee's manager.
 * @member {String} manager
 */

CreateEmployee.prototype['manager'] = undefined;
/**
 * The employee's team.
 * @member {String} team
 */

CreateEmployee.prototype['team'] = undefined;
/**
 * The employee's social security number.
 * @member {String} ssn
 */

CreateEmployee.prototype['ssn'] = undefined;
/**
 * The employee's gender.
 * @member {module:model/GenderEnum} gender
 */

CreateEmployee.prototype['gender'] = undefined;
/**
 * The employee's ethnicity.
 * @member {module:model/EthnicityEnum} ethnicity
 */

CreateEmployee.prototype['ethnicity'] = undefined;
/**
 * The employee's marital status.
 * @member {module:model/MaritalStatusEnum} marital_status
 */

CreateEmployee.prototype['marital_status'] = undefined;
/**
 * The employee's date of birth.
 * @member {Date} date_of_birth
 */

CreateEmployee.prototype['date_of_birth'] = undefined;
/**
 * The employee's hire date.
 * @member {Date} hire_date
 */

CreateEmployee.prototype['hire_date'] = undefined;
/**
 * The employment status of the employee.
 * @member {module:model/EmploymentStatusEnum} employment_status
 */

CreateEmployee.prototype['employment_status'] = undefined;
/**
 * The employee's termination date.
 * @member {Date} termination_date
 */

CreateEmployee.prototype['termination_date'] = undefined;
/**
 * The URL of the employee's avatar image.
 * @member {String} avatar
 */

CreateEmployee.prototype['avatar'] = undefined;
/**
 * @member {String} code
 */

CreateEmployee.prototype['code'] = undefined;
var _default = CreateEmployee;
exports["default"] = _default;