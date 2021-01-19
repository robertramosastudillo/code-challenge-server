const express = require("express");
const router = express.Router();

// Routes
const texts = require("../domain/text/TextRoute");

router.use("/texts", texts);

module.exports = router;