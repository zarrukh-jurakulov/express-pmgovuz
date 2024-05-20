const express = require('express');
const router = express.Router();
const {
  getAllOrganizationTypes,
  createOrganizationType,
  getSingleOrganizationType,
  updateOrganizationType,
  deleteOrganizationType,
} = require('../controllers/organizationTypes.controller');

router.get('/', getAllOrganizationTypes);
router.get('/:id', getSingleOrganizationType);
router.post('/', createOrganizationType);
router.put('/:id', updateOrganizationType);
router.delete('/:id', deleteOrganizationType);

module.exports = router;
