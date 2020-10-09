const express = require("express");
const router = express.Router();

const Authorization = require('../middleware/authorization');
const auth = new Authorization();
const UsersControls = require("../controllers/users.controller")
const USERS = new UsersControls()
router.get("/users", (req, res)=>{
    USERS.GetUser(response=>{
        res.json({response})
    })
})
router.post("/users", (req, res)=>{
    let data = req.body
    USERS.SaveUser(data, response=>{
        res.json({response})
    })
})

module.exports = router;