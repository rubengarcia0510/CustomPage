var app = angular.module('customPage');

app.directive('slickDirective', function($window,$compile){
  return {
    restrict: "E",
    templateUrl: 'js/templates/slickDirective.html',
    controller : function ($scope,$timeout){
      $timeout(function () {
        $('.slick-coffe').slick({
          dots: true,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
           {
             breakpoint: 768,
             settings: {
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 2
             }
           },
           {
             breakpoint: 480,
             settings: {
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 1
             }
           }]
        });
      }, 0);
    }
  }
});
