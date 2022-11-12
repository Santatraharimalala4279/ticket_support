const { Attachement } = require("../models/Attachement");
const { Tickets } = require("../models/tickets");
const { User } = require("../models/user");

exports.findAllTickets = (req, res) => {
  Tickets.findAll({ include: User })

    .then((tickets) => {
      res.status(200).json({ tickets: tickets });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
exports.findAllTicketsByUser = (req, res) => {
  Tickets.findAll({
    include: [{ model: User, attributes: { id, email } }],
    where: { user_id: req.params.userid },
  })

    .thent((user) => {
      res.status(200).json({ data: user });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};

exports.createTickets = (req, res) => {
  const { description, userId } = req.body;
  // const userID = req.auth.userId;
  Tickets.create({ description: description, user_id: userId })
    .then((tickets) => {
      Attachement.create({
        filepath: `${req.protocol}://${req.get("host")}/file/${
          req.file.filename
        }} `,
        ticket_id: tickets.id,
      })
        .then((file) => {
          res.status(200).json({ ticketsID: tickets.id, fileID: file.id });
        })
        .catch((error) => {
          res.status(400).json({ message: "Cannot save this file" });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
exports.closeTicket = (req, res) => {
  Tickets.update(
    { close: true },
    { where: { ticket_id: req.params.ticketId } }
  ).then((result) => {
    res
      .status(200)
      .json({ message: `Ticket ID ${req.params.ticketId} Closed!` });
  });
};
