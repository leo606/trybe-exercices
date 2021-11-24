const ping = require('./ping');
const login = require('./login');
const user = require('./user');
const auth = require('./auth/validateJWT');

module.exports = {
  ping,
  login,
  user,
  auth,
};
