var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AirportLoadSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    airportCode: {
        type: String,
        required: true
    },
    calculatedArrLoad: {
        type: [Schema.Types.Mixed],
        required: true
    },
    calculatedDepLoad: {
        type: [Schema.Types.Mixed],
        required: true
    },
    rawArrResponses: {
        type: [Schema.Types.Mixed],
        required: true
    },
    rawDepResponses: {
        type: [Schema.Types.Mixed],
        required: true
    },
    createdAt: {
        type: Date,
        expires: 60 * 60 * 24,
        default: Date.now
    }
});

mongoose.model('AirportLoad', AirportLoadSchema);