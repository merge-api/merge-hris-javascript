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
 * The RemoteKey model module.
 * @module model/RemoteKey
 * @version 1.0
 */
class RemoteKey {
    /**
     * Constructs a new <code>RemoteKey</code>.
     * # The RemoteResponse Object ### Description The &#x60;RemoteResponse&#x60; object is used to represent information returned from a third-party endpoint.  ### Usage Example View the &#x60;RemoteResponse&#x60; returned from your &#x60;DataPassthrough&#x60;.
     * @alias module:model/RemoteKey
     * @param name {String} 
     * @param key {String} 
     */
    constructor(name, key) { 
        
        RemoteKey.initialize(this, name, key);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, key) { 
        obj['name'] = name;
        obj['key'] = key;
    }

    /**
     * Constructs a <code>RemoteKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteKey} obj Optional instance to populate.
     * @return {module:model/RemoteKey} The populated <code>RemoteKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoteKey();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
RemoteKey.prototype['name'] = undefined;

/**
 * @member {String} key
 */
RemoteKey.prototype['key'] = undefined;






export default RemoteKey;

