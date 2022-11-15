require("dotenv").config();
let Sequelize = require("sequelize");
const env = process.env;
let db = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: "mysql",
  logging: false,
});
console.log("Connected to Database");
module.exports = db;
