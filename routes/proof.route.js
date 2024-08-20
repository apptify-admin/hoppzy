const express = require("express");
const router = express.Router();
const Proof = require("../routes//proof.route.js");

const { proof } = require("../controller/proof.controller.js");

router.post("/", proof);

module.exports = router;
