const sequelize = require("sequelize");
const { db } = require("../config/db.config");
const { Attachement } = require("./Attachement");

exports.Tickets = db.define(
  "tickets",
  {
    id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    description: { type: sequelize.STRING, allowNull: false },
    close: { type: sequelize.BOOLEAN, defaultValue: false },
    user_id: { type: sequelize.STRING, allowNull: false },
  },
  { timestamps: false, tableName: "tickets" }
);

this.Tickets.hasMany(Attachement);
