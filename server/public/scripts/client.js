var myApp = angular.module('myApp', ['ngRoute']);
console.log('in client');


myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'home'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'CSVController as vm',
    })
}]);
