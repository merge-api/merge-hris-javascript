# MergeHrisApi.TimeOffApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timeOffCreate**](TimeOffApi.md#timeOffCreate) | **POST** /time-off | 
[**timeOffList**](TimeOffApi.md#timeOffList) | **GET** /time-off | 
[**timeOffRetrieve**](TimeOffApi.md#timeOffRetrieve) | **GET** /time-off/{id} | 



## timeOffCreate

> TimeOff timeOffCreate(xAccountToken, opts)



Creates a &#x60;TimeOff&#x60; object with the given values.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.TimeOffApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'runAsync': true, // Boolean | Whether or not third-party updates should be run asynchronously.
  'timeOffRequest': new MergeHrisApi.TimeOffRequest() // TimeOffRequest | 
};
apiInstance.timeOffCreate(xAccountToken, opts, (error, data, response) => {
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
 **timeOffRequest** | [**TimeOffRequest**](TimeOffRequest.md)|  | [optional] 

### Return type

[**TimeOff**](TimeOff.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
- **Accept**: application/json


## timeOffList

> PaginatedTimeOffList timeOffList(xAccountToken, opts)



Returns a list of &#x60;TimeOff&#x60; objects.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.TimeOffApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let opts = {
  'approverId': "approverId_example", // String | If provided, will only return time off for this approver.
  'createdAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created after this datetime.
  'createdBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects created before this datetime.
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'employeeId': "employeeId_example", // String | If provided, will only return time off for this employee.
  'expand': employee,approver, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'includeRemoteData': true, // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
  'modifiedAfter': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified after this datetime.
  'modifiedBefore': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return objects modified before this datetime.
  'pageSize': 56, // Number | Number of results to return per page.
  'remoteId': "remoteId_example", // String | The API provider's ID for the given object.
  'requestType': "requestType_example", // String | If provided, will only return TimeOff with this request type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
  'status': "status_example" // String | If provided, will only return TimeOff with this status. Options: ('REQUESTED', 'APPROVED', 'DECLINED', 'CANCELLED', 'DELETED')
};
apiInstance.timeOffList(xAccountToken, opts, (error, data, response) => {
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
 **approverId** | **String**| If provided, will only return time off for this approver. | [optional] 
 **createdAfter** | **Date**| If provided, will only return objects created after this datetime. | [optional] 
 **createdBefore** | **Date**| If provided, will only return objects created before this datetime. | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **employeeId** | **String**| If provided, will only return time off for this employee. | [optional] 
 **expand** | **String**| Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces. | [optional] 
 **includeRemoteData** | **Boolean**| Whether to include the original data Merge fetched from the third-party to produce these models. | [optional] 
 **modifiedAfter** | **Date**| If provided, will only return objects modified after this datetime. | [optional] 
 **modifiedBefore** | **Date**| If provided, will only return objects modified before this datetime. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 
 **remoteId** | **String**| The API provider&#39;s ID for the given object. | [optional] 
 **requestType** | **String**| If provided, will only return TimeOff with this request type. Options: (&#39;VACATION&#39;, &#39;SICK&#39;, &#39;PERSONAL&#39;, &#39;JURY_DUTY&#39;, &#39;VOLUNTEER&#39;, &#39;BEREAVEMENT&#39;) | [optional] 
 **status** | **String**| If provided, will only return TimeOff with this status. Options: (&#39;REQUESTED&#39;, &#39;APPROVED&#39;, &#39;DECLINED&#39;, &#39;CANCELLED&#39;, &#39;DELETED&#39;) | [optional] 

### Return type

[**PaginatedTimeOffList**](PaginatedTimeOffList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## timeOffRetrieve

> TimeOff timeOffRetrieve(xAccountToken, id, opts)



Returns a &#x60;TimeOff&#x60; object with the given &#x60;id&#x60;.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.TimeOffApi();
let xAccountToken = "xAccountToken_example"; // String | Token identifying the end user.
let id = null; // String | 
let opts = {
  'expand': employee,approver, // String | Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
  'includeRemoteData': true // Boolean | Whether to include the original data Merge fetched from the third-party to produce these models.
};
apiInstance.timeOffRetrieve(xAccountToken, id, opts, (error, data, response) => {
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

### Return type

[**TimeOff**](TimeOff.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

