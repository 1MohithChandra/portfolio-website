// ------------ SERVER.JS --------------- //

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORT ROUTES
const contactRoute = require("./routes/contact");

// USE ROUTES
app.use("/api/contact", contactRoute);

// MONGODB CONNECTION (NO EXTRA OPTIONS!)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// START SERVER
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
