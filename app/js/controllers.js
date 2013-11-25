'use strict';

/* Controllers */

var shoppingControllers = angular.module('shoppingControllers', []);
var uid=0;

shoppingControllers.factory('productFactory',function(){
	var products=[];
	var newProduct=[];
	var factory={};

	

	factory.getProducts=function(){
		return products;
	}
	// factory.setProdcut=function(i){
	// 	return newProduct=products[i];
	// }
	return factory;

});

// shoppingControllers.controller('ListController', function($scope) {
//    $scope.lists = ['L1','L2'];
//    $scope.addList=function(){
// 	 $scope.lists.push($scope.newList);
//    }

// });

shoppingControllers.controller('ProductController', function($scope,$location,productFactory) {
	$scope.addProduct=function(){
    	if($scope.newProduct.id==null){
    		$scope.newProduct.checked=false;
    		$scope.newProduct.id=uid++;
    		$scope.products.push($scope.newProduct);
    	}else{
    		for(i in $scope.products){
    			if($scope.products[i].id==$scope.newProduct.id){
    				$scope.products[i]=$scope.newProduct;
    			};
    		};
    	};
     $scope.newProduct={};
	};

	$scope.editProduct=function(id){
		$location.path('/adauga');
		for(i in $scope.products){

			if ($scope.products[i].id===id) {

				$scope.newProduct=angular.copy($scope.products[i]);
				// $scope.newProduct=copy(factory.newProduct(i));
			};
		};
	};

	$scope.removeProduct=function(){
	
	 	angular.forEach($scope.products, function (product, index) {
	 		
	 		if(product.checked===true){
	 			var index = $scope.products.indexOf(product);
				$scope.products.splice(index, 1);

	 		};
	 	});
     };

	$scope.products = productFactory.getProducts();
});

// {'name':'P1','description':'D1'},{'name':'P2','description':'D2'}
