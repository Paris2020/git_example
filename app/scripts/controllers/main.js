'use strict';

/**
 * @ngdoc function
 * @name gitExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitExampleApp
 */
angular.module('gitExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
