const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    userId: {
      //mongo db will generate the specific id for the particular user
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "User",
      type: String,
      required: true,
    },
    bikeId: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "User",
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      //enum is to specify a set of allowed values for a field
      enum: ["Booked", "Cancelled", "Completed", "Modified"],
      default: "Booked",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
