var app = angular.module('customPage');

app.directive('speciality', function(specialityService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/specialityDirective.html',
    controller : function ($scope,$timeout){
      setTimeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      }, 10);
      $scope.textList = {};
      var promise = specialityService.getText();
      promise.then(function(data) {
          $scope.textList = data.data;
      });
    }
  }
});
