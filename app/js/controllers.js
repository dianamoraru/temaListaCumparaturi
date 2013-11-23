var listApp = angular.module('listApp', []);
var uid = 1;

listApp.controller('ListController', function($scope) {
   $scope.lists = ['L1','L2'];
   $scope.addList=function(){
	 $scope.lists.push($scope.newList);
   }

});
listApp.controller('ProductController', function($scope) {
   $scope.products = [{id:0,'name': 'P1','description':'D1'}];
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
		for(i in $scope.products){
			if ($scope.products[i].id===id) {
				$scope.newProduct=angular.copy($scope.products[i]);
			};
		}
	}


});

