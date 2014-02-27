riffyApp.factory('loginService', function($http, $location){
  return {

    login: function(user){
      user.riffs = [
        {
          "id":"1", 
          "name": "song1", 
          "length":"2:30"
        }, 
        {
          "id":"2", 
          "name": "song2", 
          "length": "4:30"
        }
      ];
      this.user = user;
      $location.path('profile/' + user.username);
    }

    // login: function(){
    //  $http({method: 'GET', url:'/login'}).
    //     success(function(data, status, headers, config) {
    //       successcb(data)
    //     }).
    //     error(function(data, status, headers, config){
    //       $log.warn(data, status, headers, config)  
    //     });
    // }
  };
});