const express = require("express");
const router = express.Router();

const { index } = require("../controllers/tagController.js");

// Index - Read all
router.get("/", index);

module.exports = router;