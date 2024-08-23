const Vendor = require("../models/vendors.model.js");

// Create a new vendor
const createVendor = async (req, res) => {
  try {
    const { name, phone, bikes } = req.body;

    const newVendor = new Vendor({
      name,
      phone,
      bikes,
    });

    await newVendor.save();
    res
      .status(201)
      .json({ message: "Vendor created successfully", vendor: newVendor });
  } catch (error) {
    res.status(500).json({ message: "Error creating vendor", error });
  }
};

// Get all vendors
const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vendors", error });
  }
};

// Get a single vendor by ID
const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }
    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vendor", error });
  }
};

// Update a vendor by ID
const updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }
    res.status(200).json({ message: "Vendor updated successfully", vendor });
  } catch (error) {
    res.status(500).json({ message: "Error updating vendor", error });
  }
};

//update bike by vendor
const updateBikeByVendor = async (req, res) => {
  try {
    // Find the vendor by ID
    let vendor = await Vendor.findById(req.params.id);

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    // Add the new bike to the vendor's bikes array
    vendor.bikes.push(req.body);

    // Save the updated vendor document
    await vendor.save();

    res.status(200).json({ message: "Bike added successfully", vendor });
  } catch (error) {
    res.status(500).json({ message: "Error adding bike to vendor", error });
  }
};

// Delete a vendor by ID
const deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }
    res.status(200).json({ message: "Vendor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting vendor", error });
  }
};
//delete bike by  vendor
const deleteBikeByVendor = async (req, res) => {
  try {
    // Find the vendor by ID
    const vendor = await Vendor.findById(req.params.vendorId);

    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    // Find the bike index within the vendor's bikes array
    const bikeIndex = vendor.bikes.findIndex(
      (bike) => bike._id.toString() === req.params.bikeId
    );

    if (bikeIndex === -1) {
      return res.status(404).json({ message: "Bike not found" });
    }

    // Remove the bike from the array
    vendor.bikes.splice(bikeIndex, 1);

    // Save the vendor after modification
    await vendor.save();

    res.status(200).json({ message: "Bike deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in deleting bike", error });
  }
};

module.exports = {
  createVendor,
  getVendors,
  getVendorById,
  updateVendor,
  updateBikeByVendor,
  deleteVendor,
  deleteBikeByVendor,
};
