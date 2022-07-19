# MergeHrisApi.PayrollRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**run_state** | [**RunStateEnum**](RunStateEnum.md) | The state of the payroll run | [optional] 
**run_type** | [**RunTypeEnum**](RunTypeEnum.md) | The type of the payroll run | [optional] 
**start_date** | **Date** | The day and time the payroll run started. | [optional] 
**end_date** | **Date** | The day and time the payroll run ended. | [optional] 
**check_date** | **Date** | The day and time the payroll run was checked. | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** | Indicates whether or not this object has been deleted by third party webhooks. | [optional] [readonly] 


