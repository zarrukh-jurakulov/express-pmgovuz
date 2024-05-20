const mongoose = require('mongoose');

const AnswerQuestionsSchema = new mongoose.Schema({
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
    ref: 'QuestionTypes',
    required: true,
  },
});

const AnswerQuestionsModel = mongoose.model('AnswerQuestion', AnswerQuestionsSchema);

module.exports = AnswerQuestionsModel;
