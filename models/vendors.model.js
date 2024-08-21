const mongoose = require("mongoose");

// Bike Schema
const bikeSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, "Please enter the bike make"],
  },
  model: {
    type: String,
    required: [true, "Please enter the bike model"],
  },
  year: {
    type: Number,
    required: [true, "Please enter the bike year"],
  },
});

// Vendor Schema
const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    phone: {
      type: String,
      required: [true, "Please enter a valid phone number"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    bikes: [bikeSchema], // Array of bike objects provided by the vendor
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
