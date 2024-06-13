require ('dotenv').config();
const { Sequelize } = require('sequelize');
const mysql = require('mysql2');
const dotenv = require('dotenv');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    PORT : '8080',
    
  });

  async function connectionTodb (){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error.message);
      }
  }
 


dotenv.config();



  module.exports ={
    sequelize,
    connectionTodb
  }