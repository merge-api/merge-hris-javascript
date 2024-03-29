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
    instance = new MergeHrisApi.Employee();
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

  describe('Employee', function() {
    it('should create an instance of Employee', function() {
      // uncomment below and update the code to test Employee
      //var instane = new MergeHrisApi.Employee();
      //expect(instance).to.be.a(MergeHrisApi.Employee);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property remote_id (base name: "remote_id")', function() {
      // uncomment below and update the code to test the property remote_id
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property employee_number (base name: "employee_number")', function() {
      // uncomment below and update the code to test the property employee_number
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property first_name (base name: "first_name")', function() {
      // uncomment below and update the code to test the property first_name
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property last_name (base name: "last_name")', function() {
      // uncomment below and update the code to test the property last_name
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property display_full_name (base name: "display_full_name")', function() {
      // uncomment below and update the code to test the property display_full_name
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property work_email (base name: "work_email")', function() {
      // uncomment below and update the code to test the property work_email
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property personal_email (base name: "personal_email")', function() {
      // uncomment below and update the code to test the property personal_email
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property mobile_phone_number (base name: "mobile_phone_number")', function() {
      // uncomment below and update the code to test the property mobile_phone_number
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property employments (base name: "employments")', function() {
      // uncomment below and update the code to test the property employments
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property home_location (base name: "home_location")', function() {
      // uncomment below and update the code to test the property home_location
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property work_location (base name: "work_location")', function() {
      // uncomment below and update the code to test the property work_location
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property manager (base name: "manager")', function() {
      // uncomment below and update the code to test the property manager
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property team (base name: "team")', function() {
      // uncomment below and update the code to test the property team
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property pay_group (base name: "pay_group")', function() {
      // uncomment below and update the code to test the property pay_group
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property ssn (base name: "ssn")', function() {
      // uncomment below and update the code to test the property ssn
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property ethnicity (base name: "ethnicity")', function() {
      // uncomment below and update the code to test the property ethnicity
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property marital_status (base name: "marital_status")', function() {
      // uncomment below and update the code to test the property marital_status
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property date_of_birth (base name: "date_of_birth")', function() {
      // uncomment below and update the code to test the property date_of_birth
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property hire_date (base name: "hire_date")', function() {
      // uncomment below and update the code to test the property hire_date
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property start_date (base name: "start_date")', function() {
      // uncomment below and update the code to test the property start_date
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property remote_created_at (base name: "remote_created_at")', function() {
      // uncomment below and update the code to test the property remote_created_at
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property employment_status (base name: "employment_status")', function() {
      // uncomment below and update the code to test the property employment_status
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property termination_date (base name: "termination_date")', function() {
      // uncomment below and update the code to test the property termination_date
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property remote_data (base name: "remote_data")', function() {
      // uncomment below and update the code to test the property remote_data
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property custom_fields (base name: "custom_fields")', function() {
      // uncomment below and update the code to test the property custom_fields
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

    it('should have the property remote_was_deleted (base name: "remote_was_deleted")', function() {
      // uncomment below and update the code to test the property remote_was_deleted
      //var instance = new MergeHrisApi.Employee();
      //expect(instance).to.be();
    });

  });

}));
