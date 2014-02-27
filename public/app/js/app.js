'use strict';

var riffyApp = angular.module('riffyApp', [
  'ngRoute',
  'ngResource'
]).
config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl:'/partials/login', controller:'LoginController'});
  $routeProvider.when('/profile/:username', {templateUrl:'/partials/profile', controller:'ProfileController'});
});
