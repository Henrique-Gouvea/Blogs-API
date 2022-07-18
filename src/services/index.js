const { validateLogin, validateCredentials, validateUser } = require('./validateBody');
const { checkPassword } = require('./password');
const { createToken, validateToken } = require('./token');
const { addUser, getAllUsers, getUserId } = require('./user');

module.exports = {
  validateLogin,
  validateCredentials,
  validateUser,
  checkPassword,
  createToken,
  validateToken,
  addUser,
  getAllUsers,
  getUserId,
};