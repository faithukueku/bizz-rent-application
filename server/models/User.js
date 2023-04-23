
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String},
    password: { type: String, required: true },
    officeSpace: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RentalProperty'   
  }],
}
);

const model = mongoose.model("User", User);

module.exports = model;
