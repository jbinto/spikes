'use strict';

/**
 * @ngdoc function
 * @name 02AngularGoogleMapsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 02AngularGoogleMapsApp
 */
angular.module('02AngularGoogleMapsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = {
      center: {
        latitude: 43.6,
        longitude: -79.3
      },
      zoom: 8
    };

    $scope.kml = {
      show: true,
      options: {
        url: 'http://staging.416.bike/bikeways/7072.kml'
      }
    };

  });
