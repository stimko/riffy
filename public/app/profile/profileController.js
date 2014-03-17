'use strict';

riffyApp.controller('ProfileController', function($scope, $routeParams, $location, identity){
  $scope.user = identity.currentUser;
});