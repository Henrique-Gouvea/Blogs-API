// const loginSchema = require('../schema/loginSchema');
const { User } = require('../database/models');
const { checkPassword } = require('./password');

const validateCredentials = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  console.log('2');
  console.log(user);
  if (!user) {
    const e = new Error('Invalid fields');
    e.name = 'ValidationError';
    throw e;
  }
  console.log(password);
  console.log(user.password);

  // checkPassword(password, user.password);
  return '123456';
};

const validateBody = ({ email, password }) => {
  if (!email || !password) {
    const err = new Error('Some required fields are missing');
    err.name = 'ValidationError';
    throw err;
  }
  return { email, password };
};

module.exports = { validateBody, validateCredentials };