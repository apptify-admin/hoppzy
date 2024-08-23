const express = require("express");
const {
  createBooking,

  updateBooking,
} = require("../controller/Bookings.controller.js");

const router = express.Router();

router.post("/", createBooking);

router.put("/:id", updateBooking);

module.exports = router;
