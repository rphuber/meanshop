'use strict';

angular.module('meanstore')
  .controller('itemsControl', function ($scope, $location, itemsService) {

    $scope.createItem = function() {
    	$location.path('/new');
    };
    $scope.newItem = function(item) {
    	itemsService.create(item)
    	$location.path('/list');
    };
    $scope.items = itemsService.query();
  })
  .controller('itemControl', function($scope, $location, $routeParams, itemService) {

  	$scope.item = itemService.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		itemService.delete({ id: $routeParams.id });
  		$location.path('/list');
  	};
  	$scope.edit = function() {
  		itemService.edit($scope.post);
  		$location.path('/list');
  	};

  });