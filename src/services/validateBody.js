// const loginSchema = require('../schema/loginSchema');

const validateBody = ({ email, password }) => {
  if (!email || !password) {
    const e = new Error('Some required fields are missing');
    e.name = 'ValidationError';
    throw e;
  }
  return { email, password };
};

module.exports = validateBody;