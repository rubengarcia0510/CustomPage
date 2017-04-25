var app = angular.module('customPage');

app.directive('who', function(whoService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/whoDirective.html',
    controller : function ($scope,$timeout){
	  var vm = this;
      vm.textList = {};
      var promise = whoService.getText();
      promise.then(function(data) {
		  alert(data.data)
          vm.textList = data.data;
      });
	  vm.test="hola";
	  $scope.vm = vm;
    }
  }
});
  