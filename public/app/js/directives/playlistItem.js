'use strict';

riffyApp.directive("playlistItem", function(){
  return {
    templateURL: '/views/partials/playlist',
    link: function(scope, element, attrs, controller){
      console.log(angular.element(element));
    }
  };
});