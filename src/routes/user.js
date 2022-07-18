const express = require('express');

const userRoute = express.Router();
const controllers = require('../controllers');
const tokenMiddleware = require('../middleware/tokenMiddleware');

userRoute.post('/', controllers.user);

userRoute.use(tokenMiddleware);

userRoute.get('/', controllers.user);

module.exports = userRoute;