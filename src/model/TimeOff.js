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
import convertRelatedObjectToType from '../Utils';
import Employee from './Employee';
import RemoteData from './RemoteData';
import RequestTypeEnum from './RequestTypeEnum';
import TimeOffStatusEnum from './TimeOffStatusEnum';
import UnitsEnum from './UnitsEnum';

/**
 * The TimeOff model module.
 * @module model/TimeOff
 * @version 1.0
 */
class TimeOff {
    /**
     * Constructs a new <code>TimeOff</code>.
     * # The TimeOff Object ### Description The &#x60;TimeOff&#x60; object is used to represent a Time Off Request filed by an employee.  ### Usage Example Fetch from the &#x60;LIST TimeOffs&#x60; endpoint and filter by &#x60;ID&#x60; to show all time off requests.
     * @alias module:model/TimeOff
     */
    constructor() { 
        
        TimeOff.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeOff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeOff} obj Optional instance to populate.
     * @return {module:model/TimeOff} The populated <code>TimeOff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeOff();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('employee')) {
                obj['employee'] = convertRelatedObjectToType(data['employee'], Employee);
            }
            if (data.hasOwnProperty('approver')) {
                obj['approver'] = convertRelatedObjectToType(data['approver'], Employee);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], TimeOffStatusEnum);
            }
            if (data.hasOwnProperty('employee_note')) {
                obj['employee_note'] = ApiClient.convertToType(data['employee_note'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], UnitsEnum);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('request_type')) {
                obj['request_type'] = ApiClient.convertToType(data['request_type'], RequestTypeEnum);
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
            }
            if (data.hasOwnProperty('remote_data')) {
                obj['remote_data'] = ApiClient.convertToType(data['remote_data'], [RemoteData]);
            }
            if (data.hasOwnProperty('remote_was_deleted')) {
                obj['remote_was_deleted'] = ApiClient.convertToType(data['remote_was_deleted'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TimeOff.prototype['id'] = undefined;

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
TimeOff.prototype['remote_id'] = undefined;

/**
 * @member {String} employee
 */
TimeOff.prototype['employee'] = undefined;

/**
 * @member {String} approver
 */
TimeOff.prototype['approver'] = undefined;

/**
 * The status of this time off request.
 * @member {module:model/TimeOffStatusEnum} status
 */
TimeOff.prototype['status'] = undefined;

/**
 * The employee note for this time off request.
 * @member {String} employee_note
 */
TimeOff.prototype['employee_note'] = undefined;

/**
 * The unit of time requested.
 * @member {module:model/UnitsEnum} units
 */
TimeOff.prototype['units'] = undefined;

/**
 * The number of time off units requested.
 * @member {Number} amount
 */
TimeOff.prototype['amount'] = undefined;

/**
 * The type of time off request.
 * @member {module:model/RequestTypeEnum} request_type
 */
TimeOff.prototype['request_type'] = undefined;

/**
 * The day and time of the start of the time requested off.
 * @member {Date} start_time
 */
TimeOff.prototype['start_time'] = undefined;

/**
 * The day and time of the end of the time requested off.
 * @member {Date} end_time
 */
TimeOff.prototype['end_time'] = undefined;

/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */
TimeOff.prototype['remote_data'] = undefined;

/**
 * @member {Boolean} remote_was_deleted
 */
TimeOff.prototype['remote_was_deleted'] = undefined;






export default TimeOff;

