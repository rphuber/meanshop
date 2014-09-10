'use strict';

angular.module('meanstore')
  .controller('itemsControl', function ($scope, $location, meanstoreService) {

    $scope.createPost = function() {
    	$location.path('/new');
    };
    $scope.newPost = function(post) {
    	meanstoreService.create(post)
    	$location.path('/blog');
    };
    $scope.posts = meanstoreService.query();
  })
  .controller('itemControl', function($scope, $location, $routeParams, meanstoreService) {

  	$scope.post = meanstoreService.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		meanstoreService.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		meanstoreService.edit($scope.post);
  		$location.path('/blog');
  	};

  });