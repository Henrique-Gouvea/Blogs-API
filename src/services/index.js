const {
  validateLogin,
  validateCredentials,
  validateUser,
  validateCategories,
} = require('./validateBody');

const { checkPassword } = require('./password');
const { createToken, validateToken } = require('./token');
const { addUser, getAllUsers, getUserId } = require('./user');
const { addCategorie } = require('./categories');

module.exports = {
  validateLogin,
  validateCredentials,
  validateCategories,
  validateUser,

  checkPassword,
  createToken,
  validateToken,

  addUser,
  getAllUsers,
  getUserId,

  addCategorie,
};