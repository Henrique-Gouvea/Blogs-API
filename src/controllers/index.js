const login = require('./login');
const { addUser, getAllUsers, getUserId } = require('./user');
const { addCategorie, getAllCategories } = require('./categorie');
const { addPost, getAllPosts, getPostId, updatePost } = require('./post');

module.exports = {
  login,

  addUser,
  getAllUsers,
  getUserId,

  addCategorie,
  getAllCategories,

  addPost,
  getAllPosts,
  getPostId,
  updatePost,
};