'use strict';

angular.module('meanstore')
  .controller('itemsControl', function ($scope, $location, itemsService, cartItemsService) {

    $scope.createItem = function() {
    	$location.path('/meanstoreAdmin/new');
    };
    $scope.newItem = function(item) {
    	itemsService.create(item);
    	$location.path('/meanstoreAdmin/list');
    };
    $scope.items = itemsService.query();

    $scope.addItemToCart = function(item) {
      cartItemsService.create(item);
      console.log(item);
      $location.path('/meanstore/cartList');
    };

    $scope.removeItemFromCart = function(item) {
      cartItemsService.delete(item);
      $location.path('/meanstore/cartList');
    };

    $scope.cartItems = cartItemsService.query();

    $scope.backToStore = function () {
      $lcoation.path('/meanstore/list');
    };

  })
  .controller('itemControl', function($scope, $location, $routeParams, itemService) {

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