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
import DataPassthroughRequest from '../model/DataPassthroughRequest';
import RemoteResponse from '../model/RemoteResponse';

/**
* Passthrough service.
* @module api/PassthroughApi
* @version 1.0
*/
export default class PassthroughApi {

    /**
    * Constructs a new PassthroughApi. 
    * @alias module:api/PassthroughApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the passthroughCreate operation.
     * @callback module:api/PassthroughApi~passthroughCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pull data from an endpoint not currently supported by Merge.
     * @param {String} authorization Should include 'Bearer ' followed by your production API Key.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {module:model/DataPassthroughRequest} dataPassthroughRequest 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/PassthroughApi~passthroughCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoteResponse}
     */
    passthroughCreate(authorization, xAccountToken, dataPassthroughRequest, opts, callback) {
      opts = opts || {};
      let postBody = dataPassthroughRequest;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling passthroughCreate");
      }
      // verify the required parameter 'xAccountToken' is set
      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling passthroughCreate");
      }
      // verify the required parameter 'dataPassthroughRequest' is set
      if (dataPassthroughRequest === undefined || dataPassthroughRequest === null) {
        throw new Error("Missing the required parameter 'dataPassthroughRequest' when calling passthroughCreate");
      }

      let pathParams = {
      };
      let queryParams = {
        'include_remote_data': opts['includeRemoteData']
      };
      let headerParams = {
        'Authorization': authorization,
        'X-Account-Token': xAccountToken
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = RemoteResponse;
      return this.apiClient.callApi(
        '/passthrough', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
