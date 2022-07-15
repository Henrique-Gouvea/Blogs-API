const { validateBody, validateCredentials } = require('./validateBody');
const { checkPassword } = require('./password');

module.exports = {
  validateBody,
  validateCredentials,
  checkPassword,
};