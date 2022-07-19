const { validatePost } = require('./validateBody');
const { BlogPost, User, PostCategory } = require('../database/models');

const addPost = async (title, content, categoryIds, email) => {
  const { dataValues } = await User.findOne({ where: { email } });

  await validatePost({ title, content, categoryIds });

  const newPost = await BlogPost.create({
    title,
    content,
    categoryIds,
    userId: dataValues.id,
    published: new Date(),
    updated: new Date(),
  });

  await Promise.all(categoryIds
    .map((id) => PostCategory.create({ postId: newPost.id, categoryId: id })));
  
  return newPost;
};

module.exports = { addPost };