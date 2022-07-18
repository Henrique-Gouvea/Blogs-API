const express = require('express');

const userRoute = express.Router();
const controllers = require('../controllers');

userRoute.post('/', controllers.user);

module.exports = userRoute;