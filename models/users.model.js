var mongoose = require('mongoose');

var USERSSch = new mongoose.Schema({
    fname: {
        type: String,
        required: false
    },
    lname: {
        type: String,
        required: null
    }
});

var Users = mongoose.model('Users', USERSSch);

module.exports = Users;