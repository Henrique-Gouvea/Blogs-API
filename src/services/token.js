const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '5d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);

    return data;
  } catch (_err) {
    const e = new Error('Expired or invalid token');
    e.name = 'Unauthorized';
    throw e;
  }
};

module.exports = { createToken, validateToken };
