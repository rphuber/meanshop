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
      .when('/meanstore/list/:id', {
        templateUrl: 'views/meanstore/store-detail.html',
        controller: 'itemsControl'
      })
      .when('/meanstoreAdmin/list', {
        templateUrl: 'views/meanstoreAdmin/admin-list.html',
        controller: 'itemsControl'
      })
      .when('/meanstoreAdmin/new', {
        templateUrl: 'views/meanstoreAdmin/admin-create.html',
        controller: 'itemsControl'
      })
      .when('/meanstoreAdmin/list/:id', {
        templateUrl: 'views/meanstoreAdmin/admin-detail.html',
        controller: 'itemControl'
      })
      .when('/meanstoreAdmin/item/:id/edit', {
        templateUrl: 'views/meanstoreAdmin/admin-editDetail.html',
        controller: 'itemControl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });