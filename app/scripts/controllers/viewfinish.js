'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ViewfinishCtrl
 * @description
 * # ViewfinishCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('ViewfinishCtrl', function($scope, $http, $route, authService, $location) {

        $http.get('http://api.janevski.info/api/ServisItems?type=4').
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