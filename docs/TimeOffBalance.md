# MergeHrisApi.TimeOffBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**employee** | **String** | The employee the balance belongs to. | [optional] 
**balance** | **Number** | The current PTO balance in terms of hours. | [optional] 
**used** | **Number** | The amount of PTO used in terms of hours. | [optional] 
**policyType** | [**PolicyTypeEnum**](PolicyTypeEnum.md) | The policy type of this time off balance. | [optional] 
**remoteData** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 


