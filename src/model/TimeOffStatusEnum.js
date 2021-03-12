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
* Enum class TimeOffStatusEnum.
* @enum {}
* @readonly
*/
export default class TimeOffStatusEnum {
    
        /**
         * value: "REQUESTED"
         * @const
         */
        "REQUESTED" = "REQUESTED";

    
        /**
         * value: "APPROVED"
         * @const
         */
        "APPROVED" = "APPROVED";

    
        /**
         * value: "DECLINED"
         * @const
         */
        "DECLINED" = "DECLINED";

    
        /**
         * value: "CANCELLED"
         * @const
         */
        "CANCELLED" = "CANCELLED";

    
        /**
         * value: "DELETED"
         * @const
         */
        "DELETED" = "DELETED";

    

    /**
    * Returns a <code>TimeOffStatusEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TimeOffStatusEnum} The enum <code>TimeOffStatusEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
