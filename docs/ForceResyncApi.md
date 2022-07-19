# MergeHrisApi.ForceResyncApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncStatusResyncCreate**](ForceResyncApi.md#syncStatusResyncCreate) | **POST** /sync-status/resync | 



## syncStatusResyncCreate

> [SyncStatus] syncStatusResyncCreate(x_account_token)



Force re-sync of all models. This is only available for organizations on Merge&#39;s Grow and Expand plans.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.ForceResyncApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
apiInstance.syncStatusResyncCreate(x_account_token, (error, data, response) => {
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

### Return type

[**[SyncStatus]**](SyncStatus.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

