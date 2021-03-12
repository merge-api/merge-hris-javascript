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

/**
* # The Company Object ### Description The `Company` object is used to represent a Company.
*/
export class CreateCompany {
    /**
    * The company\'s legal name.
    */
    'legalName'?: string | null;
    /**
    * The company\'s display name.
    */
    'displayName'?: string | null;
    /**
    * The company\'s Employer Identification Numbers.
    */
    'eins'?: Array<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "legalName",
            "baseName": "legal_name",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "eins",
            "baseName": "eins",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return CreateCompany.attributeTypeMap;
    }
}
