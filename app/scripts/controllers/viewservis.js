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

        $scope.exportData = function () {

            for (var i = 0; i < $scope.data.length; i++) {
                if($scope.data[i].status == 1) {
                    $scope.data[i].status = 'Прием';
                } else if ($scope.data[i].status == 2) {
                    $scope.data[i].status = 'На сервис';
                } else if ($scope.data[i].status == 3) {
                    $scope.data[i].status = 'Вратен од сервис';
                } else if ($scope.data[i].status == 4) {
                    $scope.data[i].status = 'Завршено';
                }
            };

            alasql('SELECT id as ID, fname as Ime, lname as Prezime, tel as Telefon, type as Tip, model as Model, issue as Problem, price as Cena, imei as IMEI, status as Status INTO XLSX("IzvestajServis.xlsx",{headers:true}) FROM ?',[$scope.data]);
        };

    });