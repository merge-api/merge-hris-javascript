"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Issue = _interopRequireDefault(require("../model/Issue"));

var _PaginatedIssueList = _interopRequireDefault(require("../model/PaginatedIssueList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Issues service.
* @module api/IssuesApi
* @version 1.0
*/
var IssuesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssuesApi. 
  * @alias module:api/IssuesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssuesApi(apiClient) {
    _classCallCheck(this, IssuesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuesList operation.
   * @callback module:api/IssuesApi~issuesListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedIssueList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Gets issues.
   * @param {Object} opts Optional parameters
   * @param {String} opts.accountToken 
   * @param {String} opts.cursor The pagination cursor value.
   * @param {String} opts.endDate If included, will only include issues whose most recent action occurred before this time
   * @param {String} opts.endUserOrganizationName 
   * @param {String} opts.includeMuted If True, will include muted issues
   * @param {String} opts.integrationName 
   * @param {Number} opts.pageSize Number of results to return per page.
   * @param {String} opts.startDate If included, will only include issues whose most recent action occurred after this time
   * @param {module:model/String} opts.status 
   * @param {module:api/IssuesApi~issuesListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedIssueList}
   */


  _createClass(IssuesApi, [{
    key: "issuesList",
    value: function issuesList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'account_token': opts['accountToken'],
        'cursor': opts['cursor'],
        'end_date': opts['endDate'],
        'end_user_organization_name': opts['endUserOrganizationName'],
        'include_muted': opts['includeMuted'],
        'integration_name': opts['integrationName'],
        'page_size': opts['pageSize'],
        'start_date': opts['startDate'],
        'status': opts['status']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedIssueList["default"];
      return this.apiClient.callApi('/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesRetrieve operation.
     * @callback module:api/IssuesApi~issuesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific issue.
     * @param {String} id 
     * @param {module:api/IssuesApi~issuesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "issuesRetrieve",
    value: function issuesRetrieve(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issuesRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/issues/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssuesApi;
}();

exports["default"] = IssuesApi;