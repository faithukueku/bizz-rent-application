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
    type: Number,
    required: true
  },
  availableDate: {
    type: Date,
    required: true
  },

  landlord: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Landlord',
    required: true
  }
});

const RentalProperty = mongoose.model('RentalProperty', rentalPropertySchema);

module.exports = RentalProperty;