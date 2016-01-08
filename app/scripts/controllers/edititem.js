'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:EdititemCtrl
 * @description
 * # EdititemCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('EdititemCtrl', function($scope, $routeParams, $http, toastr, $location, localStorageService) {

        $scope.id = $routeParams.Id;

        $scope.data = {};
        $http.get('http://api.janevski.info/api/ServisItems/' + $scope.id).
        success(function(data) {
            console.log(data);
            $scope.data = data;
        }).
        error(function(data, status) {

        });


        $http.get('http://api.janevski.info/api/ServisItems?param=model').
        success(function(data) {
            $scope.models = data;
        }).
        error(function(data, status) {

        });


        $http.get('http://api.janevski.info/api/ServisItems?param=type').
        success(function(data) {
            $scope.types = data;
        }).
        error(function(data, status) {

        });


    $scope.checkStatus = function (){
    	return $scope.data.status;
    }

    $scope.user = localStorageService.get('authorizationData').userName;

    $scope.changeStatus = function (){

        $scope.data.status = $scope.data.status+1;
        $scope.data.modifiedBy = $scope.user;

    	$http.put('http://api.janevski.info/api/ServisItems/'+ $scope.id, $scope.data).success(function(data){

    		toastr.success('Успешно променет статус');
                $location.path('/main');

    	}).error(function(data){
    		toastr.error('Статусот не е променет');
    	});


    }

    $scope.save = function (){

        $scope.data.modifiedBy = $scope.user;

        $http.put('http://api.janevski.info/api/ServisItems/'+ $scope.id, $scope.data).success(function(data){

            toastr.success('Успешно зачувани промени');
                $location.path('/main');

        }).error(function(data){
            toastr.error('Промените не се зачувани');
        });


    }

    });