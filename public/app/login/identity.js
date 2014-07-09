'use strict';

riffyApp.factory('identity', function($window, userResource){
  var currentUser;
  if(!!$window.bootstrappedUserObject){
    currentUser = new userResource();
    angular.extend(currentUser, $window.bootstrappedUserObject);
  }
  return {
   currentUser: currentUser,
   isAuthenticated: function(){
     return !!this.currentUser;
   }
  };
});