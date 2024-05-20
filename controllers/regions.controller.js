const RegionsModel = require('../models/regions.model');

const getAllRegions = async (req, res) => {
  try {
    const regions = await RegionsModel.find({});
    await res.send(regions);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createRegion = async (req, res) => {
  const region = req.body;
  try {
    const newRegion = new RegionsModel(region);
    await newRegion.save();
    await res.send(newRegion);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleRegion = async (req, res) => {
  const id = req.params.id;
  try {
    const region = await RegionsModel.findById(id);
    await res.send(region);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateRegion = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const region = await RegionsModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    await res.send(region);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteRegion = async (req, res) => {
  const id = req.params.id;
  try {
    const region = await RegionsModel.findByIdAndDelete(id);
    await res.send(region);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllRegions,
  createRegion,
  getSingleRegion,
  updateRegion,
  deleteRegion,
};
