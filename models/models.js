const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Blocks = sequelize.define('blocks', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING },
  fontSize: { type: DataTypes.INTEGER },
  color: { type: DataTypes.STRING },
  bgColor: { type: DataTypes.STRING },
});

module.exports = { Blocks };
