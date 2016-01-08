'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('HeaderCtrl', function($scope,$rootScope, $location, localStorageService) {



        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.isAdmin = false;

        var authData = localStorageService.get('authorizationData');

        if (authData) {
            $rootScope.username = authData.userName; 

            if($rootScope.username == "bobi"){
            	$scope.isAdmin = true;
            	$rootScope.role = "Админ"
            } else {
            	$scope.isAdmin = false;
            	$rootScope.role = "Корисник"
            }

        }

    });
