const mongoose = require('mongoose');

const OrganizationTypesSchema = new mongoose.Schema({
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
  is_active: {
    type: Boolean,
    default: true,
  },
});

const OrganizationTypesModel = mongoose.model('OrganizationType', OrganizationTypesSchema);

module.exports = OrganizationTypesModel;
