const errors = {
    ValidationError: 400,
    Unauthorized: 401,
    NotFound: 404,
    Conflict: 409,
    InternalServer: 500,
  };

module.exports = ({ name, message }, _req, res, _next) => {
  console.log('entrou middleware erro');
  console.log(message);
  const status = errors[name];
  console.log(status);
  if (!status) return res.sendStatus(errors.InternalServer);
  res.status(status).json({ message });
};