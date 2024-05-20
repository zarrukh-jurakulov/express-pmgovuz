const express = require('express');
const router = express.Router();
const {
  getAllDistricts,
  createDistrict,
  getSingleDistrict,
  updateDistrict,
  deleteDistrict,
} = require('../controllers/districts.controller');

router.get('/', getAllDistricts);
router.get('/:id', getSingleDistrict);
router.post('/', createDistrict);
router.put('/:id', updateDistrict);
router.delete('/:id', deleteDistrict);

module.exports = router;
