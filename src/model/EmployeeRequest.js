/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EmploymentStatusEnum from './EmploymentStatusEnum';
import EthnicityEnum from './EthnicityEnum';
import GenderEnum from './GenderEnum';
import MaritalStatusEnum from './MaritalStatusEnum';

/**
 * The EmployeeRequest model module.
 * @module model/EmployeeRequest
 * @version 1.0
 */
class EmployeeRequest {
    /**
     * Constructs a new <code>EmployeeRequest</code>.
     * # The Employee Object ### Description The &#x60;Employee&#x60; object is used to represent an Employee for a company.  ### Usage Example Fetch from the &#x60;LIST Employee&#x60; endpoint and filter by &#x60;ID&#x60; to show all employees.
     * @alias module:model/EmployeeRequest
     */
    constructor() { 
        
        EmployeeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmployeeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeRequest} obj Optional instance to populate.
     * @return {module:model/EmployeeRequest} The populated <code>EmployeeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmployeeRequest();

            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('employee_number')) {
                obj['employee_number'] = ApiClient.convertToType(data['employee_number'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('display_full_name')) {
                obj['display_full_name'] = ApiClient.convertToType(data['display_full_name'], 'String');
            }
            if (data.hasOwnProperty('work_email')) {
                obj['work_email'] = ApiClient.convertToType(data['work_email'], 'String');
            }
            if (data.hasOwnProperty('personal_email')) {
                obj['personal_email'] = ApiClient.convertToType(data['personal_email'], 'String');
            }
            if (data.hasOwnProperty('mobile_phone_number')) {
                obj['mobile_phone_number'] = ApiClient.convertToType(data['mobile_phone_number'], 'String');
            }
            if (data.hasOwnProperty('home_location')) {
                obj['home_location'] = ApiClient.convertToType(data['home_location'], 'String');
            }
            if (data.hasOwnProperty('work_location')) {
                obj['work_location'] = ApiClient.convertToType(data['work_location'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ApiClient.convertToType(data['manager'], 'String');
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'String');
            }
            if (data.hasOwnProperty('ssn')) {
                obj['ssn'] = ApiClient.convertToType(data['ssn'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], GenderEnum);
            }
            if (data.hasOwnProperty('ethnicity')) {
                obj['ethnicity'] = ApiClient.convertToType(data['ethnicity'], EthnicityEnum);
            }
            if (data.hasOwnProperty('marital_status')) {
                obj['marital_status'] = ApiClient.convertToType(data['marital_status'], MaritalStatusEnum);
            }
            if (data.hasOwnProperty('date_of_birth')) {
                obj['date_of_birth'] = ApiClient.convertToType(data['date_of_birth'], 'Date');
            }
            if (data.hasOwnProperty('hire_date')) {
                obj['hire_date'] = ApiClient.convertToType(data['hire_date'], 'Date');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
            if (data.hasOwnProperty('employment_status')) {
                obj['employment_status'] = ApiClient.convertToType(data['employment_status'], EmploymentStatusEnum);
            }
            if (data.hasOwnProperty('termination_date')) {
                obj['termination_date'] = ApiClient.convertToType(data['termination_date'], 'Date');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
EmployeeRequest.prototype['remote_id'] = undefined;

/**
 * The employee's number that appears in the remote UI. Note: This is distinct from the remote_id field, which is a unique identifier for the employee set by the remote API, and is not exposed to the user.
 * @member {String} employee_number
 */
EmployeeRequest.prototype['employee_number'] = undefined;

/**
 * The ID of the employee's company.
 * @member {String} company
 */
EmployeeRequest.prototype['company'] = undefined;

/**
 * The employee's first name.
 * @member {String} first_name
 */
EmployeeRequest.prototype['first_name'] = undefined;

/**
 * The employee's last name.
 * @member {String} last_name
 */
EmployeeRequest.prototype['last_name'] = undefined;

/**
 * The employee's full name, to use for display purposes.
 * @member {String} display_full_name
 */
EmployeeRequest.prototype['display_full_name'] = undefined;

/**
 * The employee's work email.
 * @member {String} work_email
 */
EmployeeRequest.prototype['work_email'] = undefined;

/**
 * The employee's personal email.
 * @member {String} personal_email
 */
EmployeeRequest.prototype['personal_email'] = undefined;

/**
 * The employee's mobile phone number.
 * @member {String} mobile_phone_number
 */
EmployeeRequest.prototype['mobile_phone_number'] = undefined;

/**
 * The employee's home address.
 * @member {String} home_location
 */
EmployeeRequest.prototype['home_location'] = undefined;

/**
 * The employee's work address.
 * @member {String} work_location
 */
EmployeeRequest.prototype['work_location'] = undefined;

/**
 * The employee ID of the employee's manager.
 * @member {String} manager
 */
EmployeeRequest.prototype['manager'] = undefined;

/**
 * The employee's team.
 * @member {String} team
 */
EmployeeRequest.prototype['team'] = undefined;

/**
 * The employee's social security number.
 * @member {String} ssn
 */
EmployeeRequest.prototype['ssn'] = undefined;

/**
 * The employee's gender.
 * @member {module:model/GenderEnum} gender
 */
EmployeeRequest.prototype['gender'] = undefined;

/**
 * The employee's ethnicity.
 * @member {module:model/EthnicityEnum} ethnicity
 */
EmployeeRequest.prototype['ethnicity'] = undefined;

/**
 * The employee's marital status.
 * @member {module:model/MaritalStatusEnum} marital_status
 */
EmployeeRequest.prototype['marital_status'] = undefined;

/**
 * The employee's date of birth.
 * @member {Date} date_of_birth
 */
EmployeeRequest.prototype['date_of_birth'] = undefined;

/**
 * The employee's hire date. If an employee has multiple hire dates from previous employments, this represents the most recent hire date.
 * @member {Date} hire_date
 */
EmployeeRequest.prototype['hire_date'] = undefined;

/**
 * The employee's start date.
 * @member {Date} start_date
 */
EmployeeRequest.prototype['start_date'] = undefined;

/**
 * The employment status of the employee.
 * @member {module:model/EmploymentStatusEnum} employment_status
 */
EmployeeRequest.prototype['employment_status'] = undefined;

/**
 * The employee's termination date.
 * @member {Date} termination_date
 */
EmployeeRequest.prototype['termination_date'] = undefined;

/**
 * The URL of the employee's avatar image.
 * @member {String} avatar
 */
EmployeeRequest.prototype['avatar'] = undefined;






export default EmployeeRequest;
