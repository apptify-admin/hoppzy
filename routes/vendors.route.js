const express = require("express");
const {
  createVendor,
  getVendors,
  getVendorById,
  updateVendor,
  updateBikeByVendor,
  deleteVendor,
  deleteBikeByVendor,
} = require("../controller/vendors.controller.js");

const router = express.Router();

router.post("/", createVendor);
router.get("/", getVendors);
router.get("/:id", getVendorById);
router.put("/:id", updateVendor);
router.patch("/:id", updateBikeByVendor);
router.delete("/:id", deleteVendor);
router.delete("/:vendorId/bikes/:bikeId", deleteBikeByVendor);

module.exports = router;
