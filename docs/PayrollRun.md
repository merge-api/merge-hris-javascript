# MergeHrisApi.PayrollRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**runState** | [**RunStateEnum**](RunStateEnum.md) | The state of the payroll run | [optional] 
**runType** | [**RunTypeEnum**](RunTypeEnum.md) | The type of the payroll run | [optional] 
**startDate** | **Date** | The day and time the payroll run started. | [optional] 
**endDate** | **Date** | The day and time the payroll run ended. | [optional] 
**checkDate** | **Date** | The day and time the payroll run was checked. | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


