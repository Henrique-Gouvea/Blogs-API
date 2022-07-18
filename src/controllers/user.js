const services = require('../services');

const addUser = async (req, res, next) => {
  try {
    const token = await services.addUser(req.body);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await services.getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser, getAllUsers };