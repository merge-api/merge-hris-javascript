# MergeHrisApi.PayrollRunsApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollRunsList**](PayrollRunsApi.md#payrollRunsList) | **GET** /payroll-runs | 
[**payrollRunsRetrieve**](PayrollRunsApi.md#payrollRunsRetrieve) | **GET** /payroll-runs/{id} | 



## payrollRunsList

> PaginatedPayrollRunList payrollRunsList(x_account_token, opts)



Returns a list of &#x60;PayrollRun&#x60; objects.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.PayrollRunsApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let opts = {
  'created_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'created_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'ended_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return payroll runs ended after this datetime.
  'ended_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return payroll runs ended before this datetime.
  'include_deleted_data': true, // Boolean | Whether to include data that was marked as deleted by third party webhooks.
  'include_remote_data': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'modified_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modified_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'page_size': 56, // Number | Number of results to return per page.
  'remote_fields': run_state,run_type, // String | Which fields should be returned in non-normalized form.
  'remote_id': "remote_id_example", // String | The API provider's ID for the given object.
  'run_type': "run_type_example", // String | If provided, will only return PayrollRun's with this status. Options: ('REGULAR', 'OFF_CYCLE', 'CORRECTION', 'TERMINATION', 'SIGN_ON_BONUS')
  'started_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return payroll runs started after this datetime.
  'started_before': new Date("2013-10-20T19:20:30+01:00") // Date | If provided, will only return payroll runs started before this datetime.
};
apiInstance.payrollRunsList(x_account_token, opts, (error, data, response) => {
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
 **ended_after** | **Date**| If provided, will only return payroll runs ended after this datetime. | [optional] 
 **ended_before** | **Date**| If provided, will only return payroll runs ended before this datetime. | [optional] 
 **include_deleted_data** | **Boolean**| Whether to include data that was marked as deleted by third party webhooks. | [optional] 
 **include_remote_data** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **modified_after** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modified_before** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **page_size** | **Number**| Number of results to return per page. | [optional] 
 **remote_fields** | **String**| Which fields should be returned in non-normalized form. | [optional] 
 **remote_id** | **String**| The API provider&#39;s ID for the given object. | [optional] 
 **run_type** | **String**| If provided, will only return PayrollRun&#39;s with this status. Options: (&#39;REGULAR&#39;, &#39;OFF_CYCLE&#39;, &#39;CORRECTION&#39;, &#39;TERMINATION&#39;, &#39;SIGN_ON_BONUS&#39;) | [optional] 
 **started_after** | **Date**| If provided, will only return payroll runs started after this datetime. | [optional] 
 **started_before** | **Date**| If provided, will only return payroll runs started before this datetime. | [optional] 

### Return type

[**PaginatedPayrollRunList**](PaginatedPayrollRunList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## payrollRunsRetrieve

> PayrollRun payrollRunsRetrieve(x_account_token, id, opts)



Returns a &#x60;PayrollRun&#x60; object with the given &#x60;id&#x60;.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.PayrollRunsApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let id = null; // String | 
let opts = {
  'include_remote_data': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'remote_fields': run_state,run_type // String | Which fields should be returned in non-normalized form.
};
apiInstance.payrollRunsRetrieve(x_account_token, id, opts, (error, data, response) => {
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
 **include_remote_data** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **remote_fields** | **String**| Which fields should be returned in non-normalized form. | [optional] 

### Return type

[**PayrollRun**](PayrollRun.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

