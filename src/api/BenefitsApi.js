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


import ApiClient from "../ApiClient";
import Benefit from '../model/Benefit';
import CreateBenefit from '../model/CreateBenefit';
import PaginatedBenefitList from '../model/PaginatedBenefitList';

/**
* Benefits service.
* @module api/BenefitsApi
* @version 1.0
*/
export default class BenefitsApi {

    /**
    * Constructs a new BenefitsApi. 
    * @alias module:api/BenefitsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the benefitsCreate operation.
     * @callback module:api/BenefitsApi~benefitsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Benefit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a `Benefit` object with the given values.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
     * @param {module:model/CreateBenefit} opts.createBenefit 
     * @param {module:api/BenefitsApi~benefitsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Benefit}
     */
    benefitsCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['createBenefit'];
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling benefitsCreate");
      }

      let pathParams = {
      };
      let queryParams = {
        'run_async': opts['runAsync']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Benefit;
      return this.apiClient.callApi(
        '/benefits', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the benefitsList operation.
     * @callback module:api/BenefitsApi~benefitsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedBenefitList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `Benefit` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
     * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {String} opts.employeeId If provided, will only return time off for this employee.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {String} opts.remoteId The API provider's ID for the given object.
     * @param {module:api/BenefitsApi~benefitsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedBenefitList}
     */
    benefitsList(xAccountToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling benefitsList");
      }

      let pathParams = {
      };
      let queryParams = {
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'employee_id': opts['employeeId'],
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'remote_id': opts['remoteId']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedBenefitList;
      return this.apiClient.callApi(
        '/benefits', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the benefitsRetrieve operation.
     * @callback module:api/BenefitsApi~benefitsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Benefit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `Benefit` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/BenefitsApi~benefitsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Benefit}
     */
    benefitsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling benefitsRetrieve");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling benefitsRetrieve");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData']
      };
      let headerParams = {
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Benefit;
      return this.apiClient.callApi(
        '/benefits/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}