# MergeHrisApi.Employment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**employee** | **String** |  | [optional] 
**job_title** | **String** | The position&#39;s title. | [optional] 
**pay_rate** | **Number** | The position&#39;s pay rate in dollars. | [optional] 
**pay_period** | [**PayPeriodEnum**](PayPeriodEnum.md) | The time period this pay rate encompasses. | [optional] 
**pay_frequency** | [**PayFrequencyEnum**](PayFrequencyEnum.md) | The position&#39;s pay frequency. | [optional] 
**pay_currency** | [**PayCurrencyEnum**](PayCurrencyEnum.md) | The position&#39;s currency code. | [optional] 
**pay_group** | **String** |  | [optional] 
**flsa_status** | [**FlsaStatusEnum**](FlsaStatusEnum.md) | The position&#39;s FLSA status. | [optional] 
**effective_date** | **Date** | The position&#39;s effective date. | [optional] 
**employment_type** | [**EmploymentTypeEnum**](EmploymentTypeEnum.md) | The position&#39;s type of employment. | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** | Indicates whether or not this object has been deleted by third party webhooks. | [optional] [readonly] 


