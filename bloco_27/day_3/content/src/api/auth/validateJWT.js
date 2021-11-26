const jwt = require("jsonwebtoken");
const model = require("../../models/user");

const secret = "soSecret";

module.exports = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "token not found" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    /*
      A variável decoded será um objeto equivalente ao seguinte:
      {
        data: {
          _id: '5e54590ba49448f7e5fa73c0',
          username: 'italssodj',
          password: 'senha123'
        },
        iat: 1582587327,
        exp: 1584774714908
      }
    */

    /* Caso o token esteja expirado, a própria biblioteca irá retornar um erro,
       por isso não é necessário fazer validação do tempo.
       Caso esteja tudo certo, nós então buscamos o usuário na base para obter seus dados atualizados */

    const user = await model.findUser(decoded.data.username);

    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    req.user = user;

    next();
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};
