var express = require("express");
var router = express.Router();
const { AnimeAiring } = require("../controllers/AnimeController");
router.get("/Airing", AnimeAiring);

module.exports = router;
