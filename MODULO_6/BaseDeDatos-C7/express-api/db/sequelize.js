const { Sequelize } = require('sequelize');
const env = require('../config/env');


const { database } = env;

const sequelize = new Sequelize(database.databaseName, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,
  //logging: false,
});


sequelize.query(`
    CREATE TABLE IF NOT EXISTS Movies (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      genre VARCHAR(50),
      releaseYear INT
    );
  `).then(() => console.log('Movies table created'))
    .catch(err => console.error('Error creating Movies table:', err));


sequelize.query(`
    CREATE TABLE IF NOT EXISTS Directors (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        nationality VARCHAR(50)
    );
    `).then(() => console.log('Directors table created'))
    .catch(err => console.error('Error creating Directors table:', err));



module.exports = sequelize;