/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AccountIntegration from './model/AccountIntegration';
import AccountToken from './model/AccountToken';
import AvailableActions from './model/AvailableActions';
import Benefit from './model/Benefit';
import BenefitPlanTypeEnum from './model/BenefitPlanTypeEnum';
import Company from './model/Company';
import CountryEnum from './model/CountryEnum';
import CreateBenefit from './model/CreateBenefit';
import CreateCompany from './model/CreateCompany';
import CreateEmployee from './model/CreateEmployee';
import CreateEmployeePayrollRun from './model/CreateEmployeePayrollRun';
import CreateEmployment from './model/CreateEmployment';
import CreateLocation from './model/CreateLocation';
import CreatePayrollRun from './model/CreatePayrollRun';
import CreateTeam from './model/CreateTeam';
import CreateTimeOff from './model/CreateTimeOff';
import DataPassthrough from './model/DataPassthrough';
import Deduction from './model/Deduction';
import Earning from './model/Earning';
import Employee from './model/Employee';
import EmployeePayrollRun from './model/EmployeePayrollRun';
import Employment from './model/Employment';
import EmploymentStatusEnum from './model/EmploymentStatusEnum';
import EmploymentTypeEnum from './model/EmploymentTypeEnum';
import EndUserDetails from './model/EndUserDetails';
import EthnicityEnum from './model/EthnicityEnum';
import FlsaStatusEnum from './model/FlsaStatusEnum';
import GenderEnum from './model/GenderEnum';
import LinkToken from './model/LinkToken';
import Location from './model/Location';
import MaritalStatusEnum from './model/MaritalStatusEnum';
import MethodEnum from './model/MethodEnum';
import ModelOperation from './model/ModelOperation';
import PaginatedBenefitList from './model/PaginatedBenefitList';
import PaginatedCompanyList from './model/PaginatedCompanyList';
import PaginatedEmployeeList from './model/PaginatedEmployeeList';
import PaginatedEmployeePayrollRunList from './model/PaginatedEmployeePayrollRunList';
import PaginatedEmploymentList from './model/PaginatedEmploymentList';
import PaginatedLocationList from './model/PaginatedLocationList';
import PaginatedPayrollRunList from './model/PaginatedPayrollRunList';
import PaginatedTeamList from './model/PaginatedTeamList';
import PaginatedTimeOffList from './model/PaginatedTimeOffList';
import PayCurrencyEnum from './model/PayCurrencyEnum';
import PayFrequencyEnum from './model/PayFrequencyEnum';
import PayPeriodEnum from './model/PayPeriodEnum';
import PayrollRun from './model/PayrollRun';
import RemoteData from './model/RemoteData';
import RemoteKey from './model/RemoteKey';
import RemoteKeyForRegeneration from './model/RemoteKeyForRegeneration';
import RemoteResponse from './model/RemoteResponse';
import RequestTypeEnum from './model/RequestTypeEnum';
import RunStateEnum from './model/RunStateEnum';
import RunTypeEnum from './model/RunTypeEnum';
import StateEnum from './model/StateEnum';
import Tax from './model/Tax';
import Team from './model/Team';
import TimeOff from './model/TimeOff';
import TimeOffStatusEnum from './model/TimeOffStatusEnum';
import TypeEnum from './model/TypeEnum';
import UnitsEnum from './model/UnitsEnum';
import AccountTokenApi from './api/AccountTokenApi';
import AvailableActionsApi from './api/AvailableActionsApi';
import BenefitsApi from './api/BenefitsApi';
import CompaniesApi from './api/CompaniesApi';
import EmployeePayrollRunsApi from './api/EmployeePayrollRunsApi';
import EmployeesApi from './api/EmployeesApi';
import EmploymentsApi from './api/EmploymentsApi';
import LinkTokenApi from './api/LinkTokenApi';
import LocationsApi from './api/LocationsApi';
import PassthroughApi from './api/PassthroughApi';
import PayrollRunsApi from './api/PayrollRunsApi';
import RegenerateKeyApi from './api/RegenerateKeyApi';
import TeamsApi from './api/TeamsApi';
import TimeOffApi from './api/TimeOffApi';


/**
* The_unified_API_for_building_rich_integrations_with_multiple_HR_Information_System_platforms_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MergeHrisApi = require('index'); // See note below*.
* var xxxSvc = new MergeHrisApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MergeHrisApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MergeHrisApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MergeHrisApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccountIntegration model constructor.
     * @property {module:model/AccountIntegration}
     */
    AccountIntegration,

    /**
     * The AccountToken model constructor.
     * @property {module:model/AccountToken}
     */
    AccountToken,

    /**
     * The AvailableActions model constructor.
     * @property {module:model/AvailableActions}
     */
    AvailableActions,

    /**
     * The Benefit model constructor.
     * @property {module:model/Benefit}
     */
    Benefit,

    /**
     * The BenefitPlanTypeEnum model constructor.
     * @property {module:model/BenefitPlanTypeEnum}
     */
    BenefitPlanTypeEnum,

    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company,

    /**
     * The CountryEnum model constructor.
     * @property {module:model/CountryEnum}
     */
    CountryEnum,

    /**
     * The CreateBenefit model constructor.
     * @property {module:model/CreateBenefit}
     */
    CreateBenefit,

    /**
     * The CreateCompany model constructor.
     * @property {module:model/CreateCompany}
     */
    CreateCompany,

    /**
     * The CreateEmployee model constructor.
     * @property {module:model/CreateEmployee}
     */
    CreateEmployee,

    /**
     * The CreateEmployeePayrollRun model constructor.
     * @property {module:model/CreateEmployeePayrollRun}
     */
    CreateEmployeePayrollRun,

    /**
     * The CreateEmployment model constructor.
     * @property {module:model/CreateEmployment}
     */
    CreateEmployment,

    /**
     * The CreateLocation model constructor.
     * @property {module:model/CreateLocation}
     */
    CreateLocation,

    /**
     * The CreatePayrollRun model constructor.
     * @property {module:model/CreatePayrollRun}
     */
    CreatePayrollRun,

    /**
     * The CreateTeam model constructor.
     * @property {module:model/CreateTeam}
     */
    CreateTeam,

    /**
     * The CreateTimeOff model constructor.
     * @property {module:model/CreateTimeOff}
     */
    CreateTimeOff,

    /**
     * The DataPassthrough model constructor.
     * @property {module:model/DataPassthrough}
     */
    DataPassthrough,

    /**
     * The Deduction model constructor.
     * @property {module:model/Deduction}
     */
    Deduction,

    /**
     * The Earning model constructor.
     * @property {module:model/Earning}
     */
    Earning,

    /**
     * The Employee model constructor.
     * @property {module:model/Employee}
     */
    Employee,

    /**
     * The EmployeePayrollRun model constructor.
     * @property {module:model/EmployeePayrollRun}
     */
    EmployeePayrollRun,

    /**
     * The Employment model constructor.
     * @property {module:model/Employment}
     */
    Employment,

    /**
     * The EmploymentStatusEnum model constructor.
     * @property {module:model/EmploymentStatusEnum}
     */
    EmploymentStatusEnum,

    /**
     * The EmploymentTypeEnum model constructor.
     * @property {module:model/EmploymentTypeEnum}
     */
    EmploymentTypeEnum,

    /**
     * The EndUserDetails model constructor.
     * @property {module:model/EndUserDetails}
     */
    EndUserDetails,

    /**
     * The EthnicityEnum model constructor.
     * @property {module:model/EthnicityEnum}
     */
    EthnicityEnum,

    /**
     * The FlsaStatusEnum model constructor.
     * @property {module:model/FlsaStatusEnum}
     */
    FlsaStatusEnum,

    /**
     * The GenderEnum model constructor.
     * @property {module:model/GenderEnum}
     */
    GenderEnum,

    /**
     * The LinkToken model constructor.
     * @property {module:model/LinkToken}
     */
    LinkToken,

    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location,

    /**
     * The MaritalStatusEnum model constructor.
     * @property {module:model/MaritalStatusEnum}
     */
    MaritalStatusEnum,

    /**
     * The MethodEnum model constructor.
     * @property {module:model/MethodEnum}
     */
    MethodEnum,

    /**
     * The ModelOperation model constructor.
     * @property {module:model/ModelOperation}
     */
    ModelOperation,

    /**
     * The PaginatedBenefitList model constructor.
     * @property {module:model/PaginatedBenefitList}
     */
    PaginatedBenefitList,

    /**
     * The PaginatedCompanyList model constructor.
     * @property {module:model/PaginatedCompanyList}
     */
    PaginatedCompanyList,

    /**
     * The PaginatedEmployeeList model constructor.
     * @property {module:model/PaginatedEmployeeList}
     */
    PaginatedEmployeeList,

    /**
     * The PaginatedEmployeePayrollRunList model constructor.
     * @property {module:model/PaginatedEmployeePayrollRunList}
     */
    PaginatedEmployeePayrollRunList,

    /**
     * The PaginatedEmploymentList model constructor.
     * @property {module:model/PaginatedEmploymentList}
     */
    PaginatedEmploymentList,

    /**
     * The PaginatedLocationList model constructor.
     * @property {module:model/PaginatedLocationList}
     */
    PaginatedLocationList,

    /**
     * The PaginatedPayrollRunList model constructor.
     * @property {module:model/PaginatedPayrollRunList}
     */
    PaginatedPayrollRunList,

    /**
     * The PaginatedTeamList model constructor.
     * @property {module:model/PaginatedTeamList}
     */
    PaginatedTeamList,

    /**
     * The PaginatedTimeOffList model constructor.
     * @property {module:model/PaginatedTimeOffList}
     */
    PaginatedTimeOffList,

    /**
     * The PayCurrencyEnum model constructor.
     * @property {module:model/PayCurrencyEnum}
     */
    PayCurrencyEnum,

    /**
     * The PayFrequencyEnum model constructor.
     * @property {module:model/PayFrequencyEnum}
     */
    PayFrequencyEnum,

    /**
     * The PayPeriodEnum model constructor.
     * @property {module:model/PayPeriodEnum}
     */
    PayPeriodEnum,

    /**
     * The PayrollRun model constructor.
     * @property {module:model/PayrollRun}
     */
    PayrollRun,

    /**
     * The RemoteData model constructor.
     * @property {module:model/RemoteData}
     */
    RemoteData,

    /**
     * The RemoteKey model constructor.
     * @property {module:model/RemoteKey}
     */
    RemoteKey,

    /**
     * The RemoteKeyForRegeneration model constructor.
     * @property {module:model/RemoteKeyForRegeneration}
     */
    RemoteKeyForRegeneration,

    /**
     * The RemoteResponse model constructor.
     * @property {module:model/RemoteResponse}
     */
    RemoteResponse,

    /**
     * The RequestTypeEnum model constructor.
     * @property {module:model/RequestTypeEnum}
     */
    RequestTypeEnum,

    /**
     * The RunStateEnum model constructor.
     * @property {module:model/RunStateEnum}
     */
    RunStateEnum,

    /**
     * The RunTypeEnum model constructor.
     * @property {module:model/RunTypeEnum}
     */
    RunTypeEnum,

    /**
     * The StateEnum model constructor.
     * @property {module:model/StateEnum}
     */
    StateEnum,

    /**
     * The Tax model constructor.
     * @property {module:model/Tax}
     */
    Tax,

    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team,

    /**
     * The TimeOff model constructor.
     * @property {module:model/TimeOff}
     */
    TimeOff,

    /**
     * The TimeOffStatusEnum model constructor.
     * @property {module:model/TimeOffStatusEnum}
     */
    TimeOffStatusEnum,

    /**
     * The TypeEnum model constructor.
     * @property {module:model/TypeEnum}
     */
    TypeEnum,

    /**
     * The UnitsEnum model constructor.
     * @property {module:model/UnitsEnum}
     */
    UnitsEnum,

    /**
    * The AccountTokenApi service constructor.
    * @property {module:api/AccountTokenApi}
    */
    AccountTokenApi,

    /**
    * The AvailableActionsApi service constructor.
    * @property {module:api/AvailableActionsApi}
    */
    AvailableActionsApi,

    /**
    * The BenefitsApi service constructor.
    * @property {module:api/BenefitsApi}
    */
    BenefitsApi,

    /**
    * The CompaniesApi service constructor.
    * @property {module:api/CompaniesApi}
    */
    CompaniesApi,

    /**
    * The EmployeePayrollRunsApi service constructor.
    * @property {module:api/EmployeePayrollRunsApi}
    */
    EmployeePayrollRunsApi,

    /**
    * The EmployeesApi service constructor.
    * @property {module:api/EmployeesApi}
    */
    EmployeesApi,

    /**
    * The EmploymentsApi service constructor.
    * @property {module:api/EmploymentsApi}
    */
    EmploymentsApi,

    /**
    * The LinkTokenApi service constructor.
    * @property {module:api/LinkTokenApi}
    */
    LinkTokenApi,

    /**
    * The LocationsApi service constructor.
    * @property {module:api/LocationsApi}
    */
    LocationsApi,

    /**
    * The PassthroughApi service constructor.
    * @property {module:api/PassthroughApi}
    */
    PassthroughApi,

    /**
    * The PayrollRunsApi service constructor.
    * @property {module:api/PayrollRunsApi}
    */
    PayrollRunsApi,

    /**
    * The RegenerateKeyApi service constructor.
    * @property {module:api/RegenerateKeyApi}
    */
    RegenerateKeyApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:api/TeamsApi}
    */
    TeamsApi,

    /**
    * The TimeOffApi service constructor.
    * @property {module:api/TimeOffApi}
    */
    TimeOffApi
};