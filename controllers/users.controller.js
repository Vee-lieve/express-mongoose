const Users = require("../models/users.model")
const Result = require("../models/result")

module.exports = {
    GetUser(req, res) {
        let result = new Result()
        Users.find({}, { __v: false }).then(response => {
            result.message = "List of all users."
            result.body = response
            res.json({result})
        }).catch(err => {
            result.message = "Opps!, something went wrong."
            result.body = err
            res.json({result})
        })
    },
    GetUserById(req, res) {
        let result = new Result()
        Users.find({_id: req.params.id}, { __v: false }).then(response => {
            result.message = "Get user by id."
            result.body = response
            res.json({result})
        }).catch(err => {
            result.message = "Opps!, user not found."
            result.body = err
            res.json({result})
        })
    },
    SaveUser(req, res) {
        let result = new Result()
        let newUser = new Users(req.body)
        newUser.save().then(response => {
            result.message = "Successfully added new user."
            result.body = response
            res.json({result})
        }).catch(err => {
            result.message = "Opps!, Unsuccessful adding of user."
            result.body = err
            res.json({result})
        })
    },
    UpdateUser(req, res) {
        let result = new Result()
        let data = req.body
        Users.findByIdAndUpdate(data.id, data).then(response => {
            result.message = "Successfully updated user."
            result.body = response
            res.json({result})
        }).catch(err => {
            result.message = "Opps!, Unsuccessful update of user."
            result.body = err
            res.json({result})
        })
    },
    DeleteUser(req, res) {
        let result = new Result()
        let id = req.params.id
        Users.findByIdAndRemove(id).then(response => {
            result.message = "User sucessfully deleted."
            result.body = response
            res.json({result})
        }).catch(err => {
            result.message = "Opps!, Unsuccessful deletion of user."
            result.body = err
            res.json({result})
        })
    }
};