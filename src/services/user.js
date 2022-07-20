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

const getUserId = async (id) => {
  const user = await User.findOne({ attributes: { exclude: ['password'] }, where: { id } });
  if (!user) {
    const e = new Error('User does not exist');
    e.name = 'NotFound';
    throw e;
  }

  return user;
};

const deleteUser = async (email) => {
  const result = await User.destroy({ where: { email } });
  console.log(result);
};

module.exports = { addUser, getAllUsers, getUserId, deleteUser };