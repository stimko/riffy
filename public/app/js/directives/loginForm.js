'use strict';

riffyApp.directive("loginForm", function(){
  return {
    templateURL: '/views/directives/loginForm',
    link: function(scope, element, attrs, controller){
      console.log(angular.element(element));
    }
  };
});