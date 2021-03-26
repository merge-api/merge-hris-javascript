# MergeHrisApi.PassthroughApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**passthroughCreate**](PassthroughApi.md#passthroughCreate) | **POST** /passthrough | 



## passthroughCreate

> RemoteResponse passthroughCreate(authorization, xAccountToken, dataPassthroughRequest, opts)



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
let authorization = "authorization_example"; // String | Should include 'Bearer ' followed by your production API Key.
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let dataPassthroughRequest = new MergeHrisApi.DataPassthroughRequest(); // DataPassthroughRequest | 
let opts = {
  'includeRemoteData': true // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
};
apiInstance.passthroughCreate(authorization, xAccountToken, dataPassthroughRequest, opts, (error, data, response) => {
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
 **authorization** | **String**| Should include &#39;Bearer &#39; followed by your production API Key. | 
 **xAccountToken** | **String**| Token identifying the end user. | 
 **dataPassthroughRequest** | [**DataPassthroughRequest**](DataPassthroughRequest.md)|  | 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 

### Return type

[**RemoteResponse**](RemoteResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

