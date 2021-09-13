var express = require("express");
var router = express.Router();
const { MangaAiring, SearchManga } = require("../controllers/MangaController");
router.get("/Airing", MangaAiring);
router.get("/search", SearchManga);
module.exports = router;
