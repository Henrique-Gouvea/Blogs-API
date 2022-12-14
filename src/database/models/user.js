'use strict';
const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    displayName: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  })

  User.associate = (models) => {
    User.hasMany(models. BlogPost, 
      {foreignKey: 'userId', as: 'BlogPost'})
  }

  return User;
};

module.exports = createUserModel