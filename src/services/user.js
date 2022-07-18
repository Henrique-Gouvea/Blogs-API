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
  const confirmeCadaster = await User.create({ displayName, email, password, image });
  console.log(confirmeCadaster);
  const token = createToken({ displayName, email, image });
  return token;
};

module.exports = { addUser };