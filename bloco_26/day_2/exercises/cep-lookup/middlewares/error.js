function errorMiddleware(err, _req, res, _next) {
  return res.status(err.status).json({ code: err.code, message: err.message });
}

module.exports = errorMiddleware;
