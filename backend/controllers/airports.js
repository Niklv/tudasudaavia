var mongoose = require('mongoose');
var Airport = mongoose.model('Airport');
var AirportLoad = mongoose.model('AirportLoad');
var config = require('../config/config');
var _ = require('underscore');
var async = require('async');
var request = require('request');
var planesCap = require('./planeCapacity');

/**
 * Find airport by id
 */
exports.airport = function (req, res, next, id) {
    Airport.findById(id, function (err, airport) {
        if (err) return next(err);
        if (!airport) return next(new Error('Failed to load airport ' + id));
        req.airport = airport;
        req.airportCode = req.airport.code;
        next();
    });
};

/**
 * Parse date
 */
exports.queryDate = function (req, res, next, queryDate) {
    var parsed = new Date(parseInt(queryDate));
    if (!parsed)
        next(new Error('Date must be a number'));
    req.queryDate = parsed;
    next();
};

/**
 * Show an airport
 */
exports.show = function (req, res) {
    res.json(req.airport);
};


/**
 * List of airports
 */
exports.all = function (req, res) {
    Airport.find().sort('name').exec(function (err, airports) {
        if (err) {
            res.json(500, err);
        } else {
            res.json(airports);
        }
    });
};

exports.find = function (req, res) {
    var regex = new RegExp(req.query.s, "i");
    Airport.find({
            $or: [
                {code: regex},
                {desc: regex}
            ]
        }
    ).sort("desc").exec(function (err, airports) {
        if (err)
            res.json(500, err);
        else
            res.json(airports);
    });
};

exports.checkCache = function (req, res, next) {
    console.log({airportCode: req.airportCode, date: req.queryDate.toDateString()});
    AirportLoad.findOne({
        airportCode: {$eq: req.airportCode},
        date: {$eq: req.queryDate.toDateString()}
    }).exec(function (err, load) {
        if (err)
            next(err);
        else if (load) {
            console.log("FROM CACHE");
            res.json({airport: req.airport, arr: load.calculatedArrLoad, dep: load.calculatedDepLoad});
        } else
            next();
    });
};

exports.load = function (req, res, next) {
    getSchedule(req.airportCode, req.queryDate, function (err, data) {
        if (err)
            res.json(500, err);
        else
            res.json({airport: req.airport, arr: data.calculatedArrLoad, dep: data.calculatedDepLoad});
    });
};

function getSchedule(code, date, cb) {
    /* cb(null, {
     date: date.toDateString(),
     airportCode: code,
     calculatedArrLoad: [{"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {},
     {"A": 1000, "B": 300},
     {"B": 300},
     {"A": 1000, "B": 300, "C": 200},
     {"C": 200},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300, "C": 200},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {"B": 300},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300, "C": 200},
     {"A": 1000},
     {"A": 1000},
     {"A": 1000},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300}],
     calculatedDepLoad: [{"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {},
     {"A": 1000, "B": 300},
     {"B": 300},
     {"A": 1000, "B": 300, "C": 200},
     {"C": 200},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300, "C": 200},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300},
     {"B": 300},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300, "C": 200},
     {"A": 1000},
     {"A": 1000},
     {"A": 1000},
     {"A": 1000, "B": 300},
     {"A": 1000, "B": 300}],
     rawArrResponses: null,
     rawDepResponses: null
     });*/
    async.auto({
        dep: function (cb) {
            async.times(24, async.apply(queryAndParseSchedule, code, date, 'dep'), cb);
        },
        arr: function (cb) {
            async.times(24, async.apply(queryAndParseSchedule, code, date, 'arr'), cb);
        },
        save: ['dep', 'arr', function (res, cb) {
            var load = new AirportLoad({
                date: date.toDateString(),
                airportCode: code,
                calculatedArrLoad: _.pluck(res.arr, 'load'),
                calculatedDepLoad: _.pluck(res.dep, 'load'),
                rawArrResponses: _.pluck(res.dep, 'req'),
                rawDepResponses: _.pluck(res.arr, 'req')
            });
            load.save(function (err) {
                cb(err, load);
            });
        }]
    }, function (err, res) {
        console.log(res.save);
        cb(err, res.save);
    });
}


function queryAndParseSchedule(code, date, direction, hour, cb) {
    var url = 'https://api.flightstats.com/flex/schedules/rest/v1/json/';
    if (direction === 'dep') {
        url += 'from/' + code + '/departing/';
    } else if (direction === 'arr') {
        url += 'to/' + code + '/arriving/';
    } else {
        cb(new Error('Unknown direction ' + direction));
    }
    url += date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + '/' + hour;
    url += '?appId=' + config.flightstats.appId + '&appKey=' + config.flightstats.apiKey;

    async.waterfall([
        async.apply(request.get, url),
        async.apply(parseSchedule, direction)
    ], cb);
}

function parseSchedule(direction, req, obj, cb) {
    if (_.isNull(obj))
        return cb(new Error('null response from server req: ' + req));
    if(!_.isObject(obj))
        obj = JSON.parse(obj);
    var load = {};

    _.each(obj.scheduledFlights, function (scheduledFlight) {
        if (scheduledFlight.isCodeshare)
            return;
        var terminal = 'NOTERM';
        if (direction === 'dep') {
            terminal = scheduledFlight.departureTerminal ? scheduledFlight.departureTerminal : terminal;
        } else if (direction === 'arr') {
            terminal = scheduledFlight.arrivalTerminal ? scheduledFlight.arrivalTerminal : terminal;
        }

        var cap = planesCap(scheduledFlight.flightEquipmentIataCode);
        if (!_.has(load, terminal))
            load[terminal] = 0;
        load[terminal] += cap;
    });

    cb(null, {load: load, req: req});
}