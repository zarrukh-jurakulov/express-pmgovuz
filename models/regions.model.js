const mongoose = require('mongoose');

const RegionsSchema = new mongoose.Schema({
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

const RegionsModel = mongoose.model('Region', RegionsSchema);

module.exports = RegionsModel;
