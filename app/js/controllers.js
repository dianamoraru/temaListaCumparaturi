'use strict';

/* Controllers */

var shoppingControllers = angular.module('shoppingControllers', []);
var uid=0;

shoppingControllers.factory('productFactory',function(){
	var products=[];
	var factory={};

	

	factory.getProducts=function(){
		return products;
	}
	return factory;

});

shoppingControllers.controller('ListController', function($scope) {
   $scope.lists = ['L1','L2'];
   $scope.addList=function(){
	 $scope.lists.push($scope.newList);
   }

});
shoppingControllers.controller('ProductController', function($scope,productFactory) {

	$scope.addProduct=function(){
    	if($scope.newProduct.id==null){
    		$scope.newProduct.id=uid++;
    		$scope.products.push($scope.newProduct);
    	}else{
    		for(i in $scope.products){
    			if($scope.products[i].id==$scope.newProduct.id){
    				$scope.products[i]=$scope.newProduct;
    			}
    		}
    	}
     $scope.newProduct={};
	}
	$scope.editProduct=function(id){
		$location.path("href='#/adauga'");
		for(i in $scope.products){
			if ($scope.products[i].id===id) {
				$scope.newProduct=angular.copy($scope.products[i]);
			};
		}
	}

$scope.products = productFactory.getProducts();
    

});
// {'name':'P1','description':'D1'},{'name':'P2','description':'D2'}
