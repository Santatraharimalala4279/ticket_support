const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const ticketController = require("../controller/TicketController");

router.get("/", ticketController.findAllTickets);
router.get("/:userId", ticketController.findAllTickets);

module.exports = router;
