'use strict';

angular.module('ATApp')
    .controller('AirportsCtrl', function ($scope, $http, $location, $routeParams, $rootScope) {
        $scope.datepicker = {
            opened: false
        };
        var plusOneYear = new Date();
        plusOneYear.setFullYear(plusOneYear.getFullYear() + 1);
        var minusThreeDays = new Date();
        minusThreeDays.setDate(minusThreeDays.getDate() - 3);
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
                    $scope.arrs = [];
                    $scope.deps = [];
                    $scope.seriesArr = extractTerminals(response.data.arr);
                    $scope.seriesDep = extractTerminals(response.data.dep);
                    $scope.dataArr = airPlaneLoadFactor(smoothGraphArr(extractTerminalLoad($scope.seriesArr, response.data.arr)));
                    $scope.dataDep = airPlaneLoadFactor(smoothGraphArr(extractTerminalLoad($scope.seriesDep, response.data.dep)));
                    $scope.arrs = _.map($scope.seriesArr, function (item) {
                        return {terminal: [item], load: null};
                    });
                    $scope.deps = _.map($scope.seriesDep, function (item) {
                        return {terminal: [item], load: null};
                    });
                    _.each($scope.dataArr, function (item, index) {
                        $scope.arrs[index].load = [item];
                    });
                    _.each($scope.dataDep, function (item, index) {
                        $scope.deps[index].load = [item];
                    });
                    var maxVal = _.max(_.flatten(_.union($scope.dataArr, $scope.dataDep)));
                    var scaleStepWidth = 50;
                    if (maxVal > 500 && maxVal <= 1000) {
                        scaleStepWidth = 100;
                    } else if (maxVal > 1000 && maxVal <= 2000) {
                        scaleStepWidth = 200;
                    } else if (maxVal > 2000 && maxVal <= 2500) {
                        scaleStepWidth = 250;
                    } else if (maxVal > 2500 && maxVal <= 5000) {
                        scaleStepWidth = 500;
                    } else if (maxVal > 5000 && maxVal <= 10000) {
                        scaleStepWidth = 1000;
                    } else if (maxVal > 10000 && maxVal <= 25000) {
                        scaleStepWidth = 2500;
                    } else {
                        scaleStepWidth = 5000;
                    }
                    console.log(maxVal);
                    $scope.gr_opts = {
                        scaleOverride: true,
                        scaleSteps: 10,
                        scaleStepWidth: scaleStepWidth,
                        scaleStartValue: 0,
                        pointHitDetectionRadius: 5
                    };
                    console.log($scope.arrs);
                    console.log($scope.deps);
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

function smoothGraphArr(arrs) {
    return _.map(arrs, function (arr) {
        var newArr = [
            arr[0] + arr[23] * 0.6 + arr[22] * 0.1,
            arr[1] + arr[0] * 0.6 + arr[23] * 0.1
        ];
        for (var i = 2; i < 24; i++)
            newArr[i] = arr[i] + arr[i - 1] * 0.6 + arr[i - 2] * 0.1;
        return newArr;
    });
}

function smoothGraphDep(arrs) {
    return _.map(arrs, function (arr) {
        var newArr = [];
        for (var i = 0; i < 22; i++)
            newArr[i] = arr[i] + arr[i + 1] + arr[i + 2] * 0.5;
        newArr[22] = arr[22] + arr[23] + arr[0] * 0.5;
        newArr[23] = arr[23] + arr[0] + arr[1] * 0.5;
        return newArr;
    });
}

function airPlaneLoadFactor(arrs) {
    return _.map(arrs, function (arr) {
        return _.map(arr, function (item) {
            return Math.round(item * 0.95);
        });
    });
}