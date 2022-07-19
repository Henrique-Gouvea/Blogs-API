const express = require('express');

const postRoute = express.Router();
const controllers = require('../controllers');
const tokenMiddleware = require('../middleware/tokenMiddleware');

postRoute.use(tokenMiddleware);

postRoute.post('/', controllers.addPost);

postRoute.get('/', controllers.getAllPosts);

module.exports = postRoute;