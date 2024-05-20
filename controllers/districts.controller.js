const DistrictsModel = require('../models/districts.model');

const getAllDistricts = async (req, res) => {
  try {
    const districts = await DistrictsModel.find();
    await res.send(districts);
  } catch (error) {
    console.log(error);
  }
};

const createDistrict = async (req, res) => {
  const district = req.body;
  try {
    const newDistrict = new DistrictsModel(district);
    await newDistrict.save();
    await res.send(newDistrict);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleDistrict = async (req, res) => {
  const id = req.params.id;
  try {
    const district = await DistrictsModel.findById(id);
    await res.send(district);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateDistrict = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const district = await DistrictsModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    await res.send(district);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteDistrict = async (req, res) => {
  const id = req.params.id;
  try {
    const district = await DistrictsModel.findByIdAndDelete(id);
    await res.send(district);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllDistricts,
  createDistrict,
  getSingleDistrict,
  updateDistrict,
  deleteDistrict,
};
