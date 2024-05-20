const AnswerQuestionsModel = require('../models/answerQuestions.model');

const getAllAnswerQuestions = async (req, res) => {
  try {
    const answerQuestions = await AnswerQuestionsModel.find();
    await res.send(answerQuestions);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createAnswerQuestion = async (req, res) => {
  const answerQuestion = req.body;
  try {
    const newAnswerQuestion = new AnswerQuestionsModel(answerQuestion);
    await newAnswerQuestion.save();
    await res.send(newAnswerQuestion);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleAnswerQuestion = async (req, res) => {
  const id = req.params.id;
  try {
    const answerQuestion = await AnswerQuestionsModel.findById(id);
    await res.send(answerQuestion);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateAnswerQuestion = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const answerQuestion = await AnswerQuestionsModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    await res.send(answerQuestion);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteAnswerQuestion = async (req, res) => {
  const id = req.params.id;
  try {
    const answerQuestion = await AnswerQuestionsModel.findByIdAndDelete(id);
    await res.send(answerQuestion);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllAnswerQuestions,
  createAnswerQuestion,
  getSingleAnswerQuestion,
  updateAnswerQuestion,
  deleteAnswerQuestion,
};
