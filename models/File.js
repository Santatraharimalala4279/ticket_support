import Tickets from "./tickets";

const sequelize = require("sequelize");
const { db } = require("../config/db.config");

export const File = db.define("file", {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  filepath: { type: sequelize.STRING, allowNull: false },
  ticket_id: { type: sequelize.INTEGER },
  response_id: { type: sequelize.INTEGER },
});
