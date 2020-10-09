var mongoose = require('mongoose');

var ResultSch = new mongoose.Schema({
    error: {
        type: Boolean,
        default: false
    },
    message: {
        type: String,
        default: null
    },
    body: {
        type: Object,
        default: {
            token: String
        }
    }
});

var Result = mongoose.model('Result', ResultSch);

module.exports = Result;