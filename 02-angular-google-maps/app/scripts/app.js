'use strict';

/**
 * @ngdoc overview
 * @name 02AngularGoogleMapsApp
 * @description
 * # 02AngularGoogleMapsApp
 *
 * Main module of the application.
 */
angular
  .module('02AngularGoogleMapsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
