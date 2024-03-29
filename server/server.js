//Dependency
const express = require("express");
const app = express();
const cors = require("cors");
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
app.use(cors()); // cross origin access
app.use("/api/auth", require("./routes/auth"));
app.use("/api/properties", require("./routes/property"));

// error 404
app.all("*", (req, res) => {
  res.status(404).send("Error 404 has occured page does not exist");
});
