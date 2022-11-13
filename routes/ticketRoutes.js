const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const ticketController = require("../controller/TicketController");
const multer = require("../middleware/file.config");

router.get("/", ticketController.findAllTickets);
router.get("/userId/:userid", ticketController.findAllTicketsByUser);
router.get("/id/:id", ticketController.findTicketById);
router.post("/", () => multer(), ticketController.createTickets);
router.put("/:id", ticketController.closeTicket);
module.exports = router;
