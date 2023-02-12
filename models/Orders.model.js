const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Orders = sequelize.define('orders', {
  userID: DataTypes.INTEGER,
  productName: DataTypes.TEXT,
  price: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  address: DataTypes.TEXT,
});

sequelize.sync(); // executing the schema definition

module.exports = Orders;
