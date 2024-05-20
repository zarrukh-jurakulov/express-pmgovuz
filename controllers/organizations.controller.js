const OrganizationModel = require('../models/organizations.model');

const getAllOrganizations = async (req, res) => {
  try {
    const org = await OrganizationModel.find({});
    await res.send(org);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createOrganization = async (req, res) => {
  const org = req.body;
  try {
    const newOrg = new OrganizationModel(org);
    await newOrg.save();
    await res.send(newOrg);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleOrganization = async (req, res) => {
  const id = req.params.id;
  try {
    const org = await OrganizationModel.findById(id);
    await res.send(org);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrganization = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const org = await OrganizationModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    await res.send(org);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOrganization = async (req, res) => {
  const id = req.params.id;
  try {
    const org = await OrganizationModel.findByIdAndDelete(id);
    await res.send(org);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllOrganizations,
  createOrganization,
  getSingleOrganization,
  updateOrganization,
  deleteOrganization,
};
