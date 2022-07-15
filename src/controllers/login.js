const services = require('../services');

const login = async (req, res, next) => {
  try {
    const { email, password } = services.validateBody(req.body);
    console.log(email);
    const token = await services.validateCredentials(req.body);
    console.log(`token ${token}`);
    res.status(200).json({ email, password });
  } catch (error) {
    next(error);
  }
};

module.exports = login;