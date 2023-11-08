const express = require("express");
const router = express.Router();
const wordController = require("../controllers/word_c.js");

router.get('/word',wordController.getAllVacab);

module.exports = router;