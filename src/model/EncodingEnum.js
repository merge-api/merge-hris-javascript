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
* Enum class EncodingEnum.
* @enum {}
* @readonly
*/
export default class EncodingEnum {
    
        /**
         * value: "RAW"
         * @const
         */
        "RAW" = "RAW";

    
        /**
         * value: "BASE64"
         * @const
         */
        "BASE64" = "BASE64";

    
        /**
         * value: "GZIP_BASE64"
         * @const
         */
        "GZIP_BASE64" = "GZIP_BASE64";

    

    /**
    * Returns a <code>EncodingEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EncodingEnum} The enum <code>EncodingEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

