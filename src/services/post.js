const { validatePost } = require('./validateBody');
const { BlogPost, User, PostCategory, Category } = require('../database/models');

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

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, 
        as: 'user',
        attributes: { exclude: 'password' },
      },
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  if (!posts) {
    const e = new Error('Problem in DB');
    e.name = 'InternalServer';
    throw e;
  }
  return posts;
};

module.exports = { addPost, getAllPosts };