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
 */

import { RequestFile } from './models';
import { RemoteData } from './remoteData';
import { RunStateEnum } from './runStateEnum';
import { RunTypeEnum } from './runTypeEnum';

/**
* # The PayrollRun Object ### Description The `PayrollRun` object is used to represent a payroll run.  ### Usage Example Fetch from the `LIST PayrollRuns` endpoint and filter by `ID` to show all payroll runs.
*/
export class PayrollRun {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remoteId'?: string | null;
    /**
    * The state of the payroll run
    */
    'runState'?: RunStateEnum | null;
    /**
    * The type of the payroll run
    */
    'runType'?: RunTypeEnum | null;
    /**
    * The day and time the payroll run started.
    */
    'startDate'?: Date | null;
    /**
    * The day and time the payroll run ended.
    */
    'endDate'?: Date | null;
    /**
    * The day and time the payroll run was checked.
    */
    'checkDate'?: Date | null;
    'remoteData'?: Array<RemoteData> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remoteId",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "runState",
            "baseName": "run_state",
            "type": "RunStateEnum"
        },
        {
            "name": "runType",
            "baseName": "run_type",
            "type": "RunTypeEnum"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "checkDate",
            "baseName": "check_date",
            "type": "Date"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return PayrollRun.attributeTypeMap;
    }
}

