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
* Enum class CategoryEnum.
* @enum {}
* @readonly
*/
export default class CategoryEnum {
    
        /**
         * value: "hris"
         * @const
         */
        "hris" = "hris";

    
        /**
         * value: "ats"
         * @const
         */
        "ats" = "ats";

    
        /**
         * value: "accounting"
         * @const
         */
        "accounting" = "accounting";

    

    /**
    * Returns a <code>CategoryEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CategoryEnum} The enum <code>CategoryEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

