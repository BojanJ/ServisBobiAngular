'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ViewservisCtrl
 * @description
 * # ViewservisCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('ViewservisCtrl', function($scope, $http, $route, authService, $location) {

        $http.get('http://api.janevski.info/api/ServisItems?type=2').
        success(function(data) {
            $scope.data = data;

        }).
        error(function(data, status) {

        });

        $scope.viewItem = function(id) {
            console.log(id);
            $location.path('/viewItem/' + id);
        }


    });