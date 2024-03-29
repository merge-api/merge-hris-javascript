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
    instance = new MergeHrisApi.BankInfo();
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

  describe('BankInfo', function() {
    it('should create an instance of BankInfo', function() {
      // uncomment below and update the code to test BankInfo
      //var instane = new MergeHrisApi.BankInfo();
      //expect(instance).to.be.a(MergeHrisApi.BankInfo);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property remote_id (base name: "remote_id")', function() {
      // uncomment below and update the code to test the property remote_id
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property employee (base name: "employee")', function() {
      // uncomment below and update the code to test the property employee
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property account_number (base name: "account_number")', function() {
      // uncomment below and update the code to test the property account_number
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property routing_number (base name: "routing_number")', function() {
      // uncomment below and update the code to test the property routing_number
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property bank_name (base name: "bank_name")', function() {
      // uncomment below and update the code to test the property bank_name
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property account_type (base name: "account_type")', function() {
      // uncomment below and update the code to test the property account_type
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property remote_created_at (base name: "remote_created_at")', function() {
      // uncomment below and update the code to test the property remote_created_at
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property remote_data (base name: "remote_data")', function() {
      // uncomment below and update the code to test the property remote_data
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

    it('should have the property remote_was_deleted (base name: "remote_was_deleted")', function() {
      // uncomment below and update the code to test the property remote_was_deleted
      //var instance = new MergeHrisApi.BankInfo();
      //expect(instance).to.be();
    });

  });

}));
