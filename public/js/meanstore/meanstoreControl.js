'use strict';

angular.module('meanstore')
  .controller('itemsControl', function ($scope, $location, meanstoreService) {

    $scope.createItem = function() {
    	$location.path('/new');
    };
    $scope.newItem = function(item) {
    	meanstoreService.create(item)
    	$location.path('/list');
    };
    $scope.items = meanstoreService.query();
  })
  .controller('itemControl', function($scope, $location, $routeParams, meanstoreService) {

  	$scope.item = meanstoreService.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		meanstoreService.delete({ id: $routeParams.id });
  		$location.path('/list');
  	};
  	$scope.edit = function() {
  		meanstoreService.edit($scope.post);
  		$location.path('/list');
  	};

  });