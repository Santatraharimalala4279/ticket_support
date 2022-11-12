const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const ticketController = require("../controller/TicketController");

router.get("/", auth, ticketController.findAllTickets);
router.get("/:userId", auth, ticketController.findAllTickets);
module.exports = router;
 