const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
  logo_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Images',
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
  org_category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrgCategory',
    required: true,
  },
  parent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization',
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  is_send_request: {
    type: Boolean,
    default: true,
  },
  region_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Regions',
  },
  district_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Districts',
  },
});

const OrganizationModel = mongoose.model('Organization', OrganizationSchema);

module.exports = OrganizationModel;
