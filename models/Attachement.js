const sequelize = require("sequelize");
const db = require("../config/db.config");

exports.Attachement = db.define(
  "file",
  {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    filepath: { type: sequelize.STRING, allowNull: false },
    tickets_id: {
      type: sequelize.INTEGER,
      defaultValue: null,
    },
    response_id: { type: sequelize.INTEGER, defaultValue: null },
  },
  { timestamps: false, tableName: "file", underscored: true }
);
