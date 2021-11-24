const jwt = require('jsonwebtoken');
const joi = require('joi');

const joiUserSchema = joi.object().keys({
  username: joi.string().alphanum().min(5),
  password: joi.string().alphanum().min(5),
});

const secret = 'soSecret';

module.exports = async (req, res, _next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({ message: 'invalid data' });
  }
  const valid = joiUserSchema.validate({ username, password });
  if (valid.error) {
    return res.status(401).json({ message: valid.error.message });
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const token = jwt.sign({ username, admin }, secret, jwtConfig);

  res.status(200).json({ token });
};