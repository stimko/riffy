'use strict';

riffyApp.controller('ProfileController', function($scope, $routeParams, $location, identity){
  if (identity.currentUser){
    $scope.user = identity.currentUser;
  } else {
    $location.path('/');
  }
});