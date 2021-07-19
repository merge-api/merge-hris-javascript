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
import TimeOffBalance from './TimeOffBalance';

/**
 * The PaginatedTimeOffBalanceList model module.
 * @module model/PaginatedTimeOffBalanceList
 * @version 1.0
 */
class PaginatedTimeOffBalanceList {
    /**
     * Constructs a new <code>PaginatedTimeOffBalanceList</code>.
     * @alias module:model/PaginatedTimeOffBalanceList
     */
    constructor() { 
        
        PaginatedTimeOffBalanceList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaginatedTimeOffBalanceList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaginatedTimeOffBalanceList} obj Optional instance to populate.
     * @return {module:model/PaginatedTimeOffBalanceList} The populated <code>PaginatedTimeOffBalanceList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaginatedTimeOffBalanceList();

            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
            if (data.hasOwnProperty('previous')) {
                obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [TimeOffBalance]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} next
 */
PaginatedTimeOffBalanceList.prototype['next'] = undefined;

/**
 * @member {String} previous
 */
PaginatedTimeOffBalanceList.prototype['previous'] = undefined;

/**
 * @member {Array.<module:model/TimeOffBalance>} results
 */
PaginatedTimeOffBalanceList.prototype['results'] = undefined;






export default PaginatedTimeOffBalanceList;
