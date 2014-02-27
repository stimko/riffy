'use strict';

riffyApp.controller('PlaylistController', function($scope, $routeParams, loginService){
  $scope.playTrack = function(trackId){
     console.log(trackId);
  };
});