const express = require("express");
const router = express.Router();
const attachementController = require("../controller/AttachementController");
router.post("/", attachementController.saveFile);
module.exports = router;
