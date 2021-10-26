module.exports = function checkUser(req, res, next) {
  const { user, email, password } = req.body;
  console.log(req.path);
  if (
    user.length > 3 &&
    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm.test(email) &&
    typeof password === "number" &&
    password.toString().length >= 4 &&
    password.toString().length <= 8
  ) {
    return next();
  }

  return res.status(401).json({ message: "invalid" });
};
