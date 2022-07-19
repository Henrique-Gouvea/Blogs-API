// const loginSchema = require('../schema/loginSchema');
const userSchema = require('../schema/userSchema');
const postSchema = require('../schema/postSchema');

const { User } = require('../database/models');

const { checkPassword } = require('./password');
const { createToken } = require('./token');
const { getAllIdsCategories } = require('./categories');

const validateCredentials = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    const e = new Error('Invalid fields');
    e.name = 'ValidationError';
    throw e;
  }

  checkPassword(password, user.password);

  const { password: _, ...userWithoutPassword } = user;

  const token = createToken(userWithoutPassword.dataValues);

  return token;
};

const validateLogin = ({ email, password }) => {
  if (!email || !password) {
    const err = new Error('Some required fields are missing');
    err.name = 'ValidationError';
    throw err;
  }
};

const validateUser = ({ displayName, email, password }) => {
  const { error } = userSchema.validate({ displayName, email, password });
  if (error) {
    const e = new Error(error.message);
    e.name = 'ValidationError';
    throw e;
  }
};

const validateCategorie = (name) => {
  if (!name) {
    const e = new Error('"name" is required');
    e.name = 'ValidationError';
    throw e;
  }
};

const validatePost = async ({ title, content, categoryIds }) => {
  const { error } = postSchema.validate({ title, content, categoryIds });

  if (error) {
    const e = new Error(error.message);
    e.name = 'ValidationError';
    throw e;
  }

  const allCategoryIdsDB = await getAllIdsCategories();
  const haveCategory = allCategoryIdsDB.filter((catDB) => categoryIds.includes(catDB));
  if (haveCategory.length === 0) {
    const e = new Error('"categoryIds" not found');
    e.name = 'ValidationError';
    throw e;
  }
};

module.exports = {
  validateLogin,
  validateCredentials,
  validateUser,
  validateCategorie,
  validatePost,
};