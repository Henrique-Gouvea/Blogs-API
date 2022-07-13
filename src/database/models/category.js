'use strict';
const createCategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'Categories'
  })
  return Category;
};

module.exports = createCategoryModel;