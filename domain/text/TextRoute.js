const express = require("express");
const TextController = require("./TextController");

const router = express.Router();

router.get("/", TextController.getReverseText);

module.exports = router;
