var app = angular.module('customPage');

app.service('specialityService', function($http, $q) {

  var text = {};

  var deferred = $q.defer();
  $http.get('js/json/specialityJson.json').then(function(data) {
      deferred.resolve(data);
  });
  this.getText = function(){
      return deferred.promise;
  };

});
