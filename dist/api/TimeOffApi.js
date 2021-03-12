"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateTimeOff = _interopRequireDefault(require("../model/CreateTimeOff"));

var _PaginatedTimeOffList = _interopRequireDefault(require("../model/PaginatedTimeOffList"));

var _TimeOff = _interopRequireDefault(require("../model/TimeOff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TimeOff service.
* @module api/TimeOffApi
* @version 1.0
*/
var TimeOffApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeOffApi. 
  * @alias module:api/TimeOffApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeOffApi(apiClient) {
    _classCallCheck(this, TimeOffApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the timeOffCreate operation.
   * @callback module:api/TimeOffApi~timeOffCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TimeOff} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a `TimeOff` object with the given values.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.runAsync Whether or not third-party updates should be run asynchronously.
   * @param {module:model/CreateTimeOff} opts.createTimeOff 
   * @param {module:api/TimeOffApi~timeOffCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TimeOff}
   */


  _createClass(TimeOffApi, [{
    key: "timeOffCreate",
    value: function timeOffCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['createTimeOff']; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling timeOffCreate");
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
      var returnType = _TimeOff["default"];
      return this.apiClient.callApi('/time-off', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the timeOffList operation.
     * @callback module:api/TimeOffApi~timeOffListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTimeOffList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `TimeOff` objects.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.approverId If provided, will only return time off for this approver.
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
     * @param {module:api/TimeOffApi~timeOffListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTimeOffList}
     */

  }, {
    key: "timeOffList",
    value: function timeOffList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling timeOffList");
      }

      var pathParams = {};
      var queryParams = {
        'approver_id': opts['approverId'],
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
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedTimeOffList["default"];
      return this.apiClient.callApi('/time-off', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the timeOffRetrieve operation.
     * @callback module:api/TimeOffApi~timeOffRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeOff} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `TimeOff` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/TimeOffApi~timeOffRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeOff}
     */

  }, {
    key: "timeOffRetrieve",
    value: function timeOffRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling timeOffRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling timeOffRetrieve");
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
      var returnType = _TimeOff["default"];
      return this.apiClient.callApi('/time-off/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TimeOffApi;
}();

exports["default"] = TimeOffApi;