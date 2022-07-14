'use strict';
const createBlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    underscored: true,
    tableName: 'BlogPosts'
  })

  BlogPost.associate = (models) => {
    PostCategory.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    })
  }

  return BlogPost;
};

module.exports = createBlogPostModel;