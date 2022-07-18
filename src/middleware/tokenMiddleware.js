const { validateToken } = require('../services');

const tokenMiddleware = (req, _res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      console.log('entrou ');
      const e = new Error('Token not found');
      e.name = 'Unauthorized';
      throw e;
    }
    validateToken(authorization);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tokenMiddleware;