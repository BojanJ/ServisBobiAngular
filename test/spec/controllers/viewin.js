'use strict';

describe('Controller: ViewinCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var ViewinCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewinCtrl = $controller('ViewinCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewinCtrl.awesomeThings.length).toBe(3);
  });
});
