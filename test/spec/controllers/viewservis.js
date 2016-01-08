'use strict';

describe('Controller: ViewservisCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var ViewservisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewservisCtrl = $controller('ViewservisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewservisCtrl.awesomeThings.length).toBe(3);
  });
});
