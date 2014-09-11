'use strict';

angular.module('meanstore')
  .controller('itemsControl', function ($scope, $location, itemsService, cartItemsService, cartItemService) {

    $scope.createItem = function() {
    	$location.path('/meanstoreAdmin/new');
    };
    $scope.newItem = function(item) {
    	itemsService.create(item);
    	$location.path('/meanstoreAdmin/list');
    };

    $scope.items = itemsService.query();

    $scope.addItemToCart = function(item) {
      var newCartItem = {
        name: item.name,
        price: item.price,
        description: item.description,
        reviews: item.reviews
      };
      cartItemsService.create(newCartItem);
      $location.path('/meanstore/cartlist');
    };

    $scope.removeItemFromCart = function(){
      cartItemService.delete({ id : item._id });
      $location.path('/meanstore/cartlist');
    };

    $scope.cartItems = cartItemsService.query();

    $scope.backToStore = function () {
      $location.path('/meanstore/list');
    };

  })
  .controller('itemControl', function($scope, $location, $routeParams, itemService, cartItemService) {

  	$scope.item = itemService.show({ id: $routeParams.id });
  	
    $scope.delete = function() { 
  		itemService.delete({ id: $routeParams.id });
  		$location.path('/meanstoreAdmin/list');
  	};
  	$scope.edit = function() {
  		itemService.edit($scope.item);
  		$location.path('/meanstoreAdmin/list');
  	};

  });