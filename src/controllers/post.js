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

module.exports = { addPost };