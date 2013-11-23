'use strict';

/* App Module */

var shoppingApp = angular.module('shoppingApp', [
  'ngRoute',
  'shoppingControllers'
]);

shoppingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/products-list.html',
        controller: 'ProductController'
      }).
      when('/adauga', {
        templateUrl: 'partials/adauga-produs.html',
        controller: 'ProductController'
      }).
      otherwise({
        redirectTo: '/products'
      });
  }]);

