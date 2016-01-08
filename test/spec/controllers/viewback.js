'use strict';

describe('Controller: ViewbackCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var ViewbackCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewbackCtrl = $controller('ViewbackCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewbackCtrl.awesomeThings.length).toBe(3);
  });
});
