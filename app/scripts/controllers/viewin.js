'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ViewinCtrl
 * @description
 * # ViewinCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('ViewinCtrl', function($scope, $http, $route, authService, $location) {

        $http.get('http://api.janevski.info/api/ServisItems?type=1').
        success(function(data) {
            $scope.data = data;

        }).
        error(function(data, status) {

        });

        $scope.viewItem = function(id) {
            console.log(id);
            $location.path('/viewItem/' + id);
        }


            $scope.items = [{
        name: "John Smith",
        email: "j.smith@example.com",
        dob: "1985-10-10"
    }, {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        dob: "1988-12-22"
    }, {
        name: "Jan Smith",
        email: "jan.smith@example.com",
        dob: "2010-01-02"
    }, {
        name: "Jake Smith",
        email: "jake.smith@exmaple.com",
        dob: "2009-03-21"
    }, {
        name: "Josh Smith",
        email: "josh@example.com",
        dob: "2011-12-12"
    }, {
        name: "Jessie Smith",
        email: "jess@example.com",
        dob: "2004-10-12"
    }];


        $scope.exportData = function () {
            alasql('SELECT id as ID, fname as Ime, lname as Prezime, tel as Telefon, type as Tip, model as Model, issue as Problem, price as Cena, imei as IMEI, status as Status INTO XLSX("Report.xlsx",{headers:true}) FROM ?',[$scope.data]);
        };


    });