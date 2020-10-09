const Users = require("../models/users.model")

module.exports = {
    GetUser(req, res) {
        Users.find({}, { __v: false }).then(response => {
            res.json(response)
        }).catch(err => {
            res.json(err)
        })
    },
    GetUserById(req, res) {
        Users.find({_id: req.params.id}, { __v: false }).then(response => {
            res.json(response)
        }).catch(err => {
            res.json(err)
        })
    },
    SaveUser(req, res) {
        let newUser = new Users(req.body)
        newUser.save().then(response => {
            res.json(response)
        }).catch(err => {
            res.json(err)
        })
    },
    UpdateUser(req, res) {
        let data = req.body
        Users.findByIdAndUpdate(data.id, data).then(response => {
            res.json(response)
        }).catch(err => {
            res.json(err)
        })
    },
    DeleteUser(req, res) {
        let id = req.params.id
        Users.findByIdAndRemove(id).then(response => {
            res.json(response)
        }).catch(err => {
            res.json(err)
        })
    }
};