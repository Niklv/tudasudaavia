'use strict';

angular.module('ATApp')
    .controller('NavbarCtrl', function ($scope, Auth, $location) {

        $scope.menu = [];

        $scope.authMenu = [{
            "title": "Airports",
            "link": "airports"
        }];

        $scope.logout = function () {
            Auth.logout(function (err) {
                if (!err) {
                    $location.path('/login');
                }
            });
        };
    });
