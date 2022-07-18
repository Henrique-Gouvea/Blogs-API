const services = require('../services');

const login = async (req, res, next) => {
  try {
    services.validateBody(req.body);
    const token = await services.validateCredentials(req.body);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = login;