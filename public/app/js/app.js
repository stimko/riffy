'use strict';

var riffyApp = angular.module('riffyApp', [
  'ngRoute',
  'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'/partials/login', controller:'LoginController'});
}]);
