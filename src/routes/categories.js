const express = require('express');

const categoriesRoute = express.Router();
const controllers = require('../controllers');
const tokenMiddleware = require('../middleware/tokenMiddleware');

categoriesRoute.use(tokenMiddleware);

categoriesRoute.post('/', controllers.addCategorie);

categoriesRoute.get('/', controllers.getAllCategories);

module.exports = categoriesRoute;