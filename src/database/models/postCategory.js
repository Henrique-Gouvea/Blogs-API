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
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'postId',
      through: PostCategory,
      otherKey: 'categoryId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'categoryId',
      through: PostCategory,
      otherKey: 'postId'
    });
  }

  return PostCategory;
};

module.exports = createPostCategoryModel;