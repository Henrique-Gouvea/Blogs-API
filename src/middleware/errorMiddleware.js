const errors = {
    ValidationError: 400,
    Unauthorized: 401,
    NotFoundError: 404,
    Conflict: 409,
    InternalServer: 500,
  };

module.exports = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.sendStatus(errors.InternalServer);
  res.status(status).json({ message });
};