const { Response } = require("../models/response");

exports.replyTickets = (req, res) => {
  Response.create({}).then((response) => {
    res.status(200).json({ response: response, message: "Réponse réçu!" });
  });
};
