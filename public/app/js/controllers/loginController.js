'use strict';

riffyApp.controller('LoginController', function($scope, loginService){
  $scope.login = function(user, loginForm){
    if (loginForm.$valid) {
      loginService.login(user);      
    }
  }
});
