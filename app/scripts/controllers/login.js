'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('LoginCtrl', ['$scope', '$location', 'authService','localStorageService', 'toastr',
        function($scope, $location, authService, localStorageService, toastr) {

            $scope.loginData = {
                userName: "",
                password: ""
            };


            $scope.message = "";

            $scope.isLogged = function() {
                if (localStorageService.get('authorizationData')) {
                    $location.path('/main');
                    return true;
                } else {
                    return false;
                }
            }

            $scope.isLogged();

            $scope.submit = function() {

                authService.login($scope.loginData).then(function(response) {

                        $location.path('/main');
                        toastr.success("Успешно се најавивте");

                    },
                    function(err) {
                        toastr.error(err.error_description);
                    });
            };

        }
    ]);