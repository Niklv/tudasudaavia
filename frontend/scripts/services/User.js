'use strict';

angular.module('ATApp')
    .factory('User', function ($resource) {
        return $resource('/auth/users/:id/', {},
            {
                'update': {
                    method: 'PUT'
                }
            });
    });
