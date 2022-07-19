# MergeHrisApi.BankInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**employee** | **String** |  | [optional] 
**account_number** | **String** | The account number. | [optional] 
**routing_number** | **String** | The routing number. | [optional] 
**bank_name** | **String** | The bank name. | [optional] 
**account_type** | [**AccountTypeEnum**](AccountTypeEnum.md) | The bank account type | [optional] 
**remote_created_at** | **Date** | When the matching bank object was created in the third party system. | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** | Indicates whether or not this object has been deleted by third party webhooks. | [optional] [readonly] 


