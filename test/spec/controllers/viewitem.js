'use strict';

describe('Controller: ViewitemCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var ViewitemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewitemCtrl = $controller('ViewitemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewitemCtrl.awesomeThings.length).toBe(3);
  });
});
