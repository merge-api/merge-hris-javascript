"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Utils = _interopRequireDefault(require("../Utils"));

var _EmploymentStatusEnum = _interopRequireDefault(require("./EmploymentStatusEnum"));

var _Employment = _interopRequireDefault(require("./Employment"));

var _Location = _interopRequireDefault(require("./Location"));

var _Team = _interopRequireDefault(require("./Team"));

var _Company = _interopRequireDefault(require("./Company"));

var _PayGroup = _interopRequireDefault(require("./PayGroup"));

var _EthnicityEnum = _interopRequireDefault(require("./EthnicityEnum"));

var _GenderEnum = _interopRequireDefault(require("./GenderEnum"));

var _MaritalStatusEnum = _interopRequireDefault(require("./MaritalStatusEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Employee model module.
 * @module model/Employee
 * @version 1.0
 */
var Employee = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Employee</code>.
   * # The Employee Object ### Description The &#x60;Employee&#x60; object is used to represent an Employee for a company.  ### Usage Example Fetch from the &#x60;LIST Employee&#x60; endpoint and filter by &#x60;ID&#x60; to show all employees.
   * @alias module:model/Employee
   */
  function Employee() {
    _classCallCheck(this, Employee);

    Employee.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Employee, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Employee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Employee} obj Optional instance to populate.
     * @return {module:model/Employee} The populated <code>Employee</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Employee();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('employee_number')) {
          obj['employee_number'] = _ApiClient["default"].convertToType(data['employee_number'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = (0, _Utils["default"])(data['company'], _Company["default"]);
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
          obj['employments'] = (0, _Utils["default"])(data['employments'], _Employment["default"]);
        }

        if (data.hasOwnProperty('home_location')) {
          obj['home_location'] = (0, _Utils["default"])(data['home_location'], _Location["default"]);
        }

        if (data.hasOwnProperty('work_location')) {
          obj['work_location'] = (0, _Utils["default"])(data['work_location'], _Location["default"]);
        }

        if (data.hasOwnProperty('manager')) {
          obj['manager'] = (0, _Utils["default"])(data['manager'], Employee);
        }

        if (data.hasOwnProperty('team')) {
          obj['team'] = (0, _Utils["default"])(data['team'], _Team["default"]);
        }

        if (data.hasOwnProperty('pay_group')) {
          obj['pay_group'] = (0, _Utils["default"])(data['pay_group'], _PayGroup["default"]);
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

        if (data.hasOwnProperty('start_date')) {
          obj['start_date'] = _ApiClient["default"].convertToType(data['start_date'], 'Date');
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

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }

        if (data.hasOwnProperty('custom_fields')) {
          obj['custom_fields'] = _ApiClient["default"].convertToType(data['custom_fields'], {
            'String': Object
          });
        }
      }

      return obj;
    }
  }]);

  return Employee;
}();
/**
 * @member {String} id
 */


Employee.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Employee.prototype['remote_id'] = undefined;
/**
 * The employee's number that appears in the remote UI. Note: This is distinct from the remote_id field, which is a unique identifier for the employee set by the remote API, and is not exposed to the user.
 * @member {String} employee_number
 */

Employee.prototype['employee_number'] = undefined;
/**
 * The ID of the employee's company.
 * @member {String} company
 */

Employee.prototype['company'] = undefined;
/**
 * The employee's first name.
 * @member {String} first_name
 */

Employee.prototype['first_name'] = undefined;
/**
 * The employee's last name.
 * @member {String} last_name
 */

Employee.prototype['last_name'] = undefined;
/**
 * The employee's full name, to use for display purposes. If a preferred first name is available, the full name will include the preferred first name.
 * @member {String} display_full_name
 */

Employee.prototype['display_full_name'] = undefined;
/**
 * The employee's work email.
 * @member {String} work_email
 */

Employee.prototype['work_email'] = undefined;
/**
 * The employee's personal email.
 * @member {String} personal_email
 */

Employee.prototype['personal_email'] = undefined;
/**
 * The employee's mobile phone number.
 * @member {String} mobile_phone_number
 */

Employee.prototype['mobile_phone_number'] = undefined;
/**
 * Array of `Employment` IDs for this Employee.
 * @member {Array.<String>} employments
 */

Employee.prototype['employments'] = undefined;
/**
 * The employee's home address.
 * @member {String} home_location
 */

Employee.prototype['home_location'] = undefined;
/**
 * The employee's work address.
 * @member {String} work_location
 */

Employee.prototype['work_location'] = undefined;
/**
 * The employee ID of the employee's manager.
 * @member {String} manager
 */

Employee.prototype['manager'] = undefined;
/**
 * The employee's team.
 * @member {String} team
 */

Employee.prototype['team'] = undefined;
/**
 * The employee's pay group
 * @member {String} pay_group
 */

Employee.prototype['pay_group'] = undefined;
/**
 * The employee's social security number.
 * @member {String} ssn
 */

Employee.prototype['ssn'] = undefined;
/**
 * The employee's gender.
 * @member {module:model/GenderEnum} gender
 */

Employee.prototype['gender'] = undefined;
/**
 * The employee's ethnicity.
 * @member {module:model/EthnicityEnum} ethnicity
 */

Employee.prototype['ethnicity'] = undefined;
/**
 * The employee's marital status.
 * @member {module:model/MaritalStatusEnum} marital_status
 */

Employee.prototype['marital_status'] = undefined;
/**
 * The employee's date of birth.
 * @member {Date} date_of_birth
 */

Employee.prototype['date_of_birth'] = undefined;
/**
 * The date that the employee was hired, usually the day that an offer letter is signed. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. Note: If you're looking for the employee's start date, refer to the start_date field.
 * @member {Date} hire_date
 */

Employee.prototype['hire_date'] = undefined;
/**
 * The date that the employee started working. If an employee has multiple start dates from previous employments, this represents the most recent start date.
 * @member {Date} start_date
 */

Employee.prototype['start_date'] = undefined;
/**
 * The employment status of the employee.
 * @member {module:model/EmploymentStatusEnum} employment_status
 */

Employee.prototype['employment_status'] = undefined;
/**
 * The employee's termination date.
 * @member {Date} termination_date
 */

Employee.prototype['termination_date'] = undefined;
/**
 * The URL of the employee's avatar image.
 * @member {String} avatar
 */

Employee.prototype['avatar'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Employee.prototype['remote_data'] = undefined;
/**
 * Custom fields configured for a given model.
 * @member {Object.<String, Object>} custom_fields
 */

Employee.prototype['custom_fields'] = undefined;
var _default = Employee;
exports["default"] = _default;