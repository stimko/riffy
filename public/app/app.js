'use strict';

var riffyApp = angular.module('riffyApp', [
  'ngRoute',
  'ngResource'
]).
config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl:'/partials/login/login', controller:'LoginController'});
  $routeProvider.when('/profile/:username', {templateUrl:'/partials/profile/profile', controller:'ProfileController'});
});
