# MergeHrisApi.PassthroughApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**passthroughCreate**](PassthroughApi.md#passthroughCreate) | **POST** /passthrough | 



## passthroughCreate

> RemoteResponse passthroughCreate(x_account_token, data_passthrough_request)



Pull data from an endpoint not currently supported by Merge.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.PassthroughApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let data_passthrough_request = new MergeHrisApi.DataPassthroughRequest(); // DataPassthroughRequest | 
apiInstance.passthroughCreate(x_account_token, data_passthrough_request, (error, data, response) => {
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
 **x_account_token** | **String**| Token identifying the end user. | 
 **data_passthrough_request** | [**DataPassthroughRequest**](DataPassthroughRequest.md)|  | 

### Return type

[**RemoteResponse**](RemoteResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

