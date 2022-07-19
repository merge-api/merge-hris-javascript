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
import DebugModeLog from './DebugModeLog';
import Employee from './Employee';
import ErrorValidationProblem from './ErrorValidationProblem';
import WarningValidationProblem from './WarningValidationProblem';

/**
 * The EmployeeResponse model module.
 * @module model/EmployeeResponse
 * @version 1.0
 */
class EmployeeResponse {
    /**
     * Constructs a new <code>EmployeeResponse</code>.
     * @alias module:model/EmployeeResponse
     * @param model {module:model/Employee} 
     * @param warnings {Array.<module:model/WarningValidationProblem>} 
     * @param errors {Array.<module:model/ErrorValidationProblem>} 
     */
    constructor(model, warnings, errors) { 
        
        EmployeeResponse.initialize(this, model, warnings, errors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, model, warnings, errors) { 
        obj['model'] = model;
        obj['warnings'] = warnings;
        obj['errors'] = errors;
    }

    /**
     * Constructs a <code>EmployeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeResponse} obj Optional instance to populate.
     * @return {module:model/EmployeeResponse} The populated <code>EmployeeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmployeeResponse();

            if (data.hasOwnProperty('model')) {
                obj['model'] = Employee.constructFromObject(data['model']);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], [WarningValidationProblem]);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorValidationProblem]);
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [DebugModeLog]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Employee} model
 */
EmployeeResponse.prototype['model'] = undefined;

/**
 * @member {Array.<module:model/WarningValidationProblem>} warnings
 */
EmployeeResponse.prototype['warnings'] = undefined;

/**
 * @member {Array.<module:model/ErrorValidationProblem>} errors
 */
EmployeeResponse.prototype['errors'] = undefined;

/**
 * @member {Array.<module:model/DebugModeLog>} logs
 */
EmployeeResponse.prototype['logs'] = undefined;






export default EmployeeResponse;
