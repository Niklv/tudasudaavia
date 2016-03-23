var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AirportSchema = new Schema({
    code: String,
    desc: String
});

mongoose.model('Airport', AirportSchema);