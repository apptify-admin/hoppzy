const multer = require("multer");
const Proof = require("../models/proof.model.js");

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("testImage");

const proof = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new Proof({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: "image/png",
        },
      });
      newImage
        .save()
        .then(() => res.send("successfully uploaded"))
        .catch((err) => console.log(err));
    }
  });
};

module.exports = {
  proof,
};
