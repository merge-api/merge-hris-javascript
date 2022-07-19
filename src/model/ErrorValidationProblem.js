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
import ValidationProblemSource from './ValidationProblemSource';

/**
 * The ErrorValidationProblem model module.
 * @module model/ErrorValidationProblem
 * @version 1.0
 */
class ErrorValidationProblem {
    /**
     * Constructs a new <code>ErrorValidationProblem</code>.
     * @alias module:model/ErrorValidationProblem
     * @param title {String} 
     * @param detail {String} 
     * @param problem_type {String} 
     */
    constructor(title, detail, problem_type) { 
        
        ErrorValidationProblem.initialize(this, title, detail, problem_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, detail, problem_type) { 
        obj['title'] = title;
        obj['detail'] = detail;
        obj['problem_type'] = problem_type;
    }

    /**
     * Constructs a <code>ErrorValidationProblem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorValidationProblem} obj Optional instance to populate.
     * @return {module:model/ErrorValidationProblem} The populated <code>ErrorValidationProblem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorValidationProblem();

            if (data.hasOwnProperty('source')) {
                obj['source'] = ValidationProblemSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('problem_type')) {
                obj['problem_type'] = ApiClient.convertToType(data['problem_type'], 'String');
            }
        }
        return obj;
    }


}

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






export default ErrorValidationProblem;
