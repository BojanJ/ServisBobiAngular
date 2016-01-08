'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ReportsCtrl
 * @description
 * # ReportsCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('ReportsCtrl', function ($scope) {

  	$scope.checkboxModel = {
  		'signIn':false,
		'servis':false,
		'back':false,
		'finished':false
  	};

  });
