function checkNameValid(req, res, next) {
  const { name } = req.body;
  if (!name || name === "")
    return res.status(400).json({ message: "Invalid dataaaaaa!" });

  next();
}

module.exports = checkNameValid;
