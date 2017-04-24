var app = angular.module('customPage');

app.directive('who_we_are', function(whoService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/who_we_areDirective.html',
    controller : function ($scope,$timeout){
		/*
      setTimeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      }, 10);*/
      $scope.textList = {};
      var promise = whoService.getText();
      promise.then(function(data) {
          $scope.textList = data.data;
      });
    }
  }
});
