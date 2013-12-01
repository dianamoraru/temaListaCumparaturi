var shoppingControllers = angular.module('shoppingControllers', []);
var uid = 6;

shoppingControllers.factory('productFactory',function(){
  var products=[
  {'id':0,'list':'Lista1','checked':false,'name':'Lapte','description':'2 litri','category':'Alimentare'},
  {'id':1,'list':'Lista1','checked':false,'name':'Ciocolata','description':'3 tablete','category':'Alimentare'},
  {'id':2,'list':'Lista1','checked':false,'name':'Crema','description':'','category':'Nealimentare'},

   {'id':3,'list':'Lista2','checked':false,'name':'Margarina','description':'','category':'Alimentare'},
  {'id':4,'list':'Lista2','checked':false,'name':'Mancare pisica','description':'3 Kg','category':'Hrana Animale'},
  {'id':5,'list':'Lista2','checked':false,'name':'Uscator par','description':'','category':'Electronice'}
  ];
  var factory={};
    factory.getProducts=function(){
      return products;
  }
  return factory;
});

shoppingControllers.factory('categoriesFactory',function(){
  
  var categories=["Alimentare", "Nealimentare","Hrana Animale","Produse Copii","Electronice"];
  var factory={};
  factory.getCategories=function(){
    return categories;
  }
  return factory;
});

shoppingControllers.factory('listsFactory',function(){
  var lists=['Lista1','Lista2'];
  var factory={};
   factory.getLists=function(){
    return lists;
  }
  return factory;

});

shoppingControllers.controller('ProductController', function($window,$scope,productFactory,categoriesFactory,listsFactory) {
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
    };
  };

  $scope.addList=function(){
    $scope.lists.push($scope.newList);
    $scope.newList='';
  };


  $scope.editProduct=function(id){
    $scope.displayAddProduct=true;
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
      };
    };
  };
  
  $scope.products = productFactory.getProducts();
  $scope.categories=categoriesFactory.getCategories();
  $scope.lists = listsFactory.getLists();
  
});