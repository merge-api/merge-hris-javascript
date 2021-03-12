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
import { CountryEnum } from './countryEnum';
import { StateEnum } from './stateEnum';

/**
* # The Location Object ### Description The `Location` object is used to represent a Location for a company. This is shared across many models and is referenced whenever a location is stored.
*/
export class CreateLocation {
    /**
    * The location\'s phone number.
    */
    'phoneNumber'?: string | null;
    /**
    * Line 1 of the location\'s street address.
    */
    'street1'?: string | null;
    /**
    * Line 2 of the location\'s street address.
    */
    'street2'?: string | null;
    /**
    * The location\'s city.
    */
    'city'?: string | null;
    /**
    * The location\'s state.
    */
    'state'?: StateEnum | null;
    /**
    * The location\'s zip code.
    */
    'zipCode'?: string | null;
    /**
    * The location\'s country.
    */
    'country'?: CountryEnum | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "street1",
            "baseName": "street_1",
            "type": "string"
        },
        {
            "name": "street2",
            "baseName": "street_2",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "StateEnum"
        },
        {
            "name": "zipCode",
            "baseName": "zip_code",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "CountryEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateLocation.attributeTypeMap;
    }
}

