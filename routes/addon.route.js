const express = require("express");
const {
  createAddon,
  getAllAddon,
  getAddonById,
  updateAddon,
  deleteAddon,
} = require("../controller/addon.controller.js");

const router = express.Router();

router.post("/", createAddon);
router.get("/", getAllAddon);
router.get("/:id", getAddonById);
router.put("/:id", updateAddon);
router.delete("/:id", deleteAddon);

module.exports = router;
