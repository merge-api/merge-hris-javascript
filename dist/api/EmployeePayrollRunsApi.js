"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeePayrollRun = _interopRequireDefault(require("../model/EmployeePayrollRun"));

var _PaginatedEmployeePayrollRunList = _interopRequireDefault(require("../model/PaginatedEmployeePayrollRunList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EmployeePayrollRuns service.
* @module api/EmployeePayrollRunsApi
* @version 1.0
*/
var EmployeePayrollRunsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmployeePayrollRunsApi. 
  * @alias module:api/EmployeePayrollRunsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmployeePayrollRunsApi(apiClient) {
    _classCallCheck(this, EmployeePayrollRunsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the employeePayrollRunsList operation.
   * @callback module:api/EmployeePayrollRunsApi~employeePayrollRunsListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedEmployeePayrollRunList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `EmployeePayrollRun` objects.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
   * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {String} opts.employeeId If provided, will only return employee payroll runs for this employee.
   * @param {Date} opts.endedAfter If provided, will only return employee payroll runs ended after this datetime.
   * @param {Date} opts.endedBefore If provided, will only return employee payroll runs ended before this datetime.
   * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
   * @param {Boolean} opts.includeDeletedData Whether to include data that was deleted in the third-party service.
   * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
   * @param {Number} opts.pageSize Number of results to return per page.
   * @param {String} opts.payrollRunId If provided, will only return employee payroll runs for this employee.
   * @param {String} opts.remoteId The API provider's ID for the given object.
   * @param {Date} opts.startedAfter If provided, will only return employee payroll runs started after this datetime.
   * @param {Date} opts.startedBefore If provided, will only return employee payroll runs started before this datetime.
   * @param {module:api/EmployeePayrollRunsApi~employeePayrollRunsListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedEmployeePayrollRunList}
   */


  _createClass(EmployeePayrollRunsApi, [{
    key: "employeePayrollRunsList",
    value: function employeePayrollRunsList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling employeePayrollRunsList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'employee_id': opts['employeeId'],
        'ended_after': opts['endedAfter'],
        'ended_before': opts['endedBefore'],
        'expand': opts['expand'],
        'include_deleted_data': opts['includeDeletedData'],
        'include_remote_data': opts['includeRemoteData'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'payroll_run_id': opts['payrollRunId'],
        'remote_id': opts['remoteId'],
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
      var returnType = _PaginatedEmployeePayrollRunList["default"];
      return this.apiClient.callApi('/employee-payroll-runs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employeePayrollRunsRetrieve operation.
     * @callback module:api/EmployeePayrollRunsApi~employeePayrollRunsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmployeePayrollRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `EmployeePayrollRun` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/EmployeePayrollRunsApi~employeePayrollRunsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmployeePayrollRun}
     */

  }, {
    key: "employeePayrollRunsRetrieve",
    value: function employeePayrollRunsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling employeePayrollRunsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employeePayrollRunsRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmployeePayrollRun["default"];
      return this.apiClient.callApi('/employee-payroll-runs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmployeePayrollRunsApi;
}();

exports["default"] = EmployeePayrollRunsApi;