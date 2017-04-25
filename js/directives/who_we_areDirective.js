var app = angular.module('customPage');

app.directive('who_we_are', function() {
    return {
      restrict: 'E', //puede ser 'A' o 'AE'
      templateUrl: 'js/templates/ruben.html'
    }
  });
  