module.exports = function checkUserLogin(req, res, next) {
  if (req.path === "/register") {
    const { user, email, password } = req.body;
    if (!user || !email || !password) {
      return res.status(401).json({ message: "missing field" });
    }

    if (
      user.length > 3 &&
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm.test(email) &&
      typeof password === "number" &&
      password.toString().length >= 4 &&
      password.toString().length <= 8
    ) {
      return next();
    }
  }
  if (req.path === "/login") {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: "missing field" });
    }
    if (
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm.test(email) &&
      typeof password === "number" &&
      password.toString().length >= 4 &&
      password.toString().length <= 8
    ) {
      return next();
    }
  }
  return res.status(401).json({ message: "invalid" });
};
