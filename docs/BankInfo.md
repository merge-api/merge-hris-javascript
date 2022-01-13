# MergeHrisApi.BankInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**employee** | **String** | The employee with this bank account. | [optional] 
**accountNumber** | **String** | The account number. | [optional] 
**routingNumber** | **String** | The routing number. | [optional] 
**bankName** | **String** | The bank name. | [optional] 
**accountType** | [**AccountTypeEnum**](AccountTypeEnum.md) | The bank account type | [optional] 
**remoteCreatedAt** | **Date** | When the matching bank object was created in the third party system. | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


