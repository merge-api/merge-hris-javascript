"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateEmployment = _interopRequireDefault(require("../model/CreateEmployment"));

var _Employment = _interopRequireDefault(require("../model/Employment"));

var _PaginatedEmploymentList = _interopRequireDefault(require("../model/PaginatedEmploymentList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Employments service.
* @module api/EmploymentsApi
* @version 1.0
*/
var EmploymentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmploymentsApi. 
  * @alias module:api/EmploymentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmploymentsApi(apiClient) {
    _classCallCheck(this, EmploymentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the employmentsCreate operation.
   * @callback module:api/EmploymentsApi~employmentsCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Employment} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates an `Employment` object with the given values.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
   * @param {module:model/CreateEmployment} opts.createEmployment 
   * @param {module:api/EmploymentsApi~employmentsCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Employment}
   */


  _createClass(EmploymentsApi, [{
    key: "employmentsCreate",
    value: function employmentsCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['createEmployment']; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling employmentsCreate");
      }

      var pathParams = {};
      var queryParams = {
        'run_async': opts['runAsync']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _Employment["default"];
      return this.apiClient.callApi('/employments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employmentsList operation.
     * @callback module:api/EmploymentsApi~employmentsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedEmploymentList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `Employment` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
     * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {String} opts.employeeId If provided, will only return employments for this employee.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {String} opts.remoteId The API provider's ID for the given object.
     * @param {module:api/EmploymentsApi~employmentsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedEmploymentList}
     */

  }, {
    key: "employmentsList",
    value: function employmentsList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling employmentsList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'employee_id': opts['employeeId'],
        'include_remote_data': opts['includeRemoteData'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'remote_id': opts['remoteId']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedEmploymentList["default"];
      return this.apiClient.callApi('/employments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employmentsRetrieve operation.
     * @callback module:api/EmploymentsApi~employmentsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `Employment` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/EmploymentsApi~employmentsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employment}
     */

  }, {
    key: "employmentsRetrieve",
    value: function employmentsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling employmentsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employmentsRetrieve");
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
      var returnType = _Employment["default"];
      return this.apiClient.callApi('/employments/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmploymentsApi;
}();

exports["default"] = EmploymentsApi;