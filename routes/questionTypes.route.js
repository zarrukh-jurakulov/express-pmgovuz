const express = require('express');
const router = express.Router();
const {
  getAllQuestionTypes,
  createQuestionType,
  getSingleQuestionType,
  updateQuestionType,
  deleteQuestionType,
} = require('../controllers/questionTypes.controller');

router.get('/', getAllQuestionTypes);
router.get('/:id', getSingleQuestionType);
router.post('/', createQuestionType);
router.put('/:id', updateQuestionType);
router.delete('/:id', deleteQuestionType);

module.exports = router;
