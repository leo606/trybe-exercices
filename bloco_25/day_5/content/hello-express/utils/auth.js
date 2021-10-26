const validUsers = [
  { username: "MestreCuca", password: "MinhaSenhaSuperSeguraSqn" },
  { username: "McRonald", password: "Senha123Mudar" },
  { username: "Burger Queen", password: "Senha123Mudar" },
  { username: "UpWay", password: "Senha123Mudar" },
];

function checkNameValid(req, res, next) {
  const { name } = req.body;
  if (!name || name === "")
    return res.status(400).json({ message: "Invalid dataaaaaa!" });

  next();
}

function authMiddleware(req, res, next) {
  const { username, password } = req.headers;

  if (!username || !password)
    return res
      .status(401)
      .json({ message: "Username or password can`t be blank!" });

  const user = validUsers.find((u) => u.username === username);
  if (!user) return res.status(401).json({ message: "invalid credentials" });

  if (!(username === user.username && password === user.password)) {
    return res.status(401).json({ message: "invalid credentiasl" });
  }

  req.user = user;
  next();
}

module.exports = { checkNameValid, authMiddleware };
