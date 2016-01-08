'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:PrintCtrl
 * @description
 * # PrintCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('PrintCtrl', function ($scope, $routeParams, $http, $location) {

  	$scope.id = $routeParams.Id;
  	$scope.data = {};
  	$http.get('http://api.janevski.info/api/ServisItems/' + $scope.id).
            success(function(data) {
            	console.log(data);
                $scope.data = data;
                window.print();
            }).
            error(function(data, status) {

            });

    $scope.checkStatus = function (){
    	return $scope.data.status;
    }

    $scope.edit = function (id){
    	$location.path('/edititem/'+id);
    }
  });
