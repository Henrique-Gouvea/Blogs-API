const services = require('../services');

const addPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { email } = req.user;
    const post = await services.addPost(title, content, categoryIds, email);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (_req, res, next) => {
  try {
    const posts = await services.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await services.getPostId(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { email } = req.user;
    const post = await services.updatePost(id, title, content, email);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = { addPost, getAllPosts, getPostId, updatePost };