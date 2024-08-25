const express = require("express");
const {
  createBooking,
  getBooking,
  updateBooking,
} = require("../controller/booking.controller.js");

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBooking);

router.put("/:id", updateBooking);

module.exports = router;
