const express = require('express');
const router = express.Router();
const {
  getAllStreets,
  createStreet,
  getSingleStreet,
  updateStreet,
  deleteStreet,
} = require('../controllers/streets.controller');

router.get('/', getAllStreets);
router.get('/:id', getSingleStreet);
router.post('/', createStreet);
router.put('/:id', updateStreet);
router.delete('/:id', deleteStreet);

module.exports = router;
