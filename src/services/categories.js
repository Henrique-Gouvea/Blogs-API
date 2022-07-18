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

module.exports = { addCategorie };