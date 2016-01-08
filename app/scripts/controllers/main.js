'use strict';

/**
 * @ngdoc function
 * @name servisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the servisApp
 */
angular.module('servisApp')
    .controller('MainCtrl', function($scope, $http, $route, authService, $location) {


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

            }).
            error(function(data, status) {

            });

            

        $scope.viewItem = function (id){
            console.log(id);
                $location.path('/viewItem/'+id);
        }

    	// $scope.isLoaded = false;

     //    $scope.save = function(item) {
     //        item.imei = parseInt(item.imei);
     //        item.isFinished = 0;

     //        console.log(item);

     //        $http.post('http://api.janevski.info/api/ServisItems', item).
     //        success(function(data) {
     //            $scope.data = data;
     //        }).
     //        error(function(data, status) {});
     //    }

     //    $scope.cancel = function () {
     //    	$route.reload();
     //    }

     //    $http.get('http://api.janevski.info/api/ServisItems?param=model').
     //    success(function(data) {
     //        $scope.models = data;

     //        $http.get('http://api.janevski.info/api/ServisItems?param=type').
     //        success(function(data) {
     //            $scope.types = data;
     //            $scope.isLoaded = true;
     //        }).
     //        error(function(data, status) {

     //        });
     //    }).
     //    error(function(data, status) {
     //    	if (status == 401){
     //    		authService.logOut();
     //    	}
     //    });


    });