const StreetsModel = require('../models/streets.model');

const getAllStreets = async (req, res) => {
  try {
    const streets = await StreetsModel.find({});
    await res.send(streets);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createStreet = async (req, res) => {
  const street = req.body;
  try {
    const newStreet = new StreetsModel(street);
    await newStreet.save();
    await res.send(newStreet);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleStreet = async (req, res) => {
  const id = req.params.id;
  try {
    const street = await StreetsModel.findById(id);
    await res.send(street);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateStreet = async (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  try {
    const street = await StreetsModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    await res.send(street);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStreet = async (req, res) => {
  const id = req.params.id;
  try {
    const street = await StreetsModel.findByIdAndDelete(id);
    await res.send(street);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllStreets,
  createStreet,
  getSingleStreet,
  updateStreet,
  deleteStreet,
};
