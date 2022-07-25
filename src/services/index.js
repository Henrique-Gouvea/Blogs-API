const {
  validateLogin,
  validateCredentials,
  validateUser,
  validateCategorie,
  validatePost,
  validatePostUpdated,
} = require('./validateBody');

const { checkPassword } = require('./password');
const { createToken, validateToken } = require('./token');
const { addUser, getAllUsers, getUserId, deleteUser } = require('./user');
const { addCategorie, getAllCategories, getAllIdsCategories } = require('./categories');
const {
  addPost,
  getAllPosts,
  getPostId,
  updatePost,
  deletePost,
  getSearch,
} = require('./post');

module.exports = {
  validateLogin,
  validateCredentials,
  validateCategorie,
  validateUser,
  validatePost,
  validatePostUpdated,

  checkPassword,
  createToken,
  validateToken,

  addUser,
  getAllUsers,
  getUserId,
  deleteUser,

  addCategorie,
  getAllCategories,
  getAllIdsCategories,

  addPost,
  getAllPosts,
  getPostId,
  updatePost,
  deletePost,
  getSearch,
};