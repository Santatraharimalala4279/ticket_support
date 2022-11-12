const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const userRoutes = require("./routes/userRoutes");
const ticketsRoutes = require("./routes/ticketRoutes");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Content-Type", "application/json");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to support Tickets API");
});

app.use("/api/v1/tickets", ticketsRoutes);
app.use("/api/v1/auth", userRoutes);
module.exports = app;
