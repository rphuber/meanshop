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
        templateUrl: 'views/meanstore/item-list.html',
        controller: 'itemsControl'
      })
      .when('/new', {
        templateUrl: 'views/meanstore/item-create.html',
        controller: 'itemsControl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/meanstore/item-detail.html',
        controller: 'itemControl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/meanstore/item-editDetail.html',
        controller: 'itemControl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });