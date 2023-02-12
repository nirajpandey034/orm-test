const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.APP_DATABASE,
  process.env.APP_USERNAME,
  process.env.APP_PASSWORD,
  {
    host: process.env.APP_DB_HOST,
    dialect: process.env.APP_DB_DIALECT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
