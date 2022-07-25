const express = require('express');

const postRoute = express.Router();
const controllers = require('../controllers');
const tokenMiddleware = require('../middleware/tokenMiddleware');

postRoute.use(tokenMiddleware);

postRoute.post('/', controllers.addPost);

postRoute.get('/', controllers.getAllPosts);

postRoute.get('/search', controllers.getSearch);

postRoute.get('/:id', controllers.getPostId);

postRoute.put('/:id', controllers.updatePost);

postRoute.delete('/:id', controllers.deletePost);

module.exports = postRoute;