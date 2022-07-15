const services = require('../services');

const login = async (req, res, next) => {
  try {
    const { email, password } = services.validateBody(req.body);
    res.status(200).json({ email, password });
  } catch (error) {
    next(error);
  }
    // const token = await services.validateCredentials({ email, password });
  };

module.exports = login;