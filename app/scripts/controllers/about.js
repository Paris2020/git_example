'use strict';

/**
 * @ngdoc function
 * @name gitExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gitExampleApp
 */
angular.module('gitExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
