'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ReportsCtrl
 * @description
 * # ReportsCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('ReportsCtrl', function ($scope, $http) {

  	$scope.checkboxModel = {
  		'signIn':false,
		'servis':false,
		'back':false,
		'finished':false
  	};

  	$scope.date1 = new Date();
  	$scope.date2 = new Date();


  	$scope.create = function(){

  	$scope.finishData = [];
  		$http.get('http://api.janevski.info/api/ServisItems').
            success(function(data) {
               
               if ($scope.checkboxModel.signIn == true) {
               		for (var i = 0; i < data.length; i++) {
               			if(data[i].status == 1) {
               				$scope.finishData.push(data[i]);
               			}
               		};
               };

                if ($scope.checkboxModel.servis == true) {
               		for (var i = 0; i < data.length; i++) {
               			if(data[i].status == 2) {
               				$scope.finishData.push(data[i]);
               			}
               		};
               };

                if ($scope.checkboxModel.back == true) {
               		for (var i = 0; i < data.length; i++) {
               			if(data[i].status == 3) {
               				$scope.finishData.push(data[i]);
               			}
               		};
               };

                if ($scope.checkboxModel.finished == true) {
               		for (var i = 0; i < data.length; i++) {
               			if(data[i].status == 4) {
               				$scope.finishData.push(data[i]);
               			}
               		};
               };

               for (var i = 0; i < $scope.finishData.length; i++) {
               	if($scope.finishData[i].date1 > $scope.date1 && $scope.finishData[i].date1 < $scope.date2){
               		
               	}
               };

               console.log($scope.finishData);

               for (var i = 0; i < $scope.finishData.length; i++) {
                if($scope.finishData[i].status == 1) {
                    $scope.finishData[i].status = 'Прием';
                } else if ($scope.finishData[i].status == 2) {
                    $scope.finishData[i].status = 'На сервис';
                } else if ($scope.finishData[i].status == 3) {
                    $scope.finishData[i].status = 'Вратен од сервис';
                } else if ($scope.finishData[i].status == 4) {
                    $scope.finishData[i].status = 'Завршено';
                }
            };

            alasql('SELECT id as ID, fname as Ime, lname as Prezime, tel as Telefon, type as Tip, model as Model, issue as Problem, price as Cena, imei as IMEI, status as Status INTO XLSX("IzvestajZavrseni.xlsx",{headers:true}) FROM ?',[$scope.finishData]);


            }).
            error(function(data, status) {

            });
  	}

  });
