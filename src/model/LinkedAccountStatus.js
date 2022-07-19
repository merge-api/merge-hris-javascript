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
 * The LinkedAccountStatus model module.
 * @module model/LinkedAccountStatus
 * @version 1.0
 */
class LinkedAccountStatus {
    /**
     * Constructs a new <code>LinkedAccountStatus</code>.
     * @alias module:model/LinkedAccountStatus
     * @param linked_account_status {String} 
     * @param can_make_request {Boolean} 
     */
    constructor(linked_account_status, can_make_request) { 
        
        LinkedAccountStatus.initialize(this, linked_account_status, can_make_request);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, linked_account_status, can_make_request) { 
        obj['linked_account_status'] = linked_account_status;
        obj['can_make_request'] = can_make_request;
    }

    /**
     * Constructs a <code>LinkedAccountStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedAccountStatus} obj Optional instance to populate.
     * @return {module:model/LinkedAccountStatus} The populated <code>LinkedAccountStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LinkedAccountStatus();

            if (data.hasOwnProperty('linked_account_status')) {
                obj['linked_account_status'] = ApiClient.convertToType(data['linked_account_status'], 'String');
            }
            if (data.hasOwnProperty('can_make_request')) {
                obj['can_make_request'] = ApiClient.convertToType(data['can_make_request'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} linked_account_status
 */
LinkedAccountStatus.prototype['linked_account_status'] = undefined;

/**
 * @member {Boolean} can_make_request
 */
LinkedAccountStatus.prototype['can_make_request'] = undefined;






export default LinkedAccountStatus;

