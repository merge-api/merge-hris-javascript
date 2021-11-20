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
* Enum class PolicyTypeEnum.
* @enum {}
* @readonly
*/
export default class PolicyTypeEnum {
    
        /**
         * value: "VACATION"
         * @const
         */
        "VACATION" = "VACATION";

    
        /**
         * value: "SICK"
         * @const
         */
        "SICK" = "SICK";

    
        /**
         * value: "PERSONAL"
         * @const
         */
        "PERSONAL" = "PERSONAL";

    
        /**
         * value: "JURY_DUTY"
         * @const
         */
        "JURY_DUTY" = "JURY_DUTY";

    
        /**
         * value: "VOLUNTEER"
         * @const
         */
        "VOLUNTEER" = "VOLUNTEER";

    
        /**
         * value: "BEREAVEMENT"
         * @const
         */
        "BEREAVEMENT" = "BEREAVEMENT";

    

    /**
    * Returns a <code>PolicyTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PolicyTypeEnum} The enum <code>PolicyTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

