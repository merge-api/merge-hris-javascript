# MergeHrisApi.AvailableActionsApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availableActionsRetrieve**](AvailableActionsApi.md#availableActionsRetrieve) | **GET** /available-actions | 



## availableActionsRetrieve

> AvailableActions availableActionsRetrieve(xAccountToken, opts)



Returns a list of models and actions available for an account.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.AvailableActionsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'includeRemoteData': true // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
};
apiInstance.availableActionsRetrieve(xAccountToken, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAccountToken** | **String**| Token identifying the end user. | 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 

### Return type

[**AvailableActions**](AvailableActions.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
