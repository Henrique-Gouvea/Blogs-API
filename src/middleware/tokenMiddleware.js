const { validateToken } = require('../services');

const tokenMiddleware = (req, _res, next) => {
  try {
    console.log(req.headers);
    const { authorization } = req.headers;

    if (!authorization) {
      const e = new Error('Token not found');
      e.code = 'Unauthorized';
      throw e;
    }

    validateToken(authorization);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = tokenMiddleware;