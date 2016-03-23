var mongoose = require('mongoose');
var config = require('../config/config');

exports.db = mongoose.connect(config.mongo.db, config.mongo.opts, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + config.mongo.db + '. ' + err);
    } else {
        console.log('Successfully connected to: ' + config.mongo.db);
    }
});