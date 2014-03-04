riffyApp.factory('loginService', function($http, $location){
  return {
    login: function(user){
      $http.post('/login', {username:user.username, password:user.password}).then(function(response){
        if (response.data.success){
          console.log('logged in');
          this.user = user;
          $location.path('profile/' + user.username);
        }
        else console.log('FAIL');
      });
    }
  };
});