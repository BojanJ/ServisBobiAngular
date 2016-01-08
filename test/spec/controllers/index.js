'use strict';

describe('Controller: IndexCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var IndexCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    IndexCtrl = $controller('IndexCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(IndexCtrl.awesomeThings.length).toBe(3);
  });
});
