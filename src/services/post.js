const { validatePost, validatePostUpdated } = require('./validateBody');
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

const getPostId = async (id) => {
  const post = await BlogPost.findAll({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (post.length === 0) {
    const e = new Error('Post does not exist');
    e.name = 'NotFound';
    throw e;
  }
  return post[0];
};

const updatePost = async (id, title, content, email) => {
  validatePostUpdated(title, content);

  const { dataValues } = await User.findOne({ where: { email } });
  const userLoggedId = dataValues.id;
  const { dataValues: { userId } } = await BlogPost.findOne({ where: { id } });

  if (userLoggedId !== userId) {
    const e = new Error('Unauthorized user');
    e.name = 'Unauthorized';
    throw e;
  }

  await BlogPost.update({ title, content }, { where: { id } });

  const postUpdated = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return postUpdated;
};

const deletePost = async (id, email) => {
  const { dataValues } = await User.findOne({ where: { email } });
  const userLoggedId = dataValues.id;
  const post = await BlogPost.findOne({ where: { id } });
  
  if (!post) {
    const e = new Error('Post does not exist');
    e.name = 'NotFound';
    throw e;
  }

  const userPostId = post.dataValues.userId;
  console.log(`user logado${userLoggedId}`);
  console.log(`user criou post${userPostId}`);
  if (userLoggedId !== userPostId) {
    const e = new Error('Unauthorized user');
    e.name = 'Unauthorized';
    throw e;
  }
    
  await BlogPost.destroy({ where: { id } });
};

module.exports = { addPost, getAllPosts, getPostId, updatePost, deletePost };