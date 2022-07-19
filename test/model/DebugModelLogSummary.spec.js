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
    instance = new MergeHrisApi.DebugModelLogSummary();
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

  describe('DebugModelLogSummary', function() {
    it('should create an instance of DebugModelLogSummary', function() {
      // uncomment below and update the code to test DebugModelLogSummary
      //var instane = new MergeHrisApi.DebugModelLogSummary();
      //expect(instance).to.be.a(MergeHrisApi.DebugModelLogSummary);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new MergeHrisApi.DebugModelLogSummary();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new MergeHrisApi.DebugModelLogSummary();
      //expect(instance).to.be();
    });

    it('should have the property status_code (base name: "status_code")', function() {
      // uncomment below and update the code to test the property status_code
      //var instance = new MergeHrisApi.DebugModelLogSummary();
      //expect(instance).to.be();
    });

  });

}));