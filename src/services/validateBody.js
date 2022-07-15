// const loginSchema = require('../schema/loginSchema');

const validateBody = ({ email, password }) => {
  if (!email || !password) {
    const err = new Error('Some required fields are missing');
    err.name = 'ValidationError';
    throw err;
  }
  return { email, password };
};

module.exports = validateBody;