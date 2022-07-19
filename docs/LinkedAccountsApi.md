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
  'end_user_email_address': "end_user_email_address_example", // String | If provided, will only return linked accounts associated with the given email address.
  'end_user_organization_name': "end_user_organization_name_example", // String | If provided, will only return linked accounts associated with the given organization name.
  'end_user_origin_id': "end_user_origin_id_example", // String | If provided, will only return linked accounts associated with the given origin ID.
  'end_user_origin_ids': "end_user_origin_ids_example", // String | Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once.
  'id': null, // String | 
  'ids': "ids_example", // String | Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once.
  'integration_name': "integration_name_example", // String | If provided, will only return linked accounts associated with the given integration name.
  'is_test_account': "is_test_account_example", // String | If included, will only include test linked accounts. If not included, will only include non-test linked accounts.
  'page_size': 56, // Number | Number of results to return per page.
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
 **end_user_email_address** | **String**| If provided, will only return linked accounts associated with the given email address. | [optional] 
 **end_user_organization_name** | **String**| If provided, will only return linked accounts associated with the given organization name. | [optional] 
 **end_user_origin_id** | **String**| If provided, will only return linked accounts associated with the given origin ID. | [optional] 
 **end_user_origin_ids** | **String**| Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once. | [optional] 
 **id** | [**String**](.md)|  | [optional] 
 **ids** | **String**| Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once. | [optional] 
 **integration_name** | **String**| If provided, will only return linked accounts associated with the given integration name. | [optional] 
 **is_test_account** | **String**| If included, will only include test linked accounts. If not included, will only include non-test linked accounts. | [optional] 
 **page_size** | **Number**| Number of results to return per page. | [optional] 
 **status** | **String**| Filter by status. Options: &#x60;COMPLETE&#x60;, &#x60;INCOMPLETE&#x60;, &#x60;RELINK_NEEDED&#x60; | [optional] 

### Return type

[**PaginatedAccountDetailsAndActionsList**](PaginatedAccountDetailsAndActionsList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

