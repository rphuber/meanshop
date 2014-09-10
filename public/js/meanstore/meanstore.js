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
      .when('/list', {
        templateUrl: 'views/meanstore/store-list.html',
        controller: 'itemsControl'
      })
      .when('/meanstoreAdmin/list', {
        templateUrl: 'views/meanstoreAdmin/item-list.html',
        controller: 'itemsControl'
      })
      .when('/new', {
        templateUrl: 'views/meanstoreAdmin/item-create.html',
        controller: 'itemsControl'
      })
      .when('/list/:id', {
        templateUrl: 'views/meanstoreAdmin/item-detail.html',
        controller: 'itemControl'
      })
      .when('/item/:id/edit', {
        templateUrl: 'views/meanstoreAdmin/item-editDetail.html',
        controller: 'itemControl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });