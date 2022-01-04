"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });
  return User;
};
