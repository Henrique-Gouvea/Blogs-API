'use strict';
const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    displayName: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'Users'
  })
  return User;
};

module.exports = createUserModel