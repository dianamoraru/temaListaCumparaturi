'use strict';

/* Controllers */

var shoppingControllers = angular.module('shoppingControllers', []);

shoppingControllers.controller('ListController', function($scope) {
   $scope.lists = ['L1','L2'];
   $scope.addList=function(){
	 $scope.lists.push($scope.newList);
   }

});
shoppingControllers.controller('ProductController', function($scope) {
   $scope.products = ['P1','P2'];
   $scope.addProduct=function(){
	 $scope.products.push($scope.newProduct);
   }
});
// {'name':'P1','description':'D1'},{'name':'P2','description':'D2'}
