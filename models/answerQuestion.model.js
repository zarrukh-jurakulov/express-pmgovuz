const mongoose = require("mongoose");

const AnswerQuestionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  question_name_uz: {
    type: String,
    required: true,
  },
  question_name_uzc: {
    type: String,
    required: true,
  },
  question_name_ru: {
    type: String,
    required: true,
  },
  answer_name_uz: {
    type: String,
    required: true,
  },
  answer_name_uzc: {
    type: String,
    required: true,
  },
  answer_name_ru: {
    type: String,
    required: true,
  },
  question_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionTypes",
    required: true,
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
