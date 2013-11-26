var shoppingControllers = angular.module('shoppingControllers', []);
var uid = 0;

shoppingControllers.controller('ListController', function($scope) {
   $scope.lists = [];
   $scope.addList=function(){
	 $scope.lists.push($scope.newList);
   $scope.lists = productFactory.getLists();

   }

});
shoppingControllers.factory('productFactory',function(){
  var products=[];
  var newProduct=[];
  var factory={};
   factory.getProducts=function(){
    return products;
  }
  return factory;

});
shoppingControllers.factory('listFactory',function(){
  var lists=[];
  var factory2={};
   factory.getLists=function(){
    return lists;
  }
  return factory2;

});


shoppingControllers.controller('ProductController', function($scope,productFactory) {
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
    for(i in $scope.products){
      if ($scope.products[i].id===id) {

      $scope.newProduct=angular.copy($scope.products[i]);
      };
    };
  };
  $scope.removeProduct=function(){

    i=$scope.products.length;
    while(i--){
      if ($scope.products[i].checked===true) {
        $scope.products.splice(i, 1);
      }
    }
  };
$scope.products = productFactory.getProducts();

  
});
