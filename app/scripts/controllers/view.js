'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('ViewCtrl', function($routeParams, $scope, $http) {

        $scope.id = $routeParams.id;
        $scope.isLoaded = false;
        $http.get('http://api.janevski.info/api/ServisItems/' + $scope.id).
        success(function(data) {
            $scope.viewData = data;
            $scope.isLoaded = true;
        }).
        error(function(data, status) {

        });

    });