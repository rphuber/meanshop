'use strict';
angular.module('meanstore')
	.factory('itemsService', function($resource) {
		return $resource('api/collections/meanstore',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'},
				delete: { method: 'DELETE'}
			});
	})
	.factory('itemService', function($resource) {
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
	})
	.factory('cartItemsService', function($resource) {
		return $resource('api/collections/meanstorecart',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('cartItemService', function($resource) {
		return $resource('api/collections/meanstorecart/:id',
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