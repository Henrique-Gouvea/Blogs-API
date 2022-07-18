const services = require('../services');

const user = async (req, res, next) => {
  try {
    const token = await services.addUser(req.body);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = user;