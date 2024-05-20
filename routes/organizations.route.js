const express = require('express');
const router = express.Router();
const {
  getAllOrganizations,
  createOrganization,
  getSingleOrganization,
  updateOrganization,
  deleteOrganization,
} = require('../controllers/organizations.controller');

router.get('/', getAllOrganizations);
router.get('/:id', getSingleOrganization);
router.post('/', createOrganization);
router.put('/:id', updateOrganization);
router.delete('/:id', deleteOrganization);

module.exports = router;
