const login = require('./login');
const { addUser, getAllUsers, getUserId } = require('./user');
const { addCategorie } = require('./categorie');

module.exports = {
  login,
  addUser,
  getAllUsers,
  getUserId,
  addCategorie,
};