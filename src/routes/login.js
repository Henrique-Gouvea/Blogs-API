const express = require('express');

const loginRoute = express.Router();
const controllers = require('../controllers');

loginRoute.get('/', controllers);

module.exports = loginRoute;