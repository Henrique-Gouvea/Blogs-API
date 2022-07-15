'use strict';
const createPostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'BlogPost',
        key: 'id'
      },
    },
    categoryId: {
      type:DataTypes.INTEGER,
      reference: {
        model: 'Category',
        key: 'id'
      }
    }
  }, {
    timestamps: false,
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