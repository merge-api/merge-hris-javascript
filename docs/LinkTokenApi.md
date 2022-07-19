# MergeHrisApi.LinkTokenApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkTokenCreate**](LinkTokenApi.md#linkTokenCreate) | **POST** /link-token | 



## linkTokenCreate

> LinkToken linkTokenCreate(end_user_details_request)



Creates a link token to be used when linking a new end user.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.LinkTokenApi();
let end_user_details_request = new MergeHrisApi.EndUserDetailsRequest(); // EndUserDetailsRequest | 
apiInstance.linkTokenCreate(end_user_details_request, (error, data, response) => {
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
 **end_user_details_request** | [**EndUserDetailsRequest**](EndUserDetailsRequest.md)|  | 

### Return type

[**LinkToken**](LinkToken.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json

