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
* Enum class EarningTypeEnum.
* @enum {}
* @readonly
*/
export default class EarningTypeEnum {
    
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
    * Returns a <code>EarningTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EarningTypeEnum} The enum <code>EarningTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

