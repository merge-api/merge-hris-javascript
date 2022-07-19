# MergeHrisApi.TimeOff

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**employee** | **String** |  | [optional] 
**approver** | **String** |  | [optional] 
**status** | [**TimeOffStatusEnum**](TimeOffStatusEnum.md) | The status of this time off request. | [optional] 
**employee_note** | **String** | The employee note for this time off request. | [optional] 
**units** | [**UnitsEnum**](UnitsEnum.md) | The unit of time requested. | [optional] 
**amount** | **Number** | The number of time off units requested. | [optional] 
**request_type** | [**RequestTypeEnum**](RequestTypeEnum.md) | The type of time off request. | [optional] 
**start_time** | **Date** | The day and time of the start of the time requested off. | [optional] 
**end_time** | **Date** | The day and time of the end of the time requested off. | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** |  | [optional] [readonly] 


