const sequelize = require("sequelize");
const { db } = require("../config/db.config");

exports.Attachement = db.define(
  "file",
  {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    filepath: { type: sequelize.STRING, allowNull: false },
    ticket_id: { type: sequelize.INTEGER },
    response_id: { type: sequelize.INTEGER },
  },
  { timestamps: false, tableName: "file" }
);
