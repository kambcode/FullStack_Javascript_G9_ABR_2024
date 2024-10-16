require('dotenv').config()

module.exports = {
    database: {
     username: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
     databaseName: process.env.DB_DATABASE,
     host: process.env.DB_HOST,
     dialect: process.env.DB_DIALECT,
    },
    port: process.env.PORT || 4000,
}