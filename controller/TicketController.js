const { Tickets } = require("../models/tickets");

exports.findAllTickets = (req, res) => {
  Tickets.findAll()
    .then((tickets) => {
      res.status(200).json({ tickets: tickets });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
exports.findAllTicketsByUser = (req, res) => {
  Tickets.findAll({ where: { user_id: req.params.userid } })
    .thent((user) => {
      res.status(200).json({ data: user });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

exports.createTickets = (req, res) => {
  Tickets.create();
};
