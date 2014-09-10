'use strict';

angular.module('meanstore')
  .controller('itemsControl', function ($scope, $location, itemsService) {

    $scope.createItem = function() {
    	$location.path('/meanstoreAdmin/new');
    };
    $scope.newItem = function(item) {
    	itemsService.create(item);
    	$location.path('/meanstoreAdmin/list');
    };
    $scope.items = itemsService.query();
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

  })
   .controller('shopItemsControl', function ($scope, $location, shopItemsService) {

    $scope.addItemToCart = function(item) {
      shopItemsService.create(item);
      $location.path('/meanstoreAdmin/list');
    };
    $scope.cartItems = cartItemService.query();
  });