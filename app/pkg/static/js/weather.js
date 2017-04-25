var search = angular.module('weather', ['ngRoute'])

  .controller('MainController', function($scope, $route, $routeParams) {
    $scope.$route = $route;
    $scope.$routeParams = $routeParams;
  })

  .controller('SearchController', function($scope, $route, $routeParams) {
  
  })

  .controller('CityController', function($scope, $routeParams) {

  })

  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/search', {
      templateUrl: 'search.html',
      controller: 'SearchController',
    }).when('/city/:cityId', {
      templateUrl: 'city.html',
      controller: 'CityController'
    });

  });
