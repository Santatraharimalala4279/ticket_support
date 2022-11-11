import Tickets from "./tickets";

const sequelize = require("sequelize");
const { db } = require("../config/db.config");

export const User = db.define("user", {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: sequelize.STRING, allowNull: false, unique: true },
  password: { type: sequelize.STRING, allowNull: false },
  admin: { type: sequelize.BOOLEAN, defaultValue: false },
});
