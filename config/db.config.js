let Sequelize = require("sequelize");
let db = new Sequelize("tickets_support", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false, //passer a true pour voir les différentes requêtes effectuées par l'ORM
});
//on exporte pour utiliser notre connexion depuis les autre fichiers.
module.exports = db;
