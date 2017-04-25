var app = angular.module('customPage');

app.directive('whoDirective', function(whoService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/whoDirective.html',
    controller : function ($scope,$timeout){
      setTimeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      }, 10);
      $scope.textList = {};
      var promise = whoService.getText();
      promise.then(function(data) {
          $scope.textList = data.data;
      });
    }
  }
});
