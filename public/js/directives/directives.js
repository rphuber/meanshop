angular.module("meanstore")
	.directive("siteMenu", function () {
		return {
			restrict: "E", 
			templateUrl: "views/directives/sitemenu.html"
		};
	});