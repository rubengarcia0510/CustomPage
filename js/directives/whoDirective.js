var app = angular.module('customPage');

app.directive('whoDirective', function(whoService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/whoDirective.html',
    controller : function ($scope,$timeout){
	  vm = this;
      vm.textList = {};
      var promise = whoService.getText();
      promise.then(function(data) {
          vm.textList = data.data;
      });
	  $scope.aboutControllerVm = vm;
    }
  }
});
  