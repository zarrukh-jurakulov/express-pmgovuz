const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost/pmgovuz";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));
