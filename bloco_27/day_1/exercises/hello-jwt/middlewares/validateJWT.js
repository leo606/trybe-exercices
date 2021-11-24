const jwt = require('jsonwebtoken');

const secret = 'soSecret';

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(403).json({ message: 'Token not found' });
    }

    try {
      const check = jwt.verify(token, secret);
      req.user = { user: check.username, admin: check.admin };
      next();
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  } catch (e) {
    return res.status(500).json({ message: 'internal server error' });
  }
};