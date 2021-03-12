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
    instance = new MergeHrisApi.CreateTimeOff();
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

  describe('CreateTimeOff', function() {
    it('should create an instance of CreateTimeOff', function() {
      // uncomment below and update the code to test CreateTimeOff
      //var instane = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be.a(MergeHrisApi.CreateTimeOff);
    });

    it('should have the property employee (base name: "employee")', function() {
      // uncomment below and update the code to test the property employee
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property approver (base name: "approver")', function() {
      // uncomment below and update the code to test the property approver
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property employeeNote (base name: "employee_note")', function() {
      // uncomment below and update the code to test the property employeeNote
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property units (base name: "units")', function() {
      // uncomment below and update the code to test the property units
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property requestType (base name: "request_type")', function() {
      // uncomment below and update the code to test the property requestType
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property leaveTypeId (base name: "leave_type_id")', function() {
      // uncomment below and update the code to test the property leaveTypeId
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property timeOffPolicyId (base name: "time_off_policy_id")', function() {
      // uncomment below and update the code to test the property timeOffPolicyId
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

    it('should have the property partOfDay (base name: "part_of_day")', function() {
      // uncomment below and update the code to test the property partOfDay
      //var instance = new MergeHrisApi.CreateTimeOff();
      //expect(instance).to.be();
    });

  });

}));