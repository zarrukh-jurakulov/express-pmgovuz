const QuestionTypesModel = require('../models/questionTypes.model');

const getAllQuestionTypes = async (req, res) => {
  try {
    const questionTypes = await QuestionTypesModel.find({});
    await res.send(questionTypes);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleQuestionType = async (req, res) => {
  const id = req.params.id;
  try {
    const questionType = await QuestionTypesModel.findById(id);
    await res.send(questionType);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createQuestionType = async (req, res) => {
  const questionType = req.body;
  try {
    const newQuestionType = new QuestionTypesModel(questionType);
    await newQuestionType.save();
    await res.send(newQuestionType);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateQuestionType = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const questionType = await QuestionTypesModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    await res.send(questionType);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteQuestionType = async (req, res) => {
  const id = req.params.id;
  try {
    const questionType = await QuestionTypesModel.findByIdAndDelete(id);
    await res.send(questionType);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllQuestionTypes,
  getSingleQuestionType,
  createQuestionType,
  updateQuestionType,
  deleteQuestionType,
};
