'use strict';

/**
 * @ngdoc overview
 * @name servisApp
 * @description
 * # servisApp
 *
 * Main module of the application.
 */
angular
    .module('servisApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angular-loading-bar',
        'LocalStorageModule',
        'toastr',
        'mgcrea.ngStrap',
        'angularUtils.directives.dirPagination',
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })
            .when('/view/:id', {
                templateUrl: 'views/view.html',
                controller: 'ViewCtrl',
                controllerAs: 'view'
            })
            .when('/viewServis', {
                templateUrl: 'views/viewservis.html',
                controller: 'ViewservisCtrl',
                controllerAs: 'viewServis'
            })
            .when('/viewIn', {
                templateUrl: 'views/viewin.html',
                controller: 'ViewinCtrl',
                controllerAs: 'viewIn'
            })
            .when('/viewBack', {
                templateUrl: 'views/viewback.html',
                controller: 'ViewbackCtrl',
                controllerAs: 'viewBack'
            })
            .when('/viewFinish', {
                templateUrl: 'views/viewfinish.html',
                controller: 'ViewfinishCtrl',
                controllerAs: 'viewFinish'
            })
            .when('/insert', {
                templateUrl: 'views/insert.html',
                controller: 'InsertCtrl',
                controllerAs: 'insert'
            })
            .when('/viewItem/:Id', {
                templateUrl: 'views/viewitem.html',
                controller: 'ViewitemCtrl',
                controllerAs: 'viewItem'
            })
            .when('/edititem/:Id', {
                templateUrl: 'views/edititem.html',
                controller: 'EdititemCtrl',
                controllerAs: 'edititem'
            })
            .when('/print/:Id', {
              templateUrl: 'views/print.html',
              controller: 'PrintCtrl',
              controllerAs: 'print'
            })
            .when('/printitem/:Id', {
              templateUrl: 'views/printitem.html',
              controller: 'PrintitemCtrl'
            })
            .when('/reports', {
              templateUrl: 'views/reports.html',
              controller: 'ReportsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(['authService',
        function(authService) {
            authService.fillAuthData();
        }
    ])
    .config(function(toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: true,
            timeOut: 2000,
            positionClass: 'toast-bottom-right'
        });
    })
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    })
    .config(function($modalProvider) {
        angular.extend($modalProvider.defaults, {
            animation: 'am-flip-x',
            html: true
        });
    })
    .config(['cfpLoadingBarProvider',
        function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
            cfpLoadingBarProvider.latencyThreshold = 100;
        }
    ])
    .config(function($datepickerProvider) {
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'dd/MM/yyyy',
            autoclose: true
        });
    });