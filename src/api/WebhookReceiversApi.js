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
import WebhookReceiver from '../model/WebhookReceiver';
import WebhookReceiverRequest from '../model/WebhookReceiverRequest';

/**
* WebhookReceivers service.
* @module api/WebhookReceiversApi
* @version 1.0
*/
export default class WebhookReceiversApi {

    /**
    * Constructs a new WebhookReceiversApi. 
    * @alias module:api/WebhookReceiversApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the webhookReceiversCreate operation.
     * @callback module:api/WebhookReceiversApi~webhookReceiversCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookReceiver} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a `WebhookReceiver` object with the given values.
     * @param {String} x_account_token Token identifying the end user.
     * @param {module:model/WebhookReceiverRequest} webhook_receiver_request 
     * @param {module:api/WebhookReceiversApi~webhookReceiversCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookReceiver}
     */
    webhookReceiversCreate(x_account_token, webhook_receiver_request, callback) {
      let postBody = webhook_receiver_request;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling webhookReceiversCreate");
      }
      // verify the required parameter 'webhook_receiver_request' is set
      if (webhook_receiver_request === undefined || webhook_receiver_request === null) {
        throw new Error("Missing the required parameter 'webhook_receiver_request' when calling webhookReceiversCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = WebhookReceiver;
      return this.apiClient.callApi(
        '/webhook-receivers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the webhookReceiversList operation.
     * @callback module:api/WebhookReceiversApi~webhookReceiversListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WebhookReceiver>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `WebhookReceiver` objects.
     * @param {String} x_account_token Token identifying the end user.
     * @param {module:api/WebhookReceiversApi~webhookReceiversListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WebhookReceiver>}
     */
    webhookReceiversList(x_account_token, callback) {
      let postBody = null;
      // verify the required parameter 'x_account_token' is set
      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling webhookReceiversList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Account-Token': x_account_token
      };
      let formParams = {
      };

      let authNames = ['tokenAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [WebhookReceiver];
      return this.apiClient.callApi(
        '/webhook-receivers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}