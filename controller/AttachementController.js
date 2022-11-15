const { Attachement } = require("../models/Attachement");

exports.saveFile = (req, res) => {
  const filepath = `${req.protocol}://${req.get(
    "host"
  )}/file/${req.file.filename.replace(/\s+/g, "")}`;

  if (req.params.isTicket == "true") {
    Attachement.create({
      filepath: filepath,
      tickets_id: req.params.id,
      response_id: 0,
    })
      .then((filetickets) => {
        res.status(200).json({
          data: filetickets,
          message: `File for tickets ${req.params.id} saved!`,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          error: error,
          message: "Erreur survenu!",
        });
      });
  } else if (req.params.isTicket == "false") {
    Attachement.create({
      filepath: filepath,
      tickets_id: "0",
      response_id: req.params.id,
    })
      .then((filetickets) => {
        res.status(200).json({
          data: filetickets,
          message: `File saved!`,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          error: error,
          message: "Erreur survenu!",
        });
      });
  }
};
