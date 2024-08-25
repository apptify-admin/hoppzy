const Booking = require("../models/booking.model.js");

//create
const createBooking = async (req, res) => {
  try {
    const { userId, bikeId, startDate, startTime, endDate, endTime } = req.body;

    const newBooking = new Booking({
      userId,
      bikeId,
      startDate,
      startTime,
      endDate,
      endTime,
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

//get all booking

const getBooking = async (req, res) => {
  // Get all booking
  try {
    const bookings = await Booking.find({});
    res.status(200).json({ message: "All bookings", bookings });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving bookings", error: error.message });
  }
};

// Update a booking by ID
const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
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
  getBooking,
  updateBooking,
};
