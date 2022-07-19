# MergeHrisApi.TimeOffBalancesApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timeOffBalancesList**](TimeOffBalancesApi.md#timeOffBalancesList) | **GET** /time-off-balances | 
[**timeOffBalancesRetrieve**](TimeOffBalancesApi.md#timeOffBalancesRetrieve) | **GET** /time-off-balances/{id} | 



## timeOffBalancesList

> PaginatedTimeOffBalanceList timeOffBalancesList(x_account_token, opts)



Returns a list of &#x60;TimeOffBalance&#x60; objects.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.TimeOffBalancesApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let opts = {
  'created_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'created_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'employee_id': "employee_id_example", // String | If provided, will only return time off balances for this employee.
  'expand': employee, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'include_deleted_data': true, // Boolean | Whether to include data that was marked as deleted by third party webhooks.
  'include_remote_data': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'modified_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modified_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'page_size': 56, // Number | Number of results to return per page.
  'policy_type': "policy_type_example", // String | If provided, will only return TimeOffBalance with this policy type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
  'remote_fields': policy_type, // String | Which fields should be returned in non-normalized form.
  'remote_id': "remote_id_example" // String | The API provider's ID for the given object.
};
apiInstance.timeOffBalancesList(x_account_token, opts, (error, data, response) => {
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
 **created_after** | **Date**| If provided, will only return objects created after this datetime. | [optional] 
 **created_before** | **Date**| If provided, will only return objects created before this datetime. | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **employee_id** | **String**| If provided, will only return time off balances for this employee. | [optional] 
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. | [optional] 
 **include_deleted_data** | **Boolean**| Whether to include data that was marked as deleted by third party webhooks. | [optional] 
 **include_remote_data** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **modified_after** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modified_before** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **page_size** | **Number**| Number of results to return per page. | [optional] 
 **policy_type** | **String**| If provided, will only return TimeOffBalance with this policy type. Options: (&#39;VACATION&#39;, &#39;SICK&#39;, &#39;PERSONAL&#39;, &#39;JURY_DUTY&#39;, &#39;VOLUNTEER&#39;, &#39;BEREAVEMENT&#39;) | [optional] 
 **remote_fields** | **String**| Which fields should be returned in non-normalized form. | [optional] 
 **remote_id** | **String**| The API provider&#39;s ID for the given object. | [optional] 

### Return type

[**PaginatedTimeOffBalanceList**](PaginatedTimeOffBalanceList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timeOffBalancesRetrieve

> TimeOffBalance timeOffBalancesRetrieve(x_account_token, id, opts)



Returns a &#x60;TimeOffBalance&#x60; object with the given &#x60;id&#x60;.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.TimeOffBalancesApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let id = null; // String | 
let opts = {
  'expand': employee, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'include_remote_data': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'remote_fields': policy_type // String | Which fields should be returned in non-normalized form.
};
apiInstance.timeOffBalancesRetrieve(x_account_token, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. | [optional] 
 **include_remote_data** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **remote_fields** | **String**| Which fields should be returned in non-normalized form. | [optional] 

### Return type

[**TimeOffBalance**](TimeOffBalance.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

