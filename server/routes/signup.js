const express = require("express");
const SignUp = require("../controllers/SignUpController");

const router = express.Router();
router.route("/signUp").post(SignUp);

module.exports = router;
