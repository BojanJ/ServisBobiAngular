'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
  .controller('RegisterCtrl', ['$scope', '$location', '$timeout', 'authService','localStorageService','toastr','$http', function ($scope, $location, $timeout, authService, localStorageService, toastr, $http) {

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



    $scope.savedSuccessfully = false;
    $scope.message = "";

    $scope.registration = {
        userName: "",
        password: "",
        confirmPassword: ""
    };

    $scope.signUp = function () {

        authService.saveRegistration($scope.registration).then(function (response) {

            $scope.savedSuccessfully = true;
            toastr.success('Успешно креиран корисник, ќе бидете пренасочени кон страната за најава');
            // $scope.message = "Успешно креиран корисник, ќе бидете пренасочени кон страната за најава";
            startTimer();

        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
            toastr.error("Грешка: " + errors.join(' '));
             // $scope.message = "Грешка: " + errors.join(' ');
         });
    };

    var startTimer = function () {
        var timer = $timeout(function () {
            $timeout.cancel(timer);
            $location.path('/login');
        }, 2000);
    }

}]);