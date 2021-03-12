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
/**
* Enum class TypeEnum.
* @enum {}
* @readonly
*/
export default class TypeEnum {
    
        /**
         * value: "SALARY"
         * @const
         */
        "SALARY" = "SALARY";

    
        /**
         * value: "REIMBURSEMENT"
         * @const
         */
        "REIMBURSEMENT" = "REIMBURSEMENT";

    
        /**
         * value: "OVERTIME"
         * @const
         */
        "OVERTIME" = "OVERTIME";

    
        /**
         * value: "BONUS"
         * @const
         */
        "BONUS" = "BONUS";

    

    /**
    * Returns a <code>TypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TypeEnum} The enum <code>TypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
