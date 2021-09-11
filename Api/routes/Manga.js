var express = require("express");
var router = express.Router();
const { MangaAiring } = require("../controllers/MangaController");
router.get("/Airing", MangaAiring);

module.exports = router;
