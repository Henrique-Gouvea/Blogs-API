const express = require('express');

const userRoute = express.Router();
const controllers = require('../controllers');
const tokenMiddleware = require('../middleware/tokenMiddleware');

userRoute.post('/', controllers.addUser);

userRoute.use(tokenMiddleware);

userRoute.get('/', controllers.getAllUsers);

userRoute.delete('/me', controllers.deleteUser);

userRoute.get('/:id', controllers.getUserId);

module.exports = userRoute;