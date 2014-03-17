'use strict';

riffyApp.factory('loginService', function($http, $q, userResource, identity){
  return {
    login: function(username, password){
      var dfd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response){
        if (response.data.success){
          var user = new userResource();
          angular.extend(user, response.data.user)
          identity.currentUser = user;
          dfd.resolve(true);
        }
        else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    },
    logout: function(){
      var dfd = $q.defer();
      $http.post('/logout', {logout:true}).then(function(){
       identity.currentUser = undefined;
       dfd.resolve(true);
      });
      return dfd.promise;
    }
  };
});