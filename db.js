const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbName = process.env.DB_NAME;
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dialect = process.env.dialect;
const db = {};


const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    pool: {
        max: 1, 
        min: 1,
        acquire: 30000, 
        idle: 10000,  
      },
  });



sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.log('Unable to connect to the database: ', error);
    });

db.sequelize = sequelize;
module.exports = db;
