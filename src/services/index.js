const {
  validateLogin,
  validateCredentials,
  validateUser,
  validateCategories,
  validatePost,
} = require('./validateBody');

const { checkPassword } = require('./password');
const { createToken, validateToken } = require('./token');
const { addUser, getAllUsers, getUserId } = require('./user');
const { addCategorie, getAllCategories, getAllIdsCategories } = require('./categories');
const { addPost } = require('./post');

module.exports = {
  validateLogin,
  validateCredentials,
  validateCategories,
  validateUser,
  validatePost,

  checkPassword,
  createToken,
  validateToken,

  addUser,
  getAllUsers,
  getUserId,

  addCategorie,
  getAllCategories,
  getAllIdsCategories,

  addPost,
};