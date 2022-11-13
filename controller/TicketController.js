const { Attachement } = require("../models/Attachement");
const { Tickets } = require("../models/tickets");
const { User } = require("../models/user");

exports.findAllTickets = (req, res) => {
  Tickets.findAll({
    include: [
      { model: User },
      { model: Attachement, attributes: ["id", "filepath"] },
    ],
  })

    .then((tickets) => {
      res.status(200).json({ tickets: tickets });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
exports.findAllTicketsByUser = (req, res) => {
  Tickets.findAll({
    include: [
      { model: User },
      { model: Attachement, attributes: ["id", "filepath"] },
    ],
    where: { user_id: req.params.userid },
  })
    .then((ticket) => {
      res.status(200).json({ tickets: ticket });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
exports.findTicketById = (req, res) => {
  Tickets.findAll({
    include: [
      { model: User },
      { model: Attachement, attributes: ["id", "filepath"] },
    ],
    where: { id: req.params.id },
  })
    .then((ticket) => {
      res.status(200).json({ ticket: ticket });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
};
exports.createTickets = (req, res) => {
  const { description, userId, filename } = req.body;
  console.log(req.body);
  // const userID = req.auth.userId;
  Tickets.create({ description: description, user_id: userId })
    .then((tickets) => {
      Attachement.create({
        filepath: `${req.protocol}://${req.get("host")}/file/${filename} `,
        tickets_id: tickets.id,
        response_id: 0,
      })
        .then((file) => {
          res.status(200).json({ ticketsID: tickets.id, fileID: file.id });
        })
        .catch((error) => {
          console.log(error);
          res
            .status(400)
            .json({ error: error, message: "Cannot save this file" });
        });
    })
    .catch((error) => {
      console.error(error);
    });
};
exports.closeTicket = (req, res) => {
  if (req.params.id) {
    const ticket = Tickets.find({ where: { id: req.params.id } });
    console.log(ticket);
    if (ticket) {
      Tickets.update({ close: true }, { where: { id: req.params.id } }).then(
        (result) => {
          res
            .status(200)
            .json({ message: `Ticket ID ${req.params.ticketId} Closed!` });
        }
      );
    } else {
      res.json({ message: "Ticket not found" });
    }
  } else {
    res.status(500).json({ message: "Bad parameter" });
  }
};
