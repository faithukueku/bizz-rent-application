const express = require("express");
const SignUp = require("../controllers/SignUpController");
const login = require("../controllers/LoginController");


const router = express.Router();
router.route("/signUp").post(SignUp);
router.route("/login").post(login);

module.exports = router;



