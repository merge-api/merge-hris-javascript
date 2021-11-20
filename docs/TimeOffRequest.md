# MergeHrisApi.TimeOffRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**employee** | **String** | The employee requesting time off. | [optional] 
**approver** | **String** | The employee approving the time off request. | [optional] 
**status** | [**TimeOffStatusEnum**](TimeOffStatusEnum.md) | The status of this time off request. | [optional] 
**employeeNote** | **String** | The employee note for this time off request. | [optional] 
**units** | [**UnitsEnum**](UnitsEnum.md) | The unit of time requested. | [optional] 
**amount** | **Number** | The number of time off units requested. | [optional] 
**requestType** | [**RequestTypeEnum**](RequestTypeEnum.md) | The type of time off request. | [optional] 
**startTime** | **Date** | The day and time of the start of the time requested off. | [optional] 
**endTime** | **Date** | The day and time of the end of the time requested off. | [optional] 


