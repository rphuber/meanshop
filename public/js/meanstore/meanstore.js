'use strict';

angular
  .module('meanstore', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/meanstore/main.html'
      })
      .when('/blog', {
        templateUrl: 'views/meanstore/blog-list.html',
        controller: 'itemsControl'
      })
      .when('/new', {
        templateUrl: 'views/meanstore/blog-create.html',
        controller: 'itemsControl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/meanstore/blog-detail.html',
        controller: 'itemControl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/meanstore/blog-editDetail.html',
        controller: 'itemControl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });