const Users = require("../models/users.model")

class UserControl {
    GetUser(callback) {
        Users.find({}).then(response => {
            callback(response)
        }).catch(err => {
            callback(err)
        })
    }
    SaveUser(data, callback) {
        console.log(data)
        let newUser = new Users(data)
        newUser.save().then(response => {
            callback(response)
        }).catch(err => {
            callback(err)
        })
    }
}

module.exports = UserControl;