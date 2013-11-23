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
    $http.get('connect.php').success(function(data) {
   			$scope.products = data;
   		  });
   $scope.addProduct=function(){
	 $scope.products.push($scope.newProduct);
	 // products.save();
   }
});
// {'name':'P1','description':'D1'},{'name':'P2','description':'D2'}
