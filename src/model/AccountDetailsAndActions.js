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
import AccountDetailsAndActionsIntegration from './AccountDetailsAndActionsIntegration';
import AccountDetailsAndActionsStatusEnum from './AccountDetailsAndActionsStatusEnum';
import CategoryEnum from './CategoryEnum';

/**
 * The AccountDetailsAndActions model module.
 * @module model/AccountDetailsAndActions
 * @version 1.0
 */
class AccountDetailsAndActions {
    /**
     * Constructs a new <code>AccountDetailsAndActions</code>.
     * # The LinkedAccount Object ### Description The &#x60;LinkedAccount&#x60; object is used to represent an end user&#39;s link with a specific integration.  ### Usage Example View a list of your organization&#39;s &#x60;LinkedAccount&#x60; objects.
     * @alias module:model/AccountDetailsAndActions
     * @param id {String} 
     * @param status {module:model/AccountDetailsAndActionsStatusEnum} 
     * @param end_user_organization_name {String} 
     * @param end_user_email_address {String} 
     * @param webhook_listener_url {String} 
     */
    constructor(id, status, end_user_organization_name, end_user_email_address, webhook_listener_url) { 
        
        AccountDetailsAndActions.initialize(this, id, status, end_user_organization_name, end_user_email_address, webhook_listener_url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, status, end_user_organization_name, end_user_email_address, webhook_listener_url) { 
        obj['id'] = id;
        obj['status'] = status;
        obj['end_user_organization_name'] = end_user_organization_name;
        obj['end_user_email_address'] = end_user_email_address;
        obj['webhook_listener_url'] = webhook_listener_url;
    }

    /**
     * Constructs a <code>AccountDetailsAndActions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDetailsAndActions} obj Optional instance to populate.
     * @return {module:model/AccountDetailsAndActions} The populated <code>AccountDetailsAndActions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountDetailsAndActions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], CategoryEnum);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], AccountDetailsAndActionsStatusEnum);
            }
            if (data.hasOwnProperty('status_detail')) {
                obj['status_detail'] = ApiClient.convertToType(data['status_detail'], 'String');
            }
            if (data.hasOwnProperty('end_user_origin_id')) {
                obj['end_user_origin_id'] = ApiClient.convertToType(data['end_user_origin_id'], 'String');
            }
            if (data.hasOwnProperty('end_user_organization_name')) {
                obj['end_user_organization_name'] = ApiClient.convertToType(data['end_user_organization_name'], 'String');
            }
            if (data.hasOwnProperty('end_user_email_address')) {
                obj['end_user_email_address'] = ApiClient.convertToType(data['end_user_email_address'], 'String');
            }
            if (data.hasOwnProperty('webhook_listener_url')) {
                obj['webhook_listener_url'] = ApiClient.convertToType(data['webhook_listener_url'], 'String');
            }
            if (data.hasOwnProperty('integration')) {
                obj['integration'] = AccountDetailsAndActionsIntegration.constructFromObject(data['integration']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
AccountDetailsAndActions.prototype['id'] = undefined;

/**
 * @member {module:model/CategoryEnum} category
 */
AccountDetailsAndActions.prototype['category'] = undefined;

/**
 * @member {module:model/AccountDetailsAndActionsStatusEnum} status
 */
AccountDetailsAndActions.prototype['status'] = undefined;

/**
 * @member {String} status_detail
 */
AccountDetailsAndActions.prototype['status_detail'] = undefined;

/**
 * @member {String} end_user_origin_id
 */
AccountDetailsAndActions.prototype['end_user_origin_id'] = undefined;

/**
 * @member {String} end_user_organization_name
 */
AccountDetailsAndActions.prototype['end_user_organization_name'] = undefined;

/**
 * @member {String} end_user_email_address
 */
AccountDetailsAndActions.prototype['end_user_email_address'] = undefined;

/**
 * @member {String} webhook_listener_url
 */
AccountDetailsAndActions.prototype['webhook_listener_url'] = undefined;

/**
 * @member {module:model/AccountDetailsAndActionsIntegration} integration
 */
AccountDetailsAndActions.prototype['integration'] = undefined;






export default AccountDetailsAndActions;

