'use strict';

describe('Controller: ViewfinishCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var ViewfinishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewfinishCtrl = $controller('ViewfinishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewfinishCtrl.awesomeThings.length).toBe(3);
  });
});
