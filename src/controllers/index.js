const login = require('./login');
const { addUser, getAllUsers, getUserId } = require('./user');
const { addCategorie, getAllCategories } = require('./categorie');
const { addPost } = require('./post');

module.exports = {
  login,

  addUser,
  getAllUsers,
  getUserId,

  addCategorie,
  getAllCategories,

  addPost,
};