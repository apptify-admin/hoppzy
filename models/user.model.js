const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a user name"],
    },
    profile_pic: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: [true, "Please enter a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Please enter a valid phone number"],
    },
    verified: {
      type: Boolean,
    },
    driving_license: {
      type: String,
    },
    id_proof: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
