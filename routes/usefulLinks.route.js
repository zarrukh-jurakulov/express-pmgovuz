const express = require('express');
const {
  getAllUsefulLinks,
  createUsefulLink,
  getSingleUsefulLink,
  updateUsefulLink,
  deleteUsefulLink,
} = require('../controllers/usefulLinks.controller');

const router = express.Router();

router.get('/', getAllUsefulLinks);
router.get('/:id', getSingleUsefulLink);
router.post('/', createUsefulLink);
router.put('/:id', updateUsefulLink);
router.delete('/:id', deleteUsefulLink);

module.exports = router;
