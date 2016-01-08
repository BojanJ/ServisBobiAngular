'use strict';

describe('Controller: InsertCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var InsertCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InsertCtrl = $controller('InsertCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InsertCtrl.awesomeThings.length).toBe(3);
  });
});
