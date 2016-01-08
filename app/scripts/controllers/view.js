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

        
        $scope.exportData = function () {
            alasql('SELECT id as ID, fname as Ime, lname as Prezime, tel as Telefon, type as Tip, model as Model, issue as Problem, price as Cena, imei as IMEI, status as Status INTO XLSX("Report.xlsx",{headers:true}) FROM ?',[$scope.data]);
        };
    });