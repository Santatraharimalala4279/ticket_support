const { Response } = require("../models/Response");
const { User } = require("../models/User");

exports.replyTickets = (req, res) => {
  const { text, ticketsId } = req.body;
  if (!(text == "" || text == null)) {
    Response.create({
      text: text,
      user_id: req.params.userId,
      tickets_id: ticketsId,
    })
      .then((response) => {
        res
          .status(200)
          .json({ response: response, message: "Response received!" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: "Response refused!", error: error });
      });
  } else {
    res.json({ message: "Please fill the field text" });
  }
};
exports.retrieveResponse = (req, res) => {
  Response.findAll({ include: { model: User, attributes: ["id", "email"] } })
    .then((response) => {
      res.status(200).json({ data: response });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: error, message: "Erreur survenue" });
    });
};
