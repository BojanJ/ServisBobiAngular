'use strict';

describe('Controller: EdititemCtrl', function () {

  // load the controller's module
  beforeEach(module('servisApp'));

  var EdititemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EdititemCtrl = $controller('EdititemCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EdititemCtrl.awesomeThings.length).toBe(3);
  });
});
