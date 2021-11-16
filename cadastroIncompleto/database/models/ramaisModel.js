const Sequelize = require('sequelize');

const db = require("../db");

const User =  db.define("ramais", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  ramal: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  setor: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  empresa: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
