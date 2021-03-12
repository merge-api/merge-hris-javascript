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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MergeHrisApi);
  }
}(this, function(expect, MergeHrisApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MergeHrisApi.CreateEmployeePayrollRun();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateEmployeePayrollRun', function() {
    it('should create an instance of CreateEmployeePayrollRun', function() {
      // uncomment below and update the code to test CreateEmployeePayrollRun
      //var instane = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be.a(MergeHrisApi.CreateEmployeePayrollRun);
    });

    it('should have the property employee (base name: "employee")', function() {
      // uncomment below and update the code to test the property employee
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property payrollRun (base name: "payroll_run")', function() {
      // uncomment below and update the code to test the property payrollRun
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property grossPay (base name: "gross_pay")', function() {
      // uncomment below and update the code to test the property grossPay
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property netPay (base name: "net_pay")', function() {
      // uncomment below and update the code to test the property netPay
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property checkDate (base name: "check_date")', function() {
      // uncomment below and update the code to test the property checkDate
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property earnings (base name: "earnings")', function() {
      // uncomment below and update the code to test the property earnings
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property deductions (base name: "deductions")', function() {
      // uncomment below and update the code to test the property deductions
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

    it('should have the property taxes (base name: "taxes")', function() {
      // uncomment below and update the code to test the property taxes
      //var instance = new MergeHrisApi.CreateEmployeePayrollRun();
      //expect(instance).to.be();
    });

  });

}));