const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    userId: {
      //mongo db will generate the specific id for the particular user
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bikeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      //enum is to specify a set of allowed values for a field
      enum: ["Booked", "Cancelled", "Completed"],
      default: "Booked",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
