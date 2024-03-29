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
    instance = new MergeHrisApi.Benefit();
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

  describe('Benefit', function() {
    it('should create an instance of Benefit', function() {
      // uncomment below and update the code to test Benefit
      //var instane = new MergeHrisApi.Benefit();
      //expect(instance).to.be.a(MergeHrisApi.Benefit);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

    it('should have the property remote_id (base name: "remote_id")', function() {
      // uncomment below and update the code to test the property remote_id
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

    it('should have the property employee (base name: "employee")', function() {
      // uncomment below and update the code to test the property employee
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

    it('should have the property provider_name (base name: "provider_name")', function() {
      // uncomment below and update the code to test the property provider_name
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

    it('should have the property benefit_plan_type (base name: "benefit_plan_type")', function() {
      // uncomment below and update the code to test the property benefit_plan_type
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

    it('should have the property employee_contribution (base name: "employee_contribution")', function() {
      // uncomment below and update the code to test the property employee_contribution
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

    it('should have the property company_contribution (base name: "company_contribution")', function() {
      // uncomment below and update the code to test the property company_contribution
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

    it('should have the property remote_data (base name: "remote_data")', function() {
      // uncomment below and update the code to test the property remote_data
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

    it('should have the property remote_was_deleted (base name: "remote_was_deleted")', function() {
      // uncomment below and update the code to test the property remote_was_deleted
      //var instance = new MergeHrisApi.Benefit();
      //expect(instance).to.be();
    });

  });

}));
