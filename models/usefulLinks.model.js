const mongoose = require("mongoose");

const UsefulLinksSchema = new mongoose.Schema({
  name_uz: {
    type: String,
    required: true,
  },
  name_uzc: {
    type: String,
    required: true,
  },
  name_ru: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Images",
    required: true,
  },
});
