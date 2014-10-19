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
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };

  });
