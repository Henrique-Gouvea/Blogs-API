const login = require('./login');
const { addUser, getAllUsers, getUserId, deleteUser } = require('./user');
const { addCategorie, getAllCategories } = require('./categorie');
const { addPost, getAllPosts, getPostId, updatePost } = require('./post');

module.exports = {
  login,

  addUser,
  getAllUsers,
  getUserId,
  deleteUser,

  addCategorie,
  getAllCategories,

  addPost,
  getAllPosts,
  getPostId,
  updatePost,
};