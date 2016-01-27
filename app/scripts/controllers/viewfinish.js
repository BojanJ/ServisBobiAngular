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


        $scope.signIn = 0;
        $scope.servis = 0;
        $scope.back = 0;
        $scope.finished = 0;


        $http.get('http://api.janevski.info/api/ServisItems').
            success(function(data) {
                $scope.data = data;

                for (var i = data.length - 1; i >= 0; i--) {
                    if(data[i].status == 1) {
                        $scope.signIn ++;
                    } else 

                    if(data[i].status == 2) {
                        $scope.servis ++;
                    } else 

                    if(data[i].status == 3) {
                        $scope.back ++;
                    } else 

                    if(data[i].status == 4) {
                        $scope.finished ++;
                    }
                };

        $scope.groupedData = [
            {'signIn': $scope.signIn,
            'servis': $scope.servis,
            'back': $scope.back,
            'finished': $scope.finished}
        ];

            }).
            error(function(data, status) {

            });



        $scope.exportgroupedData = function () {
            alasql('SELECT signIn as Primeni, servis as NaServis, back as VrateniOdServis, finished as Zavrsheni INTO XLSX("IzvestajVkupen.xlsx",{headers:true}) FROM ?',[$scope.groupedData]);
        };

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

            alasql('SELECT id as ID, fname as Ime, lname as Prezime, tel as Telefon, type as Tip, model as Model, issue as Problem, price as Cena, imei as IMEI, status as Status INTO XLSX("IzvestajZavrseni.xlsx",{headers:true}) FROM ?',[$scope.data]);
        };

    });