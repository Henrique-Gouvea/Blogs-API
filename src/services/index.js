const {
  validateLogin,
  validateCredentials,
  validateUser,
  validateCategorie,
  validatePost,
} = require('./validateBody');

const { checkPassword } = require('./password');
const { createToken, validateToken } = require('./token');
const { addUser, getAllUsers, getUserId } = require('./user');
const { addCategorie, getAllCategories, getAllIdsCategories } = require('./categories');
const { addPost, getAllPosts, getPostId, updatePost, validatePostUpdated } = require('./post');

module.exports = {
  validateLogin,
  validateCredentials,
  validateCategorie,
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
  getAllPosts,
  getPostId,
  updatePost,
  validatePostUpdated,
};