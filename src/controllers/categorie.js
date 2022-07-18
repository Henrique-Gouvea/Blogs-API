const services = require('../services');

const addCategorie = async (req, res, next) => {
  try {
    const user = await services.addCategorie(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (_req, res, next) => {
  try {
    const categories = await services.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

  module.exports = { addCategorie, getAllCategories };