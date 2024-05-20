const UsefulLinksModel = require('../models/usefulLinks.model');

const getAllUsefulLinks = async (req, res) => {
  try {
    const usefulLinks = await UsefulLinksModel.find({});
    await res.send(usefulLinks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUsefulLink = async (req, res) => {
  const usefulLink = req.body;
  try {
    const newUsefulLink = new UsefulLinksModel(usefulLink);
    await newUsefulLink.save();
    await res.send(newUsefulLink);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleUsefulLink = async (req, res) => {
  const id = req.params.id;
  try {
    const usefulLink = await UsefulLinksModel.findById(id);
    await res.send(usefulLink);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUsefulLink = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const usefulLink = await UsefulLinksModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    await res.send(usefulLink);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUsefulLink = async (req, res) => {
  const id = req.params.id;
  try {
    const usefulLink = await UsefulLinksModel.findByIdAndDelete(id);
    res.send(usefulLink);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllUsefulLinks,
  createUsefulLink,
  getSingleUsefulLink,
  updateUsefulLink,
  deleteUsefulLink,
};
