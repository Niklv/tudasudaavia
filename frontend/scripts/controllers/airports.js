'use strict';

angular.module('ATApp')
    .controller('AirportsCtrl', function ($scope, $http, $location, $routeParams, $rootScope) {
        $scope.datepicker = {
            opened: false
        };
        var plusOneYear = new Date();
        plusOneYear.setFullYear(plusOneYear.getFullYear() + 1);
        var minusThreeDays = new Date();
        minusThreeDays.setDate(minusThreeDays.getDate()-3);
        $scope.datepickeropts = {
            maxDate: plusOneYear,
            minDate: minusThreeDays
        };
        $scope.opendatepicker = function () {
            $scope.datepicker.opened = true;
        };

        $scope.result = null;
        $scope.labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]; //24

        $scope.findOne = function () {
            if (!$scope.selectedAirport || !$scope.selectedAirport.originalObject || !$scope.selectedDate) {
                $scope.airport = {};
                return;
            }
            var airport_id = $scope.selectedAirport.originalObject._id;
            var date = $scope.selectedDate;
            console.log(airport_id);
            console.log(date);
            $scope.result = null;
            $http.get('/api/airports/search/' + airport_id + '/' + date.getTime())
                .then(function successCallback(response) {
                    $scope.result = response.data;
                    $scope.seriesArr = extractTerminals(response.data.arr);
                    $scope.seriesDep = extractTerminals(response.data.dep);
                    $scope.dataArr = extractTerminalLoad($scope.seriesArr, response.data.arr);
                    $scope.dataDep = extractTerminalLoad($scope.seriesDep, response.data.dep);
                }, function errorCallback(response) {
                    $scope.result = null;
                    $scope.ajaxerr = response.status;
                });
        };
    });


function extractTerminals(loads) {
    var terms = {};
    _.each(loads, function (hourLoad) {
        _.each(hourLoad, function (capacity, terminal) {
            if (!_.has(terms, terminal))
                terms[terminal] = true;
        });
    });
    return _.sortBy(_.keys(terms));
}

function extractTerminalLoad(terms, loads) {
    var temp = {};
    _.each(terms, function (t) {
        temp[t] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //24
    });

    _.each(loads, function (hourLoad, hour) {
        _.each(terms, function (terminal) {
            if (_.has(hourLoad, terminal))
                temp[terminal][hour] = hourLoad[terminal];
        })
    });
    return _.values(temp);
}