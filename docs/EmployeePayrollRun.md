# MergeHrisApi.EmployeePayrollRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**employee** | **String** | The employee whose payroll is being run. | [optional] 
**payrollRun** | **String** | The payroll being run. | [optional] 
**grossPay** | **Number** | The gross pay from the run. | [optional] 
**netPay** | **Number** | The net pay from the run. | [optional] 
**startDate** | **Date** | The day and time the payroll run started. | [optional] 
**endDate** | **Date** | The day and time the payroll run ended. | [optional] 
**checkDate** | **Date** | The day and time the payroll run was checked. | [optional] 
**earnings** | [**[Earning]**](Earning.md) |  | [optional] [readonly] 
**deductions** | [**[Deduction]**](Deduction.md) |  | [optional] [readonly] 
**taxes** | [**[Tax]**](Tax.md) |  | [optional] [readonly] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


