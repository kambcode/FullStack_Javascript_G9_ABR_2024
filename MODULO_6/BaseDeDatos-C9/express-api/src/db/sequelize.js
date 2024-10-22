import { Sequelize } from'sequelize';
import env from'../config/env.js';


const { database } = env;

export const sequelize = new Sequelize(database.databaseName, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,
  //logging: false,
});
