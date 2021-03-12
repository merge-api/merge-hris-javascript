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
import { BenefitPlanTypeEnum } from './benefitPlanTypeEnum';
import { RemoteData } from './remoteData';

/**
* # The Benefit Object ### Description The `Benefit` object is used to represent a Benefit for an employee.  ### Usage Example Fetch from the `LIST Benefits` endpoint and filter by `ID` to show all benefits.
*/
export class Benefit {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remoteId'?: string | null;
    /**
    * The employee on the plan.
    */
    'employee'?: string | null;
    /**
    * The name of the benefit provider.
    */
    'providerName'?: string | null;
    /**
    * The type of benefit plan
    */
    'benefitPlanType'?: BenefitPlanTypeEnum | null;
    /**
    * The employee\'s contribution.
    */
    'employeeContribution'?: number | null;
    /**
    * The company\'s contribution.
    */
    'companyContribution'?: number | null;
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
            "name": "employee",
            "baseName": "employee",
            "type": "string"
        },
        {
            "name": "providerName",
            "baseName": "provider_name",
            "type": "string"
        },
        {
            "name": "benefitPlanType",
            "baseName": "benefit_plan_type",
            "type": "BenefitPlanTypeEnum"
        },
        {
            "name": "employeeContribution",
            "baseName": "employee_contribution",
            "type": "number"
        },
        {
            "name": "companyContribution",
            "baseName": "company_contribution",
            "type": "number"
        },
        {
            "name": "remoteData",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        }    ];

    static getAttributeTypeMap() {
        return Benefit.attributeTypeMap;
    }
}
