var async = require('async');
var airports = require('./airports');
var Airport = require('mongoose').model('Airport');

module.exports.import = function () {
    async.each(airports, function (item, cb) {
        console.log(item);
        if (!item.iatafaa)
            return cb();
        new Airport({
            code: item.iatafaa,
            desc: item.name + ', ' + item.city + ', ' + item.country
        }).save(cb);
    }, function (err) {
        if (err) {
            console.log(err);
            console.log('A file failed to process');
        } else {
            console.log('All airports have been processed successfully');
        }
    });
};
