const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
const dbConfig = require('../config/config');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize);
db.Task= require('./task')(sequelize)

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database schema has been updated.');
  })
  .catch(err => {
    console.log('Error syncing database:', err);
  });

module.exports = db;
