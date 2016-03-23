'use strict';

angular.module('ATApp')
    .factory('Session', function ($resource) {
        return $resource('/auth/session/');
    });
