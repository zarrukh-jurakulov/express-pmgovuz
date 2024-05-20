const express = require('express');
const router = express.Router();
const {
  getAllAnswerQuestions,
  createAnswerQuestion,
  getSingleAnswerQuestion,
  updateAnswerQuestion,
  deleteAnswerQuestion,
} = require('../controllers/answerQuestions.controller');

router.get('/', getAllAnswerQuestions);
router.get('/:id', getSingleAnswerQuestion);
router.post('/', createAnswerQuestion);
router.put('/:id', updateAnswerQuestion);
router.delete('/:id', deleteAnswerQuestion);

module.exports = router;
