const express = require("express");
const { createUser, loginUser } = require("../controllers/Auth.controller");

const router = express.Router();
//  /auth is already added in base path
router.post("/signup", createUser).post("/login", loginUser);

module.exports = router;
