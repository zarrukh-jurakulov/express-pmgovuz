const OrganizationTypesModel = require('../models/organizationTypes.model');

const getAllOrganizationTypes = async (req, res) => {
  try {
    const organizationTypes = await OrganizationTypesModel.find({});
    await res.send(organizationTypes);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createOrganizationType = async (req, res) => {
  const organizationType = req.body;
  try {
    const newOrganizationType = new OrganizationTypesModel(organizationType);
    await newOrganizationType.save();
    await res.send(newOrganizationType);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleOrganizationType = async (req, res) => {
  const id = req.params.id;
  try {
    const organizationType = await OrganizationTypesModel.findById(id);
    await res.send(organizationType);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrganizationType = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const organizationType = await OrganizationTypesModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    await res.send(organizationType);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOrganizationType = async (req, res) => {
  const id = req.params.id;
  try {
    const organizationType = await OrganizationTypesModel.findByIdAndDelete(id);
    res.send(organizationType);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllOrganizationTypes,
  createOrganizationType,
  getSingleOrganizationType,
  updateOrganizationType,
  deleteOrganizationType,
};
