'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ChangepassCtrl
 * @description
 * # ChangepassCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('ChangepassCtrl', ['$scope', '$location', '$timeout', 'authService','localStorageService','toastr','$http', function ($scope, $location, $timeout, authService, localStorageService, toastr, $http) {

    $scope.user = localStorageService.get('authorizationData').userName;

     $scope.change = function(){

     	var sendData = {};

  		sendData.UserName = $scope.user;
  		sendData.oldPassword = $scope.oldPass;
  		sendData.newPassword = $scope.newPass;


     	$http.post('http://api.janevski.info/api/Account/ChangePass?username=' + $scope.user, sendData).success(function(data) {

                toastr.success('Успешно променета лозинка.');

            }).error(function(data) {
                toastr.error('Се појави грешка, пробајте повторно');
            });

     }

  }]);
