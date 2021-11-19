# MergeHrisApi.DeductionsApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deductionsCreate**](DeductionsApi.md#deductionsCreate) | **POST** /deductions | 
[**deductionsList**](DeductionsApi.md#deductionsList) | **GET** /deductions | 
[**deductionsRetrieve**](DeductionsApi.md#deductionsRetrieve) | **GET** /deductions/{id} | 



## deductionsCreate

> Deduction deductionsCreate(xAccountToken, opts)



Creates a &#x60;Deduction&#x60; object with the given values.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.DeductionsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'runAsync': true, // Boolean | Whether or not third-party updates should be run asynchronously.
  'deductionRequest': new MergeHrisApi.DeductionRequest() // DeductionRequest | 
};
apiInstance.deductionsCreate(xAccountToken, opts, (error, data, response) => {
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
 **runAsync** | **Boolean**| Whether or not third-party updates should be run asynchronously. | [optional] 
 **deductionRequest** | [**DeductionRequest**](DeductionRequest.md)|  | [optional] 

### Return type

[**Deduction**](Deduction.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## deductionsList

> PaginatedDeductionList deductionsList(xAccountToken, opts)



Returns a list of &#x60;Deduction&#x60; objects.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.DeductionsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'employeePayrollRunId': "employeePayrollRunId_example", // String | If provided, will only return deductions for this employee payroll run.
  'includeRemoteData': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'pageSize': 56, // Number | Number of results to return per page.
  'remoteId': "remoteId_example" // String | The API provider's ID for the given object.
};
apiInstance.deductionsList(xAccountToken, opts, (error, data, response) => {
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
 **createdAfter** | **Date**| If provided, will only return objects created after this datetime. | [optional] 
 **createdBefore** | **Date**| If provided, will only return objects created before this datetime. | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **employeePayrollRunId** | **String**| If provided, will only return deductions for this employee payroll run. | [optional] 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **modifiedAfter** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modifiedBefore** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 
 **remoteId** | **String**| The API provider&#39;s ID for the given object. | [optional] 

### Return type

[**PaginatedDeductionList**](PaginatedDeductionList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deductionsRetrieve

> Deduction deductionsRetrieve(xAccountToken, id, opts)



Returns a &#x60;Deduction&#x60; object with the given &#x60;id&#x60;.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.DeductionsApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let id = null; // String | 
let opts = {
  'includeRemoteData': true // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
};
apiInstance.deductionsRetrieve(xAccountToken, id, opts, (error, data, response) => {
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
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 

### Return type

[**Deduction**](Deduction.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

