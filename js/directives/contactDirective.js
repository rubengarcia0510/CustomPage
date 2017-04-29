var app = angular.module('customPage');

app.directive('contactDirective', function(contactService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/contactDirective.html',
    controller : function ($scope,$timeout){
      setTimeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      }, 10);
      vm = this;
      vm.textList = {};
      var promise = contactService.getText();
      promise.then(function(data) {
          vm.textList = data.data;
      });
	  $scope.contactControllerVm = vm;
    }
  }
});
