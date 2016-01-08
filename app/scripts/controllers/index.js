'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('IndexCtrl', ['$scope', '$location', 'authService', 'localStorageService', function ($scope, $location, authService, localStorageService) {
 	
  	$scope.isLogin = function (){
  		if($location.path() == '/') {
  			return false;
  		} else {
  			return true;
  		}
  	}

    $scope.isLogged = function (){
      if(localStorageService.get('authorizationData')){
        $scope.user = localStorageService.get('authorizationData').userName;
        return true;
      } else {
        return false;
      }
    }

    $scope.isLogged();

    $scope.logOut = function () {
        authService.logOut();
        $location.path('/');
    }
 
    $scope.authentication = authService.authentication;
 
}]);