const mongoose = require("mongoose");

const DistrictsSchema = new mongoose.Schema({
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
  region_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Regions",
    required: true,
  },
});

module.exports = DistrictsSchema;
