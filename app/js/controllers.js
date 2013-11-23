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
   $scope.products = [{'name':'P1','list':'L1'},{'name':'P2','list':'L2'}];
});


