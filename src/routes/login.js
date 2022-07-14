const express = require('express');

const loginRoute = express.Router();
const controllers = require('../controllers');

loginRoute.post('/', controllers);

module.exports = loginRoute;