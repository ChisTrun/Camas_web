const express = require("express");
const router = express.Router();
const pages_c = require("../controllers/pages_c.js");

router.get('/',pages_c.home);

module.exports = router;