'use strict';

angular.module('ATApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'http-auth-interceptor',
        'ui.bootstrap',
        'angucomplete-alt',
        'chart.js'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'MainCtrl'
            })
            .when('/airports', {
                templateUrl: 'partials/airports/search.html',
                controller: 'AirportsCtrl'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'partials/signup.html',
                controller: 'SignupCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    })

    .run(function ($rootScope, $location, Auth) {

        //watching the value of the currentUser variable.
        $rootScope.$watch('currentUser', function (currentUser) {
            // if no currentUser and on a page that requires authorization then try to update it
            // will trigger 401s if user does not have a valid session
            if (!currentUser && (['/', '/login', '/logout', '/signup'].indexOf($location.path()) == -1 )) {
                Auth.currentUser();
            }
        });

        // On catching 401 errors, redirect to the login page.
        $rootScope.$on('event:auth-loginRequired', function () {
            $location.path('/login');
            return false;
        });
    });