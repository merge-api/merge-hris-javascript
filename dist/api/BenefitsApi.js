"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Benefit = _interopRequireDefault(require("../model/Benefit"));

var _CreateBenefit = _interopRequireDefault(require("../model/CreateBenefit"));

var _PaginatedBenefitList = _interopRequireDefault(require("../model/PaginatedBenefitList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Benefits service.
* @module api/BenefitsApi
* @version 1.0
*/
var BenefitsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BenefitsApi. 
  * @alias module:api/BenefitsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BenefitsApi(apiClient) {
    _classCallCheck(this, BenefitsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(BenefitsApi, [{
    key: "benefitsCreate",
    value: function benefitsCreate(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['createBenefit']; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling benefitsCreate");
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
      var returnType = _Benefit["default"];
      return this.apiClient.callApi('/benefits', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "benefitsList",
    value: function benefitsList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling benefitsList");
      }

      var pathParams = {};
      var queryParams = {
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
      var returnType = _PaginatedBenefitList["default"];
      return this.apiClient.callApi('/benefits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "benefitsRetrieve",
    value: function benefitsRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling benefitsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling benefitsRetrieve");
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
      var returnType = _Benefit["default"];
      return this.apiClient.callApi('/benefits/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BenefitsApi;
}();

exports["default"] = BenefitsApi;