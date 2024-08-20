const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./routes/user.route.js");
const proofRouter = require("./routes/proof.route.js");
const app = express();

//middleware
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/proof", proofRouter);

//test
app.get("/", (req, res) => {
  res.send("We are on Home");
});

// Database connection
mongoose
  .connect("mongodb://localhost:27017/hoppzy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Listen to server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
