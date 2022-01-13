"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaginatedPayrollRunList = _interopRequireDefault(require("../model/PaginatedPayrollRunList"));

var _PayrollRun = _interopRequireDefault(require("../model/PayrollRun"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PayrollRuns service.
* @module api/PayrollRunsApi
* @version 1.0
*/
var PayrollRunsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PayrollRunsApi. 
  * @alias module:api/PayrollRunsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PayrollRunsApi(apiClient) {
    _classCallCheck(this, PayrollRunsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the payrollRunsList operation.
   * @callback module:api/PayrollRunsApi~payrollRunsListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedPayrollRunList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `PayrollRun` objects.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
   * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {Date} opts.endedAfter If provided, will only return payroll runs ended after this datetime.
   * @param {Date} opts.endedBefore If provided, will only return payroll runs ended before this datetime.
   * @param {Boolean} opts.includeDeletedData Whether to include data that was deleted in the third-party service.
   * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
   * @param {Number} opts.pageSize Number of results to return per page.
   * @param {String} opts.remoteId The API provider's ID for the given object.
   * @param {module:model/String} opts.runType If provided, will only return PayrollRun's with this status. Options: ('REGULAR', 'OFF_CYCLE', 'CORRECTION', 'TERMINATION', 'SIGN_ON_BONUS')
   * @param {Date} opts.startedAfter If provided, will only return payroll runs started after this datetime.
   * @param {Date} opts.startedBefore If provided, will only return payroll runs started before this datetime.
   * @param {module:api/PayrollRunsApi~payrollRunsListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedPayrollRunList}
   */


  _createClass(PayrollRunsApi, [{
    key: "payrollRunsList",
    value: function payrollRunsList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling payrollRunsList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'ended_after': opts['endedAfter'],
        'ended_before': opts['endedBefore'],
        'include_deleted_data': opts['includeDeletedData'],
        'include_remote_data': opts['includeRemoteData'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'remote_id': opts['remoteId'],
        'run_type': opts['runType'],
        'started_after': opts['startedAfter'],
        'started_before': opts['startedBefore']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPayrollRunList["default"];
      return this.apiClient.callApi('/payroll-runs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the payrollRunsRetrieve operation.
     * @callback module:api/PayrollRunsApi~payrollRunsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayrollRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `PayrollRun` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/PayrollRunsApi~payrollRunsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayrollRun}
     */

  }, {
    key: "payrollRunsRetrieve",
    value: function payrollRunsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling payrollRunsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling payrollRunsRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'include_remote_data': opts['includeRemoteData']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PayrollRun["default"];
      return this.apiClient.callApi('/payroll-runs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PayrollRunsApi;
}();

exports["default"] = PayrollRunsApi;