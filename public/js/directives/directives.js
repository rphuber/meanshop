angular.module("meanstore")
	.directive("siteMenu", function (meanstoreService, $rootScope) {
		return {
			restrict: "E", 
			templateUrl: "views/directives/sitemenu.html"
		},
	});