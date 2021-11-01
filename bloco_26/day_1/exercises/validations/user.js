function checkFields(req, res, next) {
  const user = ({ firstName, lastName, email, password } = req.body);

  if (!user.firstName || !user.lastName || !user.email || !user.password) {
    next({ status: 400, message: "fields error" });
  }
  next();
}

module.exports = { checkFields };
