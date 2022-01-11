# MergeHrisApi.EmployeesApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeesList**](EmployeesApi.md#employeesList) | **GET** /employees | 
[**employeesRetrieve**](EmployeesApi.md#employeesRetrieve) | **GET** /employees/{id} | 



## employeesList

> PaginatedEmployeeList employeesList(xAccountToken, opts)



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
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'companyId': "companyId_example", // String | If provided, will only return employees for this company.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'expand': employments,home_location,work_location,manager,team,company,pay_group, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'includeDeletedData': true, // Boolean | Whether to include data that was deleted in the third-party service.
  'includeRemoteData': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'includeSensitiveFields': true, // Boolean | Whether to include sensitive fields (such as social security numbers) in the response.
  'managerId': "managerId_example", // String | If provided, will only return employees for this manager.
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'pageSize': 56, // Number | Number of results to return per page.
  'payGroupId': "payGroupId_example", // String | If provided, will only return employees for this pay group
  'personalEmail': null, // String | If provided, will only return Employees with this personal email
  'remoteId': "remoteId_example", // String | The API provider's ID for the given object.
  'teamId': "teamId_example", // String | If provided, will only return employees for this team.
  'workEmail': null, // String | If provided, will only return Employees with this work email
  'workLocationId': "workLocationId_example" // String | If provided, will only return employees for this location.
};
apiInstance.employeesList(xAccountToken, opts, (error, data, response) => {
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
 **companyId** | **String**| If provided, will only return employees for this company. | [optional] 
 **createdAfter** | **Date**| If provided, will only return objects created after this datetime. | [optional] 
 **createdBefore** | **Date**| If provided, will only return objects created before this datetime. | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. | [optional] 
 **includeDeletedData** | **Boolean**| Whether to include data that was deleted in the third-party service. | [optional] 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **includeSensitiveFields** | **Boolean**| Whether to include sensitive fields (such as social security numbers) in the response. | [optional] 
 **managerId** | **String**| If provided, will only return employees for this manager. | [optional] 
 **modifiedAfter** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modifiedBefore** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 
 **payGroupId** | **String**| If provided, will only return employees for this pay group | [optional] 
 **personalEmail** | [**String**](.md)| If provided, will only return Employees with this personal email | [optional] 
 **remoteId** | **String**| The API provider&#39;s ID for the given object. | [optional] 
 **teamId** | **String**| If provided, will only return employees for this team. | [optional] 
 **workEmail** | [**String**](.md)| If provided, will only return Employees with this work email | [optional] 
 **workLocationId** | **String**| If provided, will only return employees for this location. | [optional] 

### Return type

[**PaginatedEmployeeList**](PaginatedEmployeeList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## employeesRetrieve

> Employee employeesRetrieve(xAccountToken, id, opts)



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
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let id = null; // String | 
let opts = {
  'expand': employments,home_location,work_location,manager,team,company,pay_group, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'includeRemoteData': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'includeSensitiveFields': true // Boolean | Whether to include sensitive fields (such as social security numbers) in the response.
};
apiInstance.employeesRetrieve(xAccountToken, id, opts, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. | [optional] 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **includeSensitiveFields** | **Boolean**| Whether to include sensitive fields (such as social security numbers) in the response. | [optional] 

### Return type

[**Employee**](Employee.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

