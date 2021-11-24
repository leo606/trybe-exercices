function errorRes(err, req, res, next) {
  res
    .status(err.error.status)
    .json({ code: err.error.code, message: err.error.message });
}

module.exports = errorRes;
