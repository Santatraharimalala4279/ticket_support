const { Attachement } = require("../models/Attachement");

exports.saveFile = (req, res) => {
  filepath = `${req.protocol}://${req.protocol}://${req.get("host")}/file/${
    req.file.filename
  }`;
  if (req.params.isTicket) {
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
  } else {
    Attachement.create({
      response_id: req.params.id,
      tickets_id: 0,
    })
      .then((filetickets) => {
        res.status(200).json({
          data: filetickets,
          message: `Fichier de la réponse du tickets enregistré`,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
          message: "Erreur survenue",
        });
      });
  }
};
