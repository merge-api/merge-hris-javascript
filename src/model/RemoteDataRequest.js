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
 * The RemoteDataRequest model module.
 * @module model/RemoteDataRequest
 * @version 1.0
 */
class RemoteDataRequest {
    /**
     * Constructs a new <code>RemoteDataRequest</code>.
     * @alias module:model/RemoteDataRequest
     * @param path {String} 
     */
    constructor(path) { 
        
        RemoteDataRequest.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>RemoteDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteDataRequest} obj Optional instance to populate.
     * @return {module:model/RemoteDataRequest} The populated <code>RemoteDataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RemoteDataRequest();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
RemoteDataRequest.prototype['path'] = undefined;

/**
 * @member {Object.<String, Object>} data
 */
RemoteDataRequest.prototype['data'] = undefined;






export default RemoteDataRequest;

