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
    required: false,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  is_send_request: {
    type: Boolean,
    default: false,
  },
  region_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Regions',
  },
  district_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Districts',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const OrganizationModel = mongoose.model('Organization', OrganizationSchema);

module.exports = OrganizationModel;
