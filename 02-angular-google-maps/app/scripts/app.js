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
    'ngRoute',
    'google-maps'.ns()
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
  })
  .config(['GoogleMapApiProvider'.ns(), function (GoogleMapApi) {
    GoogleMapApi.configure({
      //    key: 'your api key',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  }])

  ;
