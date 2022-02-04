const express = require("express");
const { listAll } = require("../controllers/room");

const router = express.Router();

router.get("/rooms", listAll);

module.exports = router;
