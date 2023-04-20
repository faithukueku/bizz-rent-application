//Dependency
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/User");


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const connectDB = require("./db/connect");
require("dotenv").config();
// access port
const port = 5000; // please change port if port 5000 is unavialaible

const start = async () => {
  try {
    // connect to database
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running on port ${port}`));
  } catch (err) {
    app.all("*", (req, res) => {
      res
        .status(503)
        .send(" request timeout service unavailable please check server");
    });
    console.log(err);
  }
};

start();
app.use(express.json());

// error 404
app.all("*", (req, res) => {
  res.status(404).send("Error 404 has occured page does not exist");
});
