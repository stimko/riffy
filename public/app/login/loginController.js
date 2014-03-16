'use strict';

riffyApp.controller('LoginController', function($scope, $location, identity, loginService){
  $scope.identity = identity;
  if (identity.isAuthenticated()){
    $location.path('profile/' + identity.currentUser.username);
  } else {
    $scope.login = function(user, loginForm){
      if (loginForm.$valid) {
        loginService.login(user.username, user.password).then(function(success){
          if (success){
            $location.path('profile/' + user.username);
          }
          else {
            console.log('FAIL');
          }
        });
      }
    }
  }
});
