const error = require('./error');
const auth = require('./validateJWT');
const admin = require('./admin');

module.exports = {
  error,
  auth,
  admin,
};
