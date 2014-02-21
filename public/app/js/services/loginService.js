riffyApp.factory('loginService', function($http){
  return {
    login: function(){
     $http({method: 'GET', url:'/login'}).
        success(function(data, status, headers, config) {
          successcb(data)
        }).
        error(function(data, status, headers, config){
          $log.warn(data, status, headers, config)  
        });
    }
  };
});