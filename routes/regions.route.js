const express = require('express');
const router = express.Router();
const {
  getAllRegions,
  createRegion,
  getSingleRegion,
  updateRegion,
  deleteRegion,
} = require('../controllers/regions.controller');

router.get('/', getAllRegions);
router.get('/:id', getSingleRegion);
router.post('/', createRegion);
router.put('/:id', updateRegion);
router.delete('/:id', deleteRegion);

module.exports = router;
