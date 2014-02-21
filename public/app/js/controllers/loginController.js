'use strict';

riffyApp.controller('LoginController', function($scope){
  $scope.login = function(user, loginForm){
    if (loginForm.$valid) {
      loginService.submit(user);      
    }
  }
});
