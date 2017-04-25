var app = angular.module('customPage');
app.controller('aboutController',function(){
  var vm = this;
  vm.selected = 0;
  vm.test = whoService.test;

});
