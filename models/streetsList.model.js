const mongoose = require("mongoose");

const StreetsListSchema = new mongoose.Schema({
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
  district_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Districts",
    required: true,
  },
});

module.exports = StreetsListSchema;
