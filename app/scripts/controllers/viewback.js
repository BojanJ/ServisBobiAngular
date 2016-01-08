'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ViewbackCtrl
 * @description
 * # ViewbackCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('ViewbackCtrl', function($scope, $http, $route, authService, $location) {

        $http.get('http://api.janevski.info/api/ServisItems?type=3').
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