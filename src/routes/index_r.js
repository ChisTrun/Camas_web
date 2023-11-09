const express = require("express");
const router = express.Router();
const index_c = require("../controllers/index_c.js");

router.get('/',index_c.index);

module.exports = router;