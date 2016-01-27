'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:ResetpassCtrl
 * @description
 * # ResetpassCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('ResetpassCtrl', ['$scope', '$location', '$timeout', 'authService','localStorageService','toastr','$http', function ($scope, $location, $timeout, authService, localStorageService, toastr, $http) {

    $scope.user = localStorageService.get('authorizationData').userName;

    if($scope.user != 'bobi'){
            $location.path('/main');
    }


    $http.get('http://api.janevski.info/api/AspNetUsers').
            success(function(data) {
                $scope.users = data;

            }).
            error(function(data, status) {

            });




     $scope.reset = function(){

     	//http://api.janevski.info/api/Account/ResetPass?username=

     	$http.post('http://api.janevski.info/api/Account/ResetPass?username=' + $scope.forUser).success(function(data) {

                toastr.success('Успешно рестартирана лозинка, моменталната лозинка е "lozinka"');

            }).error(function(data) {
                toastr.error('Се појави грешка, пробајте повторно');
            });


     }





  }]);
