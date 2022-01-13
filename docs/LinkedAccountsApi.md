# MergeHrisApi.LinkedAccountsApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linkedAccountsList**](LinkedAccountsApi.md#linkedAccountsList) | **GET** /linked-accounts | 



## linkedAccountsList

> PaginatedAccountDetailsAndActionsList linkedAccountsList(opts)



List linked accounts for your organization.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.LinkedAccountsApi();
let opts = {
  'category': "category_example", // String | 
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'endUserEmailAddress': "endUserEmailAddress_example", // String | 
  'endUserOrganizationName': "endUserOrganizationName_example", // String | 
  'endUserOriginId': "endUserOriginId_example", // String | 
  'endUserOriginIds': "endUserOriginIds_example", // String | Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once
  'id': null, // String | 
  'ids': "ids_example", // String | Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once
  'integrationName': "integrationName_example", // String | 
  'isTestAccount': "isTestAccount_example", // String | If included, will only include test linked accounts. If not included, will only include non-test linked accounts
  'pageSize': 56, // Number | Number of results to return per page.
  'status': "status_example" // String | Filter by status. Options: `COMPLETE`, `INCOMPLETE`, `RELINK_NEEDED`
};
apiInstance.linkedAccountsList(opts, (error, data, response) => {
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
 **category** | **String**|  | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **endUserEmailAddress** | **String**|  | [optional] 
 **endUserOrganizationName** | **String**|  | [optional] 
 **endUserOriginId** | **String**|  | [optional] 
 **endUserOriginIds** | **String**| Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once | [optional] 
 **id** | [**String**](.md)|  | [optional] 
 **ids** | **String**| Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once | [optional] 
 **integrationName** | **String**|  | [optional] 
 **isTestAccount** | **String**| If included, will only include test linked accounts. If not included, will only include non-test linked accounts | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 
 **status** | **String**| Filter by status. Options: &#x60;COMPLETE&#x60;, &#x60;INCOMPLETE&#x60;, &#x60;RELINK_NEEDED&#x60; | [optional] 

### Return type

[**PaginatedAccountDetailsAndActionsList**](PaginatedAccountDetailsAndActionsList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

