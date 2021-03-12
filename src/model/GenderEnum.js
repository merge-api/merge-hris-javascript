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
* Enum class GenderEnum.
* @enum {}
* @readonly
*/
export default class GenderEnum {
    
        /**
         * value: "MALE"
         * @const
         */
        "MALE" = "MALE";

    
        /**
         * value: "FEMALE"
         * @const
         */
        "FEMALE" = "FEMALE";

    
        /**
         * value: "NON-BINARY"
         * @const
         */
        "NON-BINARY" = "NON-BINARY";

    
        /**
         * value: "OTHER"
         * @const
         */
        "OTHER" = "OTHER";

    
        /**
         * value: "PREFER_NOT_TO_DISCLOSE"
         * @const
         */
        "PREFER_NOT_TO_DISCLOSE" = "PREFER_NOT_TO_DISCLOSE";

    

    /**
    * Returns a <code>GenderEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/GenderEnum} The enum <code>GenderEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
