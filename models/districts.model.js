const mongoose = require('mongoose');

const DistrictsSchema = new mongoose.Schema({
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
    ref: 'Region',
    required: true,
  },
});

const DistrictsModel = mongoose.model('District', DistrictsSchema);

module.exports = DistrictsModel;
