# MergeHrisApi.EmployeesApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeesCreate**](EmployeesApi.md#employeesCreate) | **POST** /employees | 
[**employeesIgnoreCreate**](EmployeesApi.md#employeesIgnoreCreate) | **POST** /employees/ignore/{model_id} | 
[**employeesList**](EmployeesApi.md#employeesList) | **GET** /employees | 
[**employeesMetaPostRetrieve**](EmployeesApi.md#employeesMetaPostRetrieve) | **GET** /employees/meta/post | 
[**employeesRetrieve**](EmployeesApi.md#employeesRetrieve) | **GET** /employees/{id} | 



## employeesCreate

> EmployeeResponse employeesCreate(x_account_token, employee_endpoint_request, opts)



Creates an &#x60;Employee&#x60; object with the given values.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.EmployeesApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let employee_endpoint_request = new MergeHrisApi.EmployeeEndpointRequest(); // EmployeeEndpointRequest | 
let opts = {
  'is_debug_mode': true, // Boolean | Whether to include debug fields (such as log file links) in the response.
  'run_async': true // Boolean | Whether or not third-party updates should be run asynchronously.
};
apiInstance.employeesCreate(x_account_token, employee_endpoint_request, opts, (error, data, response) => {
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
 **employee_endpoint_request** | [**EmployeeEndpointRequest**](EmployeeEndpointRequest.md)|  | 
 **is_debug_mode** | **Boolean**| Whether to include debug fields (such as log file links) in the response. | [optional] 
 **run_async** | **Boolean**| Whether or not third-party updates should be run asynchronously. | [optional] 

### Return type

[**EmployeeResponse**](EmployeeResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## employeesIgnoreCreate

> IgnoreCommonModel employeesIgnoreCreate(x_account_token, model_id, ignore_common_model_request)



Ignores a specific row based on the &#x60;model_id&#x60; in the url. These records will have their properties set to null, and will not be updated in future syncs. The \&quot;reason\&quot; and \&quot;message\&quot; fields in the request body will be stored for audit purposes.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.EmployeesApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let model_id = null; // String | 
let ignore_common_model_request = new MergeHrisApi.IgnoreCommonModelRequest(); // IgnoreCommonModelRequest | 
apiInstance.employeesIgnoreCreate(x_account_token, model_id, ignore_common_model_request, (error, data, response) => {
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
 **model_id** | [**String**](.md)|  | 
 **ignore_common_model_request** | [**IgnoreCommonModelRequest**](IgnoreCommonModelRequest.md)|  | 

### Return type

[**IgnoreCommonModel**](IgnoreCommonModel.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## employeesList

> PaginatedEmployeeList employeesList(x_account_token, opts)



Returns a list of &#x60;Employee&#x60; objects.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.EmployeesApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let opts = {
  'company_id': "company_id_example", // String | If provided, will only return employees for this company.
  'created_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'created_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'display_full_name': "display_full_name_example", // String | If provided, will only return employees with this display name.
  'employment_status': "employment_status_example", // String | If provided, will only return employees with this employment status.
  'expand': employments,groups,home_location,work_location,manager,team,company,pay_group, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'first_name': "first_name_example", // String | If provided, will only return employees with this first name.
  'include_deleted_data': true, // Boolean | Whether to include data that was marked as deleted by third party webhooks.
  'include_remote_data': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'include_sensitive_fields': true, // Boolean | Whether to include sensitive fields (such as social security numbers) in the response.
  'last_name': "last_name_example", // String | If provided, will only return employees with this last name.
  'manager_id': "manager_id_example", // String | If provided, will only return employees for this manager.
  'modified_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modified_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'page_size': 56, // Number | Number of results to return per page.
  'pay_group_id': "pay_group_id_example", // String | If provided, will only return employees for this pay group
  'personal_email': null, // String | If provided, will only return Employees with this personal email
  'remote_fields': employment_status,ethnicity,gender,marital_status, // String | Which fields should be returned in non-normalized form.
  'remote_id': "remote_id_example", // String | The API provider's ID for the given object.
  'team_id': "team_id_example", // String | If provided, will only return employees for this team.
  'work_email': null, // String | If provided, will only return Employees with this work email
  'work_location_id': "work_location_id_example" // String | If provided, will only return employees for this location.
};
apiInstance.employeesList(x_account_token, opts, (error, data, response) => {
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
 **company_id** | **String**| If provided, will only return employees for this company. | [optional] 
 **created_after** | **Date**| If provided, will only return objects created after this datetime. | [optional] 
 **created_before** | **Date**| If provided, will only return objects created before this datetime. | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **display_full_name** | **String**| If provided, will only return employees with this display name. | [optional] 
 **employment_status** | **String**| If provided, will only return employees with this employment status. | [optional] 
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. | [optional] 
 **first_name** | **String**| If provided, will only return employees with this first name. | [optional] 
 **include_deleted_data** | **Boolean**| Whether to include data that was marked as deleted by third party webhooks. | [optional] 
 **include_remote_data** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **include_sensitive_fields** | **Boolean**| Whether to include sensitive fields (such as social security numbers) in the response. | [optional] 
 **last_name** | **String**| If provided, will only return employees with this last name. | [optional] 
 **manager_id** | **String**| If provided, will only return employees for this manager. | [optional] 
 **modified_after** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modified_before** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **page_size** | **Number**| Number of results to return per page. | [optional] 
 **pay_group_id** | **String**| If provided, will only return employees for this pay group | [optional] 
 **personal_email** | [**String**](.md)| If provided, will only return Employees with this personal email | [optional] 
 **remote_fields** | **String**| Which fields should be returned in non-normalized form. | [optional] 
 **remote_id** | **String**| The API provider&#39;s ID for the given object. | [optional] 
 **team_id** | **String**| If provided, will only return employees for this team. | [optional] 
 **work_email** | [**String**](.md)| If provided, will only return Employees with this work email | [optional] 
 **work_location_id** | **String**| If provided, will only return employees for this location. | [optional] 

### Return type

[**PaginatedEmployeeList**](PaginatedEmployeeList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## employeesMetaPostRetrieve

> MetaResponse employeesMetaPostRetrieve(x_account_token)



Returns metadata for &#x60;Employee&#x60; POSTs.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.EmployeesApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
apiInstance.employeesMetaPostRetrieve(x_account_token, (error, data, response) => {
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

[**MetaResponse**](MetaResponse.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## employeesRetrieve

> Employee employeesRetrieve(x_account_token, id, opts)



Returns an &#x60;Employee&#x60; object with the given &#x60;id&#x60;.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.EmployeesApi();
let x_account_token = "x_account_token_example"; // String | Token identifying the end user.
let id = null; // String | 
let opts = {
  'expand': employments,groups,home_location,work_location,manager,team,company,pay_group, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'include_remote_data': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'include_sensitive_fields': true, // Boolean | Whether to include sensitive fields (such as social security numbers) in the response.
  'remote_fields': employment_status,ethnicity,gender,marital_status // String | Which fields should be returned in non-normalized form.
};
apiInstance.employeesRetrieve(x_account_token, id, opts, (error, data, response) => {
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
 **include_sensitive_fields** | **Boolean**| Whether to include sensitive fields (such as social security numbers) in the response. | [optional] 
 **remote_fields** | **String**| Which fields should be returned in non-normalized form. | [optional] 

### Return type

[**Employee**](Employee.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

