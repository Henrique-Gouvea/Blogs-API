'use strict';
const createPostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'PostCategories'
  })

  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.BlogPosts, {
      as: 'blogPost',
      foreignKey: 'postId'
    })
  }
  PostCategory.associate = (models) => {
    PostCategory.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId'
    })
  }

  return PostCategory;
};

module.exports = createPostCategoryModel;