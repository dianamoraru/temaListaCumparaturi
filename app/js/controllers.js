var shoppingControllers = angular.module('shoppingControllers', []);
var uid = 0;

shoppingControllers.factory('productFactory',function(){
  var products=[];
  var factory={};
   factory.getProducts=function(){
    return products;
  }
  return factory;
});

shoppingControllers.factory('categoriesFactory',function(){
  
   var categories=["Alimentare", "Nealimentare",
   "Hrana Animale","Produse Copii","Electronice"];
  var factory={};
  factory.getCategories=function(){
    return categories;
  }
  return factory;
});

shoppingControllers.factory('listFactory',function(){
  var lists=[];
  var factory={};
   factory.getLists=function(){
    return lists;
  }
  return factory;

});


shoppingControllers.controller('ProductController', function($window,$scope,productFactory,categoriesFactory,listFactory) {
  $scope.addProduct=function(){
    if($scope.newProduct.name==""||$scope.newProduct.name==null){
       $window.alert('Numele produsului este obligatoriu!');
    }else{
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
     var lista=$scope.newProduct.list;
     $scope.newProduct={};
     $scope.newProduct.category='Alimentare';
     $scope.newProduct.list=lista;
    }
  };

  $scope.addList=function(){
    $scope.lists.push($scope.newList);
    $scope.newList='';
    
  };


  $scope.editProduct=function(id){
    for(i in $scope.products){
      if ($scope.products[i].id==id) {

      $scope.newProduct=angular.copy($scope.products[i]);
      };
    };
  };
  $scope.removeProduct=function(){

    i=$scope.products.length;
    while(i--){
      if ($scope.products[i].checked==true) {
        $scope.products.splice(i, 1);
      }
    }
  };
$scope.products = productFactory.getProducts();
$scope.categories=categoriesFactory.getCategories();
$scope.lists = listFactory.getLists();
  
});