"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccountDetails = _interopRequireDefault(require("../model/AccountDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AccountDetails service.
* @module api/AccountDetailsApi
* @version 1.0
*/
var AccountDetailsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AccountDetailsApi. 
  * @alias module:api/AccountDetailsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AccountDetailsApi(apiClient) {
    _classCallCheck(this, AccountDetailsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the accountDetailsRetrieve operation.
   * @callback module:api/AccountDetailsApi~accountDetailsRetrieveCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AccountDetails} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get details for a linked account.
   * @param {module:api/AccountDetailsApi~accountDetailsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AccountDetails}
   */


  _createClass(AccountDetailsApi, [{
    key: "accountDetailsRetrieve",
    value: function accountDetailsRetrieve(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountDetails["default"];
      return this.apiClient.callApi('/account-details', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AccountDetailsApi;
}();

exports["default"] = AccountDetailsApi;