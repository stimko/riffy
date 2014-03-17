var riffyApp = angular.module('riffyApp', [
  'ngRoute',
  'ngResource'
]).
config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl:'/partials/login/login', controller:'LoginController'});
  $routeProvider.when('/profile/:username', {templateUrl:'/partials/profile/profile', controller:'ProfileController', resolve:{
      auth: function(identity, $q){
        if (identity.isAuthenticated()){
          return true;
        } else {
          return $q.reject("not authenticated");
        }
      }
    }
  });
});

riffyApp.run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(e, current, previous, rejection){
    if(rejection === "not authenticated") {
      $location.path('/');
    }
  });
});
