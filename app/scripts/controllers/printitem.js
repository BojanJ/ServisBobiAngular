'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:PrintitemCtrl
 * @description
 * # PrintitemCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('PrintitemCtrl', function ($scope, $routeParams, $http, $location, $rootScope) {

  	$scope.id = $routeParams.Id;
  	$scope.data = {};
  	$http.get('http://api.janevski.info/api/ServisItems/' + $scope.id).
            success(function(data) {
            	console.log(data);
                $scope.data = data;
            }).
            error(function(data, status) {

            });

    $scope.checkStatus = function (){
    	return $scope.data.status;
    }


    setTimeout(function(){ window.print(); $location.path('/'); }, 500);

  });
