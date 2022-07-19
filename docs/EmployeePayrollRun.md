# MergeHrisApi.EmployeePayrollRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**employee** | **String** |  | [optional] 
**payroll_run** | **String** |  | [optional] 
**gross_pay** | **Number** | The gross pay from the run. | [optional] 
**net_pay** | **Number** | The net pay from the run. | [optional] 
**start_date** | **Date** | The day and time the payroll run started. | [optional] 
**end_date** | **Date** | The day and time the payroll run ended. | [optional] 
**check_date** | **Date** | The day and time the payroll run was checked. | [optional] 
**earnings** | [**[Earning]**](Earning.md) |  | [optional] [readonly] 
**deductions** | [**[Deduction]**](Deduction.md) |  | [optional] [readonly] 
**taxes** | [**[Tax]**](Tax.md) |  | [optional] [readonly] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** | Indicates whether or not this object has been deleted by third party webhooks. | [optional] [readonly] 


