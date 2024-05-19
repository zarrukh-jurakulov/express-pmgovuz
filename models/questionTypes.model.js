const mongoose = require("mongoose");

const QuestionTypesSchema = new mongoose.Schema({
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
  description_uz: {
    type: String,
    required: true,
  },
  description_uzc: {
    type: String,
    required: true,
  },
  description_ru: {
    type: String,
    required: true,
  },
});

module.exports = QuestionTypesSchema;
