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
import RequestTypeEnum from './RequestTypeEnum';
import TimeOffStatusEnum from './TimeOffStatusEnum';
import UnitsEnum from './UnitsEnum';

/**
 * The TimeOffRequest model module.
 * @module model/TimeOffRequest
 * @version 1.0
 */
class TimeOffRequest {
    /**
     * Constructs a new <code>TimeOffRequest</code>.
     * # The TimeOff Object ### Description The &#x60;TimeOff&#x60; object is used to represent a Time Off Request filed by an employee.  ### Usage Example Fetch from the &#x60;LIST TimeOffs&#x60; endpoint and filter by &#x60;ID&#x60; to show all time off requests.
     * @alias module:model/TimeOffRequest
     */
    constructor() { 
        
        TimeOffRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeOffRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeOffRequest} obj Optional instance to populate.
     * @return {module:model/TimeOffRequest} The populated <code>TimeOffRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeOffRequest();

            if (data.hasOwnProperty('remote_id')) {
                obj['remote_id'] = ApiClient.convertToType(data['remote_id'], 'String');
            }
            if (data.hasOwnProperty('employee')) {
                obj['employee'] = ApiClient.convertToType(data['employee'], 'String');
            }
            if (data.hasOwnProperty('approver')) {
                obj['approver'] = ApiClient.convertToType(data['approver'], 'String');
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
        }
        return obj;
    }


}

/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */
TimeOffRequest.prototype['remote_id'] = undefined;

/**
 * @member {String} employee
 */
TimeOffRequest.prototype['employee'] = undefined;

/**
 * @member {String} approver
 */
TimeOffRequest.prototype['approver'] = undefined;

/**
 * The status of this time off request.
 * @member {module:model/TimeOffStatusEnum} status
 */
TimeOffRequest.prototype['status'] = undefined;

/**
 * The employee note for this time off request.
 * @member {String} employee_note
 */
TimeOffRequest.prototype['employee_note'] = undefined;

/**
 * The unit of time requested.
 * @member {module:model/UnitsEnum} units
 */
TimeOffRequest.prototype['units'] = undefined;

/**
 * The number of time off units requested.
 * @member {Number} amount
 */
TimeOffRequest.prototype['amount'] = undefined;

/**
 * The type of time off request.
 * @member {module:model/RequestTypeEnum} request_type
 */
TimeOffRequest.prototype['request_type'] = undefined;

/**
 * The day and time of the start of the time requested off.
 * @member {Date} start_time
 */
TimeOffRequest.prototype['start_time'] = undefined;

/**
 * The day and time of the end of the time requested off.
 * @member {Date} end_time
 */
TimeOffRequest.prototype['end_time'] = undefined;






export default TimeOffRequest;

