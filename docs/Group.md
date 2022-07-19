# MergeHrisApi.Group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] [readonly] 
**remote_id** | **String** | The third-party API ID of the matching object. | [optional] 
**parent_group** | **String** | The parent group for this group. | [optional] 
**name** | **String** | The group name. | [optional] 
**type** | [**GroupTypeEnum**](GroupTypeEnum.md) | The group type | [optional] 
**remote_data** | [**[RemoteData]**](RemoteData.md) |  | [optional] [readonly] 
**remote_was_deleted** | **Boolean** | Indicates whether or not this object has been deleted by third party webhooks. | [optional] [readonly] 


