'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:InsertCtrl
 * @description
 * # InsertCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('InsertCtrl', function($scope, $http, toastr, $location, localStorageService) {

    	$scope.user = localStorageService.get('authorizationData').userName;

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

        $scope.data = {};

        $scope.save = function() {

            $scope.data.status = 1;
            $scope.data.createdBy = $scope.user;

            $http.post('http://api.janevski.info/api/ServisItems', $scope.data).success(function(data) {

                toastr.success('Успешно зачувани запис');
                $location.path('/main');

            }).error(function(data) {
                toastr.error('Записот не е зачуван');
            });


        }




    });