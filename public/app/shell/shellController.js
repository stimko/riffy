'use strict';

riffyApp.controller('ShellController', function($scope, $location, loginService, identity){
  $scope.identity = identity;
  $scope.logout =  function(){loginService.logout().then(function(success){
    if(success){
       $location.path('/');
    }
  }
  )};
});