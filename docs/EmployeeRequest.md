# MergeHrisApi.EmployeeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remoteId** | **String** | The third-party API ID of the matching object. | [optional] 
**employeeNumber** | **String** | The employee&#39;s number that appears in the remote UI. Note: This is distinct from the remote_id field, which is a unique identifier for the employee set by the remote API, and is not exposed to the user. | [optional] 
**company** | **String** | The ID of the employee&#39;s company. | [optional] 
**firstName** | **String** | The employee&#39;s first name. | [optional] 
**lastName** | **String** | The employee&#39;s last name. | [optional] 
**displayFullName** | **String** | The employee&#39;s full name, to use for display purposes. | [optional] 
**workEmail** | **String** | The employee&#39;s work email. | [optional] 
**personalEmail** | **String** | The employee&#39;s personal email. | [optional] 
**mobilePhoneNumber** | **String** | The employee&#39;s mobile phone number. | [optional] 
**homeLocation** | **String** | The employee&#39;s home address. | [optional] 
**workLocation** | **String** | The employee&#39;s work address. | [optional] 
**manager** | **String** | The employee ID of the employee&#39;s manager. | [optional] 
**team** | **String** | The employee&#39;s team. | [optional] 
**ssn** | **String** | The employee&#39;s social security number. | [optional] 
**gender** | [**GenderEnum**](GenderEnum.md) | The employee&#39;s gender. | [optional] 
**ethnicity** | [**EthnicityEnum**](EthnicityEnum.md) | The employee&#39;s ethnicity. | [optional] 
**maritalStatus** | [**MaritalStatusEnum**](MaritalStatusEnum.md) | The employee&#39;s marital status. | [optional] 
**dateOfBirth** | **Date** | The employee&#39;s date of birth. | [optional] 
**hireDate** | **Date** | The employee&#39;s hire date. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. | [optional] 
**employmentStatus** | [**EmploymentStatusEnum**](EmploymentStatusEnum.md) | The employment status of the employee. | [optional] 
**terminationDate** | **Date** | The employee&#39;s termination date. | [optional] 
**avatar** | **String** | The URL of the employee&#39;s avatar image. | [optional] 


