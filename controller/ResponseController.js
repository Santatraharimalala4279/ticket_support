const { Response } = require("../models/Response");
const { User } = require("../models/User");

exports.replyTickets = (req, res) => {
  const { text } = req.body;
  Response.create({
    text: text,
    user_id: req.params.userId,
    tickets_id: req.params.ticketsId,
  })
    .then((response) => {
      res
        .status(200)
        .json({ response: response, message: "Response received!" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Response refused!", error: error });
    });
};
exports.retrieveResponse = (req, res) => {
  Response.findAll({ include: User })
    .then((response) => {
      res.status(200).json({ data: response });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error, message: "Erreur survenue" });
    });
};
