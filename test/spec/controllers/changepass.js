'use strict';

describe('Controller: ChangepassCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var ChangepassCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChangepassCtrl = $controller('ChangepassCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
