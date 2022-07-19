# MergeHrisApi.IssuesApi

All URIs are relative to *https://api.merge.dev/api/hris/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuesList**](IssuesApi.md#issuesList) | **GET** /issues | 
[**issuesRetrieve**](IssuesApi.md#issuesRetrieve) | **GET** /issues/{id} | 



## issuesList

> PaginatedIssueList issuesList(opts)



Gets issues.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.IssuesApi();
let opts = {
  'account_token': "account_token_example", // String | 
  'cursor': cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw, // String | The pagination cursor value.
  'end_date': "end_date_example", // String | If included, will only include issues whose most recent action occurred before this time
  'end_user_organization_name': "end_user_organization_name_example", // String | 
  'first_incident_time_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return issues whose first incident time was after this datetime.
  'first_incident_time_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return issues whose first incident time was before this datetime.
  'include_muted': "include_muted_example", // String | If True, will include muted issues
  'integration_name': "integration_name_example", // String | 
  'last_incident_time_after': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return issues whose first incident time was after this datetime.
  'last_incident_time_before': new Date("2013-10-20T19:20:30+01:00"), // Date | If provided, will only return issues whose first incident time was before this datetime.
  'page_size': 56, // Number | Number of results to return per page.
  'start_date': "start_date_example", // String | If included, will only include issues whose most recent action occurred after this time
  'status': "status_example" // String | 
};
apiInstance.issuesList(opts, (error, data, response) => {
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
 **account_token** | **String**|  | [optional] 
 **cursor** | **String**| The pagination cursor value. | [optional] 
 **end_date** | **String**| If included, will only include issues whose most recent action occurred before this time | [optional] 
 **end_user_organization_name** | **String**|  | [optional] 
 **first_incident_time_after** | **Date**| If provided, will only return issues whose first incident time was after this datetime. | [optional] 
 **first_incident_time_before** | **Date**| If provided, will only return issues whose first incident time was before this datetime. | [optional] 
 **include_muted** | **String**| If True, will include muted issues | [optional] 
 **integration_name** | **String**|  | [optional] 
 **last_incident_time_after** | **Date**| If provided, will only return issues whose first incident time was after this datetime. | [optional] 
 **last_incident_time_before** | **Date**| If provided, will only return issues whose first incident time was before this datetime. | [optional] 
 **page_size** | **Number**| Number of results to return per page. | [optional] 
 **start_date** | **String**| If included, will only include issues whose most recent action occurred after this time | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**PaginatedIssueList**](PaginatedIssueList.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuesRetrieve

> Issue issuesRetrieve(id)



Get a specific issue.

### Example

```javascript
import MergeHrisApi from 'merge_hris_api';
let defaultClient = MergeHrisApi.ApiClient.instance;
// Configure API key authorization: tokenAuth
let tokenAuth = defaultClient.authentications['tokenAuth'];
tokenAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//tokenAuth.apiKeyPrefix = 'Token';

let apiInstance = new MergeHrisApi.IssuesApi();
let id = null; // String | 
apiInstance.issuesRetrieve(id, (error, data, response) => {
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
 **id** | [**String**](.md)|  | 

### Return type

[**Issue**](Issue.md)

### Authorization

[tokenAuth](../README.md#tokenAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

