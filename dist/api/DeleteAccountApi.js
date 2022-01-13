"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DeleteAccount service.
* @module api/DeleteAccountApi
* @version 1.0
*/
var DeleteAccountApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DeleteAccountApi. 
  * @alias module:api/DeleteAccountApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DeleteAccountApi(apiClient) {
    _classCallCheck(this, DeleteAccountApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteAccountCreate operation.
   * @callback module:api/DeleteAccountApi~deleteAccountCreateCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a linked account.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {module:api/DeleteAccountApi~deleteAccountCreateCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(DeleteAccountApi, [{
    key: "deleteAccountCreate",
    value: function deleteAccountCreate(xAccountToken, callback) {
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling deleteAccountCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/delete-account', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DeleteAccountApi;
}();

exports["default"] = DeleteAccountApi;