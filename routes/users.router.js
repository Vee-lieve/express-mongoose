const express = require("express");
const router = express.Router();

const Authorization = require('../middleware/authorization');
const auth = new Authorization();
const USERS = require("../controllers/users.controller")

router.get("/users", /* auth.authorized, */ USERS.GetUser)
router.get("/users/:id", /* auth.authorized, */ USERS.GetUserById)
router.post("/users", /* auth.authorized, */ USERS.SaveUser)
router.put("/users", /* auth.authorized, */ USERS.UpdateUser)
router.delete("/users/:id", /* auth.authorized, */ USERS.DeleteUser)

module.exports = router;