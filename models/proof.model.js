const mongoose = require("mongoose");
const ImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const Proof = mongoose.model("Proof", ImageSchema);

module.exports = Proof;
