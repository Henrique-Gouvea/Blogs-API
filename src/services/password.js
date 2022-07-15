const checkPassword = (password, passwordDb) => {
  console.log(password);
  console.log(passwordDb);

  if (password !== passwordDb) {
    const e = new Error('Invalid fields');
    e.name = 'ValidationError';
    throw e;
  }
};

module.exports = {
  checkPassword,
};