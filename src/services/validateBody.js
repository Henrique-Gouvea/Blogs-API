// const loginSchema = require('../schema/loginSchema');
const { User } = require('../database/models');
const { checkPassword } = require('./password');
const { createToken } = require('./token');

const validateCredentials = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    const e = new Error('Invalid fields');
    e.name = 'ValidationError';
    throw e;
  }

  checkPassword(password, user.password);

  const { password: _, ...userWithoutPassword } = user;

  const token = createToken(userWithoutPassword.dataValues);

  return token;
};

const validateBody = ({ email, password }) => {
  if (!email || !password) {
    const err = new Error('Some required fields are missing');
    err.name = 'ValidationError';
    throw err;
  }
};

module.exports = { validateBody, validateCredentials };