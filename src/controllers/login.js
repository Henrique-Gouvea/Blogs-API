const services = require('../services');

const login = async (req, res) => {
    const { email, password } = services.validateBody(req.body);

    // const token = await services.validateCredentials({ email, password });

    res.status(200).json(email, password);
  };

module.exports = login;