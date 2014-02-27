'use strict';

riffyApp.controller('ProfileController', function($scope, $routeParams, loginService){
  console.log(loginService.user);
  $scope.user = loginService.user;
});