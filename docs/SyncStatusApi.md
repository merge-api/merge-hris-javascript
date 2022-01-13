# MergeHrisApi.SyncStatusApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncStatusList**](SyncStatusApi.md#syncStatusList) | **GET** /sync-status | 



## syncStatusList

> PaginatedSyncStatusList syncStatusList(xAccountToken, opts)



Get syncing status. Possible values: &#x60;DISABLED&#x60;, &#x60;DONE&#x60;, &#x60;FAILED&#x60;, &#x60;SYNCING&#x60;

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.SyncStatusApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'pageSize': 56 // Number | Number of results to return per page.
};
apiInstance.syncStatusList(xAccountToken, opts, (error, data, response) => {
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
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**PaginatedSyncStatusList**](PaginatedSyncStatusList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

