'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('AboutCtrl', function($scope, $http, $location) {
        $http.get('http://api.janevski.info/api/ServisItems').
        success(function(data) {
            $scope.data = data;
            $scope.isLoaded = true;
        }).
        error(function(data, status) {

        });

        $scope.edit = function(id) {
            $location.path('/view/' + id)
        }


    });