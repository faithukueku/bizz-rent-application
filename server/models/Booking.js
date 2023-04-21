const mongoose = require('mongoose');

const BookingPropertySchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      cost:number,
      duration:string,
      cleaningService:boolean
});

const Booking = mongoose.model('Booking', BookingPropertySchema);

module.exports = Booking;