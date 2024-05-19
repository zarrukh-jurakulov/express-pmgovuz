const mongoose = require("mongoose");

const RegionsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
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
});

module.exports = RegionsSchema;
