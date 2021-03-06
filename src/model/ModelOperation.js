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
 * The ModelOperation model module.
 * @module model/ModelOperation
 * @version 1.0
 */
class ModelOperation {
    /**
     * Constructs a new <code>ModelOperation</code>.
     * # The ModelOperation Object ### Description The &#x60;ModelOperation&#x60; object is used to represent the operations that are currently supported for a given model.  ### Usage Example View what operations are supported for the &#x60;Candidate&#x60; endpoint.
     * @alias module:model/ModelOperation
     * @param modelName {String} 
     * @param availableOperations {Array.<String>} 
     * @param requiredPostParameters {Array.<String>} 
     * @param supportedFields {Array.<String>} 
     */
    constructor(modelName, availableOperations, requiredPostParameters, supportedFields) { 
        
        ModelOperation.initialize(this, modelName, availableOperations, requiredPostParameters, supportedFields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, modelName, availableOperations, requiredPostParameters, supportedFields) { 
        obj['model_name'] = modelName;
        obj['available_operations'] = availableOperations;
        obj['required_post_parameters'] = requiredPostParameters;
        obj['supported_fields'] = supportedFields;
    }

    /**
     * Constructs a <code>ModelOperation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelOperation} obj Optional instance to populate.
     * @return {module:model/ModelOperation} The populated <code>ModelOperation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelOperation();

            if (data.hasOwnProperty('model_name')) {
                obj['model_name'] = ApiClient.convertToType(data['model_name'], 'String');
            }
            if (data.hasOwnProperty('available_operations')) {
                obj['available_operations'] = ApiClient.convertToType(data['available_operations'], ['String']);
            }
            if (data.hasOwnProperty('required_post_parameters')) {
                obj['required_post_parameters'] = ApiClient.convertToType(data['required_post_parameters'], ['String']);
            }
            if (data.hasOwnProperty('supported_fields')) {
                obj['supported_fields'] = ApiClient.convertToType(data['supported_fields'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} model_name
 */
ModelOperation.prototype['model_name'] = undefined;

/**
 * @member {Array.<String>} available_operations
 */
ModelOperation.prototype['available_operations'] = undefined;

/**
 * @member {Array.<String>} required_post_parameters
 */
ModelOperation.prototype['required_post_parameters'] = undefined;

/**
 * @member {Array.<String>} supported_fields
 */
ModelOperation.prototype['supported_fields'] = undefined;






export default ModelOperation;

