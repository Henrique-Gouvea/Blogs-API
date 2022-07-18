const { validateUser } = require('./validateBody');
const { User } = require('../database/models');
const { createToken } = require('./token');

const addUser = async ({ displayName, email, password, image }) => {
  validateUser({ displayName, email, password, image });
  const user = await User.findOne({ where: { email } });
  if (user) {
    const e = new Error('User already registered');
    e.name = 'Conflict';
    throw e;
  }
  await User.create({ displayName, email, password, image });
  const token = createToken({ displayName, email, image });
  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!users) {
    const e = new Error('Problem in DB');
    e.name = 'InternalServer';
    throw e;
  }

  return users;
};

module.exports = { addUser, getAllUsers };