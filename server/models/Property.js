const mongoose = require('mongoose');

const rentalPropertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  offices: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  rent: {
    type: String,
    required: true
  },
  isAvailable: {
    type: String,
  },
  isBooked:Boolean,
  
  paymentType:{
    type:String,
    enum:["monthly","yearly","weekly"]
  },

  isCleaningRequired: {
    type: Boolean,
    default:false
  },
  images:  Array,
 



});

const RentalProperty = mongoose.model('RentalProperty', rentalPropertySchema);

module.exports = RentalProperty;