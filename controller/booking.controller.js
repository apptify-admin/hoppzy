const Booking = require("../models/booking.model.js");

//create
const createBooking = async (req, res) => {
  try {
    const { userId, bikeId, bookingDate, returnDate } = req.body;

    const newBooking = new Booking({
      userId,
      bikeId,
      bookingDate,
      returnDate,
    });
    await newBooking.save();
    res.status(201).json({
      message: "Bike is booked",
      booking: newBooking,
    });
  } catch (error) {
    res.status(500).json({ message: "Booking crashed", error: error.message });
  }
};

// Update a booking by ID
const updatebooking = async (req, res) => {
  try {
    const booking = await booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!booking) {
      return res.status(404).json({ message: "booking not found" });
    }
    res.status(200).json({ message: "booking updated successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Error updating booking", error });
  }
};

module.exports = {
  createBooking,

  updatebooking,
};
