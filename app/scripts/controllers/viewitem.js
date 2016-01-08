'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ViewitemCtrl
 * @description
 * # ViewitemCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('ViewitemCtrl', function ($scope, $routeParams, $http, $location) {

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

    $scope.print = function (){
      setTimeout(function(){ window.print(); }, 1500);
    	
    }

    $scope.edit = function (id){
    	$location.path('/edititem/'+id);
    }
  });
