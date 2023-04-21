const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SignUp = async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
      phoneNumber: req.phoneNumber,
    });
    res.json({ status:201 ,message:"account created successfully"});
  } catch (err) {
 
      res.json({ status: "error", error: "an error has occured pls try againY" });
  }
};

module.exports = SignUp;
