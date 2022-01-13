"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Employee = _interopRequireDefault(require("../model/Employee"));

var _PaginatedEmployeeList = _interopRequireDefault(require("../model/PaginatedEmployeeList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Employees service.
* @module api/EmployeesApi
* @version 1.0
*/
var EmployeesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmployeesApi. 
  * @alias module:api/EmployeesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmployeesApi(apiClient) {
    _classCallCheck(this, EmployeesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the employeesList operation.
   * @callback module:api/EmployeesApi~employeesListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedEmployeeList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `Employee` objects.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {String} opts.companyId If provided, will only return employees for this company.
   * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
   * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
   * @param {Boolean} opts.includeDeletedData Whether to include data that was deleted in the third-party service.
   * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Boolean} opts.includeSensitiveFields Whether to include sensitive fields (such as social security numbers) in the response.
   * @param {String} opts.managerId If provided, will only return employees for this manager.
   * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
   * @param {Number} opts.pageSize Number of results to return per page.
   * @param {String} opts.payGroupId If provided, will only return employees for this pay group
   * @param {String} opts.personalEmail If provided, will only return Employees with this personal email
   * @param {String} opts.remoteId The API provider's ID for the given object.
   * @param {String} opts.teamId If provided, will only return employees for this team.
   * @param {String} opts.workEmail If provided, will only return Employees with this work email
   * @param {String} opts.workLocationId If provided, will only return employees for this location.
   * @param {module:api/EmployeesApi~employeesListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedEmployeeList}
   */


  _createClass(EmployeesApi, [{
    key: "employeesList",
    value: function employeesList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling employeesList");
      }

      var pathParams = {};
      var queryParams = {
        'company_id': opts['companyId'],
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'expand': opts['expand'],
        'include_deleted_data': opts['includeDeletedData'],
        'include_remote_data': opts['includeRemoteData'],
        'include_sensitive_fields': opts['includeSensitiveFields'],
        'manager_id': opts['managerId'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'pay_group_id': opts['payGroupId'],
        'personal_email': opts['personalEmail'],
        'remote_id': opts['remoteId'],
        'team_id': opts['teamId'],
        'work_email': opts['workEmail'],
        'work_location_id': opts['workLocationId']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedEmployeeList["default"];
      return this.apiClient.callApi('/employees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employeesRetrieve operation.
     * @callback module:api/EmployeesApi~employeesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `Employee` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Boolean} opts.includeSensitiveFields Whether to include sensitive fields (such as social security numbers) in the response.
     * @param {module:api/EmployeesApi~employeesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */

  }, {
    key: "employeesRetrieve",
    value: function employeesRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling employeesRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employeesRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData'],
        'include_sensitive_fields': opts['includeSensitiveFields']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Employee["default"];
      return this.apiClient.callApi('/employees/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmployeesApi;
}();

exports["default"] = EmployeesApi;