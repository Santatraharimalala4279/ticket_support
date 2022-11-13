const express = require("express");
const { Response } = require("../models/response");
const router = express.Router();
const responseController = require("../controller/ResponseController");
router.post("/", responseController.replyTickets);
router.get("/", responseController.retrieveResponse);

module.exports = router;
