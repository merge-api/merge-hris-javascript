# MergeHrisApi.Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**legal_name** | **String** | The company&#39;s legal name. | [optional] 
**display_name** | **String** | The company&#39;s display name. | [optional] 
**eins** | **[String]** | The company&#39;s Employer Identification Numbers. | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** | Indicates whether or not this object has been deleted by third party webhooks. | [optional] [readonly] 


