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
    ).
    sort("desc").exec(function (err, airports) {
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
    async.parallel([
        function (cb) {
            queryAndProcessArrivals(req.airportCode, req.queryDate, cb);
        },
        function (cb) {
            queryAndProcessDepartures(req.airportCode, req.queryDate, cb);
        }
    ], function (err, calculated) {
        var load = new AirportLoad({
            date: req.queryDate.toDateString(),
            airportCode: req.airportCode,
            calculatedArrLoad: calculated[0][0],
            calculatedDepLoad: calculated[1][0],
            rawArrResponses: calculated[0][1],
            rawDepResponses: calculated[1][1]
        });
        load.save(function (err) {
            if (err)
                res.json(500, err);
            else
                res.json({airport: req.airport, arr: load.calculatedArrLoad, dep: load.calculatedDepLoad});
        });
    });
};

function queryAndProcessArrivals(code, date, cb) {
    async.parallel([
        function (cb) {
            queryFlightStats('arr', code, date, 0, function (err, data) {
                if (err)
                    console.log(err);
                processArrivalFlights(data, cb);
            });
        },
        function (cb) {
            queryFlightStats('arr', code, date, 6, function (err, data) {
                if (err)
                    console.log(err);
                processArrivalFlights(data, cb);
            });
        },
        function (cb) {
            queryFlightStats('arr', code, date, 12, function (err, data) {
                if (err)
                    console.log(err);
                processArrivalFlights(data, cb);
            });
        },
        function (cb) {
            queryFlightStats('arr', code, date, 18, function (err, data) {
                if (err)
                    console.log(err);
                processArrivalFlights(data, cb);
            });
        }
    ], function (err, results) {
        if (err)
            console.log(err);
        var buckets = [results[0][0], results[1][0], results[2][0], results[3][0]];
        var qs = [results[0][1], results[1][1], results[2][1], results[3][1]];
        joinBuckets(qs, buckets, cb);
    });
}

function queryAndProcessDepartures(code, date, cb) {
    async.parallel([
        function (cb) {
            queryFlightStats('dep', code, date, 0, function (err, data) {
                if (err)
                    console.log(err);
                processDepartureFlights(data, cb);
            });
        },
        function (cb) {
            queryFlightStats('dep', code, date, 6, function (err, data) {
                if (err)
                    console.log(err);
                processDepartureFlights(data, cb);
            });
        },
        function (cb) {
            queryFlightStats('dep', code, date, 12, function (err, data) {
                if (err)
                    console.log(err);
                processDepartureFlights(data, cb);
            });
        },
        function (cb) {
            queryFlightStats('dep', code, date, 18, function (err, data) {
                if (err)
                    console.log(err);
                processDepartureFlights(data, cb);
            });
        }
    ], function (err, results) {
        if (err)
            console.log(err);
        var buckets = [results[0][0], results[1][0], results[2][0], results[3][0]];
        var qs = [results[0][1], results[1][1], results[2][1], results[3][1]];
        joinBuckets(qs, buckets, cb);
    });
}

function queryFlightStats(type, code, date, hour, cb) {
    request.get("https://api.flightstats.com/flex/flightstatus/historical/rest/v2/json/airport/status/"
        + code + "/" + type + "/" + date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + "/" + hour
        + "?appId=" + config.flightstats.appId + "&appKey=" + config.flightstats.apiKey + "&utc=false&numHours=6&maxFlights=10000",
        function (err, res, body) {
            cb(err, body);
        }
    );
}

function processArrivalFlights(obj, cb) {
    if (!_.isObject(obj))
        obj = JSON.parse(obj);
    var hourTerminalBuckets = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    if (!obj || !_.has(obj, "flightStatuses"))
        return cb(null, [hourTerminalBuckets, obj]);
    async.each(obj.flightStatuses, function (item, cb) {
        if (!_.has(item, "arrivalDate") || !_.has(item.arrivalDate, "dateLocal"))
            return cb();
        var hour = new Date(item.arrivalDate.dateLocal).getUTCHours();
        var capacity = 0;
        var terminal = "NOTERM";
        if (_.has(item, "flightEquipment") && _.has(item.flightEquipment, "scheduledEquipmentIataCode"))
            capacity = planesCap(item.flightEquipment.scheduledEquipmentIataCode);
        if (_.has(item, "airportResources") && _.has(item.airportResources, "arrivalTerminal"))
            terminal = item.airportResources.arrivalTerminal;
        var h = hourTerminalBuckets[hour];
        if (!_.has(h, terminal))
            h[terminal] = 0;
        h[terminal] += capacity;
        return cb();
    }, function (err) {
        cb(err, [hourTerminalBuckets, obj]);
    });
}

function processDepartureFlights(obj, cb) {
    if (!_.isObject(obj))
        obj = JSON.parse(obj);
    var hourTerminalBuckets = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    if (!obj || !_.has(obj, "flightStatuses"))
        return cb(null, [hourTerminalBuckets, obj]);
    async.each(obj.flightStatuses, function (item, cb) {
        if (!_.has(item, "departureDate") || !_.has(item.departureDate, "dateLocal"))
            return cb();
        var hour = new Date(item.departureDate.dateLocal).getUTCHours();
        var capacity = 0;
        var terminal = "NOTERM";
        if (_.has(item, "flightEquipment") && _.has(item.flightEquipment, "scheduledEquipmentIataCode"))
            capacity = planesCap(item.flightEquipment.scheduledEquipmentIataCode);
        if (_.has(item, "airportResources") && _.has(item.airportResources, "departureTerminal"))
            terminal = item.airportResources.departureTerminal;
        var h = hourTerminalBuckets[hour];
        if (!_.has(h, terminal))
            h[terminal] = 0;
        h[terminal] += capacity;
        return cb();
    }, function (err) {
        cb(err, [hourTerminalBuckets, obj]);
    });
}

function joinBuckets(qs, buckets, cb) {
    console.log("join buckets");
    var hourTerminalBuckets = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    if (!buckets)
        cb(null, hourTerminalBuckets);
    _.each(buckets, function (bucket) {
        _.each(bucket, function (termsCap, hour) {
            _.each(termsCap, function (capacity, terminal) {
                var h = hourTerminalBuckets[hour];
                if (!_.has(h, terminal))
                    h[terminal] = 0;
                h[terminal] += capacity;
            });
        });
    });
    cb(null, [hourTerminalBuckets, qs]);
}