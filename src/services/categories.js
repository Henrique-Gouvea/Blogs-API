const { validateCategories } = require('./validateBody');
const { Category } = require('../database/models');

const addCategorie = async ({ name }) => {
  validateCategories({ name });
  const verifyUser = await Category.findOne({ where: { name } });
  if (verifyUser) {
    const e = new Error('Category already registered');
    e.name = 'Conflict';
    throw e;
  }
  const user = await Category.create({ name });
  
  return { id: user.null, name };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  if (!categories) {
    const e = new Error('Problem in DB');
    e.name = 'InternalServer';
    throw e;
  }

  return categories;
};

const getAllIdsCategories = async () => {
  const categories = await Category.findAll();
  if (!categories) {
    const e = new Error('Problem in DB');
    e.name = 'InternalServer';
    throw e;
  }
  const categoriesId = categories.map((cat) => cat.dataValues.id);

  return categoriesId;
};

module.exports = { addCategorie, getAllCategories, getAllIdsCategories };