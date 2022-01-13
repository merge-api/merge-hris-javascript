"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaginatedSyncStatusList = _interopRequireDefault(require("../model/PaginatedSyncStatusList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SyncStatus service.
* @module api/SyncStatusApi
* @version 1.0
*/
var SyncStatusApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SyncStatusApi. 
  * @alias module:api/SyncStatusApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SyncStatusApi(apiClient) {
    _classCallCheck(this, SyncStatusApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the syncStatusList operation.
   * @callback module:api/SyncStatusApi~syncStatusListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedSyncStatusList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `SYNCING`
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor The pagination cursor value.
   * @param {Number} opts.pageSize Number of results to return per page.
   * @param {module:api/SyncStatusApi~syncStatusListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedSyncStatusList}
   */


  _createClass(SyncStatusApi, [{
    key: "syncStatusList",
    value: function syncStatusList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling syncStatusList");
      }

      var pathParams = {};
      var queryParams = {
        'cursor': opts['cursor'],
        'page_size': opts['pageSize']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedSyncStatusList["default"];
      return this.apiClient.callApi('/sync-status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SyncStatusApi;
}();

exports["default"] = SyncStatusApi;