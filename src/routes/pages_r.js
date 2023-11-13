const express = require("express");
const router = express.Router();
const pages_c = require("../controllers/pages_c.js");

router.get('/environment',pages_c.environment);
router.get('/cooking',pages_c.cooking);
router.get('/hospital',pages_c.hospital);
router.get('/army',pages_c.army);

module.exports = router;