'use strict';
angular.module('meanstore')
	.factory('meanstoreService', function($resource) {
		return $resource('api/collections/meanstore',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('meanstoreService', function($resource) {
		return $resource('api/collections/meanstore/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	});