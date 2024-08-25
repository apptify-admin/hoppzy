const express = require("express");

const Addon = require("../models/addon.model.js");

const createAddon = async (req, res) => {
  try {
    const addon = new Addon(req.body);
    await addon.save();
    res
      .status(201)
      .json({ success: true, message: "Add-on created successfully", addon });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getAllAddon = async (req, res) => {
  try {
    const addons = await Addon.find();
    res.json({ success: true, addons });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAddonById = async (req, res) => {
  try {
    const addon = await Addon.findById(req.params.id);
    if (!addon)
      return res
        .status(404)
        .json({ success: false, message: "Add-on not found" });
    res.json({ success: true, addon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateAddon = async (req, res) => {
  try {
    const addon = await Addon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!addon)
      return res
        .status(404)
        .json({ success: false, message: "Add-on not found" });
    res.json({
      success: true,
      message: "Add-on updated successfully",
      addon,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteAddon = async (req, res) => {
  try {
    const addon = await Addon.findByIdAndDelete(req.params.id);
    if (!addon)
      return res
        .status(404)
        .json({ success: false, message: "Add-on not found" });
    res.json({ success: true, message: "Add-on deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createAddon,
  getAllAddon,
  getAddonById,
  updateAddon,
  deleteAddon,
};
