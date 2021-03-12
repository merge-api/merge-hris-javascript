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
 * The EndUserDetails model module.
 * @module model/EndUserDetails
 * @version 1.0
 */
class EndUserDetails {
    /**
     * Constructs a new <code>EndUserDetails</code>.
     * @alias module:model/EndUserDetails
     * @param endUserEmailAddress {String} 
     * @param endUserOrganizationName {String} 
     * @param endUserOriginId {String} 
     * @param categories {Array.<module:model/EndUserDetails.CategoriesEnum>} 
     */
    constructor(endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories) { 
        
        EndUserDetails.initialize(this, endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, endUserEmailAddress, endUserOrganizationName, endUserOriginId, categories) { 
        obj['end_user_email_address'] = endUserEmailAddress;
        obj['end_user_organization_name'] = endUserOrganizationName;
        obj['end_user_origin_id'] = endUserOriginId;
        obj['categories'] = categories;
    }

    /**
     * Constructs a <code>EndUserDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndUserDetails} obj Optional instance to populate.
     * @return {module:model/EndUserDetails} The populated <code>EndUserDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EndUserDetails();

            if (data.hasOwnProperty('end_user_email_address')) {
                obj['end_user_email_address'] = ApiClient.convertToType(data['end_user_email_address'], 'String');
            }
            if (data.hasOwnProperty('end_user_organization_name')) {
                obj['end_user_organization_name'] = ApiClient.convertToType(data['end_user_organization_name'], 'String');
            }
            if (data.hasOwnProperty('end_user_origin_id')) {
                obj['end_user_origin_id'] = ApiClient.convertToType(data['end_user_origin_id'], 'String');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} end_user_email_address
 */
EndUserDetails.prototype['end_user_email_address'] = undefined;

/**
 * @member {String} end_user_organization_name
 */
EndUserDetails.prototype['end_user_organization_name'] = undefined;

/**
 * @member {String} end_user_origin_id
 */
EndUserDetails.prototype['end_user_origin_id'] = undefined;

/**
 * @member {Array.<module:model/EndUserDetails.CategoriesEnum>} categories
 */
EndUserDetails.prototype['categories'] = undefined;





/**
 * Allowed values for the <code>categories</code> property.
 * @enum {String}
 * @readonly
 */
EndUserDetails['CategoriesEnum'] = {

    /**
     * value: "hris"
     * @const
     */
    "hris": "hris",

    /**
     * value: "ats"
     * @const
     */
    "ats": "ats"
};



export default EndUserDetails;
