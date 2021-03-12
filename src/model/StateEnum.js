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
* Enum class StateEnum.
* @enum {}
* @readonly
*/
export default class StateEnum {
    
        /**
         * value: "AL"
         * @const
         */
        "AL" = "AL";

    
        /**
         * value: "AK"
         * @const
         */
        "AK" = "AK";

    
        /**
         * value: "AS"
         * @const
         */
        "AS" = "AS";

    
        /**
         * value: "AZ"
         * @const
         */
        "AZ" = "AZ";

    
        /**
         * value: "AR"
         * @const
         */
        "AR" = "AR";

    
        /**
         * value: "AA"
         * @const
         */
        "AA" = "AA";

    
        /**
         * value: "AE"
         * @const
         */
        "AE" = "AE";

    
        /**
         * value: "AP"
         * @const
         */
        "AP" = "AP";

    
        /**
         * value: "CA"
         * @const
         */
        "CA" = "CA";

    
        /**
         * value: "CO"
         * @const
         */
        "CO" = "CO";

    
        /**
         * value: "CT"
         * @const
         */
        "CT" = "CT";

    
        /**
         * value: "DE"
         * @const
         */
        "DE" = "DE";

    
        /**
         * value: "DC"
         * @const
         */
        "DC" = "DC";

    
        /**
         * value: "FL"
         * @const
         */
        "FL" = "FL";

    
        /**
         * value: "GA"
         * @const
         */
        "GA" = "GA";

    
        /**
         * value: "GU"
         * @const
         */
        "GU" = "GU";

    
        /**
         * value: "HI"
         * @const
         */
        "HI" = "HI";

    
        /**
         * value: "ID"
         * @const
         */
        "ID" = "ID";

    
        /**
         * value: "IL"
         * @const
         */
        "IL" = "IL";

    
        /**
         * value: "IN"
         * @const
         */
        "IN" = "IN";

    
        /**
         * value: "IA"
         * @const
         */
        "IA" = "IA";

    
        /**
         * value: "KS"
         * @const
         */
        "KS" = "KS";

    
        /**
         * value: "KY"
         * @const
         */
        "KY" = "KY";

    
        /**
         * value: "LA"
         * @const
         */
        "LA" = "LA";

    
        /**
         * value: "ME"
         * @const
         */
        "ME" = "ME";

    
        /**
         * value: "MD"
         * @const
         */
        "MD" = "MD";

    
        /**
         * value: "MA"
         * @const
         */
        "MA" = "MA";

    
        /**
         * value: "MI"
         * @const
         */
        "MI" = "MI";

    
        /**
         * value: "MN"
         * @const
         */
        "MN" = "MN";

    
        /**
         * value: "MS"
         * @const
         */
        "MS" = "MS";

    
        /**
         * value: "MO"
         * @const
         */
        "MO" = "MO";

    
        /**
         * value: "MT"
         * @const
         */
        "MT" = "MT";

    
        /**
         * value: "NE"
         * @const
         */
        "NE" = "NE";

    
        /**
         * value: "NV"
         * @const
         */
        "NV" = "NV";

    
        /**
         * value: "NH"
         * @const
         */
        "NH" = "NH";

    
        /**
         * value: "NJ"
         * @const
         */
        "NJ" = "NJ";

    
        /**
         * value: "NM"
         * @const
         */
        "NM" = "NM";

    
        /**
         * value: "NY"
         * @const
         */
        "NY" = "NY";

    
        /**
         * value: "NC"
         * @const
         */
        "NC" = "NC";

    
        /**
         * value: "ND"
         * @const
         */
        "ND" = "ND";

    
        /**
         * value: "MP"
         * @const
         */
        "MP" = "MP";

    
        /**
         * value: "OH"
         * @const
         */
        "OH" = "OH";

    
        /**
         * value: "OK"
         * @const
         */
        "OK" = "OK";

    
        /**
         * value: "OR"
         * @const
         */
        "OR" = "OR";

    
        /**
         * value: "PA"
         * @const
         */
        "PA" = "PA";

    
        /**
         * value: "PR"
         * @const
         */
        "PR" = "PR";

    
        /**
         * value: "RI"
         * @const
         */
        "RI" = "RI";

    
        /**
         * value: "SC"
         * @const
         */
        "SC" = "SC";

    
        /**
         * value: "SD"
         * @const
         */
        "SD" = "SD";

    
        /**
         * value: "TN"
         * @const
         */
        "TN" = "TN";

    
        /**
         * value: "TX"
         * @const
         */
        "TX" = "TX";

    
        /**
         * value: "UT"
         * @const
         */
        "UT" = "UT";

    
        /**
         * value: "VT"
         * @const
         */
        "VT" = "VT";

    
        /**
         * value: "VI"
         * @const
         */
        "VI" = "VI";

    
        /**
         * value: "VA"
         * @const
         */
        "VA" = "VA";

    
        /**
         * value: "WA"
         * @const
         */
        "WA" = "WA";

    
        /**
         * value: "WV"
         * @const
         */
        "WV" = "WV";

    
        /**
         * value: "WI"
         * @const
         */
        "WI" = "WI";

    
        /**
         * value: "WY"
         * @const
         */
        "WY" = "WY";

    

    /**
    * Returns a <code>StateEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/StateEnum} The enum <code>StateEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
